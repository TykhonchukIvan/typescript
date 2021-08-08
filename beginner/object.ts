let user: any = {
  name: 'Ivan',
  age: 30
}

type Person = {
  name: string,
  age: number,
  userName?: string,
  getPass?: () => string
}

let userTypes: Person = {
  name: 'Ivan',
  age: 27,
  userName: 'bear'
}

let adminTypes: Person = {
  name: 'Ivan',
  age: 27,
  getPass(): string {
    return `${this.name}${this.age}`
  }
}
