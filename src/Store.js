import { makeObservable, observable, action } from 'mobx'

export default class Store {
  inputVal = ''
  result = ''

  constructor() {
    makeObservable(this, {
      inputVal: observable,
      handleClick: action.bound,
      clear: action.bound,
      backspace: action.bound,
      calculate: action.bound,
      result: observable,
      resultVal: action.bound,
      handleInput: action.bound,
    })
  }

  handleClick(input_value, setFieldValue) {
    if (input_value === '') {
      //   console.log(this.inputVal)
      this.inputVal = input_value
      // eslint-disable-next-line no-eval
      this.result = eval(this.inputVal)
    } else {
      this.inputVal = this.inputVal.concat(input_value)
      console.log(this.inputVal)
      // eslint-disable-next-line no-eval
      if (
        this.inputVal.endsWith('+') ||
        this.inputVal.endsWith('-') ||
        this.inputVal.endsWith('*') ||
        this.inputVal.endsWith('/') ||
        this.inputVal.endsWith('.')
      ) {
        // this.inputVal = input_value
      } else {
        // eslint-disable-next-line no-eval
        this.result = eval(this.inputVal.toString())
      }
    }
    setFieldValue('input', this.inputVal)
    setFieldValue('result', this.result)
  }

  clear(setFieldValue) {
    this.inputVal = ''
    this.result = ''
    setFieldValue('input', '')
  }

  backspace(setFieldValue) {
    this.inputVal = this.inputVal.slice(0, -1)
    setFieldValue('backspace', this.inputVal)
  }
  calculate() {
    // eslint-disable-next-line
    this.result = eval(this.inputVal.toString())
  }
  resultVal() {
    return this.result
  }

  handleInput(value) {
    this.result = value
  }
}

// const store = new Store()

// ReactDOM.render(<Store store={store} />, document.getElementById('root'))
