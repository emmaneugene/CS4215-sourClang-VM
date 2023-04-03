import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { DataType } from '../typings/datatype'
import { Microcode, ReturnValue, StackPointer } from '../typings/microcode'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'

export type Frame = Record<string, VariableInfo>

export interface VariableInfo {
  name: string

  /*
   * The variable's datatype,
   * including its pointer list.
   */
  typeList: es.TypeList

  /** The "home" of a variable = rbp + offset */
  offset: number

  /** The initial value of a variable */
  initialValue?: es.Expression
}

export interface FunctionInfo {
  name: string

  /** Location of the first instruction of this function */
  addr: bigint

  /**
   * The type info for each arg
   * to ensure typechecking
   * TODO: This is not used yet, but will be used
   * to do a compiler typecheck
   */
  argumentTypes: es.TypeList[]

  /**
   * Reflects what the function returns
   */
  returnType: es.TypeList
}

/**
 * A function's variables are layed out as follows:
 *
 * [arg1, ..., argn, prev_rbp, var1, ..., varN]
 *
 * rbp points to prev_rbp (for stack restoration).
 * var1 is addressed relative to rbp, i.e.
 * var1.offset = rbp + WORD_SIZE
 *
 * prev_rbp is set at runtime.
 */

export class FunctionCTE {
  static dummy = new FunctionCTE('<dummy>', [], [], 0)
  /**
   * The name of the function.
   */
  name: string

  /**
   * The return type of the function.
   */
  returnType: es.TypeList

  /**
   * The parameters of the function as an array of name-typeList pairs.
   */
  paramNameTypePairs: Record<string, es.TypeList> = {}

  /**
   * The microcode instructions for the function.
   */
  instrs: Array<Microcode> = []

  /**
   * The frames that represent the function's stack frames.
   */
  frames: Frame[] = []

  /** First slot at rbp is the old rbp value. */
  nextAvailableOffset: number = WORD_SIZE

  /**
   * The maximum offset that can be allocated for local variables on the stack.
   */
  MAX_OFFSET: number = -1

  /**
   * Creates a new FunctionCTE object.
   *
   * @param {string} name - The name of the function.
   * @param {es.TypeList} returnType - The return type of the function.
   * @param {VariableInfo[]} params - The parameters of the function.
   * @param {number} localVarSize - The size of the local variables in the function.
   *
   * @throws {CompileTimeError} If the function's name, parameter list, or local variable size are invalid.
   */
  constructor(name: string, returnType: es.TypeList, params: VariableInfo[], localVarSize: number) {
    this.name = name
    this.returnType = returnType
    const populateParams = (p: VariableInfo) => (
      this.paramNameTypePairs[p.name] = p.typeList
    )
    params.forEach(populateParams)

    this.extendFrame(params)
    // Add WORD_SIZE to account for the old rbp value
    this.MAX_OFFSET = localVarSize + WORD_SIZE
  }

  /**
   * Allocates a specified number of bytes on the stack.
   *
   * @private
   * @param {number} N - The number of bytes to allocate.
   * @returns {number} The offset where the allocation starts.
   *
   * @throws {CompileTimeError} If the allocation exceeds the maximum stack size.
   */
  private allocNBytesOnStack(N: number): number {
    const rv = this.nextAvailableOffset
    if (this.nextAvailableOffset >= this.MAX_OFFSET) throw new CompileTimeError()
    this.nextAvailableOffset += N
    return rv
  }

  /**
   * Adds a new variable to the current stack frame.
   *
   * @param {string} name - The name of the variable.
   * @param {es.TypeList} typeList - The type of the variable.
   * @returns {VariableInfo} The information for the new variable.
   *
   * @throws {CompileTimeError} If the variable already exists in the current frame.
   */
  addVar(name: string, typeList: es.TypeList): VariableInfo {
    const v = {
      name,
      typeList,
      offset: this.allocNBytesOnStack(WORD_SIZE)
    }

    const lastFrame = this.frames[this.frames.length - 1]
    if (lastFrame[name]) {
      throw new CompileTimeError()
    }

    lastFrame[name] = v
    return v
  }

