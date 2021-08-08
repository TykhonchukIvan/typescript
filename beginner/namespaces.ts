namespace Utils {
  export const SECRET: string = '12412351';
  export const PI: number = 3.14
  export const getPass =(name: string, age: number): string => `${name}${age}`
  export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass('Ivan', 27);
const isSecret = Utils.isEmpty(Utils.SECRET);