import { BaseNode } from './ast.core'
import { Declaration } from './ast.declaration'
import { AddressableOperands, Expression } from './ast.expression'

/**
 * A base interface to describe statements.
 */
export type BaseStatement = BaseNode

/**
 * A union type of statements.
 */
export type Statement =
  | ExpressionStatement
  | Declaration
  | CompoundStatement
  | AssignmentStatement
  | DerefLeftAssignmentStatement
  | IfElseStatement
  | WhileStatement
  | ForStatement
  | ReturnStatement
  | BreakStatement
  | ContinueStatement

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface CompoundStatement extends BaseStatement {
  type: 'CompoundStatement'
  body: Array<Statement>
}

export interface AssignmentStatement extends BaseStatement {
  type: 'AssignmentStatement'
  operator: '='
  left: AddressableOperands
  right: Expression
}

export interface DerefLeftAssignmentStatement extends BaseStatement {
  type: 'DerefLeftAssignmentStatement'
  operator: '='
  derefChain: Array<'*'>
  left: AddressableOperands
  right: Expression
}

export interface IfElseStatement extends BaseStatement {
  type: 'IfElseStatement'
  test: Expression
  consequent: CompoundStatement
  alternate?: CompoundStatement | undefined
}

export interface WhileStatement extends BaseStatement {
  type: 'WhileStatement'
  test: Expression
  body: CompoundStatement
}

export interface ForStatement extends BaseStatement {
  type: 'ForStatement'
  init?: AssignmentStatement | DerefLeftAssignmentStatement | undefined
  test?: Expression | undefined
  update?: Expression | AssignmentStatement | DerefLeftAssignmentStatement | undefined
  body: CompoundStatement
}

export interface ReturnStatement extends BaseStatement {
  type: 'ReturnStatement'
  expression?: Expression | undefined
}

export interface BreakStatement extends BaseStatement {
  type: 'BreakStatement'
}

export interface ContinueStatement extends BaseStatement {
  type: 'ContinueStatement'
}
