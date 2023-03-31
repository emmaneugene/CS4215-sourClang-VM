import { FunctionCTE, GlobalCTE } from '../compiler/compileTimeEnv'
import { DataType } from '../typings/datatype'
import { Context } from './../types'
import { BuiltInFxName } from './../typings/microcode'

/**
 * Built-in functions to be inserted into
 * the GlobalCTE.
 */
const PRINTF_CTE = new FunctionCTE('printf', [DataType.INT], [], 0)
PRINTF_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'printf' }, { type: 'ReturnCommand' }]

const SCANF_CTE = new FunctionCTE('scanf', [DataType.INT], [], 0)
SCANF_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'scanf' }, { type: 'ReturnCommand' }]

const MALLOC_CTE = new FunctionCTE('malloc', ['*', DataType.VOID], [], 0)
MALLOC_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'malloc' }, { type: 'ReturnCommand' }]

const FREE_CTE = new FunctionCTE('free', [DataType.VOID], [], 0)
FREE_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'free' }, { type: 'ReturnCommand' }]

/**
 * Inserts the `BUILT_IN_COMMANDS` into the given global environment.
 *
 * @param gEnv The global environment to load into
 */
export function loadBuiltInFunctions(gEnv: GlobalCTE): void {
  gEnv.addFunction(PRINTF_CTE)
  gEnv.addFunction(SCANF_CTE)
  gEnv.addFunction(MALLOC_CTE)
  gEnv.addFunction(FREE_CTE)
}

/**
 * A wrapper around the actual implementation
 * that interacts with the cVMContext.
 *
 * It interprets the stack frame for built-in function.
 */
export const BUILT_IN_IMPL_CTX: Record<BuiltInFxName, (c: Context) => void> = {
  printf: (ctx: Context): void => {},

  scanf: (ctx: Context): void => {},

  malloc: (ctx: Context): void => {},

  free: (ctx: Context): void => {}
}

/**
 * Tokenizes the format string.
 */
function tokenizeFormatStr(str: string): {
  placeholderIndex: number[]
  tokenizedStr: string[]
} {
  const placeholderRegex = /(\%%[dspx]{1})/g
  const tokenizedStr = str.split(placeholderRegex)
  const placeholderIndex: number[] = []
  for (let i = 0; i < tokenizedStr.length; i++) {
    if (placeholderRegex.exec(tokenizedStr[i])) {
      placeholderIndex.push(i)
    }
  }
  return {
    placeholderIndex,
    tokenizedStr
  }
}
