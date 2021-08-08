const arrayOfNumbers: Array<number> = [1, 2, 3, 45, 6, 7]
const arrayOfStrings: Array<string> = ['hello', 'ivan']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}