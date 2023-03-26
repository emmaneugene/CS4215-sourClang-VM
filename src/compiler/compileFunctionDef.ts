import * as es from 'estree'

import { compileBlkStmt } from './compileStmt'
import { FunctionCTE, GlobalCTE, VariableInfo } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileFunctionDef(node: es.FunctionDeclaration, gEnv: GlobalCTE): void {
  const { name, datatype } = node.id!
  const paramLs = getParamsAsLs(node.params)
  const localVarSize = countLocalVarSize(node.body.body)

  const fEnv = new FunctionCTE(name, datatype, paramLs, localVarSize)

  fEnv.instrs.push({
    type: 'OffsetRspCommand',
    value: localVarSize
  })
  compileBlkStmt(node.body, fEnv, gEnv)

  gEnv.functions[fEnv.name] = fEnv
}

function getParamsAsLs(params: es.Pattern[]): VariableInfo[] {
  const rv: VariableInfo[] = []
  for (let i = 0; i < params.length; i++) {
    const p = params[i]
    if (p.type !== 'Identifier') throw new CompileTimeError()
    rv.push({
      name: p.name,
      type: p.datatype,
      offset: -i * 8 // TODO: Consider arrays and structs too
    })
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
