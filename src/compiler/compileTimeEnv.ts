import * as es from 'estree'

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

  combinedInstrs: Microcode[] = [
    {
      type: 'ExitCommand'
    }
  ]

  readonly EXIT_INSTR = 0

  getVar(sym: string): VariableInfo | undefined {
    return
  }

  addFunction(fEnv: FunctionCTE): void {
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

  getFxInfo(name: string): FunctionInfo {
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
  const fxInfo = gEnv.getFxInfo(name)
  if (!fxInfo) {
    throw new CompileTimeError()
  }
  return fxInfo
}
