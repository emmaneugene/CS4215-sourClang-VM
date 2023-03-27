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
import { StructDef } from '../typings/structDef'
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
  private STRUCT_DECLARATIONS: Record<string, StructDef> = {}

  // === Primary Identifiers ===

  visitPrimaryIdentifier(ctx: PrimaryIdentifierContext): es.Node {
    const c = ctx.Constant()
    const s = ctx.StringLiteral()

    if (c && parseInt(c.text)) {
      return {
        type: 'Literal',
        value: c.text,
        raw: c.text
      }
    }

    if (s) {
      return {
        type: 'Literal',
        value: s.text,
        raw: s.text
      }
    }

    // Pass control back to the tree
    // So that it will use the alternative labels
    // Under `addressableOperands`
    return this.visit(ctx.addressableOperands()!)
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
    return {
      type: 'MemberExpression',
      object: {
        type: 'Identifier',
        name: ctx.Identifier().at(0)!.text,
        datatype: DataType.UNKNOWN, // To be determined by the compiler
        isStruct: true
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

  visitStructAccessThruPointer(ctx: StructAccessThruPointerContext): es.MemberExpression {
    return {
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
    const typedef = ctx.typeDef()
    const v = this.makeVariableDeclaration({
      loc: contextToLocation(ctx),
      isStruct: !!typedef.Struct(),
      isUnsigned: !!typedef.Unsigned(),
      isArray: false,
      name: ctx.Identifier().text,
      pointerList: typedef.Star().map(s => s.text),
      type: typedef.type(),
      structDef: typedef.Identifier()?.text
    })

    return v
  }

  visitArrayDecl(ctx: ArrayDeclContext): es.Node {
    const typedef = ctx.typeDef()
    const v = this.makeVariableDeclaration({
      loc: contextToLocation(ctx),
      isStruct: !!typedef.Struct(),
      isUnsigned: !!typedef.Unsigned(),
      isArray: true,
      name: ctx.Identifier().text,
      pointerList: typedef.Star().map(s => s.text),
      type: typedef.type(),
      structDef: typedef.Identifier()?.text
    })

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
    const structDef: StructDef = {}
    const structName = ctx.Identifier().text
    fields.forEach(f => {
      const d = f.declarations[0]

      if (!d) throw new FatalSyntaxError(contextToLocation(ctx))
      if (d.init) throw new InvalidConfigError(contextToLocation(ctx))
      if (d.id.type !== 'Identifier') throw new FatalSyntaxError(contextToLocation(ctx))
      const id = d.id as es.Identifier

      // The array should be considered into id.datatype
      structDef[id.name] = id.datatype
    })

    if (this.STRUCT_DECLARATIONS[structName]) throw new FatalSyntaxError(contextToLocation(ctx))
    this.STRUCT_DECLARATIONS[structName] = structDef

    // Don't return anything useful
    // Since it updates the global struct declarations
    return {
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
      type: 'UpdateExpression',
      // Validated by `addressableOperands`
      argument: this.visit(ctx.addressableOperands()) as es.Expression,
      prefix: true,
      operator: getUpdateOp(ctx, ctx.PlusPlus(), ctx.MinusMinus())
    }
  }

  visitUnop(ctx: UnopContext): es.UnaryExpression {
    return {
      type: 'UnaryExpression',
      operator: getUnaryOp(ctx, ctx.Minus(), ctx.Not()),
      // validated by visit method
      argument: this.visit(ctx.expr()) as es.Expression,
      prefix: true
    }
  }

  visitCast(ctx: CastContext): es.CastExpression {
    return {
      type: 'CastExpression',
      targetType: getType(ctx.type()),
      // validated by visit method
      expression: this.visit(ctx.expr()) as es.Expression
    }
  }

  visitDereference(ctx: DereferenceContext): es.ValueofExpression {
    return {
      type: 'ValueofExpression',
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
      type: 'AddressofExpression',
      expression: expr as es.Identifier
    }
  }

  visitSizeofExpr(ctx: SizeofExprContext): es.SizeofExpression | es.Literal {
    const operandCtx = ctx.sizeOfOperands()

    if (operandCtx.Star() || operandCtx.And() || operandCtx.type()) {
      return {
        type: 'Literal',
        value: 8,
        raw: operandCtx.toString()
      }
    }

    if (operandCtx.Identifier()) {
      return {
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
      type: 'BinaryExpression',
      operator: getMultOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitAdd(ctx: AddContext): es.BinaryExpression {
    return {
      type: 'BinaryExpression',
      operator: getAddOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitRelOpr(ctx: RelOprContext): es.BinaryExpression {
    return {
      type: 'BinaryExpression',
      operator: getRelOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitEquality(ctx: EqualityContext): es.BinaryExpression {
    return {
      type: 'BinaryExpression',
      operator: getEqOp(ctx),
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitAnd(ctx: AndContext): es.LogicalExpression {
    return {
      type: 'LogicalExpression',
      operator: ctx.AndAnd().text as '&&',
      left: this.visit(ctx.expr().at(0)!) as es.Expression,
      right: this.visit(ctx.expr().at(1)!) as es.Expression
    }
  }

  visitOr(ctx: OrContext): es.LogicalExpression {
    return {
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

  // Root
  visitStmt(ctx: StmtContext): es.Node {
    // The ANTLR visitor should use the alternative labels
    return this.visit(ctx)
  }

  visitExprStmt(ctx: ExprStmtContext): es.ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: this.visit(ctx.expr()) as es.Expression
    }
  }

  visitDeclrStmt(ctx: DeclrStmtContext): es.Node {
    return this.visit(ctx.declaration())
  }

  visitAssgnStmt(ctx: AssgnStmtContext): es.ExpressionStatement {
    // Delegates to another method
    return this.visitAssignment(ctx.assignment()) as es.ExpressionStatement
  }

  visitCmpdStmt(ctx: CmpdStmtContext): es.BlockStatement {
    // Delegates to another method
    return this.visitCompoundStatement(ctx.compoundStatement())
  }

  visitIfElseStmt(ctx: IfElseStmtContext): es.IfStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitWhileStmt(ctx: WhileStmtContext): es.WhileStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitForStmt(ctx: ForStmtContext): es.ForStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitReturnExpr(ctx: ReturnExprContext): es.ReturnStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitBreakStmt(ctx: BreakStmtContext): es.BreakStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitContinueStmt(ctx: ContinueStmtContext): es.ContinueStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
  }

  visitAssignment(ctx: AssignmentContext): es.ExpressionStatement {
    throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
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
      type: 'Program',
      sourceType: 'script',
      body: stmts as es.Statement[]
    }
  }

  visitFunctionDefinition(ctx: FunctionDefinitionContext): es.FunctionDeclaration {
    const typeDef = ctx.typeDef()
    const name = ctx.Identifier().text
    const paramLs = ctx.paramLs()
    const stmt = ctx.compoundStatement()
    const body = this.visit(stmt) as es.BlockStatement

    return {
      type: 'FunctionDeclaration',
      id: getIdentifier(typeDef, name, typeDef.Star().length > 0),
      params:
        paramLs?._pLs.map(p =>
          getIdentifier(p.typeDef(), p.Identifier().text, p.typeDef().Star().length > 0)
        ) ?? [],
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
  visitChildren(node: RuleNode): es.Node {
    const nodes: es.Node[] = []
    for (let i = 0; i < node.childCount; i++) {
      nodes.push(this.visit(node.getChild(i)))
    }
    return {
      type: 'BlockStatement',
      body: nodes as es.Statement[]
    }
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
  private makeVariableDeclaration(args: {
    loc: es.SourceLocation
    isStruct: boolean
    isUnsigned: boolean
    isArray: boolean
    name: string
    pointerList: string[]
    type?: TypeContext
    structDef?: any // TODO
  }): es.VariableDeclaration {
    const t = args.type
    // even if pointerList.length is 0,
    // it's a pointer if it's array
    const _isPtr = args.pointerList.length > 0 || args.isArray
    const _ptrLs = _isPtr ? args.pointerList || ['*'] : undefined

    if (t) {
      // E.g. `int x`, `int ** x`, int x[]
      return {
        type: 'VariableDeclaration',
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: args.name,
              isArray: args.isArray,
              datatype: getDatatype(t, args.isUnsigned, _isPtr),
              isMemory: _isPtr,
              pointerList: _ptrLs
            }
          }
        ]
      }
    } else if (args.isStruct) {
      // E.g. `struct Person ident`, `struct Person *ident`
      // `struct Person ident[]`
      return {
        type: 'VariableDeclaration',
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: args.name,
              isStruct: true,
              isArray: args.isArray,
              datatype: DataType.UNKNOWN,
              isMemory: _isPtr,
              pointerList: _ptrLs,
              structFields: args.structDef // TODO
            }
          }
        ]
      }
    }

    throw new InvalidConfigError(args.loc)
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
