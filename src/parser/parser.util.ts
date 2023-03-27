import { ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { DataType } from '../typings/datatype'
import {
  AddContext,
  EqualityContext,
  MultContext,
  RelOprContext,
  TypeContext,
  TypeDefContext
} from './../lang/SourCParser2'
import { FatalSyntaxError } from './parser.error'

/* Gets the token location. */
export function contextToLocation(ctx: ParserRuleContext): es.SourceLocation {
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

export function nodeToLocation(node: ErrorNode): es.SourceLocation {
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

export function getIdentifier(typedef: TypeDefContext, name: string): es.Identifier {
  if (typedef.Struct()) {
    const pointerList = typedef.Star().map(s => s.text)
    return {
      type: 'Identifier',
      datatype: DataType.UNKNOWN,
      isStruct: true,
      name,
      pointerList,
      isMemory: pointerList.length > 0
    }
  }

  const t = typedef.type()
  if (t) {
    const pointerList = typedef.Star().map(s => s.text)
    return {
      type: 'Identifier',
      datatype: getDatatype(t, typedef.Unsigned()),
      name,
      pointerList,
      isMemory: pointerList.length > 0
    }
  }

  throw new FatalSyntaxError(contextToLocation(typedef.ruleContext))
}

function getDatatype(t: TypeContext, isUnsigned: TerminalNode | undefined): DataType {
  if (isUnsigned) {
    if (t.Char()) return DataType.UNSIGNED_CHAR
    if (t.Short()) return DataType.UNSIGNED_SHORT
    if (t.Int()) return DataType.UNSIGNED_INT
    if (t.Long()) return DataType.UNSIGNED_LONG
  } else {
    if (t.Char()) return DataType.CHAR
    if (t.Short()) return DataType.SHORT
    if (t.Int()) return DataType.INT
    if (t.Long()) return DataType.LONG
    if (t.Void()) return DataType.VOID
    if (t.Double()) return DataType.DOUBLE
    if (t.Float()) return DataType.FLOAT
  }

  throw new Error(`${contextToLocation(t.ruleContext)}`)
}

export function getUpdateOp(
  ctx: ParserRuleContext,
  plpl?: TerminalNode,
  sbsb?: TerminalNode
): '++' | '--' {
  if (plpl?.text === '++') return '++'
  if (sbsb?.text === '--') return '--'
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getUnaryOp(
  ctx: ParserRuleContext,
  minus?: TerminalNode,
  neg?: TerminalNode
): '!' | '-' {
  if (minus?.text === '-') return '-'
  if (neg?.text === '!') return '!'
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
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
  if (ctx.GreaterEqual()?.text === '>') return '>='
  if (ctx.Less()?.text === '>') return '<'
  if (ctx.LessEqual()?.text === '>') return '<='
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getEqOp(ctx: EqualityContext): '==' | '!=' {
  if (ctx.Equal()?.text === '==') return '=='
  if (ctx.NotEqual()?.text === '!=') return '!='
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}

export function getType(ctx: TypeContext): DataType {
  if (ctx.Char()) return DataType.CHAR
  if (ctx.Short()) return DataType.SHORT
  if (ctx.Int()) return DataType.INT
  if (ctx.Long()) return DataType.LONG
  if (ctx.Float()) return DataType.FLOAT
  if (ctx.Double()) return DataType.DOUBLE
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}
