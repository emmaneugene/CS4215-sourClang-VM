import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { DataType } from './../typings/datatype'
import {
  BasePointer,
  BottomOfMemory,
  Microcode,
  ReturnValue,
  StackPointer
} from './../typings/microcode'
import { CompileType, FunctionCTE, getFxDecl, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'
import { getUpdateSize } from './util'

export function compileExpr(node: es.Expression, gEnv: GlobalCTE, fEnv?: FunctionCTE): CompileType {
  if (fEnv) {
    if (node.type === 'MemberExpression') {
      throw new CompileTimeError() //TODO: implement for array and struct
    }

    if (node.type === 'CallExpression') {
      return compileCallExpr(node, gEnv, fEnv)
    }

    if (node.type === 'SequenceExpression') {
      throw new CompileTimeError()
    }

    if (node.type === 'DereferenceExpression') {
      return compileValueOfExpr(node, gEnv, fEnv)
    }

    if (node.type === 'ConditionalExpression') {
      throw new CompileTimeError()
    }

    if (node.type === 'CastExpression') {
      throw new CompileTimeError()
    }

    if (node.type === 'UpdateExpression') {
      return compileUpdateExpr(node, gEnv, fEnv)
    }

    if (node.type === 'Identifier') {
      return loadIdentValue(node, gEnv, fEnv)
    }
  }

  if (node.type === 'Literal') {
    return loadLit(node, gEnv, fEnv)
  }

  if (node.type === 'LogicalExpression') {
    return compileLogicalExpr(node, gEnv, fEnv)
  }

  if (node.type === 'BinaryExpression') {
    return compileBinExpr(node, gEnv, fEnv)
  }

  if (node.type === 'SizeofExpression') {
    throw new CompileTimeError() // TODO: to implement
  }

  if (node.type === 'AddressofExpression') {
    return compileAddrOfExpr(node, gEnv, fEnv)
  }

  if (node.type === 'UnaryExpression') {
    return compileUnaryExpr(node, gEnv, fEnv)
  }

  throw new CompileTimeError()
}
const getInstructions = (fEnv: FunctionCTE | undefined, gEnv: GlobalCTE): Microcode[] => {
  if (fEnv) {
    return fEnv.instrs
  } else {
    return gEnv.globalDeclarationInstrs
  }
}
export function loadLit(expr: es.Literal, gEnv: GlobalCTE, fEnv?: FunctionCTE): CompileType {
  const isStrLiteral = (input: string) => input.charAt(0) === '"'

  if (typeof expr.value === 'number') {
    getInstructions(fEnv, gEnv).push(MICROCODE.movImm(expr.value, '2s'))
    return {
      // Return the largest possible
      // primitive type
      t: DataType.LONG,
      typeList: [DataType.LONG]
    }
  }

  if (expr.raw && isStrLiteral(expr.raw)) {
    const strAddr = gEnv.getStringAddr(expr.raw)
    getInstructions(fEnv, gEnv).push(MICROCODE.movImm(strAddr, '2s'))
    return {
      t: DataType.CHAR,
      typeList: ['*', DataType.CHAR]
    }
  }

  throw new CompileTimeError()
}

function loadIdentValue(expr: es.Identifier, gEnv: GlobalCTE, fEnv: FunctionCTE): CompileType {
  const { name } = expr
  const [register, varInfo] = getVar(name, fEnv, gEnv)

  fEnv.instrs.push(
    MICROCODE.movMemToMem([register, varInfo.offset], [StackPointer, 0]),
    MICROCODE.offsetRSP(WORD_SIZE)
  )

  return {
    ...varInfo,
    t: varInfo.typeList[-1] as DataType
  }
}

function compileLogicalExpr(
  expr: es.LogicalExpression,
  gEnv: GlobalCTE,
  fEnv?: FunctionCTE
): CompileType {
  if (!['||', '&&'].includes(expr.operator)) throw new CompileTimeError()
  const op = expr.operator as '||' | '&&'

  const t1 = compileExpr(expr.left, gEnv, fEnv)
  const t2 = compileExpr(expr.right, gEnv, fEnv)

  // TODO: Check for valid type pairs

  getInstructions(fEnv, gEnv).push(MICROCODE.binop(op))
  return {
    t: DataType.LONG,
    typeList: [DataType.LONG]
  }
}

function compileBinExpr(
  expr: es.BinaryExpression,
  gEnv: GlobalCTE,
  fEnv?: FunctionCTE
): CompileType {
  if (!['+', '-', '*', '/', '%', '==', '!=', '<', '<=', '>', '>='].includes(expr.operator))
    throw new CompileTimeError()
  const op = expr.operator as '+' | '-' | '*' | '/' | '%'

  const t1 = compileExpr(expr.left, gEnv, fEnv)
  const t2 = compileExpr(expr.right, gEnv, fEnv)

  // TODO: Check for valid type pairs
  // typechecker.throwIfPointer([t1, t2])

  getInstructions(fEnv, gEnv).push(MICROCODE.binop(op))
  return {
    t: DataType.LONG,
    typeList: [DataType.LONG]
  }
}

function compileUpdateExpr(
  expr: es.UpdateExpression,
  gEnv: GlobalCTE,
  fEnv: FunctionCTE
): CompileType {
  const op = expr.operator === '++' ? '+' : expr.operator === '--' ? '-' : undefined
  if (!op) {
    throw new CompileTimeError()
  }

  // Limit the argument for ++/-- operators
  const ident = expr.argument
  if (ident.type !== 'Identifier') {
    throw new CompileTimeError()
  }

  const [register, varInfo] = getVar(ident.name, fEnv, gEnv)

  if (expr.prefix) {
    // if prefix e.g. ++x
    fEnv.instrs.push(
      // 1. perform update (increment or decrement)
      MICROCODE.movMemToMem([register, varInfo.offset], [StackPointer, 0]),
      MICROCODE.offsetRSP(WORD_SIZE),
      MICROCODE.movImm(getUpdateSize(varInfo.typeList), '2s'),
      MICROCODE.binop(op),
      // 2. save the updated value
      MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [register, varInfo.offset])
      // 3. the top of stack already has the updated variable value
    )
  } else {
    // if postfix
    fEnv.instrs.push(
      // 1. push the variable's old data onto stack
      MICROCODE.movMemToMem([register, varInfo.offset], [StackPointer, 0]),
      MICROCODE.offsetRSP(WORD_SIZE),
      // 2. perform update (increment or decrement)
      // we need a copy of the variable since binop overrides it
      MICROCODE.movMemToMem([register, varInfo.offset], [StackPointer, 0]),
      MICROCODE.offsetRSP(WORD_SIZE),
      MICROCODE.movImm(getUpdateSize(varInfo.typeList), '2s'),
      MICROCODE.binop(op),
      // 3. save the updated value
      // ensure that top tof stack has updated variable value
      MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [register, varInfo.offset]),
      MICROCODE.offsetRSP(-WORD_SIZE)
    )
  }

  return {
    t: varInfo.typeList[varInfo.typeList.length - 1] as DataType,
    typeList: varInfo.typeList
  }
}

