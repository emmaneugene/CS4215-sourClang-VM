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
  | Expression
  | Declaration
  | CompoundStatement
  | AssignmentStatement
  | DerefLeftAssignmentExpression
  | IfElseStatement
  | WhileStatement
  | ForStatement
  | ReturnStatement
  | BreakStatement
  | ContinueStatement

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

export interface DerefLeftAssignmentExpression extends BaseStatement {
  type: 'DerefLeftAssignmentExpression'
  operator: '='
  derefChain: Array<'*'>
  left: AddressableOperands
  right: Expression
}

export interface IfElseStatement extends BaseStatement {
  type: 'IfElseStatement'
  test: Expression
  consequent: Statement
  alternate?: Statement | undefined
}

export interface WhileStatement extends BaseStatement {
  type: 'WhileStatement'
  test: Expression
  body: Array<Statement>
}

export interface ForStatement extends BaseStatement {
  type: 'ForStatement'
  init?: AssignmentStatement | undefined
  test?: Expression | undefined
  update?: Expression | AssignmentStatement | undefined
  body: Array<Statement>
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
