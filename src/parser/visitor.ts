import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import {
  AddContext,
  AddressableOperandsContext,
  AddressOfContext,
  AndContext,
  ArrayDeclContext,
  ArraySubscriptContext,
  AssgnStmtContext,
  AssignmentContext,
  AtomIdentifierContext,
  BreakStmtContext,
  CastContext,
  CmpdStmtContext,
  CompoundStatementContext,
  ContinueStmtContext,
  DeclarationContext,
  DeclrStmtContext,
  DereferenceContext,
  EqualityContext,
  ExprContext,
  ExprLsContext,
  ExprStmtContext,
  ForStmtContext,
  FunctionCallContext,
  FunctionDefinitionContext,
  FxPointerDeclContext,
  IfElseStmtContext,
  MultContext,
  OrContext,
  ParamContext,
  ParamLsContext,
  ParenContext,
  PrefixIncrContext,
  PriIdentifierContext,
  PrimaryIdentifierContext,
  ProgramContext,
  ProgramStmtContext,
  RelOprContext,
  ReturnExprContext,
  SizeofExprContext,
  SizeOfOperandsContext,
  StmtContext,
  StructAccessContext,
  StructAccessThruPointerContext,
  StructDeclContext,
  SuffixIncrContext,
  TernaryContext,
  TypeContext,
  TypeDefContext,
  TypeNameListContext,
  UnopContext,
  VariableDeclContext,
  WhileStmtContext
} from '../lang/SourCParser2'
import { DataType } from '../typings/datatype'
import { SourCParser2Visitor } from './../lang/SourCParser2Visitor'
import { FatalSyntaxError, InvalidConfigError } from './parser.error'
import {
  contextToLocation,
  getAddOp,
  getDatatype,
  getEqOp,
  getIdentifier,
  getMultOp,
  getRelOp,
  getType,
  getUnaryOp,
  getUpdateOp,
  nodeToLocation
} from './parser.util'

export class Visitor implements SourCParser2Visitor<es.Node> {
  private PARSER_MISCONFIG = 'Parser is misconfigured'

  private STRUCT_DECLARATIONS: Record<string, es.StructDef> = {}

  // === Primary Identifiers ===

  visitPrimaryIdentifier(ctx: PrimaryIdentifierContext): es.Node {
    const c = ctx.Constant()
    const s = ctx.StringLiteral()

    if (c !== undefined && !isNaN(parseInt(c.text))) {
      return {
        ...contextToLocation(ctx),
        type: 'Literal',
        value: parseInt(c.text),
        raw: c.text
      }
    }

    if (s) {
      return {
        ...contextToLocation(ctx),
        type: 'Literal',
        value: s.text,
        raw: s.text
      }
    }

    if (ctx.addressableOperands()) {
      return this.visit(ctx.addressableOperands()!)
    }

    throw new FatalSyntaxError(contextToLocation(ctx))
  }

  visitAddressableOperands(ctx: AddressableOperandsContext): es.Node {
    // Pass control back to the tree
    // So that it will use the alternative labels
    // Under `addressableOperands`
    // But validates the types first
    // Before traversal hell
    const expr = this.visit(ctx)
    if (validateExprTypes([expr], this.ADDRESSABLE_SUBTYPES)) {
      throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
    }
    return expr
  }

  visitArraySubscript(ctx: ArraySubscriptContext): es.MemberExpression {
    return {
      ...contextToLocation(ctx),
      type: 'MemberExpression',
      object: {
        type: 'Identifier',
        name: ctx.Identifier().text,
        datatype: DataType.UNKNOWN, // To be determined by the compiler
        isArray: true
      },
      // This field is used to determine if array or struct access
      computed: true,
      property: this.visit(ctx.expr()) as es.Expression,
      optional: false
    }
  }

