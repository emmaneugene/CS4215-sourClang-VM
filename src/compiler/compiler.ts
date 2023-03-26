import * as es from 'estree'

import { Microcode } from './../typings/microcode'
import { compileFunctionDef } from './compileFunctionDef'
import { GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

/**
 * Converts the AST (from `./parser`) into
 * a list of microcode commands (to be loaded into `./interpeter`).
 *
 * This is the integration point between the "compiler" and the rest of this codebase.
 */
export function compile(ast: es.Program): GlobalCTE | undefined {
  const stmts = ast.body as es.Statement[]
  const gEnv = new GlobalCTE()

  for (const stmt of stmts) {
    if (stmt.type === 'FunctionDeclaration') {
      compileFunctionDef(stmt, gEnv)
      continue
    }

    if (stmt.type === 'VariableDeclaration') {
      throw new CompileTimeError()
    }

    throw new CompileTimeError()
  }

  // Handle the case when it is an empty program
  if (Object.keys(gEnv.functions).length === 0) {
    return
  }

  const main = gEnv.functions['main']
  if (!main) {
    throw new CompileTimeError()
  }

  return gEnv
}
