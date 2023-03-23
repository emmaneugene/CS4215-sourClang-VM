import * as es from 'estree'

import { compileExpr } from './compileExpr'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileFunctionDefinition(
  node: es.FunctionDeclaration,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): FunctionCTE {
  const body = node.body
  return compileCompoundStatement(body, fEnv, gEnv)
}

export function compileCompoundStatement(
  node: es.BlockStatement,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): FunctionCTE {
  for (const stmtRaw of node.body) {
    if (stmtRaw.type === 'VariableDeclaration') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'ExpressionStatement') {
      const stmt = stmtRaw as es.ExpressionStatement
      compileExpr(stmt.expression, fEnv, gEnv)
      continue
    }

    if (stmtRaw.type === 'BlockStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'IfStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'WhileStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'ForStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'ReturnStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'BreakStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'ContinueStatement') {
      throw new CompileTimeError()
    }

    if (stmtRaw.type === 'EmptyStatement') {
      continue
    }

    throw new CompileTimeError()
  }

  return fEnv
}
