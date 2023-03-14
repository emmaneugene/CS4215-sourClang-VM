import { BlockStatement, FunctionDeclaration, Program } from 'estree'

import createContext from '../../createContext'
import { Context, Variant } from '../../types'
import { parse } from '../parser'

const f = (when: string, should: string) => `When_\'${when}\'_Should_${should}`
const prependFixture = (stmt: string) => `int main() { ${stmt} }`
const getStmt = (result: Program | undefined) => {
  return ((result?.body[0] as BlockStatement)?.body[0] as FunctionDeclaration).body.body[0]
}

let context: Context = createContext(Variant.DEFAULT, undefined, undefined)

beforeAll(() => {
  console.log = () => {}
})

beforeEach(() => {
  context = createContext(Variant.DEFAULT, undefined, undefined)
})

const IF_STMT: string[] = [
  'if (x == 1) { x = 10; } ',
  'if (x == -1) { x = 10; } else { x = x - 1; } '
]

describe('If', () => {
  for (const source of IF_STMT) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      expect(getStmt(result)).toMatchSnapshot()
    })
  }
})

const WHILE_STMT: string[] = [
  'while (x < 5) { x++; }',
  'while (1) { }',
  'while (10 + 5 < x) { x--; }',
  'while (1) { break; }',
  'while (1) { continue; }',
  'while (1) { return -x + 10; }'
]

describe('While', () => {
  for (const source of WHILE_STMT) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      expect(getStmt(result)).toMatchSnapshot()
    })
  }
})

const FOR_STMT: string[] = ['for (x = 1; x < 10; x++) { y++; }', 'for(;;) { continue; }']

describe('For', () => {
  for (const source of FOR_STMT) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      expect(getStmt(result)).toMatchSnapshot()
    })
  }
})

const FUNCTION_DEF: string[] = ['int foo() { return 10;} ']

describe('FunctionDefinition', () => {
  for (const source of FUNCTION_DEF) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})
