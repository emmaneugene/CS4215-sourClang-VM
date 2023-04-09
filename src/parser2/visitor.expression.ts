import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { DataType } from '../ast/ast.core'
import {
  AddressableOperands,
  AddressOfExpression,
  ArrayAccess,
  BinaryOperatorExpression,
  DereferenceExpression,
  Expression,
  FunctionCallExpression,
  Identifier,
  NegationExpression,
  UnaryMinusExpression,
  UpdateExpression
} from '../ast/ast.expression'
import { IdentifierInfo } from '../ast/identifierHandler'
import {
  AddContext,
  AddressableOperandsContext,
  AddressOfContext,
  AndContext,
  ArraySubscriptContext,
  AtomIdentifierContext,
  CastContext,
  DereferenceContext,
  EqualityContext,
  ExprContext,
  FunctionCallContext,
  MultContext,
  OrContext,
  ParenContext,
  PrefixIncrContext,
  PriIdentifierContext,
  PrimaryIdentifierContext,
  RelOprContext,
  SizeofExprContext,
  StructAccessContext,
  StructAccessThruPointerContext,
  SuffixIncrContext,
  TernaryContext,
  UnopContext
} from '../lang/SourCParser2'
import { SourCParser2Visitor } from '../lang/SourCParser2Visitor'
import { FatalSyntaxError, ParserMisconfigError } from './error'
import {
  contextToLocation,
  errorNodeToLocation,
  getAddOp,
  getEqOp,
  getMultOp,
  getOutputDatatype,
  getRelOp,
  removeOnePtr,
  StringLitAddrLookupFunction
} from './utils'

export class ExpressionGenerator implements SourCParser2Visitor<Expression> {
  private identifierLookupFunction: (name: string) => IdentifierInfo
  private stringAddrLookupFunction: StringLitAddrLookupFunction

  constructor(
    identiferLookup: (name: string) => IdentifierInfo,
    stringAddrLookup: StringLitAddrLookupFunction
  ) {
    this.identifierLookupFunction = identiferLookup
    this.stringAddrLookupFunction = stringAddrLookup
  }

  visitExpr(ctx: ExprContext): Expression {
    // Delegate this to the alternative labels
    return this.visit(ctx)
  }

  visitSuffixIncr(ctx: SuffixIncrContext): UpdateExpression {
    const operand = this.visit(ctx.addressableOperands())
    if (!['ArrayAccess', 'Identifier'].includes(operand.type)) {
      throw new FatalSyntaxError(contextToLocation(ctx))
    }

    return {
      ...contextToLocation(ctx),
      type: 'UpdateExpression',
      operand: operand as AddressableOperands,
      isPrefix: false,
      datatype: operand.datatype
    }
  }

  visitFunctionCall(ctx: FunctionCallContext): FunctionCallExpression {
    const functionName = ctx.Identifier().text
    const args = ctx.seqExprLs()?._eLs.map(e => this.visit(e)) ?? []

    return {
      ...contextToLocation(ctx),
      type: 'FunctionCallExpression',
      callee: functionName,
      arguments: args,
      datatype: this.identifierLookupFunction(functionName).datatype
    }
  }

  visitPrefixIncr(ctx: PrefixIncrContext): Expression {
    const operand = this.visit(ctx.addressableOperands())
    if (!['ArrayAccess', 'Identifier'].includes(operand.type)) {
      throw new FatalSyntaxError(contextToLocation(ctx))
    }

    return {
      ...contextToLocation(ctx),
      type: 'UpdateExpression',
      operand: operand as AddressableOperands,
      isPrefix: true,
      datatype: operand.datatype
    }
  }

  visitUnop(ctx: UnopContext): NegationExpression | UnaryMinusExpression {
    const operand = this.visit(ctx.expr())

    if (ctx.Minus()) {
      // Minus
      return {
        ...contextToLocation(ctx),
        type: 'UnaryMinusExpression',
        operand,
        datatype: operand.datatype
      }
    } else {
      // Negation
      return {
        ...contextToLocation(ctx),
        type: 'NegationExpression',
        operand,
        datatype: {
          typeList: [DataType.CHAR]
        }
      }
    }
  }

  visitCast(ctx: CastContext): Expression {
    throw new Error('Unsupported')
  }

  visitDereference(ctx: DereferenceContext): DereferenceExpression {
    const operand = this.visit(ctx.expr())
    return {
      ...contextToLocation(ctx),
      type: 'DereferenceExpression',
      operand,
      datatype: removeOnePtr(operand.datatype, contextToLocation(ctx))
    }
  }

  visitAddressOf(ctx: AddressOfContext): AddressOfExpression {
    const operand = this.visit(ctx.expr())
    if (!['ArrayAccess', 'Identifier'].includes(operand.type)) {
      throw new FatalSyntaxError(contextToLocation(ctx))
    }

    return {
      ...contextToLocation(ctx),
      type: 'AddressOfExpression',
      operand: operand as AddressableOperands,
      datatype: {
        ...operand.datatype,
        typeList: ['*', ...operand.datatype.typeList]
      }
    }
  }

  visitSizeofExpr(ctx: SizeofExprContext): Expression {
    throw new Error('Unsupported')
  }

  visitMult(ctx: MultContext): BinaryOperatorExpression {
    const operator = getMultOp(ctx)
    const leftExpr = this.visit(ctx.expr().at(0)!)
    const rightExpr = this.visit(ctx.expr().at(1)!)
    const outputDatatype = getOutputDatatype(
      operator,
      leftExpr.datatype,
      rightExpr.datatype,
      contextToLocation(ctx)
    )

    return {
      ...contextToLocation(ctx),
      type: 'BinaryOperatorExpression',
      operator,
      left: leftExpr,
      right: rightExpr,
      datatype: outputDatatype
    }
  }

