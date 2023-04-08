import { CharStreams, CommonTokenStream } from 'antlr4ts'

import { Program } from '../ast/ast.core'
import { SourCLexer } from '../lang/SourCLexer'
import { ProgramContext, SourCParser2 } from '../lang/SourCParser2'
import { FatalSyntaxError } from '../parser/error'
import { Context, ErrorSeverity } from '../types'
import { RODataSegment } from './rosegment'
import { ProgramGenerator } from './visitor.program'
import { RODataFinder } from './visitor.rodata'

export type ParseResult = {
  program: Program
  rodataSegment: RODataSegment
}

export function parse(source: string, context: Context): ParseResult | undefined {
  let parseResult: ParseResult | undefined

  const inputStream = CharStreams.fromString(source)
  const lexer = new SourCLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SourCParser2(tokenStream)
  parser.buildParseTree = true

  try {
    const tree = parser.program()
    parseResult = buildAst(tree)
  } catch (error) {
    if (error instanceof FatalSyntaxError) {
      context.errors.push(error)
    } else {
      throw error
    }
  }

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

  const tokenTreeVisitor = new ProgramGenerator(rodataSegment.getRODataSegmentSize())
  tokenTreeVisitor.visitProgram(ctx)
  const program = tokenTreeVisitor.getAst()
  return {
    program,
    rodataSegment
  }
}
