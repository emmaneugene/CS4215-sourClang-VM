import { ParserRuleContext } from 'antlr4ts'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { DataType } from '../typings/datatype'
import {
  ParameterListContext,
  PointerContext,
  SizeofOperandsContext,
  TypeNameContext,
  TypeSpecifierContext
} from './../lang/SourCParser'
import { InvalidDataType } from './error'

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

/* Returns the pointer list (as a linked list). */
export function getPointerList(ctx: PointerContext | undefined): es.PointerList {
  if (!ctx) {
    return undefined
  }

  return ['*', getPointerList(ctx.pointer())]
}

/* Gets the datatype. */
export function getDatatype(ctx: TypeSpecifierContext[]): DataType {
  if (ctx.length > 2) {
    throw new InvalidDataType()
  }

  if (ctx.length === 1) {
    const t1 = ctx[0]

    if (t1.Char()) {
      return DataType.CHAR
    }
    if (t1.Short()) {
      return DataType.SHORT
    }
    if (t1.Int()) {
      return DataType.INT
    }
    if (t1.Long()) {
      return DataType.LONG
    }
    if (t1.Float()) {
      return DataType.FLOAT
    }
    if (t1.Double()) {
      return DataType.DOUBLE
    }
    if (t1.Void()) {
      return DataType.VOID
    }

    if (t1.structSpecifier()) {
      // TODO: support structs
    }

    throw new InvalidDataType()
  }

  if (ctx.length === 2) {
    const t1 = ctx[0]
    const t2 = ctx[1]

    if (t2.Char()) {
      if (t1.Unsigned()) {
        return DataType.UNSIGNED_CHAR
      }
      if (t1.Signed()) {
        return DataType.CHAR
      }
    }

    if (t2.Short()) {
      if (t1.Unsigned()) {
        return DataType.UNSIGNED_SHORT
      }
      if (t1.Signed()) {
        return DataType.SHORT
      }
    }

    if (t2.Int()) {
      if (t1.Unsigned()) {
        return DataType.UNSIGNED_INT
      }
      if (t1.Signed()) {
        return DataType.INT
      }
    }

    if (t2.Long()) {
      if (t1.Unsigned()) {
        return DataType.UNSIGNED_LONG
      }
      if (t1.Signed()) {
        return DataType.LONG
      }
    }
  }

  throw new InvalidDataType()
}

/* Flattens the parameter list. */
export function getParameterList(ctx: ParameterListContext | undefined): es.Identifier[] {
  if (!ctx) {
    return []
  }

  return [
    {
      type: 'Identifier',
      name: ctx.parameterDeclaration().Identifier().text,
      datatype: getDatatype(ctx.parameterDeclaration().typeSpecifier())
    },
    ...getParameterList(ctx.parameterList())
  ]
}

export function getSizeofOperands(ctx: SizeofOperandsContext): DataType {
  // TODO:
  return DataType.INT
}

export function getTypeName(ctx: TypeNameContext): DataType {
  // TODO:
  return DataType.INT
}
