import { makeObservable, observable, action } from 'mobx'

export default class Store {
  inputVal = '0'
  result = '0'

  constructor() {
    makeObservable(this, {
      inputVal: observable,
      handleClick: action.bound,
      clear: action.bound,
      backspace: action.bound,
      calculate: action.bound,
      result: observable,
      resultVal: action.bound,
    })
  }

  handleClick(e) {
    if (this.inputVal === '0') {
      //   console.log(this.inputVal)
      this.inputVal = e.target.value
    } else {
      this.inputVal = this.inputVal.concat(e.target.value)
      //   console.log(this.inputVal)
    }
  }

  clear() {
    this.inputVal = ''
    this.result = ''
  }

  backspace() {
    this.inputVal = this.inputVal.slice(0, -1)
  }
  calculate() {
    // eslint-disable-next-line
    this.result = eval(this.inputVal.toString())
  }
  resultVal() {
    return this.result
  }
}

// const store = new Store()

// ReactDOM.render(<Store store={store} />, document.getElementById('root'))
