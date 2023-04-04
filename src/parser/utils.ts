import { ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import {
  AddContext,
  EqualityContext,
  MultContext,
  RelOprContext,
  TypeContext,
  TypeDefContext
} from '../lang/SourCParser2'
import { DataType } from '../typings/datatype'
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

/**
 * Checks if the given typedef is describing
 * a primitive type (like int),
 * a pointer to primitive type,
 * a struct,
 * or pointer to struct
 */
export function getIdentifier(
  typedef: TypeDefContext,
  name: string,
  structDeclr: Record<string, es.StructDef>
): es.Identifier {
  if (typedef.Struct()) {
    const typeList: es.Identifier['typeList'] = typedef.Star().map(s => s.text as '*')
    typeList.push(DataType.STRUCT)
    return {
      type: 'Identifier',
      datatype: DataType.STRUCT,
      name,
      typeList,
      structFields: structDeclr[typedef.Identifier()!.text]
    }
  }

  const t = typedef.type()
  if (t) {
    const datatype = getDatatype(t, typedef.Unsigned())
    const typeList: es.Identifier['typeList'] = typedef.Star().map(s => s.text as '*')
    typeList.push(datatype)

    return {
      type: 'Identifier',
      datatype,
      name,
      typeList
    }
  }

  throw new FatalSyntaxError(contextToLocation(typedef.ruleContext))
}

const MAPPING = {
  SIGNED: {
    char: () => DataType.CHAR,
    short: () => DataType.SHORT,
    int: () => DataType.INT,
    long: () => DataType.LONG,
    float: () => DataType.FLOAT,
    double: () => DataType.DOUBLE,
    void: () => DataType.VOID
  },
  UNSIGNED: {
    char: () => DataType.UNSIGNED_CHAR,
    short: () => DataType.UNSIGNED_SHORT,
    int: () => DataType.UNSIGNED_INT,
    long: () => DataType.UNSIGNED_LONG
  }
}

export function getDatatype(
  t: TypeContext,
  isUnsigned: TerminalNode | boolean | undefined
): DataType {
  const key1 = isUnsigned ? 'UNSIGNED' : 'SIGNED'
  const key2 = getTypeToken(t)

  const fn = MAPPING[key1][key2]
  if (!fn) {
    throw new FatalSyntaxError(contextToLocation(t))
  }

  return fn()
}

function getTypeToken(t: TypeContext): string {
  if (t.Char()) return 'char'
  if (t.Short()) return 'short'
  if (t.Int()) return 'int'
  if (t.Long()) return 'long'
  if (t.Void()) return 'void'
  if (t.Double()) return 'double'
  if (t.Float()) return 'float'
  return ''
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

export function getType(ctx: TypeContext): DataType {
  if (ctx.Char()) return DataType.CHAR
  if (ctx.Short()) return DataType.SHORT
  if (ctx.Int()) return DataType.INT
  if (ctx.Long()) return DataType.LONG
  if (ctx.Float()) return DataType.FLOAT
  if (ctx.Double()) return DataType.DOUBLE
  throw new FatalSyntaxError(contextToLocation(ctx.ruleContext))
}
