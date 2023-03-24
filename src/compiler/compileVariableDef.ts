import * as es from 'estree'

import { compileExpr } from './compileExpr'
import { FunctionCTE, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

/* Compile and load in a variable definition's initial expression. */
export function compileVariableDeclaration(
  node: es.VariableDeclaration,
  fEnv: FunctionCTE,
  gEnv: GlobalCTE
): FunctionCTE {
  for (const declaration of node.declarations) {
    if (declaration.id.type !== 'Identifier') {
      throw new CompileTimeError()
    }

    const ident = declaration.id as es.Identifier
    const varInfo = fEnv.getVariable(ident.name)

    if (!declaration.init) {
      continue
    }

    compileExpr(declaration.init, fEnv, gEnv)
    fEnv.instrs.push(
      {
        type: 'MovCommand',
        from: {
          type: 'relative',
          reg: 'rsp',
          offset: -8
        },
        to: {
          type: 'relative',
          reg: 'rbp',
          offset: varInfo.offset
        }
      },
      {
        type: 'OffsetRSP',
        value: -8
      }
    )
  }

  return fEnv
}
