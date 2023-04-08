import { VariableDeclaration } from '../../ast/ast.declaration'
import createContext from '../../createContext'
import { Context, Variant } from '../../types'
import { parse, ParseResult } from '../parser'

const f = (when: string, should: string) => `When_\'${when}\'_Should_${should}`
const prependFixture = (expr: string) => `int x = 1; int y = ${expr};`
const getBinop = (result: ParseResult | undefined) => {
  if (!result) {
    return undefined
  }
  const v = result?.program.body[0] as VariableDeclaration
  const stmt = v.init
  return stmt
}

let context: Context = createContext(Variant.DEFAULT, undefined, undefined)

beforeAll(() => {
  console.log = () => {}
})

beforeEach(() => {
  context = createContext(Variant.DEFAULT, undefined, undefined)
})

const ADD_TEST_CASES: string[] = ['1+2', 'x+5']

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

const SUB_TEST_CASES: string[] = ['1-2', 'x-5', '-x-5']

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

const MULT_TEST_CASES: string[] = ['1*2', 'x*5']

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

const DIV_TEST_CASES: string[] = ['1/2', 'x/5']

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

const OPERAND3_TEST_CASES: string[] = ['1/2 + 4000', 'x/5 + 0 * (-x)', 'x/1 + (-1) * ((-1) * x)']

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
