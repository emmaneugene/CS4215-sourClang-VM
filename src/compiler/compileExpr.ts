import * as es from 'estree'

import { DataType } from './../typings/datatype'
import {
  BinopCommand,
  LeaCommand,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  UnopCommand
} from './../typings/microcode'
import { CompileType, FunctionCTE, getFxDecl, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileExpr(node: es.Expression, fEnv: FunctionCTE, gEnv: GlobalCTE): CompileType {
  if (node.type === 'Literal') {
    return loadLit(node, fEnv, gEnv)
  }

  if (node.type === 'Identifier') {
    return loadIdentValue(node, fEnv, gEnv)
  }

  if (node.type === 'LogicalExpression') {
    return compileLogicalExpr(node, fEnv, gEnv)
  }

  if (node.type === 'BinaryExpression') {
    return compileBinExpr(node, fEnv, gEnv)
  }

  if (node.type === 'ConditionalExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'CastExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'UpdateExpression') {
    return compileUpdateExpr(node, fEnv, gEnv)
  }

  if (node.type === 'SizeofExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'DereferenceExpression') {
    return compileValueOfExpr(node, fEnv, gEnv)
  }

  if (node.type === 'AddressofExpression') {
    return compileAddrOfExpr(node, fEnv, gEnv)
  }

  if (node.type === 'UnaryExpression') {
    return compileUnaryExpr(node, fEnv, gEnv)
  }

  if (node.type === 'MemberExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'CallExpression') {
    return compileCallExpr(node, fEnv, gEnv)
  }

  if (node.type === 'SequenceExpression') {
    throw new CompileTimeError()
  }

  throw new CompileTimeError()
}

function loadLit(expr: es.Literal, fEnv: FunctionCTE, gEnv: GlobalCTE): CompileType {
  if (typeof expr.value === 'number') {
    fEnv.instrs.push(util.movImm(expr.value, '2s'))
    return {
      // Return the largest possible
      // primitive type
      t: DataType.LONG,
      typeList: [DataType.LONG]
    }
  }

  throw new CompileTimeError()
}

function loadIdentValue(expr: es.Identifier, fEnv: FunctionCTE, gEnv: GlobalCTE): CompileType {
  const { name } = expr
  const varInfo = getVar(name, fEnv, gEnv)

  fEnv.instrs.push(util.movMemToMem(['rbp', varInfo.offset], ['rsp', 0]), util.offsetRSP(8))

  return {
    ...varInfo,
    t: varInfo.typeList[-1] as DataType
  }
}

function compileLogicalExpr(
  expr: es.LogicalExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): CompileType {
  if (!['||', '&&'].includes(expr.operator)) throw new CompileTimeError()
  const op = expr.operator as '||' | '&&'

  const t1 = compileExpr(expr.left, fEnv, gEnv)
  const t2 = compileExpr(expr.right, fEnv, gEnv)

  // TODO: Check for valid type pairs

  fEnv.instrs.push(util.binop(op))
  return {
    t: DataType.LONG,
    typeList: [DataType.LONG]
  }
}

function compileBinExpr(
  expr: es.BinaryExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): CompileType {
  if (!['+', '-', '*', '/', '%'].includes(expr.operator)) throw new CompileTimeError()
  const op = expr.operator as '+' | '-' | '*' | '/' | '%'

  const t1 = compileExpr(expr.left, fEnv, gEnv)
  const t2 = compileExpr(expr.right, fEnv, gEnv)

  // TODO: Check for valid type pairs
  typechecker.throwIfPointer([t1, t2])

  fEnv.instrs.push(util.binop(op))
  return {
    t: DataType.LONG,
    typeList: [DataType.LONG]
  }
}

function compileUpdateExpr(
  expr: es.UpdateExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
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

  // TODO: This does not consider prefix or post
  // This field is found in `expr`
  fEnv.instrs.push(
    util.movImm(8, '2s'),
    util.binop('+'),
    util.movMemToMem(['rsp', -8], ['rbp', getVar(ident.name, fEnv, gEnv).offset]),
    util.offsetRSP(-8)
  )

  return {
    t: DataType.LONG,
    typeList: [DataType.LONG]
  }
}

function compileAddrOfExpr(
  expr: es.AddressofExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): CompileType {
  if (expr.expression.type === 'Identifier') {
    const v = getVar(expr.expression.name, fEnv, gEnv)
    fEnv.instrs.push(util.leal(['rbp', v.offset], ['rsp', 0]), util.offsetRSP(8))
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
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): CompileType {
  const t = compileExpr(expr.expression, fEnv, gEnv)

  // Check that the expr is indeed a pointer
  typechecker.throwIfNotPointer([t])

  fEnv.instrs.push(util.movMemToReg('rax', ['rsp', -8]), util.movMemToMem(['rax', 0], ['rsp', -8]))

  // Remove the top most * in the pointerList
  // To reflect that one 'hop' has been done
  return {
    ...t,
    typeList: t.typeList.slice(1, t.typeList.length)
  }
}

function compileUnaryExpr(
  expr: es.UnaryExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): CompileType {
  if (expr.operator !== '-' && expr.operator !== '!') {
    throw new CompileTimeError()
  }

  const t = compileExpr(expr.argument, fEnv, gEnv)
  fEnv.instrs.push(util.unop(expr.operator))

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

function compileCallExpr(expr: es.CallExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): CompileType {
  const { callee, arguments: args } = expr // eslint disallows vars called variables

  // Based on `visitor.visitFunctionCall`, CallExpression
  // will only have Identifier as callee
  if (callee.type !== 'Identifier') throw new CompileTimeError()
  const fnName = callee.name
  const { returnType, params, addr } = getFxDecl(fnName, gEnv)
  let argSize = 0

  // The caller didn't provide enough args for this function call
  if (args.length !== params.length) throw new CompileTimeError()

  // push onto stack in reverse over
  for (let i = args.length - 1; i >= 0; i--) {
    const supposedArgType = params[i]
    const givenArgType = compileExpr(args[i] as es.Expression, fEnv, gEnv)

    // Need to check if user provided valid types
    // But there may be a need to do implicit casting
    // E.g. supposedArgType is int
    // givenArgType can be long or int
    // if (!isEqual(supposedArgType, givenArgType.typeList)) {
    //   // User provided some invalid type
    //   throw new CompileTimeError()
    // }

    argSize += 8 // depends on the size of the expression
  }

  // CALL pushes old rbp and return addr
  fEnv.instrs.push({
    type: 'CallCommand',
    addr
  })

  if (returnType[0] === DataType.STRUCT) {
    // need to handle struct return types carefully
  } else {
    fEnv.instrs.push(
      util.offsetRSP(-argSize), // remove all args
      util.movRegToMem(['rax', 0], ['rsp', 0]), // push function return onto stack
      util.offsetRSP(8)
    )
  }

  return {
    t: returnType[returnType.length - 1] as DataType,
    typeList: returnType
  }
}

type RegOffset = ['rsp' | 'rbp' | 'rax', number]

const util = {
  movImm: (value: number, encoding: '2s' | 'ieee'): MovImmediateCommand => {
    return {
      type: 'MovImmediateCommand',
      value,
      encoding
    }
  },

  movMemToMem: (from: RegOffset, to: RegOffset): MovCommand => {
    return {
      type: 'MovCommand',
      from: {
        type: 'relative',
        reg: from[0],
        offset: from[1]
      },
      to: {
        type: 'relative',
        reg: to[0],
        offset: to[1]
      }
    }
  },

  movMemToReg: (reg: 'rbp' | 'rax', from: RegOffset): MovCommand => ({
    type: 'MovCommand',
    from: {
      type: 'relative',
      reg: from[0],
      offset: from[1]
    },
    to: {
      type: 'register',
      reg
    }
  }),

  movRegToMem: (reg: RegOffset, mem: RegOffset): MovCommand => ({
    type: 'MovCommand',
    from: {
      type: 'register',
      reg: reg[0],
      offset: reg[1]
    },
    to: {
      type: 'relative',
      reg: mem[0],
      offset: mem[1]
    }
  }),

  offsetRSP: (value: number): OffsetRspCommand => {
    return {
      type: 'OffsetRspCommand',
      value
    }
  },

  binop: (op: string): BinopCommand => {
    // TODO: Validate
    return {
      type: 'BinopCommand',
      op: op as BinopCommand['op']
    }
  },

  leal: (from: RegOffset, to: RegOffset): LeaCommand => {
    return {
      type: 'LeaCommand',
      value: {
        reg: from[0],
        offset: from[1]
      },
      dest: {
        reg: to[0],
        offset: to[1]
      }
    }
  },

  unop: (op: '!' | '-'): UnopCommand => {
    return {
      type: 'UnopCommand',
      op
    }
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
