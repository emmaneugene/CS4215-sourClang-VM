import * as es from 'estree'

import { Microcode } from './../typings/microcode'
import { compileFunctionDefinition } from './compileStmt'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

/**
 * Converts the AST (from `./parser`) into
 * a list of microcode commands (to be loaded into `./interpeter`).
 *
 * This is the integration point between the "compiler" and the rest of this codebase.
 */
export function compile(ast: es.Program): Array<Microcode> {
  const stmts = ast.body as es.Statement[]
  const gEnv = new GlobalCTE()

  for (const stmtRaw of stmts) {
    if (stmtRaw.type === 'FunctionDeclaration') {
      const stmt = stmtRaw as es.FunctionDeclaration

      const { name, datatype } = stmt.id!
      const fEnv = new FunctionCTE(name, datatype)

      compileFunctionDefinition(stmtRaw as es.FunctionDeclaration, fEnv, gEnv)
      gEnv.functions[fEnv.name] = fEnv
      continue
    }

    if (stmtRaw.type === 'VariableDeclaration') {
      throw new CompileTimeError()
    }

    throw new CompileTimeError()
  }

  // Handle the case when it is an empty program
  if (Object.keys(gEnv.functions).length === 0) {
    return []
  }

  const main = gEnv.functions['main']
  if (!main) {
    throw new CompileTimeError()
  }

  return main.instrs
}
