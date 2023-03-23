import * as es from 'estree'

import { DataType } from '../typings/datatype'
import { Microcode } from '../typings/microcode'

export interface VariableInfo {
  name: string

  /* The variable's datatype */
  type: DataType

  /** The "home" of a variable = rbp + offset */
  offset: number

  /** The initial value of a variable */
  initialValue: es.Expression

  /**
   * The block where the variable is.
   * Starts from 0, which is the args + variable declaration.
   */
  blkNum: number
}

export class FunctionCTE {
  name: string

  returnType?: DataType

  params: Array<[string, DataType]> = []

  /* A map of variables. Variable name is used as the key. */
  variables: Record<string, VariableInfo> = {}

  instrs: Array<Microcode> = []

  constructor(name: string, returnType: DataType) {
    this.name = name
    this.returnType = returnType
  }
}

export class GlobalCTE {
  functions: Record<string, FunctionCTE> = {}
}
