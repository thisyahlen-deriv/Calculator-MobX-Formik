import { decorate, observable, action } from 'mobx'
import React from 'react'
export default class Store {
  inputVal = ''
  result = ''

  handleClick(input_value, setFieldValue) {
    if (this.inputVal === '0') {
      this.inputVal = input_value
      // eslint-disable-next-line no-eval
      this.result = eval(this.inputVal)
    } else {
      this.inputVal = this.inputVal.concat(input_value)
      // eslint-disable-next-line no-eval
      if (
        this.inputVal.endsWith('+') ||
        this.inputVal.endsWith('-') ||
        this.inputVal.endsWith('*') ||
        this.inputVal.endsWith('/') ||
        this.inputVal.endsWith('.') ||
        this.inputVal.endsWith('%')
      ) {
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

decorate(Store, {
  inputVal: observable,
  handleClick: action.bound,
  clear: action.bound,
  backspace: action.bound,
  calculate: action.bound,
  result: observable,
  resultVal: action.bound,
})

let context

export const useStore = () => {
  if (!context) {
    const store = new Store()

    context = React.createContext(store)
  }

  return React.useContext(context)
}

// const store = new Store()

// ReactDOM.render(<Store store={store} />, document.getElementById('root'))
