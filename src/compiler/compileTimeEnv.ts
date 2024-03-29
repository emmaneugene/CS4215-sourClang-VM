import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { DataType } from '../typings/datatype'
import {
  BasePointer,
  BottomOfMemory,
  Microcode,
  Registers,
  ReturnValue,
  StackPointer
} from '../typings/microcode'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'
import { RODataSegment } from './rodataSegment'

export type Frame = Record<string, VariableInfo>

export interface VariableInfo {
  name: string

  /*
   * The variable's datatype,
   * including its pointer list.
   */
  typeList: es.TypeList

  /** The "home" of a variable = address + offset
   *  Address will be bottom of memory for Global CompileTimeEnv or rbp for function CompileTimeEnv
   */
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
   * @param {number} localVarSize - Total size of the local variables in the function.
   *
   * @throws {CompileTimeError} If the function's name, parameter list, or local variable size are invalid.
   */
  constructor(name: string, returnType: es.TypeList, params: VariableInfo[], localVarSize: number) {
    this.name = name
    this.returnType = returnType
    const populateParams = (p: VariableInfo) => (this.paramNameTypePairs[p.name] = p.typeList)
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
  addVar(name: string, typeList: es.TypeList, varSize: number): VariableInfo {
    const v = {
      name,
      typeList,
      offset: this.allocNBytesOnStack(varSize)
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

  globalFrame: Frame = {}

  // This is set in the constructor
  nextAvailableVariableOffset: number

  // This is set in the constructor
  nextAvailableInstructionAddress: number

  startOfInstructionSegment: number

  globalDeclarationInstrs: Microcode[] = []

  functionInstrs: Microcode[] = []

  /** A combined list of instrs to reflect what to run. */
  combinedInstrs: Microcode[] = []

  /** Reflects the starting PC. This is only set after `collateInstructions` */
  startingPC: bigint | undefined

  /** Reflects the next unused free address. This is only set after `collateInstructions` */
  nextFreeAddr: bigint | undefined

  /** A read only data segment. Used to look up strings. */
  rodata: RODataSegment

  /**
   * When compiling the program into a list of instructions,
   * we need to figure out
   *
   * - where the writable data segment should start from,
   * since the read-only data segment has already been determined.
   * - where in memory should the list of instructions should start from.
   *
   * @param writableDataStartAddr the start of the writable data segment
   * @param instrStartAddr the start of the instruction segment
   * @param declaredStrings a list of strings in the program
   */
  constructor(writableDataStartAddr: number, instrStartAddr: number, rodataSegment: RODataSegment) {
    this.startOfInstructionSegment = instrStartAddr

    this.nextAvailableVariableOffset = writableDataStartAddr
    this.nextAvailableInstructionAddress = instrStartAddr

    this.rodata = rodataSegment
  }

  getVar(sym: string): VariableInfo | undefined {
    if (this.globalFrame[sym]) {
      return this.globalFrame[sym]
    }
    throw new CompileTimeError(`error: '${sym}' undeclared`)
  }

  addVar(sym: string, typeList: es.TypeList, varSize: number): VariableInfo {
    const variableAddress = this.allocateNBytesOnStack(varSize)
    const varInfo = {
      name: sym,
      typeList,
      offset: variableAddress
    }
    this.globalFrame[sym] = varInfo
    return varInfo
  }

  getStringAddr(s: string): number {
    return this.rodata.getStringAddr(s)
  }

  allocateNBytesOnStack(N: number): number {
    const rv = this.nextAvailableVariableOffset
    this.nextAvailableVariableOffset += N
    return rv
  }

  /**
   * Sets a function prototype into the global compile env.
   *
   * @returns the memory address of the function
   */
  setFunctionPrototype(functionInfo: Omit<FunctionInfo, 'addr'>): FunctionInfo {
    const { name } = functionInfo
    if (this.functionInfo[name]) {
      throw new CompileTimeError(`${name} has already been declared`)
    }

    const addr = this.nextAvailableInstructionAddress
    this.functionInfo[name] = {
      ...functionInfo,
      addr: BigInt(addr)
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

    this.functionInstrs.push(...fEnv.instrs)
    this.nextAvailableInstructionAddress += fEnv.instrs.length * WORD_SIZE
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

  /**
   * Combines the instruction segments into a single list.
   */
  collateInstructions(): Microcode[] {
    const CALL_MAIN_AND_EXIT = [MICROCODE.call(this.getFunctionAddr('main')), MICROCODE.exit]
    this.combinedInstrs = [
      ...this.functionInstrs,
      ...this.globalDeclarationInstrs,
      ...CALL_MAIN_AND_EXIT
    ]

    const firstInstrToRunAddr =
      this.startOfInstructionSegment + this.functionInstrs.length * WORD_SIZE
    this.startingPC = BigInt(firstInstrToRunAddr)

    const totalSizeOfDataAndInstr =
      this.startOfInstructionSegment + this.combinedInstrs.length * WORD_SIZE
    this.nextFreeAddr = BigInt(totalSizeOfDataAndInstr)

    return this.combinedInstrs
  }

  /**
   * Gets the starting PC value.
   *
   * This should be called after collateInstructions, which is responsible for
   * calling main after doing data initialisation.
   */
  getStartingPC(): bigint | undefined {
    return this.startingPC
  }

  /**
   * Gets the next free address after we include
   * data and instructions.
   */
  getNextFreeAddr(): bigint | undefined {
    return this.nextFreeAddr
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

export function getVar(
  name: string,
  fEnv: FunctionCTE | undefined,
  gEnv: GlobalCTE
): [Registers, VariableInfo] {
  if (fEnv) {
    const varInfo = fEnv.getVar(name)
    if (varInfo) {
      return [BasePointer, varInfo]
    }
  }
  const varInfo = gEnv.getVar(name)
  if (varInfo) {
    return [BottomOfMemory, varInfo]
  }

  throw new CompileTimeError()
}

export function getFxDecl(name: string, gEnv: GlobalCTE): FunctionInfo {
  const fxInfo = gEnv.getFunctionInfo(name)
  if (!fxInfo) {
    throw new CompileTimeError()
  }
  return fxInfo
}
