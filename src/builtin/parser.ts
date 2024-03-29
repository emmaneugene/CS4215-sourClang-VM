import { DataType, TypeList } from '../ast/ast.core'
import { Microcode } from '../typings/microcode'

type BuiltInFunctionDefinition = {
  name: string
  datatype: TypeList
  args: TypeList[]
  hasVariableArgs?: boolean
  instrs: Microcode[]
}

/**
 * Built-in functions.
 */
const PRINTF: BuiltInFunctionDefinition = {
  name: 'printf',
  datatype: {
    typeList: [DataType.FUNCTION]
  },
  args: [{ typeList: ['*', DataType.CHAR] }],
  instrs: [{ type: 'ExecuteBuiltInFxCommand', name: 'printf' }, { type: 'ReturnCommand' }]
}

const MALLOC: BuiltInFunctionDefinition = {
  name: 'malloc',
  datatype: {
    typeList: [DataType.FUNCTION]
  },
  args: [{ typeList: [DataType.INT] }],
  instrs: [{ type: 'ExecuteBuiltInFxCommand', name: 'malloc' }, { type: 'ReturnCommand' }]
}

const FREE: BuiltInFunctionDefinition = {
  name: 'free',
  datatype: {
    typeList: [DataType.FUNCTION]
  },
  args: [{ typeList: ['*', DataType.VOID] }],
  instrs: [{ type: 'ExecuteBuiltInFxCommand', name: 'free' }, { type: 'ReturnCommand' }]
}

export const BUILTINS: BuiltInFunctionDefinition[] = [PRINTF, MALLOC, FREE]
