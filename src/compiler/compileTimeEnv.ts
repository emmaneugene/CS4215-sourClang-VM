import * as es from 'estree'

import { DataType } from '../typings/datatype'
import { Microcode } from '../typings/microcode'
import { CompileTimeError } from './error'

export type Frame = Record<string, VariableInfo>

export interface VariableInfo {
  name: string

  /* The variable's datatype */
  type: DataType

  /** The "home" of a variable = rbp + offset */
  offset: number

  /** The initial value of a variable */
  initialValue?: es.Expression
}

export class FunctionCTE {
  name: string

  returnType: DataType

  params: Array<[string, DataType]> = []

  instrs: Array<Microcode> = []

  frames: Frame[] = []

  nextAvailableOffset: number = 0

  MAX_OFFSET: number = -1

  constructor(name: string, returnType: DataType, params: VariableInfo[], localVarSize: number) {
    this.name = name
    this.returnType = returnType
    this.extendFrame(params)
    this.MAX_OFFSET = localVarSize
  }

  private allocNBytesOnStack(N: number): number {
    const rv = this.nextAvailableOffset
    if (this.nextAvailableOffset >= this.MAX_OFFSET) throw new CompileTimeError()
    this.nextAvailableOffset += N
    return rv
  }

  addVar(name: string, type: DataType): VariableInfo {
    const v = {
      name,
      type,
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

  getVar(sym: string): VariableInfo | undefined {
    return
  }
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