  /**
   * Gets the information for a variable in the current stack frame or a parent frame.
   *
   * @param {string} name - The name of the variable.
   * @returns {VariableInfo|undefined} The information for the variable or undefined if it doesn't exist.
   */
  getVar(name: string): VariableInfo | undefined {
    for (let i = this.frames.length - 1; i >= 0; i--) {
      if (this.frames[i][name]) {
        return this.frames[i][name]
      }
    }
    return undefined
  }

  extendFrame(ls: VariableInfo[]): void {
    const newFrame: Frame = {}
    ls.forEach(v => (newFrame[v.name] = v))
    this.frames.push(newFrame)
  }

  popFrame(): Frame {
    const oldFrame = this.frames.pop()
    if (!oldFrame) throw new CompileTimeError()
    return oldFrame
  }
}

export class GlobalCTE {
  functions: Record<string, FunctionCTE> = {}

  functionInfo: Record<string, FunctionInfo> = {}

  readonly EXIT_COMMAND_ADDR: bigint = BigInt(0)

  // when main function is called, we need to exit the process
  // https://linux.die.net/man/2/exit
  combinedInstrs: Microcode[] = [
    {
      type: 'ExitCommand'
    }
  ]

  getVar(sym: string): VariableInfo | undefined {
    return
  }

  // addVar(sym: string, typeList: es.TypeList): VariableInfo {

  // }

  /**
   * Sets a function prototype into the global compile env.
   *
   *
   * @returns the memory address of the function
   */
  setFunctionPrototype(functionInfo: Omit<FunctionInfo, 'addr'>): FunctionInfo {
    const { name } = functionInfo
    if (this.functionInfo[name]) {
      throw new CompileTimeError(`${name} has already been declared`)
    }

    const prevLength = this.combinedInstrs.length
    this.functionInfo[name] = {
      ...functionInfo,
      addr: BigInt(prevLength)
    }
    return this.functionInfo[name]
  }

  /**
   * Sets the function's microcode into the global list
   * of microcode.
   */
  addFunctionInstrs(fEnv: FunctionCTE): void {
    this.appendRetInstrIfMainFunction(fEnv)
    this.functions[fEnv.name] = fEnv

    if (fEnv.instrs.length === 0) {
      return
    }

    this.combinedInstrs.push(...fEnv.instrs)
  }

  getFunctionAddr(sym: string): bigint {
    if (this.functionInfo[sym] === undefined) {
      throw new CompileTimeError()
    }

    return this.functionInfo[sym].addr
  }

  getFunctionInfo(name: string): FunctionInfo {
    const fxInfo = this.functionInfo[name]
    if (!fxInfo) {
      throw new CompileTimeError()
    }
    return fxInfo
  }

  /**
   * Adds a return command to main. In C, a main function
   * without return will implicitly return after the last statement.
   *
   * If the user provided the return, they shouln't hit this line
   * anyway.
   */
  private appendRetInstrIfMainFunction(fEnv: FunctionCTE): void {
    if (fEnv.name !== 'main') {
      return
    }
    fEnv.instrs.push(
      MICROCODE.movImm(0, '2s'),
      MICROCODE.movMemToReg(ReturnValue, [StackPointer, -WORD_SIZE]),
      MICROCODE.return
    )
  }
}

/**
 * Used to track types during compilation.
 */
export type CompileType = {
  /** The base datatype. */
  t: DataType

  /** Reflects what this pointer actually points to */
  typeList: es.TypeList

  /** Reflects if this object is an array. */
  isArray?: boolean

  /**
   * Reflect if the object is a structDef.
   * If it is, this field denotes the struct
   * definition.
   */
  structDef?: es.StructDef | undefined
}

export function getVar(name: string, fEnv: FunctionCTE, gEnv: GlobalCTE): VariableInfo {
  let varInfo = fEnv.getVar(name)
  if (!varInfo) {
    varInfo = gEnv.getVar(name)
  }

  if (!varInfo) {
    throw new CompileTimeError()
  }
  return varInfo
}

export function getFxDecl(name: string, gEnv: GlobalCTE): FunctionInfo {
  const fxInfo = gEnv.getFunctionInfo(name)
  if (!fxInfo) {
    throw new CompileTimeError()
  }
  return fxInfo
}
