class Users {
  name: string;
  age: number;
  nickName: string;

  constructor(name: string, age: number, nickName: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
  }
}

const ivan = new Users('ivan', 3, 'bear');

class Client {

  public name: string;
  readonly nickName: string;
  protected age: number;

  //private pass: number;

  constructor(name: string,
              age: number,
              nickName: string,
              //pass: number
  ) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    //this.pass = pass;
  }
}

const ivanClient = new Client('Ivan', 1, 'Bear');

class Admin {
  name: string;
  age: number = 27;
  nickName: string = 'Bear'

  constructor(name: string) {
    this.name = name;
  }

  getPass(): void {
    console.log(`${this.name}${this.age}${this.nickName}`);
  }
}

const admin = new Admin('Ivan');

class Manager {

  constructor(
    public name: string,
    public age: number,
    public nickMane: string,
    public password: number,
  ) {
  }

}

class Agent {
  // @ts-ignore
  private age: number = 22;

  constructor(public name: string) {
  }

  setAge(age: number) {
    this.age = age
  }
  set myAge(age: number){
    this.age = age
  }
}

const agent = new Agent('ivan');