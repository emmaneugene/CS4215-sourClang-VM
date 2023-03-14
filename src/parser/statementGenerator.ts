import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import {
  CompoundStatementContext,
  DeclarationContext,
  ExpressionStatementContext,
  ExternalDeclarationContext,
  FunctionDefinitionContext,
  IterationStatementContext,
  JumpStatementContext,
  SelectionStatementContext,
  StatementContext,
  TranslationUnitContext
} from '../lang/SourCParser'
import { SourCParserVisitor } from '../lang/SourCParserVisitor'
import { InvalidConfigError } from './error'
import ExpressionGenerator from './expressionGenerator'
import IdentifierGenerator from './identifierGenerator'
import { getDatatype, getParameterList } from './utils'

class StatementGenerator implements SourCParserVisitor<es.Statement> {
  private readonly exprGenerator = new ExpressionGenerator()
  private readonly idGenerator = new IdentifierGenerator()

  visitTranslationUnit(ctx: TranslationUnitContext): es.Statement {
    return {
      type: 'BlockStatement',
      body: ctx.externalDeclaration().map(extDecl => extDecl.accept(this))
    }
  }

  visitExternalDeclaration(ctx: ExternalDeclarationContext): es.Statement {
    if (ctx.functionDefinition()) {
      return ctx.functionDefinition()!.accept(this)
    }

    if (ctx.declaration()) {
      return ctx.declaration()!.accept(this)
    }

    throw new InvalidConfigError()
  }

  visitDeclaration(ctx: DeclarationContext): es.Statement {
    const initDeclarator = ctx.initDeclarator()
    if (!initDeclarator) {
      // TODO: No support for structs yet
      throw new InvalidConfigError()
    }

    const declarator = this.idGenerator.visitDeclarator(initDeclarator.declarator())

    let init: es.Expression | null = null
    const initializer = initDeclarator.initializer()
    if (initializer) {
      init = this.exprGenerator.visitInitializer(initializer)
    }

    return {
      type: 'VariableDeclaration',
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            ...declarator,
            datatype: getDatatype(ctx.typeSpecifier())
          },
          init
        }
      ]
    }
  }

  visitFunctionDefinition(ctx: FunctionDefinitionContext): es.Statement {
    return {
      type: 'FunctionDeclaration',
      id: {
        type: 'Identifier',
        name: ctx.Identifier().text,
        datatype: getDatatype(ctx.typeSpecifier())
      },
      params: getParameterList(ctx.parameterList()),
      body: ctx.compoundStatement().accept(this) as es.BlockStatement
    }
  }

  visitCompoundStatement(ctx: CompoundStatementContext): es.Statement {
    return {
      type: 'BlockStatement',
      body: ctx.statement().map(stmt => stmt.accept(this))
    }
  }

  visitStatement(ctx: StatementContext): es.Statement {
    if (ctx.declaration()) {
      return ctx.declaration()!.accept(this)
    }

    if (ctx.expressionStatement()) {
      return ctx.expressionStatement()!.accept(this)
    }

    if (ctx.compoundStatement()) {
      return ctx.compoundStatement()!.accept(this)
    }

    if (ctx.selectionStatement()) {
      return ctx.selectionStatement()!.accept(this)
    }

    if (ctx.iterationStatement()) {
      return ctx.iterationStatement()!.accept(this)
    }

    if (ctx.jumpStatement()) {
      return ctx.jumpStatement()!.accept(this)
    }

    throw new InvalidConfigError()
  }

  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    const expr = ctx.expression()

    if (!expr) {
      return {
        type: 'EmptyStatement'
      }
    }

    return {
      type: 'ExpressionStatement',
      expression: this.exprGenerator.visitExpression(expr)
    }
  }

  visitSelectionStatement(ctx: SelectionStatementContext): es.Statement {
    return {
      type: 'IfStatement',
      test: this.exprGenerator.visitExpression(ctx.expression()),
      consequent: ctx._cons.accept(this),
      alternate: ctx._alt?.accept(this)
    }
  }

  visitIterationStatement(ctx: IterationStatementContext): es.Statement {
    if (ctx.While() && ctx.expression()[0]) {
      return {
        type: 'WhileStatement',
        test: this.exprGenerator.visitExpression(ctx.expression()[0]),
        body: ctx.statement().accept(this)
      }
    }

    if (ctx.Do() && ctx.expression()[0]) {
      return {
        type: 'DoWhileStatement',
        test: this.exprGenerator.visitExpression(ctx.expression()[0]),
        body: ctx.statement().accept(this)
      }
    }

    if (ctx.For()) {
      return {
        type: 'ForStatement',
        init: ctx._init ? this.exprGenerator.visitExpression(ctx._init) : undefined,
        test: ctx._test ? this.exprGenerator.visitExpression(ctx._test) : undefined,
        update: ctx._step ? this.exprGenerator.visitExpression(ctx._step) : undefined,
        body: ctx.statement().accept(this)
      }
    }

    throw new InvalidConfigError()
  }

  visitJumpStatement(ctx: JumpStatementContext): es.Statement {
    if (ctx.Continue()) {
      return {
        type: 'ContinueStatement'
      }
    }

    if (ctx.Break()) {
      return {
        type: 'BreakStatement'
      }
    }

    if (ctx.Return()) {
      const expr = ctx.expression()

      return {
        type: 'ReturnStatement',
        argument: expr ? this.exprGenerator.visitExpression(expr) : undefined
      }
    }

    throw new InvalidConfigError()
  }

  visit(tree: ParseTree): es.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement {
    throw new Error('Method not implemented.')
  }

  visitTerminal(node: TerminalNode): es.Statement {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Statement {
    throw new Error('Method not implemented.')
  }
}

export default StatementGenerator
