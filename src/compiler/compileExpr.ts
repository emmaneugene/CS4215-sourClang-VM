import * as es from 'estree'

import {
  BinopCommand,
  LeaCommand,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  UnopCommand
} from './../typings/microcode'
import { FunctionCTE, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileExpr(node: es.Expression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (node.type === 'Literal') {
    return compileLit(node, fEnv, gEnv)
  }

  if (node.type === 'Identifier') {
    return compileIdent(node, fEnv, gEnv)
  }

  if (node.type === 'LogicalExpression') {
    return compileLogicalExpr(node, fEnv, gEnv)
  }

  if (node.type === 'BinaryExpression') {
    return compileBinaryExpr(node, fEnv, gEnv)
  }

  if (node.type === 'FlexiAssignmentExpression') {
    return compileFlexAssignExpr(node, fEnv, gEnv)
  }

  if (node.type === 'ConditionalExpression') {
    return compileCondExpr(node, fEnv, gEnv)
  }

  if (node.type === 'CastExpression') {
    throw new CompileTimeError()
  }

  if (node.type === 'UpdateExpression') {
    return compileUpdateExpr(node, fEnv, gEnv)
  }

  if (node.type === 'SizeofExpression') {
    return compileSizeofExpr(node, fEnv, gEnv)
  }

  if (node.type === 'ValueofExpression') {
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
    throw new CompileTimeError()
  }

  if (node.type === 'SequenceExpression') {
    throw new CompileTimeError()
  }

  throw new CompileTimeError()
}

function compileCondExpr(node: es.ConditionalExpression, fEnv: FunctionCTE, gCTE: GlobalCTE): void {
  throw new CompileTimeError()
}

function compileLogicalExpr(expr: es.LogicalExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const op = expr.operator

  if (op !== '||' && op !== '&&') {
    throw new CompileTimeError()
  }

  compileExpr(expr.left, fEnv, gEnv)
  compileExpr(expr.right, fEnv, gEnv)
  fEnv.instrs.push(util.binop(expr.operator))
}

function compileBinaryExpr(expr: es.BinaryExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  compileExpr(expr.left, fEnv, gEnv)
  compileExpr(expr.right, fEnv, gEnv)
  fEnv.instrs.push(util.binop(expr.operator))
}

function compileLit(expr: es.Literal, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (typeof expr.value === 'number') {
    fEnv.instrs.push(util.movImm(expr.value, '2s'))
    return
  }

  throw new CompileTimeError()
}

function compileIdent(expr: es.Identifier, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  const { name } = expr

  fEnv.instrs.push(
    util.movRel2Rel(['rbp', getVar(name, fEnv, gEnv).offset], ['rsp', 0]),
    util.offsetRSP(8)
  )
}

function compileFlexAssignExpr(
  expr: es.FlexiAssignmentExpression,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): void {
  const { left, right, operator } = expr

  if (operator !== '=') throw new CompileTimeError()

  // Put value into M[rsp-8]
  compileExpr(right, fEnv, gEnv)

  if (left.type === 'Identifier') {
    fEnv.instrs.push(
      util.movRel2Rel(['rsp', -8], ['rbp', getVar(left.name, fEnv, gEnv).offset]),
      util.offsetRSP(-8)
    )
  } else if (left.type === 'UnaryExpression') {
    // load in some mem address into M[rsp-8]
    // at this point the RHS is at M[rsp-16]
    compileExpr(left.argument, fEnv, gEnv)

    // The effect should be
    // M[M[rsp-8]] = M[rsp-16]
    fEnv.instrs.push(util.movRel2Abs(['rsp', -16], ['rsp', -8]), util.offsetRSP(-16))
  } else {
    throw new CompileTimeError()
  }
}

function compileUpdateExpr(expr: es.UpdateExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
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
    util.movRel2Rel(['rsp', -8], ['rbp', getVar(ident.name, fEnv, gEnv).offset]),
    util.offsetRSP(-8)
  )
}

function compileSizeofExpr(expr: es.SizeofExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  fEnv.instrs.push(util.movImm(8, '2s'))
}

function compileAddrOfExpr(expr: es.AddressofExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (expr.expression.type === 'Identifier') {
    fEnv.instrs.push(
      util.leal(['rbp', getVar(expr.expression.name, fEnv, gEnv).offset], ['rsp', 0]),
      util.offsetRSP(8)
    )
  }

  // TODO: Consider structs and array members
  throw new CompileTimeError()
}

function compileValueOfExpr(expr: es.ValueofExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  // TODO: this doesn't consider what the type of the root identifier is
  // There is a check for this in standard C
  // This should place a memory address on the M[rsp-8]
  compileExpr(expr.expression, fEnv, gEnv)

  fEnv.instrs.push(util.movAbs2Rel(['rsp', -8], ['rsp', -8]))
}

function compileUnaryExpr(expr: es.UnaryExpression, fEnv: FunctionCTE, gEnv: GlobalCTE): void {
  if (expr.operator !== '-' && expr.operator !== '!') {
    throw new CompileTimeError()
  }

  compileExpr(expr.argument, fEnv, gEnv)
  fEnv.instrs.push(util.unop(expr.operator))
}

type RegOffset = ['rsp' | 'rbp', number]

const util = {
  movImm: (value: number, encoding: '2s' | 'ieee'): MovImmediateCommand => {
    return {
      type: 'MovImmediateCommand',
      value,
      encoding
    }
  },

  movRel2Rel: (from: RegOffset, to: RegOffset): MovCommand => {
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

  movRel2Abs: (from: RegOffset, to: RegOffset): MovCommand => {
    return {
      type: 'MovCommand',
      from: {
        type: 'relative',
        reg: from[0],
        offset: from[1]
      },
      to: {
        type: 'absolute',
        reg: to[0],
        offset: to[1]
      }
    }
  },

  movAbs2Rel: (from: RegOffset, to: RegOffset): MovCommand => {
    return {
      type: 'MovCommand',
      from: {
        type: 'absolute',
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
