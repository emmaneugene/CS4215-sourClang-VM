import { CharStreams, CommonTokenStream } from 'antlr4ts'
import * as es from 'estree'

import { SourCLexer } from '../lang/SourCLexer'
import { SourCParser2 } from '../lang/SourCParser2'
import { Context, ErrorSeverity } from '../types'
import { ProgramContext } from './../lang/SourCParser2'
import { FatalSyntaxError } from './error'
import { contextToLocation } from './utils'
import { Visitor } from './visitor'

/**
 * The return result after a program
 * has been parsed.
 */
export type ParseResult = {
  /** The program AST. */
  ast: es.Program

  /** A list of strings declared in the program. */
  declaredStrings: string[]

  /** A record of user-defined struct. */
  declaredStructDefinitions: Record<string, es.StructDef>

  /** The amount of memory needed by global variables */
  globalVariableSize: number
}

function convertSource(source: string, ctx: ProgramContext): ParseResult {
  const visitor = new Visitor()
  const program = visitor.visit(ctx) as es.Program

  // hack to check for empty program
  program.loc = {
    ...contextToLocation(ctx),
    source
  }

  return {
    ast: program,
    declaredStrings: visitor.getStrings(),
    declaredStructDefinitions: visitor.getStructDefs(),
    globalVariableSize: visitor.getGlobalVariablesSize()
  }
}

export function parse(source: string, context: Context): ParseResult | undefined {
  let parseResult: ParseResult | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new SourCLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new SourCParser2(tokenStream)
    parser.buildParseTree = true

    try {
      const tree = parser.program()
      parseResult = convertSource(source, tree)
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
  } else {
    return undefined
  }
}
