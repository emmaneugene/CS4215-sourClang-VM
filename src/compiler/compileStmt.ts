import * as es from 'estree'

import { compileExpr } from './compileExpr'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileBlkStmt(node: es.BlockStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  for (const stmt of node.body) {
    if (stmt.type === 'VariableDeclaration') {
      compileVarDef(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ExpressionStatement') {
      compileExpr(stmt.expression, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'BlockStatement') {
      fEnv.extendFrame([])
      compileBlkStmt(stmt, fEnv, gEnv)
      fEnv.popFrame()
      continue
    }

    if (stmt.type === 'IfStatement') {
      throw new CompileTimeError()
    }

    if (stmt.type === 'WhileStatement') {
      throw new CompileTimeError()
    }

    if (stmt.type === 'ForStatement') {
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

function compileVarDef(stmt: es.VariableDeclaration, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  for (const declaration of stmt.declarations) {
    if (declaration.id.type !== 'Identifier') throw new CompileTimeError()

    const { name, datatype: type } = declaration.id
    const v = fEnv.addVar(name, type)

    if (!declaration.init) {
      continue
    }

    compileExpr(declaration.init, fEnv, gEnv)
    fEnv.instrs.push(
      {
        type: 'MovCommand',
        from: {
          type: 'relative',
          reg: 'rsp',
          offset: -8
        },
        to: {
          type: 'relative',
          reg: 'rbp',
          offset: v.offset
        }
      },
      {
        type: 'OffsetRspCommand',
        value: -8
      }
    )
  }
}
