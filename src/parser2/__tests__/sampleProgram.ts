import createContext from '../../createContext'
import { Context, Variant } from '../../types'
import { parse } from '../parser'

const prog1 = `
int main() {
  printf("Hello, World!");
  return 0;
}
`

const prog6 = `
void swap(int *a, int *b) {
  int temp;
  temp = *a;
  *a = *b;
  *b = temp;
}
int main() {
  int num1 = 10;
  int num2 = 20;
  printf("Before swap: num1 = %d, num2 = %d\\n", num1, num2);
  swap(&num1, &num2);
  printf("After swap: num1 = %d, num2 = %d\\n", num1, num2);
  return 0;
}
`

const prog7 = `
int main() {
  int list[3];
  int i;
  for (i = 0; i < 3; i++) {
    list[i] = i * 10;
  }
  return 0;
}
`

const prog8 = `
int main() {
  int list[3] = { 1 };
  int i;
  for (i = 0; i < 3; i++) {
    list[i] = i * 10;
  }
  return 0;
}
`

const prog9 = `
int main() {
  int list[] = {1, 2, 3};
  int i;
  for (i = 0; i < 3; i++) {
    list[i] = list[i + (-1) + 1] * 10;
  }
  return 0;
}
`

const TEST_CASES = [prog1, prog6, prog7, prog8, prog9]

const f = (when: string, should: string) => `When_\'${when}\'_Should_${should}`

let context: Context = createContext(Variant.DEFAULT, undefined, undefined)

beforeAll(() => {
  console.log = () => {}
})

beforeEach(() => {
  context = createContext(Variant.DEFAULT, undefined, undefined)
})

describe('SamplePrograms', () => {
  for (const prog of TEST_CASES) {
    it(f(prog, 'ParseSuccessfully'), () => {
      const result = parse(prog, context)
      // expect(result).toMatchSnapshot()
    })
  }
})
