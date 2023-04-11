import { DataType, TypeList } from '../ast/ast.core'
import {
  AddressOfExpression,
  ArrayAccess,
  BinaryOperatorExpression,
  CastExpression,
  DereferenceExpression,
  Expression,
  FloatLiteral,
  FunctionCallExpression,
  Identifier,
  IntLiteral,
  LogicalExpression,
  NegationExpression,
  SequenceExpression,
  SizeofExpression,
  StringLiteral,
  TernaryExpression,
  UnaryMinusExpression,
  UpdateExpression
} from '../ast/ast.expression'
import { CompileTimeError } from '../compiler/error'
import { WORD_SIZE } from '../constants'
import { getPrimitiveType, isPointer } from '../parser2/utils'
import { BottomOfMemory, Microcode, ReturnValue, StackPointer } from '../typings/microcode'
import { InstrSegment } from './segment.instr'
import { GetIdentifierFunction, GetInstrAddress, MICROCODE } from './utils'

export class ExpressionCompiler {
  private getIdentifier: GetIdentifierFunction
  private getInstrAddr: GetInstrAddress
  private isExpressionInFunction: boolean
  private instrSegment: InstrSegment

  private TRUE: 1
  private FALSE: 0

  constructor(
    isExpressionInFunction: boolean,
    getIdentifier: GetIdentifierFunction,
    instrSegment: InstrSegment
  ) {
    this.isExpressionInFunction = isExpressionInFunction
    this.instrSegment = instrSegment
    this.getIdentifier = getIdentifier
    this.getInstrAddr = name => instrSegment.getLabelledInstrAddr(name)
  }

  compileExpr(expr: Expression): void {
    if (this.isExpressionInFunction) {
      if (expr.type === 'UpdateExpression') {
        return this.compileUpdateExpr(expr)
      } else if (expr.type === 'FunctionCallExpression') {
        return this.compileFunctionCallExpr(expr)
      } else if (expr.type === 'CastExpression') {
        return this.compileCastExpr(expr)
      } else if (expr.type === 'DereferenceExpression') {
        return this.compileDerefExpr(expr)
      } else if (expr.type === 'Identifier') {
        return this.loadIdentifierValue(expr)
      } else if (expr.type === 'ArrayAccess') {
        return this.loadArrayAccess(expr)
      } else if (expr.type === 'TernaryExpression') {
        return this.compileTernaryExpr(expr)
      }
    }

    // Set of expressions only allowed in global expressions
    if (expr.type === 'UnaryMinusExpression') {
      return this.compileUnaryMinusExpr(expr)
    } else if (expr.type === 'NegationExpression') {
      return this.compileNegationExpr(expr)
    } else if (expr.type === 'AddressOfExpression') {
      return this.compileAddrOfExpr(expr)
    } else if (expr.type === 'SizeofExpression') {
      return this.compileSizeofExpr(expr)
    } else if (expr.type === 'BinaryOperatorExpression') {
      return this.compileBinaryOpExpr(expr)
    } else if (expr.type === 'LogicalExpression') {
      return this.compileLogicalExpr(expr)
    } else if (expr.type === 'IntLiteral') {
      return this.loadIntLiteral(expr)
    } else if (expr.type === 'FloatLiteral') {
      return this.loadFloatLiteral(expr)
    } else if (expr.type === 'StringLiteral') {
      return this.loadStringLiteral(expr)
    } else if (expr.type === 'SequenceExpression') {
      return this.compileSequenceExpr(expr)
    }

    throw new CompileTimeError('Node is not recognised')
  }

  compileUpdateExpr(expr: UpdateExpression): void {
    const op = expr.operator === '++' ? '+' : '-'

    if (expr.isPrefix) {
      return this.compilePrefixExpr(expr, op)
    } else {
      return this.compileSuffixExpr(expr, op)
    }
  }

