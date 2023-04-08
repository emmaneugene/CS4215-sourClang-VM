import { ArrayDeclaration, Declaration, VariableDeclaration } from '../ast/ast.declaration'
import { WORD_SIZE } from '../constants'

export function getSizeofVariable(_varDef: VariableDeclaration): number {
  return WORD_SIZE
}

export function getSizeofArrayVariable(arrDef: ArrayDeclaration): number {
  return (arrDef.size + 1) * WORD_SIZE
}

export function getSizeofDeclaration(def: Declaration): number {
  if (def.type === 'ArrayDeclaration') {
    return getSizeofArrayVariable(def)
  } else if (def.type === 'VariableDeclaration') {
    return getSizeofVariable(def)
  } else {
    // will never happen
    return 0
  }
}
