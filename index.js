class Init {
  constructor(hello) {
    this.hello = hello || `Hello Word`
  }
  helloWordPrint () {
    console.log(this.hello)
  }
}
const a = new Init('1')
a.helloWordPrint()