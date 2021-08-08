// Class Decorator
const logClass = (constructor: Function) => {
  console.log('logClass', constructor)
}

// Property Decorator
const logProperty = (_target: Object, propertyKey: string | symbol) => {
  console.log('logProperty', propertyKey)
}

// Method Decorator
const logMethod = (
  _target: Object,
  propertyKey: string | symbol,
  _descriptor: PropertyDescriptor
) => {
  console.log('logMethod', propertyKey)
}

// get/set Decorator
const logSet = (
  _target: Object,
  propertyKey: string | symbol,
  _descriptor: PropertyDescriptor
) => {
  console.log('logSet', propertyKey)
}


@logClass
class UserForDecorator {

  @logProperty
  secret: number;

  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }

  @logMethod
  public getPass(): string {
    return `${this.age}${this.name}`
  }

  @logSet
  set myAge(age: number) {
    this.age = age
  }

}

// Factory Decorator
function factory(_value: any) {     // Factory
  return function (target: any) {  // Decorator
    console.log(target)            // Decorator logic
  }
}

// applying Factory Decorator

const enumerable = (value: boolean) => {
  return (
    _target: Object,
    _propertyKey: string | symbol,
    _descriptor: PropertyDescriptor
  ) => {
    _descriptor.enumerable = value;
  }
}

class UserFactoryDecorator {
  constructor(public name: string, public age: number) {
  }

  @enumerable(false)
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}
