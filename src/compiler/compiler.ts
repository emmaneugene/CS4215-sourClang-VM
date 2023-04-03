import * as es from 'estree'

import { loadBuiltInFunctions } from '../interpreter/builtin'
import { compileFunctionDef } from './compileFunctionDef'
import { compileGlobalVarDef } from './compileGlobalVarDef'
import { GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

/**
 * Converts the AST (from `./parser`) into
 * a list of microcode commands (to be loaded into `./interpeter`).
 *
 * This is the integration point between the "compiler" and the rest of this codebase.
 */
export function compile(ast: es.Program): GlobalCTE | undefined {
  if (ast.loc?.source === '') {
    // handle the case when the program is empty
    return
  }

  const stmts = ast.body as es.Statement[]

  const gEnv = new GlobalCTE()
  loadBuiltInFunctions(gEnv)

  for (const stmt of stmts) {
    if (stmt.type === 'FunctionDeclaration') {
      compileFunctionDef(stmt, gEnv)
      continue
    }
    /**
     * Global variable
     * int x = 1; //literals like strings and bools will work
     * int x[3] = {1, 2, 3};
     * int y1 = ++x; // will crash
     * int y2 = foo(); // will crash
     * int y3 = x; // will crash
     */
    if (stmt.type === 'VariableDeclaration') {
      compileGlobalVarDef(stmt, gEnv)
      continue
    }

    throw new CompileTimeError()
  }

  const main = gEnv.functions['main']
  if (!main) {
    throw new CompileTimeError('No reference to main!')
  }

  return gEnv
}
