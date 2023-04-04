import { FunctionCTE, GlobalCTE, VariableInfo } from '../compiler/compileTimeEnv'
import { DataType } from '../typings/datatype'
import { MemoryModel } from '../typings/runtime-context'
import { convertASCIIToChar } from '../utils/asciiConvertor'
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
      argumentTypes: Object.values(cte.paramNameTypePairs)
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

    // Get the 1st argument, which is the string
    // that printf is supposed to print
    const strAddr = getNthArg(1, ctx.cVmContext.BP, dataview)
    const formatStr = getStringFromAddr(strAddr, ctx.cVmContext.dataview)

    // Process/substitute of %d/%c/%s/%p from the str
    const resultStr = performPlaceholderSubstitution(formatStr, ctx)

    if (ctx.externalBuiltIns?.rawDisplay) {
      ctx.externalBuiltIns.rawDisplay(undefined, resultStr, ctx)
    } else {
      console.log(resultStr)
    }
  },

  scanf: (ctx: Context): void => {},

  malloc: (ctx: Context): void => {
    const { dataview } = ctx.cVmContext
    const size = getNthArg(1, ctx.cVmContext.BP, dataview)

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
    const ptr = getNthArg(1, ctx.cVmContext.BP, dataview)

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
 * Gets the Nth argument from the stack frame.
 *
 * The stack frame has:
 * - Previous base pointer: [rbp, rbp+8)
 * - Return PC value: [rbp-8, rbp)
 * - Arg1: [rbp-16, rbp-8)
 * - Arg2: [rbp-24, rbp-16)
 * ...
 * - ArgN: [rbp-((N+1)*8), rbp-(N * 8))
 *
 * @param bp function base pointer
 * @param dataview runtime memory model
 * @returns first argument as a bigint
 */
function getNthArg(N: number, bp: bigint, memory: MemoryModel): bigint {
  const bpOffset = BigInt((N + 1) * WORD_SIZE)
  return memory.getBytesAt(bp - bpOffset)
}

/**
 * Using the address, scan the context until the end
 * of string (i.e. \0) is met.
 */
function getStringFromAddr(addr: bigint, memory: MemoryModel): string {
  let nextAddr = addr
  const characterList = []
  while (memory.getBytesAt(nextAddr) !== BigInt(0)) {
    const char = convertASCIIToChar(memory.getBytesAt(nextAddr))
    characterList.push(char)
    nextAddr += BigInt(WORD_SIZE)
  }

  return characterList.join('')
}

/**
 * Performs the placeholder substitution in the format string.
 *
 * Substitutes values using values on the stack.
 *
 * Supported placeholders:
 * - %d
 * - %p
 */
function performPlaceholderSubstitution(formatStr: string, context: Context): string {
  const { placeholderIndex, tokenizedStr } = tokenizeFormatStr(formatStr)
  let nextArgumentOnStackIndex = 2 // Because the first one is the format string

  placeholderIndex.forEach(i => {
    const value = getNthArg(
      nextArgumentOnStackIndex,
      context.cVmContext.BP,
      context.cVmContext.dataview
    )
    tokenizedStr[i] = convertValueToString(tokenizedStr[i], value)
    nextArgumentOnStackIndex++
  })

  return tokenizedStr.join('')
}

/**
 * Converts the value to its string representation,
 * based on what the placeholder is.
 */
function convertValueToString(placeholder: string, value: bigint): string {
  const INTEGER_PLACEHOLDER = '%d'
  const POINTER_PLACEHOLDER = '%p'

  switch (placeholder) {
    case INTEGER_PLACEHOLDER:
      return value.toString()
    case POINTER_PLACEHOLDER:
    default:
      return '0x' + value.toString(16)
  }
}

/**
 * Tokenizes the format string.
 */
function tokenizeFormatStr(str: string): {
  placeholderIndex: number[]
  tokenizedStr: string[]
} {
  const placeholderRegex = /(\%[dsp]{1})/g
  const tokenizedStr = str.split(placeholderRegex).filter(s => s !== '')

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
