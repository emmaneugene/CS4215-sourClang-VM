import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { BasePointer, GotoRelativeCommand, ReturnValue, StackPointer } from './../typings/microcode'
import { compileExpr } from './compileExpr'
import { FunctionCTE, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'
import { getIdentSize } from './util'

/**
 * Represents a statement that needs to be patched.
 *
 * For example, a continue statement is a go-to
 * command. The actual relative location to jump to
 * needs to be patched later.
 *
 * Similar for break statements.
 */
type StmtWithLabel = {
  /** The statement that needs patching. Should be a goto instruction. */
  stmt: GotoRelativeCommand

  /** The index where `stmt` is in the accompanying instr list. */
  indexInInstrsList: number

  /** Determines how to patch `stmt` */
  patchType: 'loop-start' | 'loop-end'
}

export function compileBlkStmt(
  node: es.BlockStatement,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): StmtWithLabel[] {
  const stmtsWithLabel: StmtWithLabel[] = []

  for (const stmt of node.body) {
    if (stmt.type === 'VariableDeclaration') {
      compileVarDef(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ExpressionStatement') {
      compileExpr(stmt.expression, gEnv, fEnv)
      fEnv.instrs.push(MICROCODE.offsetRSP(-WORD_SIZE))
      continue
    }

    if (stmt.type === 'BlockStatement') {
      fEnv.extendFrame([])
      const ls = compileBlkStmt(stmt, fEnv, gEnv)
      stmtsWithLabel.push(...ls)
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
      const ls = compileIfStmt(stmt, fEnv, gEnv)
      stmtsWithLabel.push(...ls)
      continue
    }

    if (stmt.type === 'WhileStatement') {
      compileWhileStmt(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ForStatement') {
      compileForStmt(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'ReturnStatement') {
      compileRetStmt(stmt, fEnv, gEnv)
      continue
    }

    if (stmt.type === 'BreakStatement') {
      const gotor = MICROCODE.gotor(BigInt(0))
      fEnv.instrs.push(gotor)
      stmtsWithLabel.push({
        stmt: gotor,
        indexInInstrsList: fEnv.instrs.length - 1,
        patchType: 'loop-end'
      })
      continue
    }

    if (stmt.type === 'ContinueStatement') {
      const gotor = MICROCODE.gotor(BigInt(0))
      fEnv.instrs.push(gotor)
      stmtsWithLabel.push({
        stmt: gotor,
        indexInInstrsList: fEnv.instrs.length - 1,
        patchType: 'loop-start'
      })
      continue
    }

    if (stmt.type === 'EmptyStatement') {
      continue
    }

    throw new CompileTimeError()
  }

  return stmtsWithLabel
}

function compileVarDef(stmt: es.VariableDeclaration, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  for (const declaration of stmt.declarations) {
    if (declaration.id.type !== 'Identifier') throw new CompileTimeError()

    const { name, typeList } = declaration.id
    const v = fEnv.addVar(name, typeList, getIdentSize(declaration.id))

    if (!declaration.init) {
      continue
    }

    compileExpr(declaration.init, gEnv, fEnv)
    fEnv.instrs.push(
      MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [BasePointer, v.offset]),
      MICROCODE.offsetRSP(-WORD_SIZE)
    )
  }
}

function compileRetStmt(stmt: es.ReturnStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (stmt.argument) {
    // doesn't consider the case when u return the struct
    compileExpr(stmt.argument, gEnv, fEnv)
    fEnv.instrs.push(
      MICROCODE.movMemToReg(ReturnValue, [StackPointer, -WORD_SIZE]),
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
  const rhs = compileExpr(stmt.right, gEnv, fEnv)

  if (stmt.left.type === 'Identifier') {
    const left = stmt.left as es.Identifier
    const [register, { typeList, offset }] = getVar(left.name, fEnv, gEnv)
    if (rhs.typeList.length !== typeList.length) throw new CompileTimeError()
    fEnv.instrs.push(
      MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [register, offset]),
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
function compileIfStmt(stmt: es.IfStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): StmtWithLabel[] {
  const { test, consequent, alternate } = stmt

  const jofor = MICROCODE.jofr(BigInt(0))
  const gotor = MICROCODE.gotor(BigInt(0))

  compileExpr(test, gEnv, fEnv)
  fEnv.instrs.push(jofor)
  const joforAddr = fEnv.instrs.length - 1

  // See `visitor.visitCompoundStatement()`
  // It returns a BlockStatement
  const ls = compileBlkStmt(consequent as es.BlockStatement, fEnv, gEnv)

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

  return ls
}

/**
 * Compiles a WhileStatement.
 *
 * It should compile to:
 *
 * [test, jump-on-false, body, goto (test), ...]
 */
function compileWhileStmt(stmt: es.WhileStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const { test, body } = stmt

  const jofor = MICROCODE.jofr(BigInt(0))
  const gotor = MICROCODE.gotor(BigInt(0))

  // Save the testAddr since we need to go back to this
  const testAddr = fEnv.instrs.length
  compileExpr(test, gEnv, fEnv)

  fEnv.instrs.push(jofor)
  const joforAddr = fEnv.instrs.length - 1

  // See `visitWhileStmt`. It returns the body as a BlockStatement.
  const patchList = compileBlkStmt(body as es.BlockStatement, fEnv, gEnv)
  fEnv.instrs.push(gotor)
  const gotorAddr = fEnv.instrs.length - 1

  const endOfBlkAddr = fEnv.instrs.length
  gotor.relativeValue = BigInt(testAddr - gotorAddr) // go backwards
  jofor.relativeValue = BigInt(endOfBlkAddr - joforAddr)

  for (const patchStmt of patchList) {
    const { stmt, patchType, indexInInstrsList } = patchStmt
    if (patchType === 'loop-start') {
      stmt.relativeValue = BigInt(testAddr - indexInInstrsList)
    } else if (patchType === 'loop-end') {
      stmt.relativeValue = BigInt(endOfBlkAddr - indexInInstrsList)
    }
  }
}

/**
 * Compiles a ForStmt.
 *
 * It should compile to:
 * [init, test, jump-on-false, body, update, goto (test), ...]
 *
 * If init is present, simply add it to instructions.
 *
 * If test is present, we should jump to it after the block completes
 * one iteration.
 * If test is not present, jump to the first stmt of the block.
 *
 * If update is present, simply add it to the back of the block.
 */
function compileForStmt(stmt: es.ForStatement, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const { init, test, update, body } = stmt

  if (init) {
    if (init.type === 'AssignmentExpression') {
      compileAssignmentStmt(init, fEnv, gEnv)
    } else if (init.type === 'DerefLeftAssignmentExpression') {
      // TODO
    }
  }

  // JOFOR is only added and properly set if test if present
  const jofor = MICROCODE.jofr(BigInt(0))
  let joforAddr = 0

  const gotor = MICROCODE.gotor(BigInt(0))

  // The actual instruction that goto is suppose to go to
  let gotoDestAddr: number | undefined

  if (test) {
    // If there is a test, goto should go to the first
    // instruction of test
    gotoDestAddr = fEnv.instrs.length
    compileExpr(test, gEnv, fEnv)

    joforAddr = fEnv.instrs.length
    fEnv.instrs.push(jofor)
  } else {
    // If there is a no test,
    // goto should go to the first instr
    // in the block
    gotoDestAddr = fEnv.instrs.length
  }

  // See `visitForStmt`. It returns the body as a BlockStatement.
  const patchList = compileBlkStmt(body as es.BlockStatement, fEnv, gEnv)

  // The instruction that continue is suppose to go to
  // If update is present, this should be the update expr
  // If update is not present, it will be start of the body,
  // which is the same as `gotoAddr`
  const continueAddr = fEnv.instrs.length
  if (update) {
    // update can be in 2 forms:
    // an assignment e.g. for (; i < 6; i = i + 2) {...}, or,
    // an expression e.g. i++
    if (update.type === 'AssignmentExpression') {
      compileAssignmentStmt(update, fEnv, gEnv)
    } else {
      compileExpr(update, gEnv, fEnv)
    }
  }

  const gotoAddr = fEnv.instrs.length
  fEnv.instrs.push(gotor)

  const endOfBlkAddr = fEnv.instrs.length
  gotor.relativeValue = BigInt(gotoDestAddr - gotoAddr)
  jofor.relativeValue = BigInt(endOfBlkAddr - joforAddr)

  for (const patchStmt of patchList) {
    const { stmt, patchType, indexInInstrsList } = patchStmt
    if (patchType === 'loop-start') {
      stmt.relativeValue = BigInt(continueAddr - indexInInstrsList)
    } else if (patchType === 'loop-end') {
      stmt.relativeValue = BigInt(endOfBlkAddr - indexInInstrsList)
    }
  }
}