  visitStructAccess(ctx: StructAccessContext): es.MemberExpression {
    const structName = ctx.Identifier().at(0)!.text

    if (!this.STRUCT_DECLARATIONS[structName]) {
      throw new FatalSyntaxError(contextToLocation(ctx))
    }

    return {
      ...contextToLocation(ctx),
      type: 'MemberExpression',
      object: {
        type: 'Identifier',
        name: ctx.Identifier().at(0)!.text,
        datatype: DataType.UNKNOWN, // To be determined by the compiler
        isStruct: true,
        structFields: this.STRUCT_DECLARATIONS[structName]
      },
      computed: false, // This field is used to determine if array or struct access
      property: {
        type: 'Identifier',
        name: ctx.Identifier().at(1)!.text,
        // This field should be ignored
        datatype: DataType.UNKNOWN
      },
      optional: false
    }
  }

  visitStructAccessThruPointer(ctx: StructAccessThruPointerContext): es.MemberExpression {
    return {
      ...contextToLocation(ctx),
      type: 'MemberExpression',
      object: {
        type: 'Identifier',
        name: ctx.Identifier().at(0)!.text,
        datatype: DataType.UNKNOWN, // To be determined by the compiler
        isStruct: true,
        isMemory: true
      },
      computed: false, // This field is used to determine if array or struct access
      property: {
        type: 'Identifier',
        name: ctx.Identifier().at(1)!.text,
        datatype: DataType.UNKNOWN // To be determined by the compiler
      },
      optional: false
    }
  }

  visitAtomIdentifier(ctx: AtomIdentifierContext): es.Identifier {
    return {
      ...contextToLocation(ctx),
      type: 'Identifier',
      name: ctx.Identifier().text,
      datatype: DataType.UNKNOWN // To be determined by the compiler
    }
  }

  // === Declarations ===

  // Root: The ANTLR visitor should use the alternative labels
  visitDeclaration(ctx: DeclarationContext): es.VariableDeclaration {
    // Pass control back to the tree
    // So that it will use the alternative labels
    // Under `declaration` rule
    // But validates the types first
    // Before traversal hell
    const d = this.visit(ctx)
    if (d.type !== 'VariableDeclaration') {
      throw new FatalSyntaxError(contextToLocation(ctx))
    }
    return d
  }

  visitVariableDecl(ctx: VariableDeclContext): es.Node {
    const v = this.makeVariableDeclaration(ctx.Identifier().text, ctx.typeDef())

    if (ctx.expr()) {
      // Validated by `this.visit(e: Expression)`
      const init = this.visit(ctx.expr()!) as es.Expression
      v.declarations[0].init = init
    }

    return v
  }

  visitArrayDecl(ctx: ArrayDeclContext): es.Node {
    const v = this.makeVariableDeclaration(ctx.Identifier().text, ctx.typeDef())

    const c = ctx.Constant()
    let size: number | undefined
    if (c !== undefined && !isNaN(parseInt(c.text))) {
      size = parseInt(c.text)
      const id = v.declarations[0].id as es.Identifier
      id.arraySize = size
    }

    if (ctx.exprLs()) {
      let expressions = ctx
        .exprLs()!
        .seqExprLs()
        ._eLs.map(e => this.visit(e) as es.Expression)

      if (size !== undefined && size > expressions.length) {
        // E.g int x[2] = {1, 2, 3, 4};
        // Should only take 1, 2 from the RHS
        expressions = expressions.slice(0, size)
      }

      v.declarations[0].init = {
        type: 'SequenceExpression',
        expressions
      }
    }

    if (size === undefined && !ctx.exprLs()) {
      // The size cannot be determined
      throw new FatalSyntaxError(contextToLocation(ctx))
    }

    return v
  }

