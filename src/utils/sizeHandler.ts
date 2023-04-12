import { TypeList } from '../ast/ast.core'
import { WORD_SIZE } from '../constants'

export function getSizeofVariable(_primitiveType: TypeList): number {
  return WORD_SIZE
}

export function getSizeofArrayVariable(arraySize: number, _primitiveType: TypeList): number {
  return (arraySize + 1) * WORD_SIZE
}
