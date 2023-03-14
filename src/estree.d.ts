import * as es from 'estree'

import { DataType } from './typings/datatype'

/**
 * Extends the estree type definitions based on the grammar.
 */
declare module 'estree' {
  export interface Identifier {
    /** Extends the existing estree Identifier interface with datatype. */
    datatype: DataType

    /** Extends the existing estree Identifier interface with pointer. */
    pointerList?: PointerList
  }

  type PointerList = undefined | ['*', PointerList]

  export interface ExpressionMap {
    CastExpression: CastExpression
    SizeofExpression: SizeofExpression
    AddressofExpression: AddressofExpression
    ValueofExpression: ValueofExpression
    FlexiAssignmentExpression: FlexiAssignmentExpression
  }

  export interface CastExpression extends BaseExpression {
    type: 'CastExpression'
    targetType: DataType
    expression: Expression
  }

  export interface SizeofExpression extends BaseExpression {
    type: 'SizeofExpression'
    operand: DataType
  }

  export interface AddressofExpression extends BaseExpression {
    type: 'AddressofExpression'
    expression: Expression
  }

  export interface ValueofExpression extends BaseExpression {
    type: 'ValueofExpression'
    expression: Expression
  }

  export interface FlexiAssignmentExpression extends BaseExpression {
    type: 'FlexiAssignmentExpression'
    operator: AssignmentOperator
    left: Expression
    right: Expression
  }
}

export default es
