import { Declaration, FunctionDefinition } from '../ast/ast.declaration'
import {
  AssignmentStatement,
  BreakStatement,
  CompoundStatement,
  ContinueStatement,
  DerefLeftAssignmentStatement,
  ExpressionStatement,
  ForStatement,
  IfElseStatement,
  ReturnStatement,
  Statement,
  WhileStatement
} from '../ast/ast.statement'
import { CompileTimeError } from '../compiler/error'
import { WORD_SIZE } from '../constants'
import { GotoRelativeCommand, Microcode, ReturnValue, StackPointer } from '../typings/microcode'
import { DeclarationCompiler } from './compiler.declaration'
import { ExpressionCompiler } from './compiler.expr'
import { InstrSegment } from './segment.instr'
import { MICROCODE } from './utils'

export class FunctionDefCompiler {
  private instrSegment: InstrSegment
  private exprCompiler: ExpressionCompiler
  private declrCompiler: DeclarationCompiler

  constructor(
    instrSegment: InstrSegment,
    exprCompiler: ExpressionCompiler,
    declrCompiler: DeclarationCompiler
  ) {
    this.instrSegment = instrSegment
    this.exprCompiler = exprCompiler
    this.declrCompiler = declrCompiler
  }

  compileFunctionDefinition(stmt: FunctionDefinition): void {
    const { name } = stmt
    const stackFrameSize = this.instrSegment.getStackFrameSizeForFunction(name)

    const functionAddr = this.instrSegment.addInstrs([
      this.allocateStackSpaceForLocalVars(stackFrameSize)
    ])
    this.instrSegment.labelInstr(name, functionAddr)

    this.compileStatement(stmt.body)
  }

  private allocateStackSpaceForLocalVars(size: number): Microcode {
    return MICROCODE.offsetRSP(size)
  }

  compileStatement(stmt: Statement): CompileStmtResult {
    const { type } = stmt
    switch (type) {
      case 'ExpressionStatement':
        return this.compileExprStmt(stmt)
      case 'VariableDeclaration':
        return this.compileDeclaration(stmt)
      case 'ArrayDeclaration':
        return this.compileDeclaration(stmt)
      case 'AssignmentStatement':
        return this.compileAssignmentStmt(stmt)
      case 'DerefLeftAssignmentStatement':
        return this.compileDerefAssignmentStmt(stmt)
      case 'CompoundStatement':
        return this.compileCompoundStmt(stmt)
      case 'IfElseStatement':
        return this.compileIfElseStmt(stmt)
      case 'WhileStatement':
        return this.compileWhileStmt(stmt)
      case 'ForStatement':
        return this.compileForStmt(stmt)
      case 'ReturnStatement':
        return this.compileReturnStmt(stmt)
      case 'BreakStatement':
        return this.compileBreakStmt(stmt)
      case 'ContinueStatement':
        return this.compileContinueStmt(stmt)
    }
  }
  compileExprStmt(stmt: ExpressionStatement): CompileStmtResult {
    this.exprCompiler.compileExpr(stmt.expression)
    this.instrSegment.addInstrs(MICROCODE.popFromStack())
    return []
  }

  compileDeclaration(stmt: Declaration): CompileStmtResult {
    this.declrCompiler.compileDeclaration(stmt)
    return []
  }

  compileAssignmentStmt(stmt: AssignmentStatement): CompileStmtResult {
    const { right, left } = stmt
    this.exprCompiler.compileExpr(right)

    if (left.type === 'Identifier') {
      if (left.address.isInstructionAddr) {
        throw new CompileTimeError('Cannot assign to function')
      }

      this.instrSegment.addInstrs([...MICROCODE.popFromStack(left.address.address)])
      return []
    }

    if (left.type === 'ArrayAccess') {
      this.exprCompiler.loadMemoryAddressOfArrayAccess(left)
      this.instrSegment.addInstrs([
        MICROCODE.movMemToReg([StackPointer, -WORD_SIZE], ReturnValue),
        ...MICROCODE.popFromStack(),
        ...MICROCODE.popFromStack([ReturnValue, 0])
      ])
      return []
    }

    return []
  }

