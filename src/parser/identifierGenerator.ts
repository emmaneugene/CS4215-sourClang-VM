import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { DeclaratorContext } from '../lang/SourCParser'
import { SourCParserVisitor } from '../lang/SourCParserVisitor'
import { getPointerList } from './utils'

class IdentifierGenerator implements SourCParserVisitor<Omit<es.Identifier, 'datatype'>> {
  visitDeclarator(ctx: DeclaratorContext): Omit<es.Identifier, 'datatype'> {
    if (ctx._array) {
      // array
      throw new Error('Method not implemented')
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
