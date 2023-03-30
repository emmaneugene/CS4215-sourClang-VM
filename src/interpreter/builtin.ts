import { Context } from './../types';
import { BuiltInFxName, Microcode } from './../typings/microcode';

export const BUILT_IN_FX_NAMES = ['printf', 'scanf', 'malloc', 'free']

/**
 * A list of the built-in functions to be inserted into
 * the GlobalCTE.
 */
export const BUILT_IN_COMMANDS: Record<BuiltInFxName, Microcode[]> = {
  printf: [
    { type: 'ExecuteBuiltInFxCommand', name: 'printf' },
    { type: 'ReturnCommand' }
  ],
  scanf: [
    { type: 'ExecuteBuiltInFxCommand', name: 'scanf' },
    { type: 'ReturnCommand' }
  ],
  malloc: [
    { type: 'ExecuteBuiltInFxCommand', name: 'malloc' },
    { type: 'ReturnCommand' }
  ],
  free: [
    { type: 'ExecuteBuiltInFxCommand', name: 'free' },
    { type: 'ReturnCommand' }
  ],
}

/**
 * A wrapper around the actual implementation
 * that interacts with the cVMContext.
 * 
 * It interprets the stack frame for built-in function.
 */
export const BUILT_IN_IMPL_CTX: Record<BuiltInFxName, (c: Context) => void> = {
  printf: (ctx: Context): void => {
  },

  scanf: (ctx: Context): void => {
  },

  malloc: (ctx: Context): void => {
  },

  free: (ctx: Context): void => {
  }
}

/**
 * Tokenizes the format string.
 */
function tokenizeFormatStr(str: string): {
  placeholderIndex: number[],
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
