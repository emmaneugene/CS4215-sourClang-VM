import { TypeList } from 'estree'

import { WORD_SIZE } from './../constants'

/**
 * Given a certain variable's type, determines how much to update
 * a variable by when there is an increment/decrement operator on
 * it.
 *
 * E.g. given x++:
 *
 * if x is a pointer, increase x's value by WORD_SIZE.
 * if x is an int/float, increase x's value by 1
 */
export function getUpdateSize(typeList: TypeList): number {
  const actualType = typeList[typeList.length - 1]

  if (actualType === '*') {
    return WORD_SIZE
  }

  return 1
}
