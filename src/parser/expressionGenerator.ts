import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import {
  AdditiveExpressionContext,
  AssignmentExpressionContext,
  CastExpressionContext,
  ConditionalExpressionContext,
  ConstantExpressionContext,
  EqualityExpressionContext,
  ExpressionContext,
  FunctionCallArgContext,
  InitializerContext,
  InitializerListContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  UnaryExpressionContext
} from '../lang/SourCParser'
import { SourCParserVisitor } from '../lang/SourCParserVisitor'
import { DataType } from '../typings/datatype'
import { UnaryOperatorContext } from './../lang/SourCParser'
import { InvalidConfigError } from './error'
import { getSizeofOperands, getTypeName } from './utils'

type EsTreeUnaryOperator = '+' | '-' | '!'

function validateUnaryOperator(
  symbol: UnaryOperatorContext | undefined
): EsTreeUnaryOperator | undefined {
  if (!symbol) {
    return undefined
  }

  if (symbol.Plus()) {
    return '+'
  } else if (symbol.Minus()) {
    return '-'
  } else if (symbol.Not()) {
    return '!'
  }

  return undefined
}

class ExpressionGenerator implements SourCParserVisitor<es.Expression> {
  visitAssignmentExpression(ctx: AssignmentExpressionContext): es.Expression {
    if (ctx.conditionalExpression()) {
      return ctx.conditionalExpression()!.accept(this)
    }

    if (ctx.unaryExpression() && ctx.Assign() && ctx.assignmentExpression()) {
      return {
        type: 'FlexiAssignmentExpression',
        operator: '=', // TODO: Map the correct operator over
        left: ctx.unaryExpression()!.accept(this),
        right: ctx.assignmentExpression()!.accept(this)
      }
    }

    throw new InvalidConfigError()
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): es.Expression {
    if (ctx.Question() && ctx.Colon()) {
      return {
        type: 'ConditionalExpression',
        test: ctx.logicalOrExpression().accept(this),
        consequent: ctx._cons.accept(this),
        alternate: ctx._alt.accept(this)
      }
    }

    return ctx.logicalOrExpression().accept(this)
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): es.Expression {
    if (ctx.OrOr() && ctx.logicalOrExpression()) {
      return {
        type: 'LogicalExpression',
        operator: '||',
        left: ctx.logicalOrExpression()!.accept(this),
        right: ctx.logicalAndExpression().accept(this)
      }
    }

    return ctx.logicalAndExpression().accept(this)
  }

  visitLogicalAndExpression(ctx: LogicalAndExpressionContext): es.Expression {
    if (ctx.AndAnd() && ctx.logicalAndExpression()) {
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: ctx.logicalAndExpression()!.accept(this),
        right: ctx.equalityExpression().accept(this)
      }
    }

