// Generated from ./src/lang/SourCParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Type_specifierContext } from "./SourCParser";
import { Translation_unitContext } from "./SourCParser";
import { External_declarationContext } from "./SourCParser";
import { DeclarationContext } from "./SourCParser";
import { Init_declaratorContext } from "./SourCParser";
import { DeclaratorContext } from "./SourCParser";
import { InitializerContext } from "./SourCParser";
import { Initializer_listContext } from "./SourCParser";
import { Assignment_expressionContext } from "./SourCParser";
import { Conditional_expressionContext } from "./SourCParser";
import { Logical_or_expressionContext } from "./SourCParser";
import { Logical_and_expressionContext } from "./SourCParser";
import { Equality_expressionContext } from "./SourCParser";
import { Relational_expressionContext } from "./SourCParser";
import { Additive_expressionContext } from "./SourCParser";
import { Multiplicative_expressionContext } from "./SourCParser";
import { Cast_expressionContext } from "./SourCParser";
import { Unary_expressionContext } from "./SourCParser";
import { Unary_operatorContext } from "./SourCParser";
import { Type_nameContext } from "./SourCParser";
import { Sizeof_operandsContext } from "./SourCParser";
import { Postfix_expressionContext } from "./SourCParser";
import { Primary_expressionContext } from "./SourCParser";
import { ExpressionContext } from "./SourCParser";
import { Constant_expressionContext } from "./SourCParser";
import { Function_definitionContext } from "./SourCParser";
import { PointerContext } from "./SourCParser";
import { Parameter_listContext } from "./SourCParser";
import { Parameter_declarationContext } from "./SourCParser";
import { Compound_statementContext } from "./SourCParser";
import { StatementContext } from "./SourCParser";
import { Expression_statementContext } from "./SourCParser";
import { Selection_statementContext } from "./SourCParser";
import { Iteration_statementContext } from "./SourCParser";
import { Jump_statementContext } from "./SourCParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SourCParser`.
 */
export interface SourCParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SourCParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	enterType_specifier?: (ctx: Type_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	exitType_specifier?: (ctx: Type_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.translation_unit`.
	 * @param ctx the parse tree
	 */
	enterTranslation_unit?: (ctx: Translation_unitContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.translation_unit`.
	 * @param ctx the parse tree
	 */
	exitTranslation_unit?: (ctx: Translation_unitContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.external_declaration`.
	 * @param ctx the parse tree
	 */
	enterExternal_declaration?: (ctx: External_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.external_declaration`.
	 * @param ctx the parse tree
	 */
	exitExternal_declaration?: (ctx: External_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.init_declarator`.
	 * @param ctx the parse tree
	 */
	enterInit_declarator?: (ctx: Init_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.init_declarator`.
	 * @param ctx the parse tree
	 */
	exitInit_declarator?: (ctx: Init_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.initializer_list`.
	 * @param ctx the parse tree
	 */
	enterInitializer_list?: (ctx: Initializer_listContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.initializer_list`.
	 * @param ctx the parse tree
	 */
	exitInitializer_list?: (ctx: Initializer_listContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment_expression?: (ctx: Assignment_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment_expression?: (ctx: Assignment_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.logical_or_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.logical_or_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.logical_and_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.logical_and_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	enterCast_expression?: (ctx: Cast_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	exitCast_expression?: (ctx: Cast_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.sizeof_operands`.
	 * @param ctx the parse tree
	 */
	enterSizeof_operands?: (ctx: Sizeof_operandsContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.sizeof_operands`.
	 * @param ctx the parse tree
	 */
	exitSizeof_operands?: (ctx: Sizeof_operandsContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.function_definition`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition?: (ctx: Function_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.function_definition`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition?: (ctx: Function_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.pointer`.
	 * @param ctx the parse tree
	 */
	enterPointer?: (ctx: PointerContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.pointer`.
	 * @param ctx the parse tree
	 */
	exitPointer?: (ctx: PointerContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?: (ctx: Parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?: (ctx: Parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement?: (ctx: Compound_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	enterSelection_statement?: (ctx: Selection_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	exitSelection_statement?: (ctx: Selection_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	enterIteration_statement?: (ctx: Iteration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	exitIteration_statement?: (ctx: Iteration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SourCParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	enterJump_statement?: (ctx: Jump_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SourCParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	exitJump_statement?: (ctx: Jump_statementContext) => void;
}