  compilePrefixExpr(expr: UpdateExpression, op: '+' | '-'): void {
    const { operand } = expr

    if (operand.type === 'Identifier') {
      if (operand.address.isInstructionAddr) {
        throw new CompileTimeError('Cannot update function address')
      }

      const opEncoding = this.convertDatatypeToEncoding(operand.datatype)

      const { address } = operand.address
      this.instrSegment.addInstrs([
        // 1. load initial value
        ...MICROCODE.pushMemOntoStack(address),
        // 2. perform update (increment or decrement)
        MICROCODE.movImm(this.getUpdateExprIncrValue(expr), opEncoding),
        MICROCODE.binop(op, opEncoding, opEncoding),
        // 3. save the updated value
        MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], address)
        // 4. the top of stack already has the updated variable value
      ])
      return
    }

    if (operand.type === 'ArrayAccess') {
      const opEncoding = this.convertDatatypeToEncoding(operand.datatype)

      // 1. load operand's memory address
      this.loadMemoryAddressOfArrayAccess(operand)

      // 1.1 save the operand's memory address into the AX
      // so that later we can put the updated value back
      this.instrSegment.addInstrs([MICROCODE.movMemToReg([StackPointer, -WORD_SIZE], ReturnValue)])

      // 2. perform update (increment or decrement)
      // by loading the actual value
      this.instrSegment.addInstrs([
        ...this.derefTopofStack(),
        MICROCODE.movImm(this.getUpdateExprIncrValue(expr), opEncoding),
        MICROCODE.binop(op, opEncoding, opEncoding)
      ])

      // 3. save the updated value
      this.instrSegment.addInstrs([
        MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [ReturnValue, 0])
      ])

      // 4. the top of stack already has the updated variable value
      return
    }
  }

  compileSuffixExpr(expr: UpdateExpression, op: '+' | '-'): void {
    const { operand } = expr

    if (operand.type === 'Identifier') {
      if (operand.address.isInstructionAddr) {
        throw new CompileTimeError('Cannot update function address')
      }

      const { address } = operand.address
      const opEncoding = this.convertDatatypeToEncoding(operand.datatype)

      this.instrSegment.addInstrs([
        // 1. load initial address
        // this is the value to be returned
        ...MICROCODE.pushMemOntoStack(address),
        // 2. perform update (increment or decrement)
        ...MICROCODE.pushMemOntoStack(address),
        MICROCODE.movImm(this.getUpdateExprIncrValue(expr), opEncoding),
        MICROCODE.binop(op, opEncoding, opEncoding),
        // 3. save the updated value
        MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], address),
        // 4. pop everything added (1)
        MICROCODE.offsetRSP(-WORD_SIZE)
      ])
      return
    }

    if (operand.type === 'ArrayAccess') {
      const opEncoding = this.convertDatatypeToEncoding(operand.datatype)

      // 1. load operand's memory address
      this.loadMemoryAddressOfArrayAccess(operand)

      // 1.1 save the operand's memory address into the AX
      // so that later we can put the updated value back
      this.instrSegment.addInstrs([MICROCODE.movMemToReg([StackPointer, -WORD_SIZE], ReturnValue)])

      // 2. load initial value
      // this is the value to be returned
      this.instrSegment.addInstrs([...this.derefTopofStack()])

      // 3. perform update (increment or decrement)
      // by loading the actual value
      this.instrSegment.addInstrs([
        ...MICROCODE.pushMemOntoStack([StackPointer, -WORD_SIZE]),
        MICROCODE.movImm(this.getUpdateExprIncrValue(expr), opEncoding),
        MICROCODE.binop(op, opEncoding, opEncoding)
      ])

      // 4. save the updated value
      this.instrSegment.addInstrs([
        MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [ReturnValue, 0])
      ])

      // 4. pop everything added (1)
      this.instrSegment.addInstrs([MICROCODE.offsetRSP(-WORD_SIZE)])
      return
    }
  }

  compileFunctionCallExpr(expr: FunctionCallExpression): void {
    const { callee, arguments: callArgs } = expr
    const definedFunctionIdentifier = this.getIdentifier(callee)
    const functionAddr = this.getInstrAddr(callee)
    if (!this.isValidFunctionCallee(definedFunctionIdentifier)) {
      throw new CompileTimeError('Invalid function call')
    }

    for (let i = callArgs.length - 1; i >= 0; i--) {
      this.compileExpr(callArgs[i])
    }

    this.instrSegment.addInstrs([
      MICROCODE.call(BigInt(functionAddr)),
      // remove args after returning
      MICROCODE.offsetRSP(-callArgs.length * WORD_SIZE),
      MICROCODE.movRegToMem(ReturnValue, [StackPointer, 0]),
      MICROCODE.offsetRSP(WORD_SIZE)
    ])
  }

  private isValidFunctionCallee(definedFunctionSignature: TypeList): boolean {
    if (
      definedFunctionSignature.functionParams === undefined &&
      definedFunctionSignature.typeList[0] !== DataType.FUNCTION
    ) {
      return false
    }
    return true
  }

  compileCastExpr(expr: CastExpression): void {
    // TODO: Implement
    throw new Error('Function not implemented.')
  }

  compileDerefExpr(expr: DereferenceExpression): void {
    this.compileExpr(expr.operand)

    this.instrSegment.addInstrs([...this.derefTopofStack()])
  }

  loadIdentifierValue(expr: Identifier): void {
    const list: Microcode[] = []
    if (expr.address.isInstructionAddr) {
      const reg = BottomOfMemory
      const addr = this.getInstrAddr(expr.name)
      list.push(...MICROCODE.pushMemOntoStack([reg, addr]))
    } else {
      list.push(...MICROCODE.pushMemOntoStack(expr.address.address))
    }

    this.instrSegment.addInstrs(list)
  }

  loadArrayAccess(expr: ArrayAccess): void {
    // calculate the memory address to access
    this.compileExpr(expr.index)
    this.instrSegment.addInstrs([...this.multiplyTopofStackForPointerArithmetic()])
    this.loadIdentifierValue(expr.array)
    this.instrSegment.addInstrs([MICROCODE.binop('+', '2s', '2s')])

    // dereference that memory address
    this.instrSegment.addInstrs([...this.derefTopofStack()])
  }

  compileTernaryExpr(expr: TernaryExpression): void {
    const { test, consequent, alternate } = expr
    const joforInstr = MICROCODE.jofr(BigInt(0))
    const gotorInstr = MICROCODE.gotor(BigInt(0))

    this.compileExpr(test)
    const joforPos = this.instrSegment.addInstrs([joforInstr])

    this.compileExpr(consequent)
    const gotorPos = this.instrSegment.addInstrs([gotorInstr])

    const alternatePos = this.instrSegment.getNextPos()
    this.compileExpr(alternate)
    const endOfExprPos = this.instrSegment.getNextPos()

    joforInstr.relativeValue = BigInt(alternatePos - joforPos)
    gotorInstr.relativeValue = BigInt(endOfExprPos - gotorPos)
  }

  compileUnaryMinusExpr(expr: UnaryMinusExpression): void {
    this.compileExpr(expr.operand)
    this.instrSegment.addInstrs([
      MICROCODE.unop('-', this.convertDatatypeToEncoding(expr.operand.datatype))
    ])
  }

  compileNegationExpr(expr: NegationExpression): void {
    this.compileExpr(expr.operand)
    this.instrSegment.addInstrs([
      MICROCODE.unop('!', this.convertDatatypeToEncoding(expr.operand.datatype))
    ])
  }

  compileAddrOfExpr(expr: AddressOfExpression): void {
    const { operand } = expr

    if (operand.type === 'Identifier') {
      if (operand.address.isInstructionAddr) {
        const reg = BottomOfMemory
        const addr = this.getInstrAddr(operand.name)
        this.instrSegment.addInstrs([
          MICROCODE.leal([reg, addr], [StackPointer, 0]),
          MICROCODE.offsetRSP(WORD_SIZE)
        ])
        return
      } else {
        this.instrSegment.addInstrs([
          MICROCODE.leal(operand.address.address, [StackPointer, 0]),
          MICROCODE.offsetRSP(WORD_SIZE)
        ])
        return
      }
    } else if (operand.type === 'ArrayAccess') {
      this.loadMemoryAddressOfArrayAccess(operand)
      return
    } else {
      // will never happen
      throw new CompileTimeError()
    }
  }

  compileSizeofExpr(_expr: SizeofExpression): void {
    // It's fine since we are not doing structs
    this.instrSegment.addInstrs([MICROCODE.movImm(WORD_SIZE, '2s')])
  }

  compileBinaryOpExpr(expr: BinaryOperatorExpression): void {
    const { left, right } = expr
    const isLeftPtr = isPointer(left.datatype)
    const isRightPtr = isPointer(right.datatype)

    if (!isLeftPtr && !isRightPtr) {
      return this.compileBinaryOpExprWithoutPtrArithmetic(expr)
    } else {
      return this.compileBinaryOpExprWithPtrArithmetic(expr, isLeftPtr)
    }
  }

  /**
   * Compiles a binary expression without
   * considering casting. We do need
   * to consider casting the binop result
   * from ints to floats.
   */
  compileBinaryOpExprWithoutPtrArithmetic(expr: BinaryOperatorExpression): void {
    this.compileExpr(expr.left)
    this.compileExpr(expr.right)
    this.instrSegment.addInstrs([
      MICROCODE.binop(
        this.validateBinaryOp(expr.operator),
        this.convertDatatypeToEncoding(expr.left.datatype),
        this.convertDatatypeToEncoding(expr.right.datatype)
      )
    ])

    // TODO: Consider casting
    // from ints to floats.
  }

  /**
   * Compiles a binary expression where one side is
   * a pointer. This returns a pointer, so we do not need
   * to consider casting.
   */
  compileBinaryOpExprWithPtrArithmetic(expr: BinaryOperatorExpression, isPtrOnLeft: boolean): void {
    // Compile left
    // and multiply if needed
    this.compileExpr(expr.left)
    if (!isPtrOnLeft) {
      this.instrSegment.addInstrs([...this.multiplyTopofStackForPointerArithmetic()])
    }

    this.compileExpr(expr.right)
    if (isPtrOnLeft) {
      this.instrSegment.addInstrs([...this.multiplyTopofStackForPointerArithmetic()])
    }

    this.instrSegment.addInstrs([
      MICROCODE.binop(
        this.validateBinaryOp(expr.operator),
        this.convertDatatypeToEncoding(expr.left.datatype),
        this.convertDatatypeToEncoding(expr.right.datatype)
      )
    ])
  }

  compileLogicalExpr(expr: LogicalExpression): void {
    if (expr.operator === '||') {
      return this.compileLogicalOrExpr(expr)
    } else {
      return this.compileLogicalAndExpr(expr)
    }
  }

  /**
   * Compiles a logical || expression.
   * Extra care is needed to achieve the
   * short-circuiting.
   */
  private compileLogicalOrExpr(expr: LogicalExpression): void {
    const { left, right } = expr

    const leftOnFalseInstr = MICROCODE.jofr(BigInt(0))
    const leftOnTrueInstr = MICROCODE.gotor(BigInt(0))

    const rightOnFalseInstr = MICROCODE.jofr(BigInt(0))
    const rightOnTrueInstr = MICROCODE.gotor(BigInt(0))

    const gotoEndInstr = MICROCODE.gotor(BigInt(0))

    this.compileExpr(left)

    const leftOnFalseInstrPos = this.instrSegment.getNextPos()
    const leftOnTrueInstrPos = this.instrSegment.addInstrs([
      leftOnFalseInstr, // jof to right expr
      leftOnTrueInstr // goto load TRUE
    ])

    const rightExprPos = this.instrSegment.getNextPos()
    this.compileExpr(right)

    const rightOnFalseInstrPos = this.instrSegment.getNextPos()
    const rightOnTrueInstrPos = this.instrSegment.addInstrs([
      rightOnFalseInstr, // jof to load FALSE
      rightOnTrueInstr // goto load TRUE
    ])

    const loadTruePos = this.instrSegment.getNextPos()
    const gotoEndInstrPos = this.instrSegment.addInstrs([
      MICROCODE.movImm(this.TRUE, '2s'),
      gotoEndInstr
    ])

    const loadFalsePos = this.instrSegment.getNextPos()
    this.instrSegment.addInstrs([MICROCODE.movImm(this.FALSE, '2s')])

    const endOfExprPos = this.instrSegment.getNextPos()

    leftOnFalseInstr.relativeValue = BigInt(rightExprPos - leftOnFalseInstrPos)
    leftOnTrueInstr.relativeValue = BigInt(loadTruePos - leftOnTrueInstrPos)
    rightOnFalseInstr.relativeValue = BigInt(loadFalsePos - rightOnFalseInstrPos)
    rightOnTrueInstr.relativeValue = BigInt(loadTruePos - rightOnTrueInstrPos)
    gotoEndInstr.relativeValue = BigInt(endOfExprPos - gotoEndInstrPos)
  }

  /**
   * Compiles a logical && expression.
   * Extra care is needed to achieve the
   * short-circuiting.
   */
  private compileLogicalAndExpr(expr: LogicalExpression): void {
    const { left, right } = expr

    const leftOnFalseInstr = MICROCODE.jofr(BigInt(0))
    const leftOnTrueInstr = MICROCODE.gotor(BigInt(0))

    const rightOnFalseInstr = MICROCODE.jofr(BigInt(0))
    const rightOnTrueInstr = MICROCODE.gotor(BigInt(0))

    const gotoEndInstr = MICROCODE.gotor(BigInt(0))

    this.compileExpr(left)

    const leftOnFalseInstrPos = this.instrSegment.getNextPos()
    const leftOnTrueInstrPos = this.instrSegment.addInstrs([
      leftOnFalseInstr, // jof to load FALSE
      leftOnTrueInstr // goto right expr
    ])

    const rightExprPos = this.instrSegment.getNextPos()
    this.compileExpr(right)

    const rightOnFalseInstrPos = this.instrSegment.getNextPos()
    const rightOnTrueInstrPos = this.instrSegment.addInstrs([
      rightOnFalseInstr, // jof to load FALSE
      rightOnTrueInstr // goto load TRUE
    ])

    const loadTruePos = this.instrSegment.getNextPos()
    const gotoEndInstrPos = this.instrSegment.addInstrs([
      MICROCODE.movImm(this.TRUE, '2s'),
      gotoEndInstr
    ])

    const loadFalsePos = this.instrSegment.getNextPos()
    this.instrSegment.addInstrs([MICROCODE.movImm(this.FALSE, '2s')])

    const endOfExprPos = this.instrSegment.getNextPos()

    leftOnFalseInstr.relativeValue = BigInt(loadFalsePos - leftOnFalseInstrPos)
    leftOnTrueInstr.relativeValue = BigInt(rightExprPos - leftOnTrueInstrPos)
    rightOnFalseInstr.relativeValue = BigInt(loadFalsePos - rightOnFalseInstrPos)
    rightOnTrueInstr.relativeValue = BigInt(loadTruePos - rightOnTrueInstrPos)
    gotoEndInstr.relativeValue = BigInt(endOfExprPos - gotoEndInstrPos)
  }

  loadIntLiteral(expr: IntLiteral): void {
    this.instrSegment.addInstrs([MICROCODE.movImm(expr.value, '2s')])
  }

  loadFloatLiteral(expr: FloatLiteral): void {
    this.instrSegment.addInstrs([MICROCODE.movImm(expr.value, 'ieee')])
  }

  loadStringLiteral(expr: StringLiteral): void {
    this.instrSegment.addInstrs([MICROCODE.movImm(expr.address, '2s')])
  }

  compileSequenceExpr(expr: SequenceExpression): void {
    expr.expressions.forEach(e => {
      this.compileExpr(e)
    })
  }

  /**
   * Takes the value at the top of the stack,
   * multiplies it by 8,
   * and puts it back on the top of the stack.
   *
   * Used for pointer arithmetic.
   */
  private multiplyTopofStackForPointerArithmetic(): Microcode[] {
    return [MICROCODE.movImm(WORD_SIZE, '2s'), MICROCODE.binop('*', '2s', '2s')]
  }

  /**
   * Takes the value at the top of the stack,
   * treats it as memory address,
   * and places the data at that memory address back onto the stack.
   *
   * In other words:
   * Memory[TOP_OF_STACK] = Memory[Memory[TOP_OF_STACK]]
   *
   */
  derefTopofStack(): Microcode[] {
    return [
      MICROCODE.movMemToReg([StackPointer, -WORD_SIZE], ReturnValue),
      MICROCODE.movMemToMem([ReturnValue, 0], [StackPointer, -WORD_SIZE])
    ]
  }

  /**
   * Given a certain variable's type, determines how much to update
   * a variable by when there is an increment/decrement operator on
   * it.
   *
   * E.g. given x++:
   *
   * if x is a pointer, increase x's value by WORD_SIZE.
   * if x is an int/float, increase x's value by 1
   */
  private getUpdateExprIncrValue(expr: UpdateExpression): number {
    if (isPointer(expr.operand.datatype)) {
      return WORD_SIZE
    } else {
      return 1
    }
  }

  private convertDatatypeToEncoding(datatype: TypeList): '2s' | 'ieee' {
    if (isPointer(datatype)) {
      return '2s'
    }

    if (
      getPrimitiveType(datatype) === DataType.DOUBLE ||
      getPrimitiveType(datatype) === DataType.DOUBLE
    ) {
      return 'ieee'
    } else {
      return '2s'
    }
  }

  private validateBinaryOp(op: string): BinaryOperatorExpression['operator'] {
    if (['+', '-', '*', '/', '%', '<', '<=', '>', '>='].includes(op)) {
      return op as BinaryOperatorExpression['operator']
    }

    throw new CompileTimeError()
  }

  /**
   * Puts the memory address of the array element
   * to access on the top of the stack.
   */
  loadMemoryAddressOfArrayAccess(expr: ArrayAccess): void {
    const { index, array } = expr

    this.compileExpr(index)
    this.instrSegment.addInstrs([...this.multiplyTopofStackForPointerArithmetic()])
    this.loadIdentifierValue(array)
    this.instrSegment.addInstrs([MICROCODE.binop('+', '2s', '2s')])
  }
}
