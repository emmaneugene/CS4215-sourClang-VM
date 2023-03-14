import { ParserRuleContext } from 'antlr4ts'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { DataType } from '../typings/datatype'
import {
  ParameterListContext,
  PointerContext,
  SizeofOperandsContext,
  TypeSpecifierContext
} from './../lang/SourCParser'

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
  return DataType.INT
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
  return DataType.INT
}

export function getTypeName(ctx: TerminalNode): DataType {
  return DataType.INT
}
