interface ClientInterface {
  name: string,
  age: number,
  readonly nickName?: string
}

interface ClientRest {
  [propName: string]: any
}

interface ClientsMethods extends ClientInterface {
  getPass(): string,
}

class AnyClient implements ClientsMethods, ClientRest {
  name: string = 'Ivan';
  age: number = 31;

  getPass(): string {
    return `${this.age}${this.name}`
  }
}