    return ctx.equalityExpression().accept(this)
  }

  visitEqualityExpression(ctx: EqualityExpressionContext): es.Expression {
    if (ctx.Equal() && ctx.equalityExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '==',
        left: ctx.equalityExpression()!.accept(this),
        right: ctx.relationalExpression().accept(this)
      }
    }

    if (ctx.NotEqual() && ctx.equalityExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '!=',
        left: ctx.equalityExpression()!.accept(this),
        right: ctx.relationalExpression().accept(this)
      }
    }

    return ctx.relationalExpression().accept(this)
  }

  visitRelationalExpression(ctx: RelationalExpressionContext): es.Expression {
    if (ctx.Less() && ctx.relationalExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '<',
        left: ctx.relationalExpression()!.accept(this),
        right: ctx.additiveExpression().accept(this)
      }
    }

    if (ctx.Greater() && ctx.relationalExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '>',
        left: ctx.relationalExpression()!.accept(this),
        right: ctx.additiveExpression().accept(this)
      }
    }

    if (ctx.LessEqual() && ctx.relationalExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '<=',
        left: ctx.relationalExpression()!.accept(this),
        right: ctx.additiveExpression().accept(this)
      }
    }

    if (ctx.GreaterEqual() && ctx.relationalExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '>=',
        left: ctx.relationalExpression()!.accept(this),
        right: ctx.additiveExpression().accept(this)
      }
    }

    return ctx.additiveExpression().accept(this)
  }

  visitAdditiveExpression(ctx: AdditiveExpressionContext): es.Expression {
    if (ctx.Plus() && ctx.additiveExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '+',
        left: ctx.additiveExpression()!.accept(this),
        right: ctx.multiplicativeExpression().accept(this)
      }
    }

    if (ctx.Minus() && ctx.additiveExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '-',
        left: ctx.additiveExpression()!.accept(this),
        right: ctx.multiplicativeExpression().accept(this)
      }
    }

    return ctx.multiplicativeExpression().accept(this)
  }

  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): es.Expression {
    if (ctx.Star() && ctx.multiplicativeExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '*',
        left: ctx.multiplicativeExpression()!.accept(this),
        right: ctx.castExpression().accept(this)
      }
    }

    if (ctx.Div() && ctx.multiplicativeExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '/',
        left: ctx.multiplicativeExpression()!.accept(this),
        right: ctx.castExpression().accept(this)
      }
    }

    if (ctx.Mod() && ctx.multiplicativeExpression()) {
      return {
        type: 'BinaryExpression',
        operator: '%',
        left: ctx.multiplicativeExpression()!.accept(this),
        right: ctx.castExpression().accept(this)
      }
    }

    return ctx.castExpression().accept(this)
  }

  visitCastExpression(ctx: CastExpressionContext): es.Expression {
    if (ctx.LeftParen() && ctx.typeName() && ctx.RightParen() && ctx.castExpression()) {
      return {
        type: 'CastExpression',
        targetType: getTypeName(ctx.typeName()!),
        expression: ctx.castExpression()!.accept(this)
      }
    }

    if (ctx.unaryExpression()) {
      return ctx.unaryExpression()!.accept(this)
    }

    throw new InvalidConfigError()
  }

  visitUnaryExpression(ctx: UnaryExpressionContext): es.Expression {
    if (ctx.postfixExpression()) {
      return ctx.postfixExpression()!.accept(this)
    }

    if (ctx.PlusPlus() && ctx.unaryOperator() && ctx.unaryExpression()) {
      return {
        type: 'UpdateExpression',
        operator: '++',
        argument: ctx.unaryExpression()!.accept(this),
        prefix: true // we set this to false in postfixExpression
      }
    }

    if (ctx.MinusMinus() && ctx.unaryOperator() && ctx.unaryExpression()) {
      return {
        type: 'UpdateExpression',
        operator: '--',
        argument: ctx.unaryExpression()!.accept(this),
        prefix: true // we set this to false in visitPostfixExpression
      }
    }

    if (ctx.Sizeof() && ctx.sizeofOperands()) {
      return {
        type: 'SizeofExpression',
        operand: getSizeofOperands(ctx.sizeofOperands()!)
      }
    }

    if (ctx.unaryOperator() && ctx.castExpression()) {
      const op = ctx.unaryOperator()!

      if (op.Star()) {
        return {
          type: 'ValueofExpression',
          expression: ctx.castExpression()!.accept(this)
        }
      } else if (op.And()) {
        return {
          type: 'AddressofExpression',
          expression: ctx.castExpression()!.accept(this)
        }
      } else if (validateUnaryOperator(op)) {
        return {
          type: 'UnaryExpression',
          operator: validateUnaryOperator(op)!,
          prefix: true,
          argument: ctx.castExpression()!.accept(this)
        }
      } else {
        throw new Error('Method not implemented yet')
      }
    }

    throw new InvalidConfigError()
  }

  visitPostfixExpression(ctx: PostfixExpressionContext): es.Expression {
    if (ctx.primaryExpression()) {
      return ctx.primaryExpression()!.accept(this)
    }

    if (!ctx.postfixExpression()) {
      // Guard clause for the rest of the if statements
      throw new InvalidConfigError()
    }

    if (ctx.LeftBracket() && ctx.expression() && ctx.RightBracket()) {
      // Array access
      return {
        type: 'MemberExpression',
        object: ctx.postfixExpression()!.accept(this),
        property: ctx.expression()!.accept(this),
        computed: true, // If this is true, it is array access
        optional: false // Not sure what this means in the JS context
      }
    }

    if (ctx.LeftParen() && ctx.functionCallArg() && ctx.RightParen()) {
      // Function call
      return {
        type: 'CallExpression',
        callee: ctx.postfixExpression()!.accept(this),
        arguments: this.visitFunctionCallArg(ctx.functionCallArg()!).expressions,
        optional: false // Not sure what this means in the JS context
      }
    }

    if (ctx.Dot() && ctx.Identifier()) {
      // Direct struct access
      return {
        type: 'MemberExpression',
        object: ctx.postfixExpression()!.accept(this),
        property: {
          type: 'Identifier',
          name: ctx.Identifier()!.text,
          datatype: DataType.UNKNOWN // to be determined from the struct def
        },
        computed: false, // If this is false, it is member access,
        optional: false
      }
    }

    if (ctx.Arrow() && ctx.Identifier()) {
      // TODO: Struct access from memory address not supported yet
      throw new InvalidConfigError()
    }

    if (ctx.PlusPlus() && ctx.postfixExpression()) {
      return {
        type: 'UpdateExpression',
        operator: '++',
        argument: ctx.postfixExpression()!.accept(this),
        prefix: false
      }
    }

    if (ctx.MinusMinus() && ctx.postfixExpression()) {
      return {
        type: 'UpdateExpression',
        operator: '--',
        argument: ctx.postfixExpression()!.accept(this),
        prefix: false
      }
    }

    throw new InvalidConfigError()
  }

  visitFunctionCallArg(ctx: FunctionCallArgContext): es.SequenceExpression {
    if (ctx.Comma() && ctx.functionCallArg()) {
      return {
        type: 'SequenceExpression',
        expressions: [
          ...this.visitFunctionCallArg(ctx.functionCallArg()!).expressions,
          ctx.assignmentExpression().accept(this)
        ]
      }
    }

    return {
      type: 'SequenceExpression',
      expressions: [ctx.assignmentExpression().accept(this)]
    }
  }

  visitPrimaryExpression(ctx: PrimaryExpressionContext): es.Expression {
    if (ctx.Identifier()) {
      return {
        type: 'Identifier',
        name: ctx.Identifier()!.text,
        datatype: DataType.UNKNOWN
      }
    }

    if (ctx.Constant()) {
      return {
        type: 'Literal',
        value: parseInt(ctx.Constant()!.text),
        raw: ctx.Constant()!.text
      }
    }

    if (ctx.StringLiteral()) {
      return {
        type: 'Literal',
        value: ctx.StringLiteral()!.text,
        raw: ctx.StringLiteral()!.text
      }
    }

    if (ctx.LeftParen() && ctx.expression() && ctx.RightParen()) {
      return ctx.expression()!.accept(this)
    }

    throw new InvalidConfigError()
  }

  /**
   * Most of the action for the ExpressionGenerator is here.
   * It is up to the context/parent to determine if this makes semantic sense.
   */
  visitExpression(ctx: ExpressionContext): es.Expression {
    return ctx.assignmentExpression().accept(this)
  }

  visitConstantExpression(ctx: ConstantExpressionContext): es.Expression {
    return ctx.conditionalExpression().accept(this)
  }

  visitInitializer(ctx: InitializerContext): es.Expression {
    if (ctx.LeftBrace() && ctx.initializerList() && ctx.RightBrace()) {
      // See `visitInitializerList`. This returns `es.SequenceExpression`
      return ctx.initializerList()!.accept(this)
    }

    if (ctx.assignmentExpression()) {
      return ctx.assignmentExpression()!.accept(this)
    }

    throw new InvalidConfigError()
  }

  /* The main point of this method is to flatten the recursive definition */
  visitInitializerList(ctx: InitializerListContext): es.Expression {
    // base case
    if (!ctx.Comma()) {
      return {
        type: 'SequenceExpression',
        expressions: [ctx.initializer().accept(this)]
      }
    }

    if (ctx.initializerList()) {
      const remaining = ctx.initializerList()!.accept(this) as es.SequenceExpression
      return {
        type: 'SequenceExpression',
        expressions: [...remaining.expressions, ctx.initializer().accept(this)]
      }
    }

    throw new InvalidConfigError()
  }

  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Expression {
    throw new Error('Method not implemented.')
  }

  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Expression {
    throw new Error('Method not implemented.')
  }
}

export default ExpressionGenerator
