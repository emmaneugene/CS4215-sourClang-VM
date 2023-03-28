import * as es from 'estree'

import { DataType } from './typings/datatype'

/**
 * Extends the estree type definitions based on the grammar.
 */
declare module 'estree' {
  export interface Identifier {
    /** Extends the existing estree Identifier interface with datatype. */
    datatype: DataType

    /** Reflects if this is an array declaration. Defaults to false. */
    isArray?: boolean | undefined

    /** Reflects size of array, if this identifier is an array */
    arraySize?: number | undefined

    /**
     * Reflects if this is an struct declaration. Defaults to false.
     * This field takes precedence over `datatype`.
     */
    isStruct?: boolean | undefined

    /** Reflects fields of struct, if this identifier is a struct. */
    structFields?: StructDef | undefined

    /** Extends the existing estree Identifier interface with pointer. */
    pointerList?: string[]

    /** Reflects if this is a memory address. */
    isMemory?: boolean | undefined
  }

  export type StructType = {
    datatype: DataType
    pointerList: string[]
  }

  export type StructDef = { [attribute: string]: StructDef | StructType }

  export interface ExpressionMap {
    CastExpression: CastExpression
    SizeofExpression: SizeofExpression
    AddressofExpression: AddressofExpression
    DereferenceExpression: DereferenceExpression
    DerefLeftAssignmentExpression: DerefLeftAssignmentExpression
  }

  export interface CastExpression extends BaseExpression {
    type: 'CastExpression'
    targetType: DataType
    expression: Expression
  }

  export interface SizeofExpression extends BaseExpression {
    type: 'SizeofExpression'
    operand: Identifier | DataType
  }

  export interface AddressofExpression extends BaseExpression {
    type: 'AddressofExpression'
    expression: Expression
  }

  export interface DereferenceExpression extends BaseExpression {
    type: 'DereferenceExpression'
    expression: Expression
  }

  export interface DerefLeftAssignmentExpression extends BaseExpression {
    type: 'DerefLeftAssignmentExpression'
    operator: AssignmentOperator
    left: Identifier | MemberExpression
    derefChain: string[]
    right: Expression
  }
}

export default es
