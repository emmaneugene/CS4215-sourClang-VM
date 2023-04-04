import { CharStreams, CommonTokenStream } from 'antlr4ts'
import * as es from 'estree'

import { SourCLexer } from '../lang/SourCLexer'
import { SourCParser2 } from '../lang/SourCParser2'
import { Context, ErrorSeverity } from '../types'
import { ProgramContext } from './../lang/SourCParser2'
import { FatalSyntaxError } from './error'
import { contextToLocation } from './utils'
import { Visitor } from './visitor'

function convertSource(source: string, ctx: ProgramContext): es.Program {
  const visitor = new Visitor()
  const program = visitor.visit(ctx) as es.Program

  // hack to check for empty program
  program.loc = {
    ...contextToLocation(ctx),
    source
  }

  return program
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new SourCLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new SourCParser2(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.program()
      program = convertSource(source, tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      console.log(JSON.stringify(program, null, 2))
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
