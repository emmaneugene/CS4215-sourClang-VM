import * as es from 'estree'

import { compileBlkStmt } from './compileStmt'
import { FunctionCTE, GlobalCTE, VariableInfo } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileFunctionDef(node: es.FunctionDeclaration, gEnv: GlobalCTE): void {
  const { name, typeList } = node.id!
  const paramLs = getParamsAsLs(node.params)
  const localVarSize = countLocalVarSize(node.body.body)

  const fEnv = new FunctionCTE(name, typeList, paramLs, localVarSize)

  // alloc space on the stack for
  // all of this function's declarations
  fEnv.instrs.push({
    type: 'OffsetRspCommand',
    value: localVarSize
  })

  compileBlkStmt(node.body, fEnv, gEnv)

  // free all the space used for this
  // function's declarations
  fEnv.instrs.push({
    type: 'OffsetRspCommand',
    value: -localVarSize
  })

  gEnv.addFunction(fEnv)
}

function getParamsAsLs(params: es.Pattern[]): VariableInfo[] {
  const rv: VariableInfo[] = []
  let currArgOffset = -8
  for (let i = 0; i < params.length; i++) {
    const p = params[i]
    if (p.type !== 'Identifier') throw new CompileTimeError()
    const vOffset = currArgOffset - 8
    rv.push({
      name: p.name,
      typeList: p.typeList,
      offset: vOffset
    })
    currArgOffset = vOffset
  }
  return rv
}

function countLocalVarSize(stmts: es.Statement[]): number {
  let sum = 0
  for (const stmt of stmts) {
    if (stmt.type === 'VariableDeclaration') {
      sum += 8 // TODO: Consider arrays and structs too
    }

    if (stmt.type === 'BlockStatement') {
      sum += countLocalVarSize(stmt.body)
    }

    if (stmt.type === 'IfStatement') {
      sum += countLocalVarSize([stmt.consequent])
      if (stmt.alternate) {
        sum += countLocalVarSize([stmt.alternate])
      }
    }

    if (stmt.type === 'WhileStatement') {
      sum += countLocalVarSize([stmt.body])
    }

    if (stmt.type === 'ForStatement') {
      sum += countLocalVarSize([stmt.body])
    }
  }

  return sum
}

function countArgSize(vars: VariableInfo[]): number {
  let sum = 0
  for (const v of vars) {
    // TODO: Factor in structs
    sum += 8
  }
  return sum
}
