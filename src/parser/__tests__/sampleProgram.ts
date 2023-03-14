import createContext from '../../createContext'
import { Context, Variant } from '../../types'
import { parse } from '../parser'

const prog1 = `
int main() {
  printf("Hello, World!");
  return 0;
}
`

const prog2 = `
int main() {
  int num1;
  int num2;
  int sum;
  printf("Enter first number: ");
  scanf("%d", &num1);
  printf("Enter second number: ");
  scanf("%d", &num2);
  sum = num1 + num2;
  printf("Sum is %d", sum);
  return 0;
}
`

const prog3 = `
int main() {
  int num;
  int i;
  int fact = 1;
  printf("Enter a number: ");
  scanf("%d", &num);
  for(i=1; i<=num; i++) {
      fact = fact * i;
  }
  printf("Factorial of %d is %d", num, fact);
  return 0;
}
`

const prog4 = `
int main() {
  int num;
  int i;
  int t1=0;
  int t2=1;
  int nextTerm;
  printf("Enter the number of terms: ");
  scanf("%d", &num);
  printf("Fibonacci Series: ");
  for(i=1; i<=num; i++) {
      printf("%d, ", t1);
      nextTerm = t1 + t2;
      t1 = t2;
      t2 = nextTerm;
  }
  return 0;
}
`

const prog5 = `
int main() {
  float celsius;
  int fahrenheit;
  printf("Enter temperature in Celsius: ");
  scanf("%f", &celsius);
  fahrenheit = (celsius * 9 / 5) + 32;
  printf("%.2f Celsius = %.2f Fahrenheit", celsius, fahrenheit);
  return 0;
}
`
const prog6 = `
int main() {
  int num1;
  int num2;
  printf("Enter two numbers: ");
  scanf("%d %d", &num1, &num2);
  printf("Before swap: num1 = %d, num2 = %d", num1, num2);
  swap(&num1, &num2);
  printf("After swap: num1 = %d, num2 = %d", num1, num2);
  return 0;
}
void swap(int *a, int *b) {
  int temp;
  temp = *a;
  *a = *b;
  *b = temp;
}
`

const TEST_CASES = [prog6]

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
      expect(result).toMatchSnapshot()
    })
  }
})
