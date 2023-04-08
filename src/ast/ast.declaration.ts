import { Address, BaseNode, TypeList } from './ast.core'
import { Expression, Identifier, SequenceExpression } from './ast.expression'
import { Statement } from './ast.statement'

/**
 * A base interface to describe declarations.
 * All declarations need to have some address.
 */
export interface BaseDeclaration extends BaseNode {
  datatype: TypeList
  name: string
  address: Address
}

/**
 * Possible forms of declarations.
 */
export type Declaration = VariableDeclaration | ArrayDeclaration

/**
 * Declaration of a variable.
 * E.g. `int x`, `int * x`, `struct Person p`.
 */
export interface VariableDeclaration extends BaseDeclaration {
  type: 'VariableDeclaration'
  init?: Expression | SequenceExpression | undefined
}

/**
 * Declaration of an array.
 * E.g. `int x[3]`, `int * x[3]`, `struct Person p[2]`.
 */
export interface ArrayDeclaration extends BaseDeclaration {
  type: 'ArrayDeclaration'
  init?: SequenceExpression | undefined
  size: number
}

/**
 * Declaration of a function.
 */
export interface FunctionDefinition extends BaseDeclaration {
  type: 'FunctionDefinition'
  params: Array<Identifier>
  body: Array<Statement>
}
