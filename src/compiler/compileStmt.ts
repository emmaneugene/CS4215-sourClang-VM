import * as es from 'estree'

import { compileExpr } from './compileExpr'
import { FunctionCTE, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileBlkStmt(node: es.BlockStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  for (const stmt of node.body) {
    if (stmt.type === 'VariableDeclaration') {
      compileVarDef(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ExpressionStatement') {
      compileExpr(stmt.expression, fEnv, gEnv)
      fEnv.instrs.push({
        type: 'OffsetRspCommand',
        value: -8
      })
      continue
    }

    if (stmt.type === 'BlockStatement') {
      fEnv.extendFrame([])
      compileBlkStmt(stmt, fEnv, gEnv)
      fEnv.popFrame()
      continue
    }

    // Issue with extending the Statement type def.
    // But in `parser.visitCompoundStatement`,
    // We will indeed return this type from the traversal
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (stmt.type === 'DerefLeftAssignmentStatement') {
    }

    // Same as above
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (stmt.type === 'AssignmentExpression') {
      compileAssignmentStmt(stmt, fEnv, gEnv)
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
      compileRetStmt(stmt, fEnv, gEnv)
      continue
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

    const { name, typeList } = declaration.id
    const v = fEnv.addVar(name, typeList)

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

function compileRetStmt(stmt: es.ReturnStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (stmt.argument) {
    // doesn't consider the case when u return the struct
    compileExpr(stmt.argument, fEnv, gEnv)

    fEnv.instrs.push(
      {
        type: 'MovCommand',
        from: {
          type: 'relative',
          reg: 'rsp',
          offset: -8
        },
        to: {
          type: 'register',
          reg: 'rax'
        }
      },
      {
        type: 'OffsetRspCommand',
        value: -8
      }
    )
  }

  fEnv.instrs.push({
    type: 'ReturnCommand'
  })
}

export function compileAssignmentStmt(
  stmt: es.AssignmentExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): void {
  const rhs = compileExpr(stmt.right, fEnv, gEnv)

  if (stmt.left.type === 'Identifier') {
    const left = stmt.left as es.Identifier
    const { typeList, offset } = getVar(left.name, fEnv, gEnv)
    if (rhs.typeList.length !== typeList.length) throw new CompileTimeError()

    fEnv.instrs.push({
      type: 'MovCommand',
      from: {
        type: 'relative',
        reg: 'rsp',
        offset: -8
      },
      to: {
        type: 'relative',
        reg: 'rbp',
        offset
      }
    },
    {
      type: 'OffsetRspCommand',
      value: -8
    }
    )
    return
  }

  throw new CompileTimeError()
}
