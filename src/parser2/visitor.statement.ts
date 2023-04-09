import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { Declaration } from '../ast/ast.declaration'
import { AddressableOperands, Expression } from '../ast/ast.expression'
import {
  AssignmentStatement,
  BreakStatement,
  CompoundStatement,
  ContinueStatement,
  DerefLeftAssignmentStatement,
  ExpressionStatement,
  ForStatement,
  IfElseStatement,
  ReturnStatement,
  Statement,
  WhileStatement
} from '../ast/ast.statement'
import { IdentifierHandler } from '../ast/identifierHandler'
import {
  AssgnStmtContext,
  AssignmentContext,
  BreakStmtContext,
  CmpdStmtContext,
  CompoundStatementContext,
  ContinueStmtContext,
  DeclrStmtContext,
  ExprContext,
  ExprStmtContext,
  ForStmtContext,
  IfElseStmtContext,
  ReturnExprContext,
  StmtContext,
  WhileStmtContext
} from '../lang/SourCParser2'
import { SourCParser2Visitor } from '../lang/SourCParser2Visitor'
import { FatalSyntaxError, ParserMisconfigError } from './error'
import {
  AddDeclarationCallbackFunction,
  contextToLocation,
  errorNodeToLocation,
  IdentifierLookupFunction,
  StringLitAddrLookupFunction
} from './utils'
import { DeclarationGenerator } from './visitor.declaration'
import { ExpressionGenerator } from './visitor.expression'

export class StatementGenerator implements SourCParser2Visitor<Statement> {
  private identifierHandler: IdentifierHandler

  private identifierLookupFunction: IdentifierLookupFunction
  private addDeclarationCallback: AddDeclarationCallbackFunction
  private stringAddrLookupFunction: StringLitAddrLookupFunction

  private expressionVisitor: ExpressionGenerator
  private declrVisitor: DeclarationGenerator

  constructor(
    identifierHandler: IdentifierHandler,
    stringAddrLookupFunction: StringLitAddrLookupFunction
  ) {
    this.identifierHandler = identifierHandler

    this.identifierLookupFunction = (name: string) => identifierHandler.getIdentifierInfo(name)
    this.addDeclarationCallback = declarationInfo => {
      const info = identifierHandler.addLocalVarToCurrentFrame(declarationInfo)
      return info.address
    }
    this.stringAddrLookupFunction = stringAddrLookupFunction

    this.expressionVisitor = new ExpressionGenerator(
      this.identifierLookupFunction,
      this.stringAddrLookupFunction
    )
    this.declrVisitor = new DeclarationGenerator(
      this.identifierLookupFunction,
      this.addDeclarationCallback,
      this.stringAddrLookupFunction
    )
  }

  visitStmt(ctx: StmtContext): Statement {
    // Delegate this to the alternative labels
    return this.visit(ctx)
  }

  visitExprStmt(ctx: ExprStmtContext): ExpressionStatement {
    return {
      ...contextToLocation(ctx),
      type: 'ExpressionStatement',
      expression: this._visitExpr(ctx.expr())
    }
  }

  visitDeclrStmt(ctx: DeclrStmtContext): Declaration {
    return this.declrVisitor.visitDeclaration(ctx.declaration())
  }

  visitAssgnStmt(ctx: AssgnStmtContext): AssignmentStatement | DerefLeftAssignmentStatement {
    return this.visitAssignment(ctx.assignment())
  }

  visitAssignment(ctx: AssignmentContext): AssignmentStatement | DerefLeftAssignmentStatement {
    const right = this.getAssignmentRhsExpr(ctx)
    const operator = '='
    const left = this._visitExpr(ctx.addressableOperands()) as AddressableOperands

    if (ctx.Star().length > 0) {
      // Dereference
      // E.g. `*x = 1;`
      return {
        ...contextToLocation(ctx),
        type: 'DerefLeftAssignmentStatement',
        operator,
        derefChain: ctx.Star().map(s => s.text as '*'),
        left,
        right
      }
    } else {
      return {
        ...contextToLocation(ctx),
        type: 'AssignmentStatement',
        operator,
        left,
        right
      }
    }
  }

