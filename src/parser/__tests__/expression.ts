import { BlockStatement, Program, VariableDeclaration } from 'estree'

import createContext from '../../createContext'
import { Context, Variant } from '../../types'
import { parse } from '../parser'

const f = (when: string, should: string) => `When_\'${when}\'_Should_${should}`
const prependFixture = (expr: string) => `int x = ${expr};`
const getBinop = (result: Program | undefined) => {
  return ((result?.body[0] as BlockStatement)?.body[0] as VariableDeclaration)?.declarations[0].init
}

let context: Context = createContext(Variant.DEFAULT, undefined, undefined)

beforeAll(() => {
  console.log = () => {}
})

beforeEach(() => {
  context = createContext(Variant.DEFAULT, undefined, undefined)
})

const ADD_TEST_CASES: string[] = ['1+2', 'x+5', 'abc+def']

describe('Addition', () => {
  for (const source of ADD_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      const binop = getBinop(result)
      expect(binop).toBeTruthy()
      expect(binop).toMatchSnapshot()
    })
  }
})

const SUB_TEST_CASES: string[] = ['1-2', 'x-5', 'abc-def', '-x-5']

describe('Subtraction', () => {
  for (const source of SUB_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      const binop = getBinop(result)
      expect(binop).toBeTruthy()
      expect(binop).toMatchSnapshot()
    })
  }
})

const MULT_TEST_CASES: string[] = ['1*2', 'x*5', 'abc*def', 'y*10', '-1*a']

describe('Multiplication', () => {
  for (const source of MULT_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      const binop = getBinop(result)
      expect(binop).toBeTruthy()
      expect(binop).toMatchSnapshot()
    })
  }
})

const DIV_TEST_CASES: string[] = ['1/2', 'x/5', 'abc/def', 'y/10', '-1/a']

describe('Division', () => {
  for (const source of DIV_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      const binop = getBinop(result)
      expect(binop).toBeTruthy()
      expect(binop).toMatchSnapshot()
    })
  }
})

const OPERAND3_TEST_CASES: string[] = [
  '1/2 + 4000',
  'x/5 + 0',
  'abc/def + (-1) * ((-1) * x)',
  'y/10 * 9',
  '-1/a % 4'
]

describe('3Operands', () => {
  for (const source of OPERAND3_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(prependFixture(source), context)
      const binop = getBinop(result)
      expect(binop).toBeTruthy()
      expect(binop).toMatchSnapshot()
    })
  }
})
