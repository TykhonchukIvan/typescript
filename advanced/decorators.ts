// function Log(constructor: Function) {
//   console.log(constructor)
// }
//
// function Log2(target: any, propName: string | Symbol) {
//   console.log(target)
//   console.log(propName)
// }
//
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log(propName)
//   console.log(descriptor)
// }

const btn2 = document.querySelector('#btn')!

interface ComponentDecorator {
  selector: string,
  template: string,
}

function Component(config: ComponentDecorator) {
  return function <T extends { new(...ars: any[]): object }>
  (Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)

        const el = document.querySelector(config.selector)!
        el.innerHTML = config.template
      }
    }
  }
}

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value
  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this)
    }
  }
}

@Component({
  selector: '#card',
  template: `
  <div class="card">
    <div class="card-content">
        <span class="card-title">Card Component</span>
    </div>
  </div>
  `
})
class CarsComponent {
  constructor(public name: string) {
    this.name = name
  }

  @Bind
  logName(): void {
    console.log('this', this)
    console.log(`Component name: ${this.name}`)
  }
}

const card = new CarsComponent('Ny Card Component')

btn2.addEventListener('click', card.logName)

// ============

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType
  }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    [propName]: 'required'
  }
}

function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name]
  if (!objConfig) {
    return true
  }
  let isValid: boolean = true
  Object.keys(objConfig).forEach(key => {
    if (objConfig[key] === 'required') {
      isValid = isValid && !!obj[key]
    }
  })
  return isValid
}

class Form {
  @Required
  public email: string | void

  constructor(email?: string) {
    this.email = email
  }

}

const form = new Form('asffa')
if (validate(form)) {
  console.log('validation :', form)
} else {
  console.log('Validation Error')
}