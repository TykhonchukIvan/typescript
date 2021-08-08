const createPassword = (name: string = 'Ivan', age?: number | string): string => `${name}${age}`;

const createSkills = (name: string, ...skills: Array<string>): string => `${name}${skills.join()}`;

const sum = (first: number, second: number): number => first + second;

const greet = (): void => console.log('hello');

const customError = (nsg: string): never => {
  throw new Error(nsg);
}

const infinite = (): never => {
  while (true) {
    console.log('hello')
  }
}

let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
  console.log(name)
}

myFunc = oldFunc;