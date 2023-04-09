import { CharStreams, CommonTokenStream } from 'antlr4ts'

import { Program } from '../ast/ast.core'
import { RODataSegment } from '../compiler2/segment.ro'
import { SourCLexer } from '../lang/SourCLexer'
import { ProgramContext, SourCParser2 } from '../lang/SourCParser2'
import { Context, ErrorSeverity } from '../types'
import { ProgramGenerator } from './visitor.program'
import { RODataFinder } from './visitor.rodata'

export type ParseResult = {
  program: Program
  rodataSegment: RODataSegment
  stackFrameSizePerFunction: Record<string, number>
  globalVarSize: number
}

export function parse(source: string, context: Context): ParseResult | undefined {
  const inputStream = CharStreams.fromString(source)
  const lexer = new SourCLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SourCParser2(tokenStream)
  parser.buildParseTree = true

  const tree = parser.program()
  const parseResult = buildAst(tree)

  const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
  if (parseResult && !hasErrors) {
    return parseResult
  } else {
    return undefined
  }
}

function buildAst(ctx: ProgramContext): ParseResult {
  const rodataFinder = new RODataFinder()
  const rodataStrings = rodataFinder.visit(ctx)
  const rodataSegment = new RODataSegment(rodataStrings)

  const tokenTreeVisitor = new ProgramGenerator(rodataSegment)
  tokenTreeVisitor.visitProgram(ctx)
  const program = tokenTreeVisitor.getAst()
  const stackFrameSizePerFunction = tokenTreeVisitor.getStackFrameSizePerFunction()
  const globalVarSize = tokenTreeVisitor.getGlobalVarSize()

  return {
    program,
    rodataSegment,
    stackFrameSizePerFunction,
    globalVarSize
  }
}