  visitAdd(ctx: AddContext): BinaryOperatorExpression {
    const operator = getAddOp(ctx)
    const leftExpr = this.visit(ctx.expr().at(0)!)
    const rightExpr = this.visit(ctx.expr().at(1)!)
    const outputDatatype = getOutputDatatype(
      operator,
      leftExpr.datatype,
      rightExpr.datatype,
      contextToLocation(ctx)
    )

    return {
      ...contextToLocation(ctx),
      type: 'BinaryOperatorExpression',
      operator,
      left: leftExpr,
      right: rightExpr,
      datatype: outputDatatype
    }
  }

  visitRelOpr(ctx: RelOprContext): BinaryOperatorExpression {
    const operator = getRelOp(ctx)
    const leftExpr = this.visit(ctx.expr().at(0)!)
    const rightExpr = this.visit(ctx.expr().at(1)!)

    return {
      ...contextToLocation(ctx),
      type: 'BinaryOperatorExpression',
      operator,
      left: leftExpr,
      right: rightExpr,
      datatype: {
        typeList: [DataType.CHAR]
      }
    }
  }

  visitEquality(ctx: EqualityContext): Expression {
    const operator = getEqOp(ctx)
    const leftExpr = this.visit(ctx.expr().at(0)!)
    const rightExpr = this.visit(ctx.expr().at(1)!)

    return {
      ...contextToLocation(ctx),
      type: 'BinaryOperatorExpression',
      operator,
      left: leftExpr,
      right: rightExpr,
      datatype: {
        typeList: [DataType.CHAR]
      }
    }
  }

  visitAnd(ctx: AndContext): BinaryOperatorExpression {
    const operator = '&&'
    const leftExpr = this.visit(ctx.expr().at(0)!)
    const rightExpr = this.visit(ctx.expr().at(1)!)

    return {
      ...contextToLocation(ctx),
      type: 'BinaryOperatorExpression',
      operator,
      left: leftExpr,
      right: rightExpr,
      datatype: {
        typeList: [DataType.CHAR]
      }
    }
  }

  visitOr(ctx: OrContext): Expression {
    const operator = '||'
    const leftExpr = this.visit(ctx.expr().at(0)!)
    const rightExpr = this.visit(ctx.expr().at(1)!)

    return {
      ...contextToLocation(ctx),
      type: 'BinaryOperatorExpression',
      operator,
      left: leftExpr,
      right: rightExpr,
      datatype: {
        typeList: [DataType.CHAR]
      }
    }
  }

  visitParen(ctx: ParenContext): Expression {
    return this.visit(ctx.expr())
  }

  visitTernary(ctx: TernaryContext): Expression {
    throw new Error('Unsupported')
  }

  visitPriIdentifier(ctx: PriIdentifierContext): Expression {
    // Pass control back to the tree
    // So that it will use `primaryIdentifier`
    return this.visit(ctx.primaryIdentifier())
  }

  visitPrimaryIdentifier(ctx: PrimaryIdentifierContext): Expression {
    const c = ctx.Constant()
    const s = ctx.StringLiteral()

    if (c !== undefined && !isNaN(parseInt(c.text))) {
      return {
        ...contextToLocation(ctx),
        type: 'IntLiteral',
        value: parseInt(c.text),
        datatype: {
          typeList: [DataType.LONG]
        }
      }
    }

    if (s) {
      return {
        ...contextToLocation(ctx),
        type: 'StringLiteral',
        stringValue: s.text,
        datatype: {
          typeList: ['*', DataType.CHAR]
        },
        address: this.stringAddrLookupFunction(s.text)
      }
    }

    if (ctx.addressableOperands()) {
      return this.visit(ctx.addressableOperands()!)
    }

    throw new FatalSyntaxError(contextToLocation(ctx))
  }

  visitAddressableOperands(ctx: AddressableOperandsContext): Expression {
    // Delegate this to the annotated labels
    return this.visit(ctx)
  }

  visitArraySubscript(ctx: ArraySubscriptContext): ArrayAccess {
    const arrayName = ctx.Identifier().text
    const arrayInfo = this.identifierLookupFunction(arrayName)
    return {
      ...contextToLocation(ctx),
      type: 'ArrayAccess',
      array: {
        type: 'Identifier',
        name: arrayName,
        address: arrayInfo.address,
        datatype: arrayInfo.datatype
      },
      index: this.visit(ctx.expr()),
      datatype: arrayInfo.datatype,
      address: arrayInfo.address
    }
  }

  visitAtomIdentifier(ctx: AtomIdentifierContext): Identifier {
    const name = ctx.Identifier().text
    const identifierInfo = this.identifierLookupFunction(name)

    return {
      ...contextToLocation(ctx),
      type: 'Identifier',
      name,
      datatype: identifierInfo.datatype,
      address: identifierInfo.address
    }
  }

  visitStructAccess(ctx: StructAccessContext): Expression {
    throw new Error('Unsupported')
  }

  visitStructAccessThruPointer(ctx: StructAccessThruPointerContext): Expression {
    throw new Error('Unsupported')
  }

  visit(tree: ParseTree): Expression {
    return tree.accept(this)
  }

  visitChildren(_node: RuleNode): Expression {
    throw new ParserMisconfigError()
  }

  visitTerminal(node: TerminalNode): Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): Expression {
    throw new FatalSyntaxError(errorNodeToLocation(node))
  }
}
