/// <reference path="./form-namespace.ts"/>

namespace FormNameSpace {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormSate = 'active'

    constructor(public email: string) {}

    getInfo(){
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  export const myForm = new MyForm('ivan@gmail.com')
}

console.log(FormNameSpace.myForm)