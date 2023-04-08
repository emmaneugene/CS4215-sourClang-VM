import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { ArrayDeclaration, Declaration, VariableDeclaration } from '../ast/ast.declaration'
import { Expression } from '../ast/ast.expression'
import {
  ArrayDeclContext,
  DeclarationContext,
  FxPointerDeclContext,
  StructDeclContext,
  VariableDeclContext
} from '../lang/SourCParser2'
import { SourCParser2Visitor } from '../lang/SourCParser2Visitor'
import { FatalSyntaxError } from '../parser/parser.error'
import { contextToLocation } from '../parser/utils'
import { getSizeofArrayVariable, getSizeofVariable } from '../utils/sizeHandler'
import { convertTypedefCtxToTypeList } from '../utils/typeHandler'
import { ParserMisconfigError } from './error'
import {
  AddDeclarationCallbackFunction,
  errorNodeToLocation,
  IdentifierLookupFunction
} from './util'
import { ExpressionGenerator } from './visitor.expression'

export class DeclarationGenerator implements SourCParser2Visitor<Declaration> {
  private identifierLookupFunction: IdentifierLookupFunction
  private addDeclarationCallback: AddDeclarationCallbackFunction

  constructor(
    lookupFunction: IdentifierLookupFunction,
    addDeclarationCallback: AddDeclarationCallbackFunction
  ) {
    this.identifierLookupFunction = lookupFunction
    this.addDeclarationCallback = addDeclarationCallback
  }

  visitDeclaration(ctx: DeclarationContext): Declaration {
    return this.visit(ctx)
  }

  visitVariableDecl(ctx: VariableDeclContext): VariableDeclaration {
    const name = ctx.Identifier().text
    const datatype = convertTypedefCtxToTypeList(ctx.typeDef())
    const size = getSizeofVariable(datatype)
    const address = this.addDeclarationCallback({
      name,
      datatype,
      size
    })

    const exprVisitor = new ExpressionGenerator(this.identifierLookupFunction)

    return {
      type: 'VariableDeclaration',
      datatype,
      name,
      address,
      init: ctx.expr() ? exprVisitor.visit(ctx.expr()!) : undefined
    }
  }

  visitArrayDecl(ctx: ArrayDeclContext): ArrayDeclaration {
    const name = ctx.Identifier().text
    const datatype = convertTypedefCtxToTypeList(ctx.typeDef())
    const declaredSize = this.getArrayDeclaredSize(ctx)
    const size = getSizeofArrayVariable(declaredSize, datatype)
    const address = this.addDeclarationCallback({
      name,
      datatype,
      size
    })

    const exprVisitor = new ExpressionGenerator(this.identifierLookupFunction)
    let initExpressions: Expression[] | undefined
    if (ctx.exprLs()) {
      initExpressions = ctx
        .exprLs()!
        .seqExprLs()
        ._eLs.map(e => exprVisitor.visit(e))
    }

    return {
      type: 'ArrayDeclaration',
      size: declaredSize,
      datatype,
      name,
      address,
      init: initExpressions
        ? {
            type: 'SequenceExpression',
            datatype: initExpressions[0].datatype,
            expressions: initExpressions
          }
        : undefined
    }
  }

  visitFxPointerDecl(ctx: FxPointerDeclContext): Declaration {
    throw new Error('Unsupported')
  }

  visitStructDecl(ctx: StructDeclContext): Declaration {
    throw new Error('Unsupported')
  }

  visit(tree: ParseTree): Declaration {
    return tree.accept(this)
  }

  visitChildren(_node: RuleNode): Declaration {
    throw new ParserMisconfigError()
  }

  visitTerminal(node: TerminalNode): Declaration {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): Declaration {
    throw new FatalSyntaxError(errorNodeToLocation(node))
  }

  /**
   * Infers the size of a declared array
   * from the context.
   */
  private getArrayDeclaredSize(ctx: ArrayDeclContext): number {
    const c = ctx.Constant()
    let size: number | undefined
    if (c !== undefined && !isNaN(parseInt(c.text))) {
      // Gets the size of the array using the LHS of
      // the declaration.
      size = parseInt(c.text)
    }

    if (ctx.exprLs()) {
      // Parse the RHS expressions if any
      // Note that the size declared on the LHS
      // takes precedence.
      // E.g int x[2] = {1, 2, 3, 4};
      // Should only take 1, 2 from the RHS
      const numExpressions = ctx.exprLs()!.seqExprLs()._eLs.length

      if (size === undefined) {
        size = numExpressions
      } else if (size < numExpressions) {
        size = numExpressions
      }
    }

    if (size === undefined) {
      // The size cannot be determined
      throw new FatalSyntaxError(contextToLocation(ctx))
    }

    return size
  }
}
