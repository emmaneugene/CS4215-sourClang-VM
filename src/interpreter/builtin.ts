import { FunctionCTE, GlobalCTE, VariableInfo } from '../compiler/compileTimeEnv'
import { DataType } from '../typings/datatype'
import { MemoryModel } from '../typings/runtime-context'
import { WORD_SIZE } from './../constants'
import { Context } from './../types'
import { BuiltInFxName } from './../typings/microcode'

/**
 * Built-in functions to be inserted into
 * the GlobalCTE.
 */
const PRINTF_CTE = new FunctionCTE('printf', [DataType.INT], printfVars(), 0)
PRINTF_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'printf' }, { type: 'ReturnCommand' }]

const SCANF_CTE = new FunctionCTE('scanf', [DataType.INT], scanfVars(), 0)
SCANF_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'scanf' }, { type: 'ReturnCommand' }]

const MALLOC_CTE = new FunctionCTE('malloc', ['*', DataType.VOID], mallocVars(), 0)
MALLOC_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'malloc' }, { type: 'ReturnCommand' }]

const FREE_CTE = new FunctionCTE('free', [DataType.VOID], freeVars(), 0)
FREE_CTE.instrs = [{ type: 'ExecuteBuiltInFxCommand', name: 'free' }, { type: 'ReturnCommand' }]

/**
 * Inserts the `BUILT_IN_COMMANDS` into the given global environment.
 *
 * @param gEnv The global environment to load into
 */
export function loadBuiltInFunctions(gEnv: GlobalCTE): void {
  const builtinFunctions = [PRINTF_CTE, SCANF_CTE, MALLOC_CTE, FREE_CTE]

  for (const cte of builtinFunctions) {
    gEnv.setFunctionPrototype({
      name: cte.name,
      returnType: cte.returnType,
      params: cte.params.map(p => p[1])
    })
    gEnv.addFunctionInstrs(cte)
  }
}

/**
 * A wrapper around the actual implementation
 * that interacts with the cVMContext.
 *
 * The first arg is still located at BP - 16
 *
 * It interprets the stack frame for built-in function.
 */
export const BUILT_IN_IMPL_CTX: Record<BuiltInFxName, (c: Context) => void> = {
  printf: (ctx: Context): void => {
    const { dataview } = ctx.cVmContext
    const strPtr = getFirstArg(ctx.cVmContext.BP, dataview)

    // TODO: Implement the reading of the string from the strPtr
    // Implement the processing/substituting of %d/%c/%s/%p from the str
    const resultStr = 'printf called!'

    if (ctx.externalBuiltIns?.rawDisplay) {
      ctx.externalBuiltIns.rawDisplay(undefined, resultStr, ctx)
    } else {
      console.log(resultStr)
    }
  },

  scanf: (ctx: Context): void => {},

  malloc: (ctx: Context): void => {
    const { dataview } = ctx.cVmContext
    const size = getFirstArg(ctx.cVmContext.BP, dataview)

    // TODO: Implement the actual allocation algorithm
    // Put the allocated ptr onto ctx.cVmContext.AX
    // below are just placeholder code
    ctx.cVmContext.AX = BigInt(516)
    const resultStr = 'malloc called with size: ' + size.toString()

    if (ctx.externalBuiltIns?.rawDisplay) {
      ctx.externalBuiltIns.rawDisplay(undefined, resultStr, ctx)
    } else {
      console.log(resultStr)
    }
  },

  free: (ctx: Context): void => {
    const { dataview } = ctx.cVmContext
    const ptr = getFirstArg(ctx.cVmContext.BP, dataview)

    // TODO: Implement the actual free algorithm
    // The size is NOT given by the user
    // C is supposed to track the size by itself
    const resultStr = 'free called with ptr: 0x' + ptr.toString(16)

    if (ctx.externalBuiltIns?.rawDisplay) {
      ctx.externalBuiltIns.rawDisplay(undefined, resultStr, ctx)
    } else {
      console.log(resultStr)
    }
  }
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

function printfVars(): VariableInfo[] {
  return [
    {
      name: 'format',
      typeList: ['*', DataType.CHAR],
      offset: -(2 * WORD_SIZE)
    }
  ]
}

function scanfVars(): VariableInfo[] {
  return [
    {
      name: 'format',
      typeList: ['*', DataType.CHAR],
      offset: -(2 * WORD_SIZE)
    }
  ]
}

function mallocVars(): VariableInfo[] {
  return [
    {
      name: 'size',
      typeList: [DataType.INT],
      offset: -(2 * WORD_SIZE)
    }
  ]
}

function freeVars(): VariableInfo[] {
  return [
    {
      name: 'ptr',
      typeList: ['*', DataType.VOID],
      offset: -(2 * WORD_SIZE)
    }
  ]
}

/**
 * Gets the first argument from the stack frame.
 *
 * @param bp function base pointer
 * @param dataview runtime memory model
 * @returns first argument as a bigint
 */
function getFirstArg(bp: bigint, dataview: MemoryModel): bigint {
  return dataview.getBytesAt(bp - BigInt(2 * WORD_SIZE))
}
