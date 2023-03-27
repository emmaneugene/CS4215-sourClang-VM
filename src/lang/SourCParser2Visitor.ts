// Generated from ./src/lang/SourCParser2.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { VariableDeclContext } from './SourCParser2'
import { ArrayDeclContext } from './SourCParser2'
import { FxPointerDeclContext } from './SourCParser2'
import { StructDeclContext } from './SourCParser2'
import { SuffixIncrContext } from './SourCParser2'
import { FunctionCallContext } from './SourCParser2'
import { PrefixIncrContext } from './SourCParser2'
import { UnopContext } from './SourCParser2'
import { CastContext } from './SourCParser2'
import { DereferenceContext } from './SourCParser2'
import { AddressOfContext } from './SourCParser2'
import { SizeofExprContext } from './SourCParser2'
import { MultContext } from './SourCParser2'
import { AddContext } from './SourCParser2'
import { RelOprContext } from './SourCParser2'
import { EqualityContext } from './SourCParser2'
import { AndContext } from './SourCParser2'
import { OrContext } from './SourCParser2'
import { ParenContext } from './SourCParser2'
import { TernaryContext } from './SourCParser2'
import { PriIdentifierContext } from './SourCParser2'
import { ArraySubscriptContext } from './SourCParser2'
import { StructAccessContext } from './SourCParser2'
import { StructAccessThruPointerContext } from './SourCParser2'
import { AtomIdentifierContext } from './SourCParser2'
import { ExprStmtContext } from './SourCParser2'
import { DeclrStmtContext } from './SourCParser2'
import { AssgnStmtContext } from './SourCParser2'
import { CmpdStmtContext } from './SourCParser2'
import { IfElseStmtContext } from './SourCParser2'
import { WhileStmtContext } from './SourCParser2'
import { ForStmtContext } from './SourCParser2'
import { ReturnExprContext } from './SourCParser2'
import { BreakStmtContext } from './SourCParser2'
import { ContinueStmtContext } from './SourCParser2'
import { TypeContext } from './SourCParser2'
import { TypeNameListContext } from './SourCParser2'
import { ProgramContext } from './SourCParser2'
import { FunctionDefinitionContext } from './SourCParser2'
import { ParamLsContext } from './SourCParser2'
import { ParamContext } from './SourCParser2'
import { CompoundStatementContext } from './SourCParser2'
import { StmtContext } from './SourCParser2'
import { ExprContext } from './SourCParser2'
import { PrimaryIdentifierContext } from './SourCParser2'
import { SizeOfOperandsContext } from './SourCParser2'
import { DeclarationContext } from './SourCParser2'
import { TypeDefContext } from './SourCParser2'
import { ExprLsContext } from './SourCParser2'
import { SeqExprLsContext } from './SourCParser2'
import { AssignmentContext } from './SourCParser2'
import { AddressableOperandsContext } from './SourCParser2'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SourCParser2`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SourCParser2Visitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `VariableDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableDecl?: (ctx: VariableDeclContext) => Result

  /**
   * Visit a parse tree produced by the `ArrayDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayDecl?: (ctx: ArrayDeclContext) => Result

  /**
   * Visit a parse tree produced by the `FxPointerDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFxPointerDecl?: (ctx: FxPointerDeclContext) => Result

  /**
   * Visit a parse tree produced by the `StructDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructDecl?: (ctx: StructDeclContext) => Result

  /**
   * Visit a parse tree produced by the `SuffixIncr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSuffixIncr?: (ctx: SuffixIncrContext) => Result

  /**
   * Visit a parse tree produced by the `FunctionCall`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionCall?: (ctx: FunctionCallContext) => Result

  /**
   * Visit a parse tree produced by the `PrefixIncr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrefixIncr?: (ctx: PrefixIncrContext) => Result

  /**
   * Visit a parse tree produced by the `Unop`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnop?: (ctx: UnopContext) => Result

  /**
   * Visit a parse tree produced by the `Cast`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCast?: (ctx: CastContext) => Result

  /**
   * Visit a parse tree produced by the `Dereference`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDereference?: (ctx: DereferenceContext) => Result

  /**
   * Visit a parse tree produced by the `AddressOf`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAddressOf?: (ctx: AddressOfContext) => Result

  /**
   * Visit a parse tree produced by the `SizeofExpr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSizeofExpr?: (ctx: SizeofExprContext) => Result

  /**
   * Visit a parse tree produced by the `Mult`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMult?: (ctx: MultContext) => Result

  /**
   * Visit a parse tree produced by the `Add`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdd?: (ctx: AddContext) => Result

  /**
   * Visit a parse tree produced by the `RelOpr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelOpr?: (ctx: RelOprContext) => Result

  /**
   * Visit a parse tree produced by the `Equality`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEquality?: (ctx: EqualityContext) => Result

  /**
   * Visit a parse tree produced by the `And`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnd?: (ctx: AndContext) => Result

  /**
   * Visit a parse tree produced by the `Or`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOr?: (ctx: OrContext) => Result

  /**
   * Visit a parse tree produced by the `Paren`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParen?: (ctx: ParenContext) => Result

  /**
   * Visit a parse tree produced by the `Ternary`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTernary?: (ctx: TernaryContext) => Result

  /**
   * Visit a parse tree produced by the `PriIdentifier`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPriIdentifier?: (ctx: PriIdentifierContext) => Result

  /**
   * Visit a parse tree produced by the `ArraySubscript`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArraySubscript?: (ctx: ArraySubscriptContext) => Result

  /**
   * Visit a parse tree produced by the `StructAccess`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructAccess?: (ctx: StructAccessContext) => Result

  /**
   * Visit a parse tree produced by the `StructAccessThruPointer`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructAccessThruPointer?: (ctx: StructAccessThruPointerContext) => Result

  /**
   * Visit a parse tree produced by the `AtomIdentifier`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAtomIdentifier?: (ctx: AtomIdentifierContext) => Result

  /**
   * Visit a parse tree produced by the `ExprStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExprStmt?: (ctx: ExprStmtContext) => Result

  /**
   * Visit a parse tree produced by the `DeclrStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclrStmt?: (ctx: DeclrStmtContext) => Result

  /**
   * Visit a parse tree produced by the `AssgnStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssgnStmt?: (ctx: AssgnStmtContext) => Result

  /**
   * Visit a parse tree produced by the `CmpdStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCmpdStmt?: (ctx: CmpdStmtContext) => Result

  /**
   * Visit a parse tree produced by the `IfElseStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfElseStmt?: (ctx: IfElseStmtContext) => Result

  /**
   * Visit a parse tree produced by the `WhileStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileStmt?: (ctx: WhileStmtContext) => Result

  /**
   * Visit a parse tree produced by the `ForStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForStmt?: (ctx: ForStmtContext) => Result

  /**
   * Visit a parse tree produced by the `ReturnExpr`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturnExpr?: (ctx: ReturnExprContext) => Result

  /**
   * Visit a parse tree produced by the `BreakStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBreakStmt?: (ctx: BreakStmtContext) => Result

  /**
   * Visit a parse tree produced by the `ContinueStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitContinueStmt?: (ctx: ContinueStmtContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType?: (ctx: TypeContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.typeNameList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeNameList?: (ctx: TypeNameListContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgram?: (ctx: ProgramContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.functionDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.paramLs`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParamLs?: (ctx: ParamLsContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.param`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParam?: (ctx: ParamContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.compoundStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompoundStatement?: (ctx: CompoundStatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.stmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStmt?: (ctx: StmtContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpr?: (ctx: ExprContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.primaryIdentifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryIdentifier?: (ctx: PrimaryIdentifierContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.sizeOfOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSizeOfOperands?: (ctx: SizeOfOperandsContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.typeDef`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeDef?: (ctx: TypeDefContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.exprLs`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExprLs?: (ctx: ExprLsContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.seqExprLs`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSeqExprLs?: (ctx: SeqExprLsContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.assignment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment?: (ctx: AssignmentContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAddressableOperands?: (ctx: AddressableOperandsContext) => Result
}
