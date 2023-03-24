import { DataType } from '../typings/datatype'
import { BlockNode, FunctionCTE, GlobalCTE } from './compileTimeEnv'

export function makeEmptyGlobalContext(): GlobalCTE {
  const gEnv = new GlobalCTE()
  const fEnv = new FunctionCTE('main', DataType.INT, [], new BlockNode())

  return gEnv
}
