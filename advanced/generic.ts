const cars: string[] = ['Ford', 'Audi'];
const cars2: Array<string> = ['Ford', 'Audi'];

const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promise resolve')
  }, 2000)
})

promise.then(data => {
  console.log(data.toLocaleUpperCase())
})

function mergeObject<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `This obj ${value.length} symbol`
  }
}

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Ivan',
  age: 26
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))

class Collection<T extends number | string | boolean | bigint> {

  constructor(private _items: T[] = []) {
  }

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['i', 'am', 'string'])
strings.add('!')
strings.remove('am')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4)
numbers.remove(1)
console.log(numbers.items)

// =============

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as Car
}

///
const cars3: Readonly<Array<string>> = ['Ford', 'Audi']

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}