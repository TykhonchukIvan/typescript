const getter = (data: any) => data

const getterGeneric = <T>(data: T): T => data

//Generic class

class UserGeneric<T, K extends number> {
  constructor(public name: T, public age: K) {
  }

  public getPass(): string {
    return `${this.age}${this.name}`
  }
}

const Ron = new UserGeneric('Ron', 123)
const Leo = new UserGeneric(124, 14)
const Star = new UserGeneric('Star', 14)