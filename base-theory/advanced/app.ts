const btn: Element | null = document.querySelector('#btn')

class Person {
  constructor() {}
}

const ivan = new Person()

if (btn) {
  btn.addEventListener('click', () => {
    console.log('Hello')
  })
}

// ======

let anyFlag;

function logInfo(data: string){
  console.log(data)
  anyFlag = true
  console.log(anyFlag)
}

logInfo('I log')

function multiple(a: number, b: number): number {
  if(a && b) {
    return a * b
  }
  return 0
}

