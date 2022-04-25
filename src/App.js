import './App.css'
import { observer, inject } from 'mobx-react'
import { buttons } from './btnConfig'

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
          {buttons.map((item, index) => (
            <button
              key={index}
              className={`highlight__${item.classes}`}
              value={item.value}
              onClick={store.handleClick}
            >
              {item.display}
            </button>
          ))}
          <button className="highlight" onClick={store.calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default inject('store')(observer(App))
