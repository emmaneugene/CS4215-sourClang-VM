import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { PrimaryIdentifierContext } from '../lang/SourCParser2'
import { SourCParser2Visitor } from '../lang/SourCParser2Visitor'
import { FatalSyntaxError } from './error'
import { errorNodeToLocation } from './util'

/**
 * Visits every node in the token tree, and returns a list
 * of strings.
 */
export class RODataFinder implements SourCParser2Visitor<string[]> {
  visitPrimaryIdentifier(ctx: PrimaryIdentifierContext): string[] {
    const s = ctx.StringLiteral()
    if (!s) {
      return []
    }

    return [s.text]
  }

  visit(tree: ParseTree): string[] {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): string[] {
    const ls: string[] = []
    for (let i = 0; i < node.childCount; i++) {
      ls.push(...node.getChild(i).accept(this))
    }
    return ls
  }

  visitTerminal(_node: TerminalNode): string[] {
    return []
  }

  visitErrorNode(node: ErrorNode): string[] {
    throw new FatalSyntaxError(errorNodeToLocation(node))
  }
}
