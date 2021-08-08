//BooleanType
let isCompleted: boolean = false;
isCompleted = true;

//Number Type
const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

//String Type

const str1: string = 'Hello';
const sentence: string = `${str1} word`;

//Null type
const n: null = null;

//Undefined type
const u: undefined = undefined;

// Void type function
const greetUser = (): void => {
  console.log('Hello')
};

// Array Type
const list: number[] = [1, 2, 3, 45];
const listArr: Array<number> = [1, 4, 5];

// Tuple Type
let x: [string, number];
x = ['hello', 3]
const y: [string, string] = ['Hello', 'TS'];

//Any Type
let q: [any, any] = ['hello', 6];
const w: Array<any> = [2, 3, 5, 6, 'hello'];
let notSure: any = false;
notSure = 6;

//Enum
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

enum DirectionsCustom {
  ud = 3,
  down = 4,
  left = 10,
  right,
}

enum DirectionsCustomRevers {
  ud = 3,
  down = 4,
  left = 10,
  right,
}

const enumValue: string = DirectionsCustomRevers[3]

enum links {
  google = 'google'
}

const enum link {
  nasa = 'nasa',
}

const arrLink: Array<string> = [link['nasa']]

// Never Type
const msg: string = 'hello'
const error = (msg: string): never => {
  throw new Error(msg)
};
const infiniteLoop = (): never => {
  while (true) {
    console.log(error('loop'))
  }
};

// object type
const create = (o: object | null): void => {
  console.log(o);
};

// Multiple type
let id: number | string;

// Type
type Name = string;
let a: Name;
a = 'a';