  visitFxPointerDecl(ctx: FxPointerDeclContext): es.Node {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitStructDecl(ctx: StructDeclContext): es.Node {
    const fields: es.VariableDeclaration[] = []
    for (let i = 0; i < ctx.declaration().length; i++) {
      // `this.visit(e: Declaration)` returns es.VariableDeclaration
      const d = this.visit(ctx.declaration().at(i)!) as es.VariableDeclaration
      fields.push(d)
    }

    // Insert into the global struct definitions
    const structDef: es.StructDef = {}
    const structName = ctx.Identifier().text
    fields.forEach(f => {
      const d = f.declarations[0]

      if (!d) throw new FatalSyntaxError(contextToLocation(ctx))
      if (d.init) throw new FatalSyntaxError(contextToLocation(ctx))
      if (d.id.type !== 'Identifier') throw new FatalSyntaxError(contextToLocation(ctx))
      const id = d.id as es.Identifier

      // The array should be considered into id.datatype
      structDef[id.name] = {
        datatype: id.datatype,
        pointerList: id.pointerList ?? []
      }
    })

    if (this.STRUCT_DECLARATIONS[structName]) throw new FatalSyntaxError(contextToLocation(ctx))
    this.STRUCT_DECLARATIONS[structName] = structDef

    // Don't return anything useful
    // Since it updates the global struct declarations
    return {
      ...contextToLocation(ctx),
      type: 'EmptyStatement'
    }
  }

  // === Expressions ===

  /** Permitted operands for all Expressions */
  private EXPR_SUBTYPES = [
    'Identifier',
    'Literal',
    'LogicalExpression',
    'BinaryExpression',
    'CallExpression',
    'MemberExpression',
    'UpdateExpression',
    'ConditionalExpression',
    'UnaryExpression'
  ]

  /** Permitted operands for UpdateExpressions */
  private ADDRESSABLE_SUBTYPES = ['Identifier', 'MemberExpression']

  // Root : The ANTLR visitor should use the alternative labels
  visitExpr(ctx: ExprContext): es.Node {
    // Pass control back to the tree
    // So that it will use the alternative labels
    // Under `expr`
    // But validates the types first
    // Before expr traversal hell
    const node = this.visit(ctx)
    if (validateExprTypes([node], this.EXPR_SUBTYPES)) {
      new InvalidConfigError(contextToLocation(ctx.ruleContext))
    }
    return node
  }

  visitSuffixIncr(ctx: SuffixIncrContext): es.UpdateExpression {
    return {
      ...contextToLocation(ctx),
      type: 'UpdateExpression',
      // Validated by `addressableOperands`
      argument: this.visit(ctx.addressableOperands()) as es.Expression,
      prefix: false,
      operator: getUpdateOp(ctx, ctx.PlusPlus(), ctx.MinusMinus())
    }
  }

  visitFunctionCall(ctx: FunctionCallContext): es.CallExpression {
    // `this.visit(e)` validates
    const args = ctx.seqExprLs()?._eLs.map(e => this.visit(e)) ?? []

    return {
      ...contextToLocation(ctx),
      type: 'CallExpression',
      callee: {
        type: 'Identifier',
        name: ctx.Identifier().text,
        datatype: DataType.UNKNOWN // For compiler to decide
      },
      arguments: args as es.Expression[],
      optional: false
    }
  }

  visitPrefixIncr(ctx: PrefixIncrContext): es.UpdateExpression {
    return {
      ...contextToLocation(ctx),
      type: 'UpdateExpression',
      // Validated by `addressableOperands`
      argument: this.visit(ctx.addressableOperands()) as es.Expression,
      prefix: true,
      operator: getUpdateOp(ctx, ctx.PlusPlus(), ctx.MinusMinus())
    }
  }

  visitUnop(ctx: UnopContext): es.UnaryExpression {
    return {
      ...contextToLocation(ctx),
      type: 'UnaryExpression',
      operator: getUnaryOp(ctx, ctx.Minus(), ctx.Not()),
      // validated by visit method
      argument: this.visit(ctx.expr()) as es.Expression,
      prefix: true
    }
  }

  visitCast(ctx: CastContext): es.CastExpression {
    return {
      ...contextToLocation(ctx),
      type: 'CastExpression',
      targetType: getType(ctx.type()),
      // validated by visit method
      expression: this.visit(ctx.expr()) as es.Expression
    }
  }

  visitDereference(ctx: DereferenceContext): es.DereferenceExpression {
    return {
      ...contextToLocation(ctx),
      type: 'DereferenceExpression',
      // validated by visit method
      expression: this.visit(ctx.expr()) as es.Expression
    }
  }

  visitAddressOf(ctx: AddressOfContext): es.AddressofExpression {
    const expr = this.visit(ctx.expr())
    if (expr.type !== 'Identifier') {
      throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
    }

    return {
      ...contextToLocation(ctx),
      type: 'AddressofExpression',
      expression: expr as es.Identifier
    }
  }

  visitSizeofExpr(ctx: SizeofExprContext): es.SizeofExpression | es.Literal {
    const operandCtx = ctx.sizeOfOperands()

    if (operandCtx.Star() || operandCtx.And() || operandCtx.type()) {
      return {
        ...contextToLocation(ctx),
        type: 'Literal',
        value: 8,
        raw: operandCtx.toString()
      }
    }

    if (operandCtx.Identifier()) {
      return {
        ...contextToLocation(ctx),
        type: 'SizeofExpression',
        operand: {
          type: 'Identifier',
          name: operandCtx.Identifier()!.text,
          datatype: DataType.UNKNOWN
        }
      }
    }

    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitMult(ctx: MultContext): es.BinaryExpression {
    return {
      ...contextToLocation(ctx),
      type: 'BinaryExpression',
      operator: getMultOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitAdd(ctx: AddContext): es.BinaryExpression {
    return {
      ...contextToLocation(ctx),
      type: 'BinaryExpression',
      operator: getAddOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitRelOpr(ctx: RelOprContext): es.BinaryExpression {
    return {
      ...contextToLocation(ctx),
      type: 'BinaryExpression',
      operator: getRelOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitEquality(ctx: EqualityContext): es.BinaryExpression {
    return {
      ...contextToLocation(ctx),
      type: 'BinaryExpression',
      operator: getEqOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitAnd(ctx: AndContext): es.LogicalExpression {
    return {
      ...contextToLocation(ctx),
      type: 'LogicalExpression',
      operator: ctx.AndAnd().text as '&&',
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitOr(ctx: OrContext): es.LogicalExpression {
    return {
      ...contextToLocation(ctx),
      type: 'LogicalExpression',
      operator: ctx.OrOr().text as '||',
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitParen(ctx: ParenContext): es.Expression {
    return this.visit(ctx.expr()) as es.Expression
  }

  visitTernary(ctx: TernaryContext): es.ConditionalExpression {
    return {
      ...contextToLocation(ctx),
      type: 'ConditionalExpression',
      test: this.visit(ctx._cond) as es.Expression,
      consequent: this.visit(ctx._cons) as es.Expression,
      alternate: this.visit(ctx._alt) as es.Expression
    }
  }

  visitPriIdentifier(ctx: PriIdentifierContext): es.Node {
    // Pass control back to the tree
    // So that it will use `primaryIdentifier`
    return this.visit(ctx.primaryIdentifier())
  }

  // Statements

  // Root : The ANTLR visitor should use the alternative labels
  visitStmt(ctx: StmtContext): es.Node {
    // Pass control back to the tree
    // So that it will use the alternative labels
    // Under `stmt`
    // But validates the types first
    // Before expr traversal hell
    return this.visit(ctx)
  }

  visitExprStmt(ctx: ExprStmtContext): es.ExpressionStatement {
    return {
      ...contextToLocation(ctx),
      type: 'ExpressionStatement',
      // validated by `this.visitExpression()`
      expression: this.visit(ctx.expr()) as es.Expression
    }
  }

  visitDeclrStmt(ctx: DeclrStmtContext): es.Node {
    // Delegate this to `declaration` rule
    return this.visitDeclaration(ctx.declaration())
  }

  visitAssgnStmt(
    ctx: AssgnStmtContext
  ): es.DerefLeftAssignmentExpression | es.AssignmentExpression {
    // Delegate this to `assignment` rule
    return this.visitAssignment(ctx.assignment()) as
      | es.DerefLeftAssignmentExpression
      | es.AssignmentExpression
  }

  visitCmpdStmt(ctx: CmpdStmtContext): es.BlockStatement {
    // Delegate this to `compoundStatement` rule
    return this.visitCompoundStatement(ctx.compoundStatement())
  }

  visitIfElseStmt(ctx: IfElseStmtContext): es.IfStatement {
    const con = ctx.compoundStatement().at(0)
    const alt = ctx.compoundStatement().at(1)

    return {
      ...contextToLocation(ctx),
      type: 'IfStatement',
      test: this.visit(ctx.expr()) as es.Expression,
      // Validated by the `compoundStatement` rule
      consequent: this.visit(con!) as es.BlockStatement,
      alternate: alt ? (this.visit(alt) as es.BlockStatement) : undefined
    }
  }

  visitWhileStmt(ctx: WhileStmtContext): es.WhileStatement {
    return {
      ...contextToLocation(ctx),
      type: 'WhileStatement',
      test: this.visit(ctx.expr()) as es.Expression,
      body: this.visit(ctx.compoundStatement()) as es.BlockStatement
    }
  }

  visitForStmt(ctx: ForStmtContext): es.ForStatement {
    return {
      ...contextToLocation(ctx),
      type: 'ForStatement',
      init: ctx._init ? (this.visit(ctx._init) as es.Expression) : undefined,
      test: ctx._test ? (this.visit(ctx._test) as es.Expression) : undefined,
      update: ctx._incr ? (this.visit(ctx._incr) as es.Expression) : undefined,
      body: this.visit(ctx.compoundStatement()) as es.BlockStatement
    }
  }

  visitReturnExpr(ctx: ReturnExprContext): es.ReturnStatement {
    const eCtx = ctx.expr()

    if (eCtx) {
      return {
        ...contextToLocation(ctx),
        type: 'ReturnStatement',
        argument: this.visit(eCtx) as es.Expression
      }
    }

    return {
      ...contextToLocation(ctx),
      type: 'ReturnStatement'
    }
  }

  visitBreakStmt(ctx: BreakStmtContext): es.BreakStatement {
    return {
      ...contextToLocation(ctx),
      type: 'BreakStatement'
    }
  }

  visitContinueStmt(ctx: ContinueStmtContext): es.ContinueStatement {
    return {
      ...contextToLocation(ctx),
      type: 'ContinueStatement'
    }
  }

  visitAssignment(
    ctx: AssignmentContext
  ): es.DerefLeftAssignmentExpression | es.AssignmentExpression {
    // RHS
    const e = ctx.expr()
    const eList = ctx.exprLs()

    let right: es.Expression
    if (e) {
      right = this.visit(e) as es.Expression
    } else if (eList) {
      right = this.visit(eList) as es.Expression
    } else {
      throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
    }

    // Operator
    const operator = '='

    // LHS
    // Validated by `this.visitAddressableOperands`
    const left = this.visit(ctx.addressableOperands()) as es.Identifier | es.MemberExpression
    if (ctx.Star().length > 0) {
      // Dereference
      // E.g. `*x = 1;`
      return {
        ...contextToLocation(ctx),
        type: 'DerefLeftAssignmentExpression',
        operator,
        derefChain: ctx.Star().map(s => s.text),
        left,
        right
      }
    } else {
      return {
        ...contextToLocation(ctx),
        type: 'AssignmentExpression',
        operator,
        left,
        right
      }
    }
  }

  visitCompoundStatement(ctx: CompoundStatementContext): es.BlockStatement {
    const stmts = ctx.stmt()
    const body: es.Statement[] = []
    for (let i = 0; i < stmts.length; i++) {
      const s = stmts.at(i)
      if (!s) continue
      body.push(this.visit(s) as es.Statement)
    }

    return {
      ...contextToLocation(ctx),
      type: 'BlockStatement',
      body
    }
  }

  // Other visitors
  visitProgram(ctx: ProgramContext): es.Program {
    const stmts: es.Node[] = []
    for (let i = 0; i < ctx.childCount; i++) {
      stmts.push(this.visit(ctx.getChild(i)))
    }
    return {
      ...contextToLocation(ctx),
      type: 'Program',
      sourceType: 'script',
      body: stmts as es.Statement[]
    }
  }

  visitProgramStmt(ctx: ProgramStmtContext): es.FunctionDeclaration | es.VariableDeclaration {
    if (ctx.functionDefinition()) {
      return this.visit(ctx.functionDefinition()!) as es.FunctionDeclaration
    } else if (ctx.declaration()) {
      return this.visit(ctx.declaration()!) as es.VariableDeclaration
    } else {
      throw new FatalSyntaxError(contextToLocation(ctx))
    }
  }

  visitFunctionDefinition(ctx: FunctionDefinitionContext): es.FunctionDeclaration {
    const typeDef = ctx.typeDef()
    const name = ctx.Identifier().text
    const paramLs = ctx.paramLs()
    const stmt = ctx.compoundStatement()
    const body = this.visit(stmt) as es.BlockStatement

    return {
      ...contextToLocation(ctx),
      type: 'FunctionDeclaration',
      id: getIdentifier(typeDef, name),
      params: paramLs?._pLs.map(p => getIdentifier(p.typeDef(), p.Identifier().text)) ?? [],
      body
    }
  }

  visitTypeNameList(ctx: TypeNameListContext): es.Node {
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  visitParamLs(ctx: ParamLsContext): es.Node {
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  visitParam(ctx: ParamContext): es.Node {
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  visitSizeOfOperands(ctx: SizeOfOperandsContext): es.Node {
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  visitTypeDef(ctx: TypeDefContext): es.Node {
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  visitExprLs(ctx: ExprLsContext): never {
    // The parent context should map over each expression
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  visitType(ctx: TypeContext): never {
    // The parent context should map over each expression
    throw new InvalidConfigError(contextToLocation(ctx.ruleContext))
  }

  // Mandatory methods.

  visit(tree: ParseTree): es.Node {
    return tree.accept(this)
  }
  visitChildren(_node: RuleNode): es.Node {
    throw new Error(this.PARSER_MISCONFIG)
  }
  visitTerminal(node: TerminalNode): es.Node {
    return node.accept(this)
  }
  visitErrorNode(node: ErrorNode): es.Node {
    throw new InvalidConfigError(nodeToLocation(node))
  }

  /**
   * There is a lot of similar logic for the rule `declaration`.
   * This just helps with deduplicating the logic.
   */
  private makeVariableDeclaration(name: string, typedef: TypeDefContext): es.VariableDeclaration {
    const id = getIdentifier(typedef, name)
    const t = typedef.type()

    if (t) {
      // E.g. `int x`, `int ** x`, int x[]
      return {
        ...contextToLocation(typedef),
        type: 'VariableDeclaration',
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            id
          }
        ]
      }
    } else if (typedef.Struct()) {
      return {
        ...contextToLocation(typedef),
        type: 'VariableDeclaration',
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            id
          }
        ]
      }
    }

    throw new FatalSyntaxError(contextToLocation(typedef))
  }
}

function validateExprTypes(nodes: es.Node[], types: string[]): boolean {
  for (const n of nodes) {
    if (types.includes(n.type)) {
      return true
    }
  }
  return false
}
