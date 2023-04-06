import * as es from 'estree'

import { WORD_SIZE } from '../constants'
import { BottomOfMemory, StackPointer } from '../typings/microcode'
import { compileExpr } from './compileExpr'
import { GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'
import { MICROCODE } from './microcode'
import { getIdentSize } from './util'

export function compileGlobalVarDef(stmt: es.VariableDeclaration, gEnv: GlobalCTE): void {
  for (const declaration of stmt.declarations) {
    if (declaration.id.type !== 'Identifier') throw new CompileTimeError()
    const { name, typeList } = declaration.id
    const variableInfo = gEnv.addVar(name, typeList, getIdentSize(declaration.id))
    if (!declaration.init) {
      continue
    }
    compileExpr(declaration.init, gEnv)
    gEnv.globalDeclarationInstrs.push(
      MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], [BottomOfMemory, variableInfo.offset]),
      MICROCODE.offsetRSP(-WORD_SIZE)
    )
  }
}
