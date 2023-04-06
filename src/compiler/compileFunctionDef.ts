import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { compileBlkStmt } from './compileStmt'
import { FunctionCTE, GlobalCTE, VariableInfo } from './compileTimeEnv'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'
import { getIdentSize } from './util'

/**
 * Compiles a function declaration node into a `FunctionCTE` object and adds it to the global compile-time environment.
 *
 * @param {es.FunctionDeclaration} node - The function declaration node to compile.
 * @param {GlobalCTE} gEnv - The global compile-time environment to add the compiled function to.
 *
 * @throws {CompileTimeError} If the function's name or parameter types are invalid.
 */
export function compileFunctionDef(node: es.FunctionDeclaration, gEnv: GlobalCTE): void {
  const { name, typeList } = node.id!
  const paramLs = getParamsAsLs(node.params)
  const localVarSize = countLocalVarSize(node.body.body)
  const fEnv = new FunctionCTE(name, typeList, paramLs, localVarSize)
  gEnv.setFunctionPrototype({
    name,
    argumentTypes: paramLs.map(p => p.typeList),
    returnType: typeList
  })

  // alloc space on the stack for
  // all of this function's declarations
  fEnv.instrs.push(MICROCODE.offsetRSP(localVarSize))

  compileBlkStmt(node.body, fEnv, gEnv)

  gEnv.addFunctionInstrs(fEnv)
}

/**
 * Converts an array of function parameters to an array of `VariableInfo` objects.
 * @param {es.Pattern[]} params - An array of function parameters to convert.
 * @returns {VariableInfo[]} - An array of `VariableInfo` objects, each representing a parameter.
 * @throws {CompileTimeError} - If a parameter is not an `Identifier` type.
 */
function getParamsAsLs(params: es.Pattern[]): VariableInfo[] {
  const rv: VariableInfo[] = []
  let currArgOffset = -WORD_SIZE
  for (let i = 0; i < params.length; i++) {
    const p = params[i]
    if (p.type !== 'Identifier') throw new CompileTimeError()
    const vOffset = currArgOffset - WORD_SIZE
    rv.push({
      name: p.name,
      typeList: p.typeList,
      offset: vOffset
    })
    currArgOffset = vOffset
  }
  return rv
}

/**
 * Calculates the total size of local variables declared in an array of statements.
 * @param {es.Statement[]} stmts - An array of statements to analyze.
 * @returns {number} - The total size of local variables, in bytes.
 */
function countLocalVarSize(stmts: es.Statement[]): number {
  let sum = 0
  for (const stmt of stmts) {
    if (stmt.type === 'VariableDeclaration') {
      const id = stmt.declarations[0].id as es.Identifier
      sum += getIdentSize(id) // TODO: Consider structs too
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
