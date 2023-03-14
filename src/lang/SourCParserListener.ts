// Generated from ./src/lang/SourCParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
 * This interface defines a complete listener for a parse tree produced by
 * `SourCParser`.
 */
export interface SourCParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `SourCParser.typeSpecifier`.
   * @param ctx the parse tree
   */
  enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.typeSpecifier`.
   * @param ctx the parse tree
   */
  exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.translationUnit`.
   * @param ctx the parse tree
   */
  enterTranslationUnit?: (ctx: TranslationUnitContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.translationUnit`.
   * @param ctx the parse tree
   */
  exitTranslationUnit?: (ctx: TranslationUnitContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.externalDeclaration`.
   * @param ctx the parse tree
   */
  enterExternalDeclaration?: (ctx: ExternalDeclarationContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.externalDeclaration`.
   * @param ctx the parse tree
   */
  exitExternalDeclaration?: (ctx: ExternalDeclarationContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.initDeclarator`.
   * @param ctx the parse tree
   */
  enterInitDeclarator?: (ctx: InitDeclaratorContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.initDeclarator`.
   * @param ctx the parse tree
   */
  exitInitDeclarator?: (ctx: InitDeclaratorContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.declarator`.
   * @param ctx the parse tree
   */
  enterDeclarator?: (ctx: DeclaratorContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.declarator`.
   * @param ctx the parse tree
   */
  exitDeclarator?: (ctx: DeclaratorContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.typeNameList`.
   * @param ctx the parse tree
   */
  enterTypeNameList?: (ctx: TypeNameListContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.typeNameList`.
   * @param ctx the parse tree
   */
  exitTypeNameList?: (ctx: TypeNameListContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.initializer`.
   * @param ctx the parse tree
   */
  enterInitializer?: (ctx: InitializerContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.initializer`.
   * @param ctx the parse tree
   */
  exitInitializer?: (ctx: InitializerContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.initializerList`.
   * @param ctx the parse tree
   */
  enterInitializerList?: (ctx: InitializerListContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.initializerList`.
   * @param ctx the parse tree
   */
  exitInitializerList?: (ctx: InitializerListContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.logicalOrExpression`.
   * @param ctx the parse tree
   */
  enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.logicalOrExpression`.
   * @param ctx the parse tree
   */
  exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.logicalAndExpression`.
   * @param ctx the parse tree
   */
  enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.logicalAndExpression`.
   * @param ctx the parse tree
   */
  exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.equalityExpression`.
   * @param ctx the parse tree
   */
  enterEqualityExpression?: (ctx: EqualityExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.equalityExpression`.
   * @param ctx the parse tree
   */
  exitEqualityExpression?: (ctx: EqualityExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.relationalExpression`.
   * @param ctx the parse tree
   */
  enterRelationalExpression?: (ctx: RelationalExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.relationalExpression`.
   * @param ctx the parse tree
   */
  exitRelationalExpression?: (ctx: RelationalExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.additiveExpression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.additiveExpression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.castExpression`.
   * @param ctx the parse tree
   */
  enterCastExpression?: (ctx: CastExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.castExpression`.
   * @param ctx the parse tree
   */
  exitCastExpression?: (ctx: CastExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.unaryExpression`.
   * @param ctx the parse tree
   */
  enterUnaryExpression?: (ctx: UnaryExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.unaryExpression`.
   * @param ctx the parse tree
   */
  exitUnaryExpression?: (ctx: UnaryExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.unaryOperator`.
   * @param ctx the parse tree
   */
  enterUnaryOperator?: (ctx: UnaryOperatorContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.unaryOperator`.
   * @param ctx the parse tree
   */
  exitUnaryOperator?: (ctx: UnaryOperatorContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.typeName`.
   * @param ctx the parse tree
   */
  enterTypeName?: (ctx: TypeNameContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.typeName`.
   * @param ctx the parse tree
   */
  exitTypeName?: (ctx: TypeNameContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.sizeofOperands`.
   * @param ctx the parse tree
   */
  enterSizeofOperands?: (ctx: SizeofOperandsContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.sizeofOperands`.
   * @param ctx the parse tree
   */
  exitSizeofOperands?: (ctx: SizeofOperandsContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.postfixExpression`.
   * @param ctx the parse tree
   */
  enterPostfixExpression?: (ctx: PostfixExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.postfixExpression`.
   * @param ctx the parse tree
   */
  exitPostfixExpression?: (ctx: PostfixExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.functionCallArg`.
   * @param ctx the parse tree
   */
  enterFunctionCallArg?: (ctx: FunctionCallArgContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.functionCallArg`.
   * @param ctx the parse tree
   */
  exitFunctionCallArg?: (ctx: FunctionCallArgContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.constantExpression`.
   * @param ctx the parse tree
   */
  enterConstantExpression?: (ctx: ConstantExpressionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.constantExpression`.
   * @param ctx the parse tree
   */
  exitConstantExpression?: (ctx: ConstantExpressionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.functionDefinition`.
   * @param ctx the parse tree
   */
  enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.functionDefinition`.
   * @param ctx the parse tree
   */
  exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.pointer`.
   * @param ctx the parse tree
   */
  enterPointer?: (ctx: PointerContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.pointer`.
   * @param ctx the parse tree
   */
  exitPointer?: (ctx: PointerContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.parameterList`.
   * @param ctx the parse tree
   */
  enterParameterList?: (ctx: ParameterListContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.parameterList`.
   * @param ctx the parse tree
   */
  exitParameterList?: (ctx: ParameterListContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.parameterDeclaration`.
   * @param ctx the parse tree
   */
  enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.parameterDeclaration`.
   * @param ctx the parse tree
   */
  exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.compoundStatement`.
   * @param ctx the parse tree
   */
  enterCompoundStatement?: (ctx: CompoundStatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.compoundStatement`.
   * @param ctx the parse tree
   */
  exitCompoundStatement?: (ctx: CompoundStatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.selectionStatement`.
   * @param ctx the parse tree
   */
  enterSelectionStatement?: (ctx: SelectionStatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.selectionStatement`.
   * @param ctx the parse tree
   */
  exitSelectionStatement?: (ctx: SelectionStatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.iterationStatement`.
   * @param ctx the parse tree
   */
  enterIterationStatement?: (ctx: IterationStatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.iterationStatement`.
   * @param ctx the parse tree
   */
  exitIterationStatement?: (ctx: IterationStatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.jumpStatement`.
   * @param ctx the parse tree
   */
  enterJumpStatement?: (ctx: JumpStatementContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.jumpStatement`.
   * @param ctx the parse tree
   */
  exitJumpStatement?: (ctx: JumpStatementContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.structSpecifier`.
   * @param ctx the parse tree
   */
  enterStructSpecifier?: (ctx: StructSpecifierContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.structSpecifier`.
   * @param ctx the parse tree
   */
  exitStructSpecifier?: (ctx: StructSpecifierContext) => void

  /**
   * Enter a parse tree produced by `SourCParser.structDeclaration`.
   * @param ctx the parse tree
   */
  enterStructDeclaration?: (ctx: StructDeclarationContext) => void
  /**
   * Exit a parse tree produced by `SourCParser.structDeclaration`.
   * @param ctx the parse tree
   */
  exitStructDeclaration?: (ctx: StructDeclarationContext) => void
}