  compileDerefAssignmentStmt(stmt: DerefLeftAssignmentStatement): CompileStmtResult {
    const { right, left } = stmt
    this.exprCompiler.compileExpr(right)
    this.exprCompiler.compileExpr(left)

    const derefIterations = stmt.derefChain.length - 1
    for (let i = 0; i < derefIterations; i++) {
      this.exprCompiler.derefTopofStack()
    }

    this.instrSegment.addInstrs([
      MICROCODE.movMemToReg([StackPointer, -WORD_SIZE], ReturnValue),
      ...MICROCODE.popFromStack(),
      ...MICROCODE.popFromStack([ReturnValue, 0])
    ])

    return []
  }

  compileCompoundStmt(stmt: CompoundStatement): CompileStmtResult {
    const result: CompileStmtResult = []
    stmt.body.forEach(s => {
      const r = this.compileStatement(s)
      result.push(...r)
    })
    return result
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
  compileIfElseStmt(stmt: IfElseStatement): CompileStmtResult {
    const { test, consequent, alternate } = stmt
    const result: CompileStmtResult = []

    const jmpToAltInstr = MICROCODE.jofr(BigInt(0))
    const gotoEndInstr = MICROCODE.gotor(BigInt(0))

    this.exprCompiler.compileExpr(test)

    const jmpToAltInstrPos = this.instrSegment.addInstrs([jmpToAltInstr])
    const resCon = this.compileStatement(consequent)
    const gotoEndInstrPos = this.instrSegment.addInstrs([gotoEndInstr])
    result.push(...resCon)

    const altrInstrPos = this.instrSegment.getNextPos()
    if (alternate) {
      const resAlt = this.compileStatement(alternate)
      result.push(...resAlt)
    }
    const endOfExprPos = this.instrSegment.getNextPos()

    jmpToAltInstr.relativeValue = BigInt(altrInstrPos - jmpToAltInstrPos)
    gotoEndInstr.relativeValue = BigInt(endOfExprPos - gotoEndInstrPos)

    return result
  }

  /**
   * Compiles a WhileStatement.
   *
   * It should compile to:
   *
   * [test, jump-on-false, body, goto (test), ...]
   */
  compileWhileStmt(stmt: WhileStatement): CompileStmtResult {
    const { test, body } = stmt

    const jmpEndInstr = MICROCODE.jofr(BigInt(0))
    const gotoTestInstr = MICROCODE.gotor(BigInt(0))

    const testExprPos = this.instrSegment.getNextPos()
    this.exprCompiler.compileExpr(test)

    const jmpEndInstrPos = this.instrSegment.addInstrs([jmpEndInstr])

    const whileRes = this.compileStatement(body)
    const gotoTestInstrPos = this.instrSegment.addInstrs([gotoTestInstr])

    const endPos = this.instrSegment.getNextPos()

    jmpEndInstr.relativeValue = BigInt(endPos - jmpEndInstrPos)
    gotoTestInstr.relativeValue = BigInt(testExprPos - gotoTestInstrPos)

    this.patchCompileStmtResult(whileRes, testExprPos, endPos)
    return []
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
  compileForStmt(stmt: ForStatement): CompileStmtResult {
    const { init, test, update, body } = stmt

    if (init && init.type === 'AssignmentStatement') {
      this.compileAssignmentStmt(init)
    } else if (init && init.type === 'DerefLeftAssignmentStatement') {
      this.compileDerefAssignmentStmt(init)
    }

    // Only properly added and set
    // if there is a test statement
    const jmpToEndInstr = MICROCODE.jofr(BigInt(0))

    // Determines where to goto after the block completes
    let gotoPosAfterBlock: number | undefined

    if (test) {
      // If test is present,
      // the block should go to it after it completes
      const testInstrPos = this.instrSegment.getNextPos()
      gotoPosAfterBlock = testInstrPos

      this.exprCompiler.compileExpr(test)

      const jmpToEndInstrPos = this.instrSegment.getNextPos()
      jmpToEndInstr.relativeValue = BigInt(jmpToEndInstrPos)
      this.instrSegment.addInstrs([
        jmpToEndInstr // temporary relative value
      ])
    } else {
      // If test is not present,
      // the block should go to its first stmt after it completes
      const bodyInstrPos = this.instrSegment.getNextPos()
      gotoPosAfterBlock = bodyInstrPos
    }

    const forRes = this.compileStatement(body)

    let loopStart: number | undefined

    if (update) {
      const updateInstrPos = this.instrSegment.getNextPos()
      if (update.type === 'AssignmentStatement') {
        this.compileAssignmentStmt(update)
      } else if (update.type === 'DerefLeftAssignmentStatement') {
        this.compileDerefAssignmentStmt(update)
      } else {
        this.exprCompiler.compileExpr(update)
        this.instrSegment.addInstrs([...MICROCODE.popFromStack()])
      }

      loopStart = updateInstrPos
    } else {
      loopStart = this.instrSegment.getNextPos()
    }

    const gotoInstr = MICROCODE.gotor(BigInt(0))
    const gotoInstrPos = this.instrSegment.addInstrs([gotoInstr])
    gotoInstr.relativeValue = BigInt(gotoPosAfterBlock - gotoInstrPos)

    const loopEnd = this.instrSegment.getNextPos()

    jmpToEndInstr.relativeValue = BigInt(loopEnd) - jmpToEndInstr.relativeValue

    this.patchCompileStmtResult(forRes, loopStart, loopEnd)
    return []
  }

  compileReturnStmt(stmt: ReturnStatement): CompileStmtResult {
    if (stmt.expression) {
      this.exprCompiler.compileExpr(stmt.expression)
      this.instrSegment.addInstrs([
        MICROCODE.movMemToReg([StackPointer, -WORD_SIZE], ReturnValue),
        ...MICROCODE.popFromStack()
      ])
    }

    this.instrSegment.addInstrs([MICROCODE.return])

    return []
  }

  compileBreakStmt(_stmt: BreakStatement): CompileStmtResult {
    const gotoInstr = MICROCODE.gotor(BigInt(0))
    const gotoInstrPos = this.instrSegment.addInstrs([gotoInstr])
    gotoInstr.relativeValue = BigInt(gotoInstrPos) // temp value

    return [
      {
        stmt: gotoInstr,
        patchType: 'loop-end'
      }
    ]
  }

  compileContinueStmt(_stmt: ContinueStatement): CompileStmtResult {
    const gotoInstr = MICROCODE.gotor(BigInt(0))
    const gotoInstrPos = this.instrSegment.addInstrs([gotoInstr])
    gotoInstr.relativeValue = BigInt(gotoInstrPos) // temp value

    return [
      {
        stmt: gotoInstr,
        patchType: 'loop-start'
      }
    ]
  }

  private patchCompileStmtResult(patchList: CompileStmtResult, loopStart: number, loopEnd: number) {
    patchList.forEach(p => {
      if (p.patchType === 'loop-start') {
        p.stmt.relativeValue = BigInt(loopStart) - p.stmt.relativeValue
      } else if (p.patchType === 'loop-end') {
        p.stmt.relativeValue = BigInt(loopEnd) - p.stmt.relativeValue
      }
    })
  }
}

/**
 * Represents a statement that needs to be patched.
 *
 * For example, a continue statement is a go - to
 * command.The actual relative location to jump to
 * needs to be patched later.
 *
 * Similar for break statements.
 */
type StmtWithLabel = {
  /**
   * The statement that needs patching.
   * The stmt should temp. hold its own
   * position.
   */
  stmt: GotoRelativeCommand

  /** Determines how to patch `stmt` */
  patchType: 'loop-start' | 'loop-end'
}

type CompileStmtResult = StmtWithLabel[]
