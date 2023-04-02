import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { compileExpr } from './compileExpr'
import { FunctionCTE, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'

export function compileBlkStmt(node: es.BlockStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  for (const stmt of node.body) {
    if (stmt.type === 'VariableDeclaration') {
      compileVarDef(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ExpressionStatement') {
      compileExpr(stmt.expression, fEnv, gEnv)
      fEnv.instrs.push(MICROCODE.offsetRSP(-WORD_SIZE))
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
      compileIfStmt(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'WhileStatement') {
      compileWhileStmt(stmt, fEnv, gEnv)
      continue
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
      MICROCODE.movMemToMem(['rsp', -WORD_SIZE], ['rbp', v.offset]),
      MICROCODE.offsetRSP(-WORD_SIZE)
    )
  }
}

function compileRetStmt(stmt: es.ReturnStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (stmt.argument) {
    // doesn't consider the case when u return the struct
    compileExpr(stmt.argument, fEnv, gEnv)
    fEnv.instrs.push(
      MICROCODE.movMemToReg('rax', ['rsp', -WORD_SIZE]),
      MICROCODE.offsetRSP(-WORD_SIZE)
    )
  }

  fEnv.instrs.push(MICROCODE.return)
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
    fEnv.instrs.push(
      MICROCODE.movMemToMem(['rsp', -WORD_SIZE], ['rbp', offset]),
      MICROCODE.offsetRSP(-WORD_SIZE)
    )
    return
  }

  throw new CompileTimeError()
}

/**
 * Compiles an IfStatement.
 *
 * It should compile to:
 *
 * Without else: [test, jump-on-false, true-block, ..]
 *
 * With else: [test, jump-on-false, true-block, go-to, false-block, ...]
 */
function compileIfStmt(stmt: es.IfStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const { test, consequent, alternate } = stmt

  const jofor = MICROCODE.jofr(BigInt(0))
  const gotor = MICROCODE.gotor(BigInt(0))

  compileExpr(test, fEnv, gEnv)
  fEnv.instrs.push(jofor)
  const joforAddr = fEnv.instrs.length - 1

  // See `visitor.visitCompoundStatement()`
  // It returns a BlockStatement
  compileBlkStmt(consequent as es.BlockStatement, fEnv, gEnv)

  // The address after the true block
  const alternateAddr = fEnv.instrs.length
  jofor.relativeValue = BigInt(alternateAddr - joforAddr)

  if (alternate) {
    jofor.relativeValue += BigInt(1)
    fEnv.instrs.push(gotor)
    const gotorAddr = fEnv.instrs.length - 1
    compileBlkStmt(alternate as es.BlockStatement, fEnv, gEnv)

    // for the true block to go-to the command after false-block
    gotor.relativeValue = BigInt(fEnv.instrs.length - gotorAddr)
  }
}

/**
 * Compiles a WhileStatement.
 *
 * It should compile to:
 *
 * [test, jump-on-false, body, goto, ...]
 */
function compileWhileStmt(stmt: es.WhileStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const { test, body } = stmt

  const jofor = MICROCODE.jofr(BigInt(0))
  const gotor = MICROCODE.gotor(BigInt(0))

  // Save the testAddr since we need to go back to this
  const testAddr = fEnv.instrs.length
  compileExpr(test, fEnv, gEnv)

  fEnv.instrs.push(jofor)
  const joforAddr = fEnv.instrs.length - 1

  compileBlkStmt(body as es.BlockStatement, fEnv, gEnv)
  fEnv.instrs.push(gotor)
  const gotorAddr = fEnv.instrs.length - 1

  gotor.relativeValue = BigInt(testAddr - gotorAddr) // go backwards
  jofor.relativeValue = BigInt(fEnv.instrs.length - joforAddr)
}
