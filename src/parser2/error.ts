import { SourceLocation } from '../ast/ast.core'

export class FatalSyntaxError extends Error {
  constructor(loc: SourceLocation) {
    const { start, end } = loc
    const message =
      `Error around: ` +
      `Column: ${start.column}-${end.column}.` +
      `Line: ${start.line}-${end.line}`

    super(message)
    this.name = 'FatalSyntaxError'
    this.message = message
  }
}

export class InvalidConfigError extends Error {
  constructor(loc: SourceLocation) {
    const { start, end } = loc
    const message =
      `Error around: ` +
      `Column: ${start.column}-${end.column}.` +
      `Line: ${start.line}-${end.line}`

    super(message)
    this.name = 'InvalidConfigError'
    this.message = message
  }
}

export class ParserMisconfigError extends Error {
  constructor() {
    const message = 'Parser was misconfigured'
    super(message)
    this.name = 'ParserMisconfigError'
    this.message = message
  }
}
