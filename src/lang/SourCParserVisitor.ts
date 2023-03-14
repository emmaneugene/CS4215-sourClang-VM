// Generated from ./src/lang/SourCParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { TypeSpecifierContext } from './SourCParser'
import { TranslationUnitContext } from './SourCParser'
import { ExternalDeclarationContext } from './SourCParser'
import { DeclarationContext } from './SourCParser'
import { InitDeclaratorContext } from './SourCParser'
import { DeclaratorContext } from './SourCParser'
import { TypeNameListContext } from './SourCParser'
import { InitializerContext } from './SourCParser'
import { InitializerListContext } from './SourCParser'
import { AssignmentExpressionContext } from './SourCParser'
import { ConditionalExpressionContext } from './SourCParser'
import { LogicalOrExpressionContext } from './SourCParser'
import { LogicalAndExpressionContext } from './SourCParser'
import { EqualityExpressionContext } from './SourCParser'
import { RelationalExpressionContext } from './SourCParser'
import { AdditiveExpressionContext } from './SourCParser'
import { MultiplicativeExpressionContext } from './SourCParser'
import { CastExpressionContext } from './SourCParser'
import { UnaryExpressionContext } from './SourCParser'
import { UnaryOperatorContext } from './SourCParser'
import { TypeNameContext } from './SourCParser'
import { SizeofOperandsContext } from './SourCParser'
import { PostfixExpressionContext } from './SourCParser'
import { FunctionCallArgContext } from './SourCParser'
import { PrimaryExpressionContext } from './SourCParser'
import { ExpressionContext } from './SourCParser'
import { ConstantExpressionContext } from './SourCParser'
import { FunctionDefinitionContext } from './SourCParser'
import { PointerContext } from './SourCParser'
import { ParameterListContext } from './SourCParser'
import { ParameterDeclarationContext } from './SourCParser'
import { CompoundStatementContext } from './SourCParser'
import { StatementContext } from './SourCParser'
import { ExpressionStatementContext } from './SourCParser'
import { SelectionStatementContext } from './SourCParser'
import { IterationStatementContext } from './SourCParser'
import { JumpStatementContext } from './SourCParser'
import { StructSpecifierContext } from './SourCParser'
import { StructDeclarationContext } from './SourCParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SourCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SourCParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `SourCParser.typeSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.translationUnit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTranslationUnit?: (ctx: TranslationUnitContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.externalDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternalDeclaration?: (ctx: ExternalDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.initDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarator?: (ctx: DeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.typeNameList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeNameList?: (ctx: TypeNameListContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer?: (ctx: InitializerContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.initializerList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerList?: (ctx: InitializerListContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.logicalOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.logicalAndExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.equalityExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.relationalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.additiveExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.multiplicativeExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.castExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastExpression?: (ctx: CastExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.unaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.unaryOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.typeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeName?: (ctx: TypeNameContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.sizeofOperands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSizeofOperands?: (ctx: SizeofOperandsContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.functionCallArg`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionCallArg?: (ctx: FunctionCallArgContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.constantExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantExpression?: (ctx: ConstantExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.functionDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.pointer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointer?: (ctx: PointerContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.parameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterList?: (ctx: ParameterListContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.parameterDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.compoundStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompoundStatement?: (ctx: CompoundStatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.selectionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelectionStatement?: (ctx: SelectionStatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.iterationStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIterationStatement?: (ctx: IterationStatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.jumpStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJumpStatement?: (ctx: JumpStatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.structSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructSpecifier?: (ctx: StructSpecifierContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.structDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructDeclaration?: (ctx: StructDeclarationContext) => Result
}
