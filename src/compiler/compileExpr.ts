import * as es from 'estree'

import { BinopCommand } from './../typings/microcode'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileExpr(node: es.Expression, fEnv: FunctionCTE, gEnv: GlobalCTE): FunctionCTE {
  if (node.type === 'Literal') {
    const expr = node as es.Literal
    return compileLit(expr, fEnv, gEnv)
  }

  if (node.type === 'ConditionalExpression') {
    const expr = node as es.ConditionalExpression
    return compileCondExpr(expr, fEnv, gEnv)
  }

  if (node.type === 'LogicalExpression') {
    const expr = node as es.LogicalExpression
    return compileLogicalExpr(expr, fEnv, gEnv)
  }

  if (node.type === 'BinaryExpression') {
    const expr = node as es.BinaryExpression
    return compileBinaryExpr(expr, fEnv, gEnv)
  }

  if (node.type === 'FlexiAssignmentExpression') {
    // TODO: settle left and right
    const expr = node as es.FlexiAssignmentExpression
    return compileExpr(expr.right, fEnv, gEnv)
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
): FunctionCTE {
  throw new CompileTimeError()
}

export function compileLogicalExpr(
  expr: es.LogicalExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): FunctionCTE {
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
  return fEnv
}

export function compileBinaryExpr(
  expr: es.BinaryExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): FunctionCTE {
  const op = expr.operator as BinopCommand['op']

  compileExpr(expr.left, fEnv, gEnv)
  compileExpr(expr.right, fEnv, gEnv)
  fEnv.instrs.push({
    type: 'BinopCommand',
    op // TODO: validate
  })

  return fEnv
}

export function compileLit(expr: es.Literal, fEnv: FunctionCTE, gEnv: GlobalCTE): FunctionCTE {
  if (typeof expr.value === 'number') {
    fEnv.instrs.push({
      type: 'MovImmediateCommand',
      value: expr.value,
      encoding: '2s' // TODO
    })
    return fEnv
  }
  throw new CompileTimeError()
}
