import createContext from '../../createContext'
import { Context, Variant } from '../../types'
import { parse } from '../parser'

const f = (when: string, should: string) => `When_\'${when}\'_Should_${should}`

let context: Context = createContext(Variant.DEFAULT, undefined, undefined)

beforeAll(() => {
  console.log = () => {}
})

beforeEach(() => {
  context = createContext(Variant.DEFAULT, undefined, undefined)
})

const CHAR_TEST_CASES: string[] = [
  'char x = 32767;',
  'unsigned char x = 32767;',
  'signed char x = 32767;',
  'char * x = 32767;',
  'unsigned char * x = 32767;',
  'signed char ** x = 32767;'
]

describe('Char', () => {
  for (const source of CHAR_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})

const SHORT_TEST_CASES: string[] = [
  'short x = 65535;',
  'unsigned short x = 65535;',
  'signed short x = 65535;',
  'short * x = 65535;',
  'unsigned short ** x = 65535;',
  'signed short * x = 65535;'
]

describe('Short', () => {
  for (const source of SHORT_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})

const INT_TEST_CASES: string[] = [
  'int x = 65535;',
  'unsigned int x = 65535;',
  'signed int x = 65535;',
  'int * * x = 65535;',
  'unsigned int * x = 65535;',
  'signed int * x = 65535;'
]

describe('Int', () => {
  for (const source of INT_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})

const LONG_TEST_CASES: string[] = [
  'long x = 65535;',
  'unsigned long x = 65535;',
  'signed long x = 65535;',
  'long * x = 65535;',
  'unsigned long * * x = 65535;',
  'signed long * x = 65535;'
]

describe('Long', () => {
  for (const source of LONG_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})

const FLOAT_TEST_CASES: string[] = ['float x = 65535;', 'float *** x = 65535;']

describe('Float', () => {
  for (const source of FLOAT_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})

const DOUBLE_TEST_CASES: string[] = ['double x = 65535;', 'double * x = 65535;']

describe('Double', () => {
  for (const source of DOUBLE_TEST_CASES) {
    it(f(source, 'ParseSuccessfully'), () => {
      const result = parse(source, context)
      expect(result).toMatchSnapshot()
    })
  }
})

const FAIL_TEST_CASE: string[] = [
  'unsigned float x = 1;',
  'unsigned double x = 1;',
  'unsigned unsigned * x = 1;',
  'unsigned signed x = 1;',
  'signed unsigned x = 1;',
  'signed signed x = 1;',
  'char char x = 1;',
  'short short x = 1;',
  'int int x = 1;',
  'long long x = 1;',
  'unsigned signed long x = 1;'
]

describe('Bad Syntax', () => {
  for (const source of FAIL_TEST_CASE) {
    it(f(source, 'ThrowError'), () => {
      expect(() => parse(source, context)).toThrow()
    })
  }
})
