import { ArrayDeclaration, Declaration, VariableDeclaration } from '../ast/ast.declaration'
import { CompileTimeError } from '../compiler/error'
import { WORD_SIZE } from '../constants'
import { ExpressionCompiler } from './compiler.expr'
import { InstrSegment } from './segment.instr'
import { GetIdentifierFunction, MICROCODE } from './utils'

export class DeclarationCompiler {
  private instrSegment: InstrSegment
  private globalInstrSegment: InstrSegment
  private globalExprCompiler: ExpressionCompiler
  private functionExprCompiler: ExpressionCompiler

  constructor(
    instrSegment: InstrSegment,
    globalInstrSegment: InstrSegment,
    getIdentifier: GetIdentifierFunction,
    globalExprCompiler: ExpressionCompiler,
    functionExprCompiler: ExpressionCompiler
  ) {
    this.instrSegment = instrSegment
    this.globalInstrSegment = globalInstrSegment
    this.globalExprCompiler = globalExprCompiler
    this.functionExprCompiler = functionExprCompiler
  }

  /**
   * Compiles a local variable declaration.
   */
  compileDeclaration(stmt: Declaration): void {
    if (stmt.type === 'ArrayDeclaration') {
      return this.compileArrayVariable(stmt, this.functionExprCompiler, this.instrSegment)
    } else {
      return this.compileVariable(stmt, this.functionExprCompiler, this.instrSegment)
    }
  }

  /**
   * Compiles a global variable declaration.
   */
  compileGlobalDeclaration(stmt: Declaration): void {
    if (stmt.type === 'ArrayDeclaration') {
      return this.compileArrayVariable(stmt, this.globalExprCompiler, this.globalInstrSegment)
    } else {
      return this.compileVariable(stmt, this.globalExprCompiler, this.globalInstrSegment)
    }
  }

  private compileVariable(
    stmt: VariableDeclaration,
    exprCompiler: ExpressionCompiler,
    instrSegment: InstrSegment
  ): void {
    if (stmt.address.isInstructionAddr) {
      throw new CompileTimeError('Cannot assign to function address')
    }
    if (!stmt.init) {
      return
    }

    exprCompiler.compileExpr(stmt.init)
    instrSegment.addInstrs([...MICROCODE.popFromStack(stmt.address.address)])
  }

  private compileArrayVariable(
    stmt: ArrayDeclaration,
    exprCompiler: ExpressionCompiler,
    instrSegment: InstrSegment
  ): void {
    if (stmt.address.isInstructionAddr) {
      throw new CompileTimeError('Cannot assign to function address')
    }

    // Set the array pointer to point to the arr[0]
    const [arrayPtrReg, arrayPtrOffset] = stmt.address.address
    instrSegment.addInstrs([
      MICROCODE.leal([arrayPtrReg, arrayPtrOffset + WORD_SIZE], [arrayPtrReg, arrayPtrOffset])
    ])

    if (!stmt.init) {
      return
    }

    exprCompiler.compileExpr(stmt.init)
    for (let i = stmt.size; i >= 1; i--) {
      const arrayElementOffset = arrayPtrOffset + i * WORD_SIZE
      instrSegment.addInstrs([
        ...MICROCODE.popFromStack([arrayPtrReg, arrayPtrOffset + arrayElementOffset])
      ])
    }
  }
}
