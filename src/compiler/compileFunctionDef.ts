import * as es from 'estree'

import { compileBlockStatement } from './compileStmt'
import { BlockNode, FunctionCTE, GlobalCTE, VariableInfo } from './compileTimeEnv'
import { CompileTimeError } from './error'

export function compileFunctionDefinition(node: es.FunctionDeclaration, gEnv: GlobalCTE): void {
  const { name, datatype } = node.id!
  const { params } = node
  const paramsLs = getParamsVarInfo(params)

  const blkBody = node.body
  const { block, offset } = scanBlkVariables(blkBody.body)

  const fEnv = new FunctionCTE(name, datatype, paramsLs, block)

  fEnv.instrs.push({
    type: 'OffsetRSP',
    value: offset
  })

  compileBlockStatement(blkBody, fEnv, gEnv)
  gEnv.functions[fEnv.name] = fEnv
  console.log({ gEnv })
}

function getParamsVarInfo(ls: es.Pattern[]): VariableInfo[] {
  const rv: VariableInfo[] = []
  for (const ele of ls) {
    if (ele.type !== 'Identifier') {
      continue
    }
    rv.push({
      name: ele.name,
      type: ele.datatype,
      offset: -1 // placeholder value
    })
  }
  return rv
}

/**
 * Scans for a list of variables in a given block.
 *
 * 2 passes are used to 'hoist' the variable declarations up. This is to
 * simplify the debugging/tracing process.
 *
 * It also check for uniqueness within block depths.
 */
function scanBlkVariables(
  stmts: es.Statement[],
  initOffset: number = 0
): { block: BlockNode; offset: number } {
  let nextOffset = initOffset

  const newBlock = new BlockNode()

  for (const stmtRaw of stmts) {
    if (stmtRaw.type === 'VariableDeclaration') {
      const stmt = stmtRaw as es.VariableDeclaration

      for (const declaration of stmt.declarations) {
        if (declaration.id.type !== 'Identifier') continue

        const ident = declaration.id as es.Identifier
        const variable: VariableInfo = {
          name: ident.name,
          type: ident.datatype,
          offset: nextOffset
        }
        newBlock.addVariable(variable)
        nextOffset += 8 // TODO: Account for structs and arrays.
      }
    }
  }
  throwOnDuplicateVars(Object.values(newBlock.block))

  for (const stmtRaw of stmts) {
    if (stmtRaw.type === 'WhileStatement') {
      const stmt = stmtRaw as es.WhileStatement
      const { block, offset } = scanBlkVariables([stmt.body], nextOffset)
      nextOffset = offset
      newBlock.addChild(block)
      continue
    }

    if (stmtRaw.type === 'IfStatement') {
      const stmt = stmtRaw as es.IfStatement
      const { block: consBlockNode, offset: consOffset } = scanBlkVariables(
        [stmt.consequent],
        nextOffset
      )
      nextOffset = consOffset
      newBlock.addChild(consBlockNode)

      if (stmt.alternate) {
        const { block: altBlockNode, offset: altOffset } = scanBlkVariables(
          [stmt.alternate],
          nextOffset
        )
        nextOffset = altOffset
        newBlock.addChild(altBlockNode)
      }

      continue
    }

    if (stmtRaw.type === 'ForStatement') {
      const stmt = stmtRaw as es.ForStatement
      const { block, offset } = scanBlkVariables([stmt.body], nextOffset)
      nextOffset = offset
      newBlock.addChild(block)
      continue
    }

    if (stmtRaw.type === 'BlockStatement') {
      const stmt = stmtRaw as es.BlockStatement
      const { block, offset } = scanBlkVariables(stmt.body, nextOffset)
      nextOffset = offset
      newBlock.addChild(block)
      continue
    }
  }

  return { block: newBlock, offset: nextOffset }
}

function throwOnDuplicateVars(ls: VariableInfo[]): void {
  const symbols: { [name: string]: boolean } = {}

  ls.forEach(ele => {
    if (symbols[ele.name]) {
      throw new CompileTimeError()
    }

    symbols[ele.name] = true
  })
}
