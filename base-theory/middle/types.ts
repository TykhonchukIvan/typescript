const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 50;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';
const numberArray: number[] = [1, 1, 2, 3, 4, 5, 6, 7];
const numberArray2: Array<number> = [1, 1, 2, 3, 4, 5, 6, 7];

const words: string[] = ['Hello TS']

// Tuple
const contact: [string, number] = ['Ivan', 123]

//Any
let variable: any = 42
//...
variable = 'New String';
variable = [];

// function
function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('afsafs')

//Never
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {
    console.log(true)
  }
}

// Type

type Login = string;
const login: Login = 'admin';

type ID = string | number
const id1 = 123123
const id2 = '123123'

type SomeType = string | null | undefined
