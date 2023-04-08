import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { DataType, TypeList } from '../ast/ast.core'
import { FatalSyntaxError } from '../parser/parser.error'
import { contextToLocation } from '../parser/utils'
import { TypeContext, TypeDefContext } from './../lang/SourCParser2'

export function convertTypedefCtxToTypeList(ctx: TypeDefContext): TypeList {
  const ptrList: '*'[] = ctx.Star().map(_s => '*')

  if (ctx.Struct()) {
    return {
      // TODO: Structs
      typeList: [...ptrList, DataType.STRUCT]
    }
  } else {
    return {
      typeList: [...ptrList, convertTypeCtxToDataType(ctx.type()!, ctx.Unsigned())]
    }
  }
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

function convertTypeCtxToDataType(
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
