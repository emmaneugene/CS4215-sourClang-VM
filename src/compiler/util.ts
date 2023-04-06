import { Identifier, MemberExpression, TypeList } from 'estree'

import { WORD_SIZE } from './../constants'
import { CompileTimeError } from './error'

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

/**
 * Returns the size of an identifier.
 */
export function getIdentSize(ident: Identifier): number {
  const unitSize: number = WORD_SIZE

  if (ident.structFields) {
    // Structs are not supported
    throw new CompileTimeError()
  }

  if (ident.isArray) {
    const size = ident.arraySize
    if (!size) {
      // Parser is misconfigured
      throw new CompileTimeError()
    }

    // We need 1 more than the declared array size
    // because the array itself is a pointer
    // i.e. in `int x[3]`
    // - x is a pointer to x[0]
    // -x[i] is the actual data
    return (size + 1) * unitSize
  } else {
    return unitSize
  }
}

/**
 * Checks if a es.MemberExpression is an array access.
 */
export function isArrayAccess(node: MemberExpression): boolean {
  return node.computed
}
