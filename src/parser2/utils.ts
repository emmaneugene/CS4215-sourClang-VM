import { ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'

import { Address, DataType, SourceLocation, TypeList } from '../ast/ast.core'
import { IdentifierInfo } from '../ast/identifierHandler'
import { WORD_SIZE } from '../constants'
import { AddContext, EqualityContext, MultContext, RelOprContext } from '../lang/SourCParser2'
import { FatalSyntaxError } from './error'

export function removeOnePtr(t: TypeList, source: SourceLocation): TypeList {
  if (t.typeList[0] !== '*') {
    throw new FatalSyntaxError(source)
  }
  return {
    typeList: t.typeList.splice(1, t.typeList.length),
    structDef: t.structDef
  }
}

export function isPointer(t: TypeList): boolean {
  return t.typeList[0] === '*'
}

export function getPrimitiveType(t: TypeList): DataType {
  return t.typeList[0] as DataType
}

export function getMultOp(ctx: MultContext): '*' | '/' | '%' {
  if (ctx.Star()?.text === '*') return '*'
  if (ctx.Div()?.text === '/') return '/'
  if (ctx.Mod()?.text === '%') return '%'
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getAddOp(ctx: AddContext): '+' | '-' {
  if (ctx.Plus()?.text === '+') return '+'
  if (ctx.Minus()?.text === '-') return '-'
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getRelOp(ctx: RelOprContext): '>' | '>=' | '<' | '<=' {
  if (ctx.Greater()?.text === '>') return '>'
  if (ctx.GreaterEqual()?.text === '>=') return '>='
  if (ctx.Less()?.text === '<') return '<'
  if (ctx.LessEqual()?.text === '<=') return '<='
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getEqOp(ctx: EqualityContext): '==' | '!=' {
  if (ctx.Equal()?.text === '==') return '=='
  if (ctx.NotEqual()?.text === '!=') return '!='
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getOutputDatatype(
  operator: string,
  leftType: TypeList,
  rightType: TypeList,
  source: SourceLocation
): TypeList {
  if (['*', '/', '%'].includes(operator)) {
    if (isPointer(leftType) || isPointer(rightType)) {
      throw new FatalSyntaxError(source)
    }

    return getBiggerType(leftType, rightType)
  }

  if (['+', '-'].includes(operator)) {
    const isLeftPointer = isPointer(leftType)
    const isRightPointer = isPointer(rightType)

    if (isLeftPointer && isRightPointer) {
      throw new FatalSyntaxError(source)
    }

    if (isLeftPointer || isRightPointer) {
      return isLeftPointer ? leftType : rightType
    }

    return getBiggerType(leftType, rightType)
  }

  throw new FatalSyntaxError(source)
}

/**
 * This function is meant to simplify the type checking when
 * a binary operator is applied onto 2 normal/primitive types.
 *
 * For example, if we have an `int x` and `long y`,
 * `x+y` is permitted.
 *
 * What this function does is that it compares 2 types, and returns the
 * one that is "bigger". The type of a binary expression between 2 different
 * types is the type that is bigger - or implying that the "smaller" type
 * has been type-casted/extended to bigger one.
 *
 * In the example above, `x+y` is of the type `long` - `int x` is considered
 * to be (safely) casted to `long`.
 *
 * The concept of "bigger" uses a ranking system of each type.
 */
export function getBiggerType(t1: TypeList, t2: TypeList): TypeList {
  const RANKING = [
    DataType.CHAR,
    DataType.SHORT,
    DataType.INT,
    DataType.LONG,
    DataType.FLOAT,
    DataType.DOUBLE
  ]
  const assignRanking = (t: DataType) => RANKING.indexOf(t)

  const t1Rank = assignRanking(getPrimitiveType(t1))
  const t2Rank = assignRanking(getPrimitiveType(t2))

  return t1Rank >= t2Rank ? t1 : t2
}

export function getStackFrameReturnPCLocation(): number {
  return -WORD_SIZE
}

export type AddDeclarationCallbackFunction = (variable: {
  name: string
  datatype: TypeList
  size: number
}) => Address

export type IdentifierLookupFunction = (name: string) => IdentifierInfo

export type StringLitAddrLookupFunction = (s: string) => number

/**
 * Gets the token location.
 */
export function contextToLocation(ctx: ParserRuleContext): SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

/**
 * Gets the token location of an ErrorNode.
 */
export function errorNodeToLocation(node: ErrorNode): SourceLocation {
  return {
    start: {
      line: node.symbol.line,
      column: node.symbol.charPositionInLine
    },
    end: {
      line: node.symbol.line,
      column: node.symbol.charPositionInLine + 1
    }
  }
}

export function isFloatType(t: TypeList): boolean {
  return [DataType.FLOAT, DataType.DOUBLE].includes(getPrimitiveType(t))
}

export function isIntType(t: TypeList): boolean {
  return [DataType.CHAR, DataType.SHORT, DataType.INT, DataType.LONG].includes(getPrimitiveType(t))
}
