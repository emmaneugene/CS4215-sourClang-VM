import * as es from 'estree'

import { BUILT_IN_COMMANDS, BUILT_IN_FX_NAMES } from '../interpreter/builtin'
import { DataType } from '../typings/datatype'
import { Microcode } from '../typings/microcode'
import { CompileTimeError } from './error'

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
   * The type info for each arg.
   */
  params: es.TypeList[]

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
 * var1.offset = rbp + 8
 *
 * prev_rbp is set at runtime.
 */
export class FunctionCTE {
  name: string

  returnType: es.TypeList

  params: Array<[string, es.TypeList]> = []

  instrs: Array<Microcode> = []

  frames: Frame[] = []

  /** First slot at rbp is the old rbp value. */
  nextAvailableOffset: number = 8

  MAX_OFFSET: number = -1

  constructor(name: string, returnType: es.TypeList, params: VariableInfo[], localVarSize: number) {
    this.name = name
    this.returnType = returnType

    this.params = params.map(p => [p.name, p.typeList])
    this.extendFrame(params)
    // Add 8 to account for the old rbp value
    this.MAX_OFFSET = localVarSize + 8
  }

  private allocNBytesOnStack(N: number): number {
    const rv = this.nextAvailableOffset
    if (this.nextAvailableOffset >= this.MAX_OFFSET) throw new CompileTimeError()
    this.nextAvailableOffset += N
    return rv
  }

  addVar(name: string, typeList: es.TypeList): VariableInfo {
    const v = {
      name,
      typeList,
      offset: this.allocNBytesOnStack(8)
    }

    const lastFrame = this.frames[this.frames.length - 1]
    if (lastFrame[name]) {
      throw new CompileTimeError()
    }

    lastFrame[name] = v
    return v
  }

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

  functionAddr: Record<string, bigint> = {}

  readonly EXIT_COMMAND_ADDR: bigint = BigInt(0)

  combinedInstrs: Microcode[] = [
    {
      type: 'ExitCommand'
    }
  ]

  constructor() {
    this.initBuiltInFunctions()
  }

  getVar(sym: string): VariableInfo | undefined {
    return
  }

  addFunction(fEnv: FunctionCTE): void {
    this.appendRetInstrIfMainFunction(fEnv)
    this.functions[fEnv.name] = fEnv

    if (fEnv.instrs.length === 0) {
      return
    }

    const prevLength = this.combinedInstrs.length
    this.combinedInstrs.push(...fEnv.instrs)
    this.functionAddr[fEnv.name] = BigInt(prevLength)
  }

  getFunctionAddr(sym: string): bigint {
    if (this.functionAddr[sym] === undefined) {
      throw new CompileTimeError()
    }

    return this.functionAddr[sym]
  }

  getFunctionInfo(name: string): FunctionInfo {
    const fxInfo = this.functions[name]
    if (!fxInfo) {
      throw new CompileTimeError()
    }
    return {
      name,
      params: fxInfo.params.map(t => t[1]),
      returnType: fxInfo.returnType,
      addr: this.functionAddr[name]
    }
  }

  /**
   * Loads the built in functions and assigns them
   * an address.
   */
  private initBuiltInFunctions(): void {
    for (const name of BUILT_IN_FX_NAMES) {
      this.functionAddr[name] = BigInt(this.combinedInstrs.length)

      this.combinedInstrs.push(...BUILT_IN_COMMANDS[name])
    }
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
      {
        type: 'MovImmediateCommand',
        value: 0,
        encoding: '2s'
      },
      {
        type: 'MovCommand',
        from: {
          type: 'relative',
          reg: 'rsp',
          offset: -8
        },
        to: {
          type: 'register',
          reg: 'rax'
        }
      },
      {
        type: 'ReturnCommand'
      }
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
