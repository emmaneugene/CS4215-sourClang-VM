// Generated from ./src/lang/SourCParser2.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
import { ProgramStmtContext } from './SourCParser2'
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
 * This interface defines a complete listener for a parse tree produced by
 * `SourCParser2`.
 */
export interface SourCParser2Listener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `VariableDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  enterVariableDecl?: (ctx: VariableDeclContext) => void
  /**
   * Exit a parse tree produced by the `VariableDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  exitVariableDecl?: (ctx: VariableDeclContext) => void

  /**
   * Enter a parse tree produced by the `ArrayDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  enterArrayDecl?: (ctx: ArrayDeclContext) => void
  /**
   * Exit a parse tree produced by the `ArrayDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  exitArrayDecl?: (ctx: ArrayDeclContext) => void

  /**
   * Enter a parse tree produced by the `FxPointerDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  enterFxPointerDecl?: (ctx: FxPointerDeclContext) => void
  /**
   * Exit a parse tree produced by the `FxPointerDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  exitFxPointerDecl?: (ctx: FxPointerDeclContext) => void

  /**
   * Enter a parse tree produced by the `StructDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  enterStructDecl?: (ctx: StructDeclContext) => void
  /**
   * Exit a parse tree produced by the `StructDecl`
   * labeled alternative in `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  exitStructDecl?: (ctx: StructDeclContext) => void

  /**
   * Enter a parse tree produced by the `SuffixIncr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterSuffixIncr?: (ctx: SuffixIncrContext) => void
  /**
   * Exit a parse tree produced by the `SuffixIncr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitSuffixIncr?: (ctx: SuffixIncrContext) => void

  /**
   * Enter a parse tree produced by the `FunctionCall`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterFunctionCall?: (ctx: FunctionCallContext) => void
  /**
   * Exit a parse tree produced by the `FunctionCall`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitFunctionCall?: (ctx: FunctionCallContext) => void

  /**
   * Enter a parse tree produced by the `PrefixIncr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterPrefixIncr?: (ctx: PrefixIncrContext) => void
  /**
   * Exit a parse tree produced by the `PrefixIncr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitPrefixIncr?: (ctx: PrefixIncrContext) => void

  /**
   * Enter a parse tree produced by the `Unop`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterUnop?: (ctx: UnopContext) => void
  /**
   * Exit a parse tree produced by the `Unop`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitUnop?: (ctx: UnopContext) => void

  /**
   * Enter a parse tree produced by the `Cast`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterCast?: (ctx: CastContext) => void
  /**
   * Exit a parse tree produced by the `Cast`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitCast?: (ctx: CastContext) => void

  /**
   * Enter a parse tree produced by the `Dereference`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterDereference?: (ctx: DereferenceContext) => void
  /**
   * Exit a parse tree produced by the `Dereference`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitDereference?: (ctx: DereferenceContext) => void

  /**
   * Enter a parse tree produced by the `AddressOf`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterAddressOf?: (ctx: AddressOfContext) => void
  /**
   * Exit a parse tree produced by the `AddressOf`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitAddressOf?: (ctx: AddressOfContext) => void

  /**
   * Enter a parse tree produced by the `SizeofExpr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterSizeofExpr?: (ctx: SizeofExprContext) => void
  /**
   * Exit a parse tree produced by the `SizeofExpr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitSizeofExpr?: (ctx: SizeofExprContext) => void

  /**
   * Enter a parse tree produced by the `Mult`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterMult?: (ctx: MultContext) => void
  /**
   * Exit a parse tree produced by the `Mult`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitMult?: (ctx: MultContext) => void

  /**
   * Enter a parse tree produced by the `Add`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterAdd?: (ctx: AddContext) => void
  /**
   * Exit a parse tree produced by the `Add`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitAdd?: (ctx: AddContext) => void

  /**
   * Enter a parse tree produced by the `RelOpr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterRelOpr?: (ctx: RelOprContext) => void
  /**
   * Exit a parse tree produced by the `RelOpr`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitRelOpr?: (ctx: RelOprContext) => void

  /**
   * Enter a parse tree produced by the `Equality`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterEquality?: (ctx: EqualityContext) => void
  /**
   * Exit a parse tree produced by the `Equality`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitEquality?: (ctx: EqualityContext) => void

  /**
   * Enter a parse tree produced by the `And`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterAnd?: (ctx: AndContext) => void
  /**
   * Exit a parse tree produced by the `And`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitAnd?: (ctx: AndContext) => void

  /**
   * Enter a parse tree produced by the `Or`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterOr?: (ctx: OrContext) => void
  /**
   * Exit a parse tree produced by the `Or`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitOr?: (ctx: OrContext) => void

  /**
   * Enter a parse tree produced by the `Paren`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterParen?: (ctx: ParenContext) => void
  /**
   * Exit a parse tree produced by the `Paren`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitParen?: (ctx: ParenContext) => void

  /**
   * Enter a parse tree produced by the `Ternary`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterTernary?: (ctx: TernaryContext) => void
  /**
   * Exit a parse tree produced by the `Ternary`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitTernary?: (ctx: TernaryContext) => void

  /**
   * Enter a parse tree produced by the `PriIdentifier`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterPriIdentifier?: (ctx: PriIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `PriIdentifier`
   * labeled alternative in `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitPriIdentifier?: (ctx: PriIdentifierContext) => void

  /**
   * Enter a parse tree produced by the `ArraySubscript`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  enterArraySubscript?: (ctx: ArraySubscriptContext) => void
  /**
   * Exit a parse tree produced by the `ArraySubscript`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  exitArraySubscript?: (ctx: ArraySubscriptContext) => void

  /**
   * Enter a parse tree produced by the `StructAccess`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  enterStructAccess?: (ctx: StructAccessContext) => void
  /**
   * Exit a parse tree produced by the `StructAccess`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  exitStructAccess?: (ctx: StructAccessContext) => void

  /**
   * Enter a parse tree produced by the `StructAccessThruPointer`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  enterStructAccessThruPointer?: (ctx: StructAccessThruPointerContext) => void
  /**
   * Exit a parse tree produced by the `StructAccessThruPointer`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  exitStructAccessThruPointer?: (ctx: StructAccessThruPointerContext) => void

  /**
   * Enter a parse tree produced by the `AtomIdentifier`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  enterAtomIdentifier?: (ctx: AtomIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `AtomIdentifier`
   * labeled alternative in `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  exitAtomIdentifier?: (ctx: AtomIdentifierContext) => void

  /**
   * Enter a parse tree produced by the `ExprStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterExprStmt?: (ctx: ExprStmtContext) => void
  /**
   * Exit a parse tree produced by the `ExprStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitExprStmt?: (ctx: ExprStmtContext) => void

  /**
   * Enter a parse tree produced by the `DeclrStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterDeclrStmt?: (ctx: DeclrStmtContext) => void
  /**
   * Exit a parse tree produced by the `DeclrStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitDeclrStmt?: (ctx: DeclrStmtContext) => void

  /**
   * Enter a parse tree produced by the `AssgnStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterAssgnStmt?: (ctx: AssgnStmtContext) => void
  /**
   * Exit a parse tree produced by the `AssgnStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitAssgnStmt?: (ctx: AssgnStmtContext) => void

  /**
   * Enter a parse tree produced by the `CmpdStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterCmpdStmt?: (ctx: CmpdStmtContext) => void
  /**
   * Exit a parse tree produced by the `CmpdStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitCmpdStmt?: (ctx: CmpdStmtContext) => void

  /**
   * Enter a parse tree produced by the `IfElseStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterIfElseStmt?: (ctx: IfElseStmtContext) => void
  /**
   * Exit a parse tree produced by the `IfElseStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitIfElseStmt?: (ctx: IfElseStmtContext) => void

  /**
   * Enter a parse tree produced by the `WhileStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterWhileStmt?: (ctx: WhileStmtContext) => void
  /**
   * Exit a parse tree produced by the `WhileStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitWhileStmt?: (ctx: WhileStmtContext) => void

  /**
   * Enter a parse tree produced by the `ForStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterForStmt?: (ctx: ForStmtContext) => void
  /**
   * Exit a parse tree produced by the `ForStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitForStmt?: (ctx: ForStmtContext) => void

  /**
   * Enter a parse tree produced by the `ReturnExpr`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterReturnExpr?: (ctx: ReturnExprContext) => void
  /**
   * Exit a parse tree produced by the `ReturnExpr`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitReturnExpr?: (ctx: ReturnExprContext) => void

  /**
   * Enter a parse tree produced by the `BreakStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterBreakStmt?: (ctx: BreakStmtContext) => void
  /**
   * Exit a parse tree produced by the `BreakStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitBreakStmt?: (ctx: BreakStmtContext) => void

  /**
   * Enter a parse tree produced by the `ContinueStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterContinueStmt?: (ctx: ContinueStmtContext) => void
  /**
   * Exit a parse tree produced by the `ContinueStmt`
   * labeled alternative in `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitContinueStmt?: (ctx: ContinueStmtContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.typeNameList`.
   * @param ctx the parse tree
   */
  enterTypeNameList?: (ctx: TypeNameListContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.typeNameList`.
   * @param ctx the parse tree
   */
  exitTypeNameList?: (ctx: TypeNameListContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.programStmt`.
   * @param ctx the parse tree
   */
  enterProgramStmt?: (ctx: ProgramStmtContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.programStmt`.
   * @param ctx the parse tree
   */
  exitProgramStmt?: (ctx: ProgramStmtContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.functionDefinition`.
   * @param ctx the parse tree
   */
  enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.functionDefinition`.
   * @param ctx the parse tree
   */
  exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.paramLs`.
   * @param ctx the parse tree
   */
  enterParamLs?: (ctx: ParamLsContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.paramLs`.
   * @param ctx the parse tree
   */
  exitParamLs?: (ctx: ParamLsContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.param`.
   * @param ctx the parse tree
   */
  enterParam?: (ctx: ParamContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.param`.
   * @param ctx the parse tree
   */
  exitParam?: (ctx: ParamContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.compoundStatement`.
   * @param ctx the parse tree
   */
  enterCompoundStatement?: (ctx: CompoundStatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.compoundStatement`.
   * @param ctx the parse tree
   */
  exitCompoundStatement?: (ctx: CompoundStatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  enterStmt?: (ctx: StmtContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.stmt`.
   * @param ctx the parse tree
   */
  exitStmt?: (ctx: StmtContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  enterExpr?: (ctx: ExprContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.expr`.
   * @param ctx the parse tree
   */
  exitExpr?: (ctx: ExprContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.primaryIdentifier`.
   * @param ctx the parse tree
   */
  enterPrimaryIdentifier?: (ctx: PrimaryIdentifierContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.primaryIdentifier`.
   * @param ctx the parse tree
   */
  exitPrimaryIdentifier?: (ctx: PrimaryIdentifierContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.sizeOfOperands`.
   * @param ctx the parse tree
   */
  enterSizeOfOperands?: (ctx: SizeOfOperandsContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.sizeOfOperands`.
   * @param ctx the parse tree
   */
  exitSizeOfOperands?: (ctx: SizeOfOperandsContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.typeDef`.
   * @param ctx the parse tree
   */
  enterTypeDef?: (ctx: TypeDefContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.typeDef`.
   * @param ctx the parse tree
   */
  exitTypeDef?: (ctx: TypeDefContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.exprLs`.
   * @param ctx the parse tree
   */
  enterExprLs?: (ctx: ExprLsContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.exprLs`.
   * @param ctx the parse tree
   */
  exitExprLs?: (ctx: ExprLsContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.seqExprLs`.
   * @param ctx the parse tree
   */
  enterSeqExprLs?: (ctx: SeqExprLsContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.seqExprLs`.
   * @param ctx the parse tree
   */
  exitSeqExprLs?: (ctx: SeqExprLsContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.assignment`.
   * @param ctx the parse tree
   */
  enterAssignment?: (ctx: AssignmentContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.assignment`.
   * @param ctx the parse tree
   */
  exitAssignment?: (ctx: AssignmentContext) => void

  /**
   * Enter a parse tree produced by `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  enterAddressableOperands?: (ctx: AddressableOperandsContext) => void
  /**
   * Exit a parse tree produced by `SourCParser2.addressableOperands`.
   * @param ctx the parse tree
   */
  exitAddressableOperands?: (ctx: AddressableOperandsContext) => void
}
