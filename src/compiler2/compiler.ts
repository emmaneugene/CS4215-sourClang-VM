import { Declaration, FunctionDefinition } from '../ast/ast.declaration'
import { ParseResult } from '../parser2/parser'
import { Microcode } from '../typings/microcode'
import { DeclarationCompiler } from './compiler.declaration'
import { ExpressionCompiler } from './compiler.expr'
import { FunctionDefCompiler } from './compiler.functionDefinition'
import { DataSegment } from './segment.data'
import { InstrSegment } from './segment.instr'
import { RODataSegment } from './segment.ro'
import { GetIdentifierFunction } from './utils'

export type Segments = {
  rodataSegment: RODataSegment
  dataSegment: DataSegment
  instrSegment: InstrSegment
}

export function compile(parseResult: ParseResult): Segments {
  const { rodataSegment } = parseResult
  const dataSegment = new DataSegment({
    startingAddr: rodataSegment.getRODataSegmentSize(),
    totalSize: parseResult.globalVarSize
  })
  const instrSegment = new InstrSegment({
    instrStartingOffset: dataSegment.getNextAvailableAddr(),
    stackFrameSizePerFunction: parseResult.stackFrameSizePerFunction
  })
  const globalInstrSegment = new InstrSegment({
    instrStartingOffset: dataSegment.getNextAvailableAddr(),
    stackFrameSizePerFunction: parseResult.stackFrameSizePerFunction
  })

  const getIdentifier: GetIdentifierFunction = name => {
    return parseResult.globalFrame.mapping[name].datatype
  }

  const globalExprCompiler = new ExpressionCompiler(false, getIdentifier, globalInstrSegment)
  const functionExprCompiler = new ExpressionCompiler(true, getIdentifier, instrSegment)

  const declarationCompiler = new DeclarationCompiler(
    instrSegment,
    globalInstrSegment,
    getIdentifier,
    globalExprCompiler,
    functionExprCompiler
  )
  const functionDefCompiler = new FunctionDefCompiler(
    instrSegment,
    functionExprCompiler,
    declarationCompiler
  )

  parseResult.program.body.forEach(stmt => {
    if (isFunctionDefinition(stmt)) {
      return functionDefCompiler.compileFunctionDefinition(stmt)
    } else if (isDeclaration(stmt)) {
      declarationCompiler.compileGlobalDeclaration(stmt)
      return
    }
  })

  instrSegment.setGlobalDataInitialisationInstrs(globalInstrSegment.getInstrs())

  return {
    rodataSegment,
    dataSegment,
    instrSegment
  }
}

function isFunctionDefinition(stmt: FunctionDefinition | Declaration): stmt is FunctionDefinition {
  return stmt.type === 'FunctionDefinition'
}

function isDeclaration(stmt: FunctionDefinition | Declaration): stmt is Declaration {
  return stmt.type === 'ArrayDeclaration' || stmt.type === 'VariableDeclaration'
}
