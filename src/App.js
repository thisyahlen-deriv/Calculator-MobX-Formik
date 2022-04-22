import './App.css'
import { observer, inject } from 'mobx-react'

const App = ({ store }) => {
  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            value={store.inputVal}
            onChange={(e) => e.target.value}
          />
        </form>
        <form>
          <input
            type="text"
            value={store.result}
            onChange={(e) => e.target.value}
          />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={store.clear} id="clear">
            Clear
          </button>
          <button
            className="highlight"
            onClick={store.backspace}
            id="backspace"
          >
            C
          </button>
          <button className="highlight" value={'/'} onClick={store.handleClick}>
            &divide;
          </button>
          <button value={7} onClick={store.handleClick}>
            7
          </button>
          <button value={8} onClick={store.handleClick}>
            8
          </button>
          <button value={9} onClick={store.handleClick}>
            9
          </button>
          <button className="highlight" value={'*'} onClick={store.handleClick}>
            &times;
          </button>
          <button value={4} onClick={store.handleClick}>
            4
          </button>
          <button value={5} onClick={store.handleClick}>
            5
          </button>
          <button value={6} onClick={store.handleClick}>
            6
          </button>
          <button className="highlight" value={'-'} onClick={store.handleClick}>
            &ndash;
          </button>
          <button value={1} onClick={store.handleClick}>
            1
          </button>
          <button value={2} onClick={store.handleClick}>
            2
          </button>
          <button value={3} onClick={store.handleClick}>
            3
          </button>
          <button className="highlight" value={'+'} onClick={store.handleClick}>
            +
          </button>
          <button value={0} onClick={store.handleClick}>
            0
          </button>
          <button value={'.'} onClick={store.handleClick}>
            .
          </button>
          <button className="highlight" onClick={store.calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default inject('store')(observer(App))