function compileAddrOfExpr(
  expr: es.AddressofExpression,
  gEnv: GlobalCTE,
  fEnv?: FunctionCTE
): CompileType {
  if (expr.expression.type === 'Identifier') {
    const [register, v] = getVar(expr.expression.name, fEnv, gEnv)
    getInstructions(fEnv, gEnv).push(
      MICROCODE.leal([register, v.offset], [StackPointer, 0]),
      MICROCODE.offsetRSP(WORD_SIZE)
    )
    return {
      t: v.typeList[v.typeList.length - 1] as DataType,
      typeList: ['*', ...v.typeList]
    }
  }

  // TODO: Consider structs and array members
  throw new CompileTimeError()
}

function compileValueOfExpr(
  expr: es.DereferenceExpression,
  gEnv: GlobalCTE,
  fEnv: FunctionCTE
): CompileType {
  const t = compileExpr(expr.expression, gEnv, fEnv)

  // Check that the expr is indeed a pointer
  typechecker.throwIfNotPointer([t])

  fEnv.instrs.push(
    MICROCODE.movMemToReg(ReturnValue, [StackPointer, -WORD_SIZE]),
    MICROCODE.movMemToMem([ReturnValue, 0], [StackPointer, -WORD_SIZE])
  )

  // Remove the top most * in the pointerList
  // To reflect that one 'hop' has been done
  return {
    ...t,
    typeList: t.typeList.slice(1, t.typeList.length)
  }
}

