import * as es from 'estree'

import { compileExpr } from './compileExpr'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { compileVariableDeclaration } from './compileVariableDef'
import { CompileTimeError } from './error'

export function compileBlockStatement(
  node: es.BlockStatement,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): void {
  let blockNum = 0

  for (const stmt of node.body) {
    if (stmt.type === 'VariableDeclaration') {
      compileVariableDeclaration(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ExpressionStatement') {
      compileExprStatement(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'BlockStatement') {
      fEnv.enterBlock(blockNum)
      blockNum++
      compileBlockStatement(stmt, fEnv, gEnv)
      fEnv.exitBlock()
      continue
    }

    if (stmt.type === 'IfStatement') {
      // consequent's block
      fEnv.enterBlock(blockNum)
      blockNum++
      // compileStmt(stmt.consequent, fEnv, gEnv)
      fEnv.exitBlock()

      if (stmt.alternate) {
        fEnv.enterBlock(blockNum)
        blockNum++
        // compileStmt(stmt.alternate, fEnv, gEnv)
        fEnv.exitBlock()
      }

      throw new CompileTimeError()
    }

    if (stmt.type === 'WhileStatement') {
      fEnv.enterBlock(blockNum)
      blockNum++
      // compileStmt(stmt.body, fEnv, gEnv)
      fEnv.exitBlock()

      throw new CompileTimeError()
    }

    if (stmt.type === 'ForStatement') {
      fEnv.enterBlock(blockNum)
      blockNum++
      // compileStmt(stmt.body, fEnv, gEnv)
      fEnv.exitBlock()

      throw new CompileTimeError()
    }

    if (stmt.type === 'ReturnStatement') {
      throw new CompileTimeError()
    }

    if (stmt.type === 'BreakStatement') {
      throw new CompileTimeError()
    }

    if (stmt.type === 'ContinueStatement') {
      throw new CompileTimeError()
    }

    if (stmt.type === 'EmptyStatement') {
      continue
    }

    throw new CompileTimeError()
  }
}

function compileExprStatement(
  node: es.ExpressionStatement,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): FunctionCTE {
  return compileExpr(node.expression, fEnv, gEnv)
}
