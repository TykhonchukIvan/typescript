class User {

  // @ts-ignore
  private nickName: string = 'Bear'
  static secret = 12345;

  constructor(public name: string, public age: number) {
  }

  getPass(): string {
    return `${this.name}${User.secret}`
  }
}

class Ivan extends User {
  name: string = 'Ivan'

  constructor(age: number) {
    // @ts-ignore
    super(name, age);
  }

  getPass(): string {
    return `${this.name}${this.age}${User.secret}`
  }
}

abstract class ClientAbstract {

  constructor(public name: string, public age: number) {
  }

  abstract greet(): void

  abstract getPass(): string;
}

class ClientIvan extends ClientAbstract {
  constructor(age: number) {
    // @ts-ignore
    super(name, age);
  }
  greet(): void {
    console.log(this.name)
  }
  getPass(): string {
    return `${this.age}`;
  }
}
