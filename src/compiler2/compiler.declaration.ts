import { ArrayDeclaration, Declaration, VariableDeclaration } from '../ast/ast.declaration'
import { CompileTimeError } from '../compiler/error'
import { WORD_SIZE } from '../constants'
import { ExpressionCompiler } from './compiler.expr'
import { InstrSegment } from './segment.instr'
import { GetIdentifierFunction, MICROCODE } from './utils'

export class DeclarationCompiler {
  private instrSegment: InstrSegment
  private globalExprCompiler: ExpressionCompiler
  private functionExprCompiler: ExpressionCompiler

  constructor(
    instrSegment: InstrSegment,
    getIdentifier: GetIdentifierFunction,
    globalExprCompiler: ExpressionCompiler,
    functionExprCompiler: ExpressionCompiler
  ) {
    this.instrSegment = instrSegment
    this.globalExprCompiler = globalExprCompiler
    this.functionExprCompiler = functionExprCompiler
  }

  /**
   * Compiles a local variable declaration.
   */
  compileDeclaration(stmt: Declaration): void {
    if (stmt.type === 'ArrayDeclaration') {
      return this.compileArrayVariable(stmt, this.functionExprCompiler)
    } else {
      return this.compileVariable(stmt, this.functionExprCompiler)
    }
  }

  /**
   * Compiles a global variable declaration.
   */
  compileGlobalDeclaration(stmt: Declaration): void {
    if (stmt.type === 'ArrayDeclaration') {
      return this.compileArrayVariable(stmt, this.globalExprCompiler)
    } else {
      return this.compileVariable(stmt, this.globalExprCompiler)
    }
  }

  private compileVariable(stmt: VariableDeclaration, exprCompiler: ExpressionCompiler): void {
    if (stmt.address.isInstructionAddr) {
      throw new CompileTimeError('Cannot assign to function address')
    }
    if (!stmt.init) {
      return
    }

    exprCompiler.compileExpr(stmt.init)
    this.instrSegment.addInstrs([...MICROCODE.popFromStack(stmt.address.address)])
  }

  private compileArrayVariable(stmt: ArrayDeclaration, exprCompiler: ExpressionCompiler): void {
    if (stmt.address.isInstructionAddr) {
      throw new CompileTimeError('Cannot assign to function address')
    }

    // Set the array pointer to point to the arr[0]
    const [arrayPtrReg, arrayPtrOffset] = stmt.address.address
    MICROCODE.leal([arrayPtrReg, arrayPtrOffset + WORD_SIZE], [arrayPtrReg, arrayPtrOffset])

    if (!stmt.init) {
      return
    }

    exprCompiler.compileExpr(stmt.init)
    for (let i = stmt.size; i >= 1; i--) {
      const arrayElementOffset = arrayPtrOffset + i * WORD_SIZE
      this.instrSegment.addInstrs([
        ...MICROCODE.popFromStack([arrayPtrReg, arrayPtrOffset + arrayElementOffset])
      ])
    }
  }
}
