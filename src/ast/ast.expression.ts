import { Address, BaseNode, DataType, TypeList } from './ast.core'

/**
 * A base interface to describe expressions.
 * All expressions need to have some
 * datatype.
 */
export interface BaseExpression extends BaseNode {
  datatype: TypeList
}

/**
 * Describes a node defined using the following syntax:
 * `{ expr1, expr2, ... }`
 */
export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

/**
 * A union type of primary identifiers.
 * E.g. `x`, `list[1]`, `1`, `3.14`, `"hello"`
 */
export type PrimaryIdentifier = AddressableOperands | IntLiteral | FloatLiteral | StringLiteral

export interface IntLiteral extends BaseExpression {
  type: 'IntLiteral'
  value: number
}

export interface FloatLiteral extends BaseExpression {
  type: 'FloatLiteral'
  value: number
}

export interface StringLiteral extends BaseExpression {
  type: 'StringLiteral'
  datatype: {
    typeList: ['*', DataType.CHAR]
  }
  stringValue: string
  address: number
}

/**
 * A union type of addressable operands.
 * E.g. `x`, `list[1]`
 */
export type AddressableOperands = ArrayAccess | Identifier

export interface ArrayAccess extends BaseExpression {
  type: 'ArrayAccess'
  array: Identifier
  index: Expression
  address: Address
}

export interface Identifier extends BaseExpression {
  type: 'Identifier'
  name: string
  address: Address
}

/**
 * A union type of allowed expressions.
 */
export type Expression =
  | PrimaryIdentifier
  | UpdateExpression
  | FunctionCallExpression
  | NegationExpression
  | UnaryMinusExpression
  | CastExpression
  | DereferenceExpression
  | AddressOfExpression
  | SizeofExpression
  | BinaryOperatorExpression
  | LogicalExpression
  | TernaryExpression
  | SequenceExpression

export interface UpdateExpression extends BaseExpression {
  type: 'UpdateExpression'
  operand: AddressableOperands
  isPrefix: boolean
  operator: '++' | '--'
}

export interface FunctionCallExpression extends BaseExpression {
  type: 'FunctionCallExpression'
  callee: string
  arguments: Array<Expression>
}

export interface NegationExpression extends BaseExpression {
  type: 'NegationExpression'
  datatype: {
    typeList: [DataType.CHAR]
  }
  operand: Expression
}

export interface UnaryMinusExpression extends BaseExpression {
  type: 'UnaryMinusExpression'
  operand: Expression
}

export interface CastExpression extends BaseExpression {
  type: 'CastExpression'
  targetType: TypeList
  operand: Expression
}

export interface DereferenceExpression extends BaseExpression {
  type: 'DereferenceExpression'
  operand: Expression
}

export interface AddressOfExpression extends BaseExpression {
  type: 'AddressOfExpression'
  operand: AddressableOperands
}

export interface SizeofExpression extends BaseExpression {
  type: 'SizeofExpression'
  operand: AddressableOperands | TypeList
}

export interface BinaryOperatorExpression extends BaseExpression {
  type: 'BinaryOperatorExpression'
  operator: '+' | '-' | '*' | '/' | '%' | '>' | '>=' | '<' | '<=' | '==' | '!='
  left: Expression
  right: Expression
}

export interface LogicalExpression extends BaseExpression {
  type: 'LogicalExpression'
  operator: '||' | '&&'
  left: Expression
  right: Expression
}

export interface TernaryExpression extends BaseExpression {
  type: 'TernaryExpression'
  test: Expression
  alternate: Expression
  consequent: Expression
}
