import * as es from 'estree'

import { BinopCommand } from './../typings/microcode'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileExpr(node: es.Expression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (node.type === 'Literal') {
    return compileLit(node, fEnv, gEnv)
  }

  if (node.type === 'Identifier') {
    return compileIdent(node, fEnv, gEnv)
  }

  if (node.type === 'LogicalExpression') {
    return compileLogicalExpr(node, fEnv, gEnv)
  }

  if (node.type === 'BinaryExpression') {
    return compileBinaryExpr(node, fEnv, gEnv)
  }

  if (node.type === 'FlexiAssignmentExpression') {
    // TODO: settle left and right
    const expr = node as es.FlexiAssignmentExpression
    return compileExpr(expr.right, fEnv, gEnv)
  }

  if (node.type === 'ConditionalExpression') {
    return compileCondExpr(node, fEnv, gEnv)
  }

  if (node.type === 'CastExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'UpdateExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'SizeofExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'ValueofExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'AddressofExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'UnaryExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'MemberExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'CallExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'SequenceExpression') {
    throw new CompileTimeError()
  }

  throw new CompileTimeError()
}

export function compileCondExpr(
  node: es.ConditionalExpression,
  fEnv: FunctionCTE,
  gCTE: GlobalCTE
): void {
  throw new CompileTimeError()
}

export function compileLogicalExpr(
  expr: es.LogicalExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): void {
  const op = expr.operator

  if (op !== '||' && op !== '&&') {
    throw new CompileTimeError()
  }

  compileExpr(expr.left, fEnv, gEnv)
  compileExpr(expr.right, fEnv, gEnv)
  fEnv.instrs.push({
    type: 'BinopCommand',
    op: expr.operator as '||' | '&&' // TODO: validate
  })
}

export function compileBinaryExpr(
  expr: es.BinaryExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): void {
  const op = expr.operator as BinopCommand['op']

  compileExpr(expr.left, fEnv, gEnv)
  compileExpr(expr.right, fEnv, gEnv)
  fEnv.instrs.push({
    type: 'BinopCommand',
    op // TODO: validate
  })
}

export function compileLit(expr: es.Literal, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (typeof expr.value === 'number') {
    fEnv.instrs.push({
      type: 'MovImmediateCommand',
      value: expr.value,
      encoding: '2s' // TODO
    })
    return
  }

  throw new CompileTimeError()
}

export function compileIdent(expr: es.Identifier, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const { name } = expr

  let varInfo = fEnv.getVar(name)
  if (!varInfo) {
    varInfo = gEnv.getVar(name)
  }
  if (!varInfo) {
    throw new CompileTimeError()
  }

  fEnv.instrs.push(
    {
      type: 'MovCommand',
      from: {
        type: 'relative',
        reg: 'rbp',
        offset: varInfo.offset
      },
      to: {
        type: 'relative',
        reg: 'rsp',
        offset: 0
      }
    },
    {
      type: 'OffsetRSP',
      value: 8
    }
  )
}
