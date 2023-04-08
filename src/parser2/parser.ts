import { CharStreams, CommonTokenStream } from 'antlr4ts'

import { Program } from '../ast/ast.core'
import { SourCLexer } from '../lang/SourCLexer'
import { ProgramContext, SourCParser2 } from '../lang/SourCParser2'
import { FatalSyntaxError } from '../parser/error'
import { Context, ErrorSeverity } from '../types'
import { AstVisitor } from './visitor.ast'
import { RODataFinder } from './visitor.rodata'

function buildAst(ctx: ProgramContext): Program {
  const rodataFinder = new RODataFinder()
  const rodataStrings = rodataFinder.visit(ctx)

  const tokenTreeVisitor = new AstVisitor(rodataStrings)
  tokenTreeVisitor.visitProgram(ctx)
  const program = tokenTreeVisitor.getAst()
  return program
}

export function parse(source: string, context: Context): Program | undefined {
  if (source === '') return

  let program: Program | undefined

  const inputStream = CharStreams.fromString(source)
  const lexer = new SourCLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SourCParser2(tokenStream)
  parser.buildParseTree = true

  try {
    const tree = parser.program()
    program = buildAst(tree)
  } catch (error) {
    if (error instanceof FatalSyntaxError) {
      context.errors.push(error)
    } else {
      throw error
    }
  }

  const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
  if (program && !hasErrors) {
    return program
  } else {
    return undefined
  }
}