  visitCmpdStmt(ctx: CmpdStmtContext): CompoundStatement {
    // Delegate this to `compoundStatement` rule
    return this.visitCompoundStatement(ctx.compoundStatement())
  }

  visitCompoundStatement(ctx: CompoundStatementContext): CompoundStatement {
    const stmts = ctx.stmt()
    const body: Statement[] = []

    this.identifierHandler.extendFrame()
    for (let i = 0; i < stmts.length; i++) {
      const s = stmts.at(i)
      if (!s) continue
      body.push(this.visit(s))
    }
    this.identifierHandler.popFrame()

    return {
      ...contextToLocation(ctx),
      type: 'CompoundStatement',
      body
    }
  }

  visitIfElseStmt(ctx: IfElseStmtContext): IfElseStatement {
    const con = ctx.compoundStatement().at(0)!
    const alt = ctx.compoundStatement().at(1)

    return {
      ...contextToLocation(ctx),
      type: 'IfElseStatement',
      test: this._visitExpr(ctx.expr()),
      consequent: this.visitCompoundStatement(con),
      alternate: alt ? this.visitCompoundStatement(alt) : undefined
    }
  }

  visitWhileStmt(ctx: WhileStmtContext): WhileStatement {
    const compoundStatement = this.visitCompoundStatement(ctx.compoundStatement())

    return {
      ...contextToLocation(ctx),
      type: 'WhileStatement',
      test: this._visitExpr(ctx.expr()),
      body: compoundStatement
    }
  }

  visitForStmt(ctx: ForStmtContext): ForStatement {
    const init = ctx._init ? (this.visit(ctx._init) as AssignmentStatement) : undefined

    const test = ctx._test ? this._visitExpr(ctx._test) : undefined

    const update = ctx._incrExpr
      ? this._visitExpr(ctx._incrExpr)
      : ctx._incrAssgn
      ? (this.visit(ctx._incrAssgn) as AssignmentStatement | DerefLeftAssignmentStatement)
      : undefined

    const compoundStatement = this.visitCompoundStatement(ctx.compoundStatement())

    return {
      ...contextToLocation(ctx),
      type: 'ForStatement',
      init,
      test,
      update,
      body: compoundStatement
    }
  }

  visitReturnExpr(ctx: ReturnExprContext): ReturnStatement {
    const eCtx = ctx.expr()
    if (eCtx) {
      return {
        ...contextToLocation(ctx),
        type: 'ReturnStatement',
        expression: this._visitExpr(eCtx)
      }
    }

    return {
      ...contextToLocation(ctx),
      type: 'ReturnStatement'
    }
  }

  visitBreakStmt(ctx: BreakStmtContext): BreakStatement {
    return {
      ...contextToLocation(ctx),
      type: 'BreakStatement'
    }
  }

  visitContinueStmt(ctx: ContinueStmtContext): ContinueStatement {
    return {
      ...contextToLocation(ctx),
      type: 'ContinueStatement'
    }
  }

  visit(tree: ParseTree): Statement {
    return tree.accept(this)
  }

  visitChildren(_node: RuleNode): Statement {
    throw new ParserMisconfigError()
  }

  visitTerminal(node: TerminalNode): Statement {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): Statement {
    throw new FatalSyntaxError(errorNodeToLocation(node))
  }

  private getAssignmentRhsExpr(ctx: AssignmentContext): Expression {
    const e = ctx.expr()
    const eList = ctx.exprLs()

    if (e) {
      return this._visitExpr(e)
    } else if (eList) {
      return this._visitExpr(eList)
    } else {
      throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
    }
  }

  private _visitExpr(ctx: ExprContext): Expression {
    return this.expressionVisitor.visit(ctx)
  }
}
