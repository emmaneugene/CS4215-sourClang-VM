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

    /** Reflects fields of struct, if this identifier is a struct. */
    structFields?: StructDef | undefined

    /**
     * Reflects the type of the identifier.
     *
     * It is a list, where every element is a *,
     * except for the last item, which should be a
     * DataType.
     *
     * This reflects the number of 'hops' this ident
     * refers to.
     *
     * E.g:
     *
     * `int ** x` is ['*', '*', int]
     * `int x` is [int]
     */
    typeList: TypeList
  }

  export type TypeList = Array<'*' | DataType>

  export type StructDef = { [attribute: string]: StructDef | TypeList }

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
