import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'
import { isNumber } from 'lodash'

import { DeclaratorContext } from '../lang/SourCParser'
import { SourCParserVisitor } from '../lang/SourCParserVisitor'
import { InvalidConfigError } from './error'
import ExpressionGenerator from './expressionGenerator'
import { getPointerList } from './utils'

function getArraySize(exp: es.Expression): number {
  if (exp.type !== 'Literal') {
    return -1
  }

  const casted: es.Literal = exp as es.Literal
  const value = casted.value
  if (!value || !isNumber(value) || value < 0) {
    return -1
  }

  return value
}

class IdentifierGenerator implements SourCParserVisitor<Omit<es.Identifier, 'datatype'>> {
  private readonly expressionGenerator = new ExpressionGenerator()

  visitDeclarator(ctx: DeclaratorContext): Omit<es.Identifier, 'datatype'> {
    if (ctx._array) {
      const sizeCtx = ctx.constantExpression()
      let arraySize: number | undefined
      if (sizeCtx) {
        const sizeExp = this.expressionGenerator.visitConstantExpression(sizeCtx)
        arraySize = getArraySize(sizeExp)
      }

      return {
        type: 'Identifier',
        isArray: true,
        arraySize,
        name: ctx.Identifier().text
      }
    }

    if (ctx._funcPointer) {
      // function pointers
      throw new Error('Method not implemented')
    }

    if (ctx._funcProto) {
      // function prototypes
      // TODO: No support for function prototypes yet
      throw new Error('Method not implemented')
    }

    return {
      type: 'Identifier',
      name: ctx.Identifier().text,
      pointerList: getPointerList(ctx.pointer())
    }
  }

  visit(tree: ParseTree): Omit<es.Identifier, 'datatype'> {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): Omit<es.Identifier, 'datatype'> {
    throw new Error('Method not implemented.')
  }

  visitTerminal(node: TerminalNode): Omit<es.Identifier, 'datatype'> {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): Omit<es.Identifier, 'datatype'> {
    throw new Error('Method not implemented.')
  }
}

export default IdentifierGenerator