function compileUnaryExpr(
  expr: es.UnaryExpression,
  gEnv: GlobalCTE,
  fEnv?: FunctionCTE
): CompileType {
  if (expr.operator !== '-' && expr.operator !== '!') {
    throw new CompileTimeError()
  }

  const t = compileExpr(expr.argument, gEnv, fEnv)
  getInstructions(fEnv, gEnv).push(MICROCODE.unop(expr.operator))

  if (expr.operator === '!') {
    return {
      // Negation operator
      // returns 1 or 0
      t: DataType.LONG,
      typeList: [DataType.LONG]
    }
  } else {
    // Unary minus
    // returns the same type
    // value is changed
    return t
  }
}

function compileCallExpr(expr: es.CallExpression, gEnv: GlobalCTE, fEnv: FunctionCTE): CompileType {
  const { callee, arguments: args } = expr // eslint disallows vars called variables

  // Based on `visitor.visitFunctionCall`, CallExpression
  // will only have Identifier as callee
  if (callee.type !== 'Identifier') throw new CompileTimeError()
  const fnName = callee.name
  const { returnType, argumentTypes: params, addr } = getFxDecl(fnName, gEnv)
  let argSize = 0

  // The user didn't provide enough args for this function call
  // The user could provide more args than requested
  // if (args.length < params.length) throw new CompileTimeError()

  // push onto stack in reverse over
  for (let i = args.length - 1; i >= 0; i--) {
    const supposedArgType = params[i]
    const givenArgType = compileExpr(args[i] as es.Expression, gEnv, fEnv)

    // TODO: Need to check if user provided valid types
    // But there may be a need to do implicit casting
    // E.g. supposedArgType is int
    // givenArgType can be long or int
    // if (!isEqual(supposedArgType, givenArgType.typeList)) {
    //   // User provided some invalid type
    //   throw new CompileTimeError()
    // }

    argSize += WORD_SIZE // depends on the size of the expression
  }

  // CALL pushes old rbp and return addr
  fEnv.instrs.push(MICROCODE.call(addr))

  if (returnType[0] === DataType.STRUCT) {
    // need to handle struct return types carefully
  } else {
    fEnv.instrs.push(
      MICROCODE.offsetRSP(-argSize), // remove all args
      MICROCODE.movRegToMem(ReturnValue, [StackPointer, 0]),
      MICROCODE.offsetRSP(WORD_SIZE)
    )
  }

  return {
    t: returnType[returnType.length - 1] as DataType,
    typeList: returnType
  }
}

const typechecker = {
  isPointer(ls: es.TypeList): boolean {
    return ls[0] === '*'
  },

  throwIfPointer(ls: CompileType[]): void {
    ls.forEach(e => {
      if (this.isPointer(e.typeList)) throw new CompileTimeError()
    })
  },

  throwIfNotPointer(ls: CompileType[]): void {
    ls.forEach(e => {
      if (!this.isPointer(e.typeList)) throw new CompileTimeError()
    })
  },

  throwIfFloat(ls: CompileType[]): void {
    ls.forEach(e => {
      if ([DataType.FLOAT, DataType.DOUBLE].includes(e.t)) throw new CompileTimeError()
    })
  }
}
