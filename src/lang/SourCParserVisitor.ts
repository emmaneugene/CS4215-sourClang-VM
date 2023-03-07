// Generated from ./src/lang/SourCParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { Type_specifierContext } from './SourCParser'
import { Translation_unitContext } from './SourCParser'
import { External_declarationContext } from './SourCParser'
import { DeclarationContext } from './SourCParser'
import { Init_declaratorContext } from './SourCParser'
import { DeclaratorContext } from './SourCParser'
import { Type_name_listContext } from './SourCParser'
import { InitializerContext } from './SourCParser'
import { Initializer_listContext } from './SourCParser'
import { Assignment_expressionContext } from './SourCParser'
import { Conditional_expressionContext } from './SourCParser'
import { Logical_or_expressionContext } from './SourCParser'
import { Logical_and_expressionContext } from './SourCParser'
import { Equality_expressionContext } from './SourCParser'
import { Relational_expressionContext } from './SourCParser'
import { Additive_expressionContext } from './SourCParser'
import { Multiplicative_expressionContext } from './SourCParser'
import { Cast_expressionContext } from './SourCParser'
import { Unary_expressionContext } from './SourCParser'
import { Unary_operatorContext } from './SourCParser'
import { Type_nameContext } from './SourCParser'
import { Sizeof_operandsContext } from './SourCParser'
import { Postfix_expressionContext } from './SourCParser'
import { Primary_expressionContext } from './SourCParser'
import { ExpressionContext } from './SourCParser'
import { Constant_expressionContext } from './SourCParser'
import { Function_definitionContext } from './SourCParser'
import { PointerContext } from './SourCParser'
import { Parameter_listContext } from './SourCParser'
import { Parameter_declarationContext } from './SourCParser'
import { Compound_statementContext } from './SourCParser'
import { StatementContext } from './SourCParser'
import { Expression_statementContext } from './SourCParser'
import { Selection_statementContext } from './SourCParser'
import { Iteration_statementContext } from './SourCParser'
import { Jump_statementContext } from './SourCParser'
import { Struct_specifierContext } from './SourCParser'
import { Struct_declarationContext } from './SourCParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SourCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SourCParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `SourCParser.type_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_specifier?: (ctx: Type_specifierContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.translation_unit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTranslation_unit?: (ctx: Translation_unitContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.external_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternal_declaration?: (ctx: External_declarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.init_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInit_declarator?: (ctx: Init_declaratorContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarator?: (ctx: DeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.type_name_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_name_list?: (ctx: Type_name_listContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer?: (ctx: InitializerContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.initializer_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer_list?: (ctx: Initializer_listContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.assignment_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment_expression?: (ctx: Assignment_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.conditional_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditional_expression?: (ctx: Conditional_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.logical_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogical_or_expression?: (ctx: Logical_or_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.logical_and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogical_and_expression?: (ctx: Logical_and_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.equality_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEquality_expression?: (ctx: Equality_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelational_expression?: (ctx: Relational_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.additive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditive_expression?: (ctx: Additive_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.multiplicative_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.cast_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCast_expression?: (ctx: Cast_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_expression?: (ctx: Unary_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.unary_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_operator?: (ctx: Unary_operatorContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.type_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_name?: (ctx: Type_nameContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.sizeof_operands`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSizeof_operands?: (ctx: Sizeof_operandsContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.primary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimary_expression?: (ctx: Primary_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.constant_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant_expression?: (ctx: Constant_expressionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.function_definition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_definition?: (ctx: Function_definitionContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.pointer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointer?: (ctx: PointerContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.parameter_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter_list?: (ctx: Parameter_listContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.parameter_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter_declaration?: (ctx: Parameter_declarationContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.compound_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompound_statement?: (ctx: Compound_statementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.expression_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression_statement?: (ctx: Expression_statementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.selection_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelection_statement?: (ctx: Selection_statementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.iteration_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIteration_statement?: (ctx: Iteration_statementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.jump_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJump_statement?: (ctx: Jump_statementContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.struct_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStruct_specifier?: (ctx: Struct_specifierContext) => Result

  /**
   * Visit a parse tree produced by `SourCParser.struct_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStruct_declaration?: (ctx: Struct_declarationContext) => Result
}
