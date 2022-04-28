import React from 'react'
import { buttons } from './btnConfig'
import { observer } from 'mobx-react'
import './App.css'
import { Formik, Field } from 'formik'
import { useStore } from './Store'

const FormCalculator = () => {
  const store = useStore()

  return (
    <>
      <Formik initialValues={{ input: '', result: '' }}>
        {({ handleChange, setFieldValue, values }) => (
          <div className="container">
            <Field name="input">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  values={values.input}
                  onChange={handleChange}
                />
              )}
            </Field>

            <Field name="result">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  values={values.result}
                  onChange={handleChange}
                />
              )}
            </Field>
            <div className="keypad">
              <button
                name="clear"
                className="highlight"
                id="clear"
                onClick={() => {
                  setFieldValue('input', '')
                  setFieldValue('result', '')
                  store.clear(setFieldValue)
                }}
              >
                Clear
              </button>

              {buttons.map((item, index) => (
                <button
                  key={index}
                  className={`highlight__${item.classes}`}
                  value={item.value}
                  onClick={(e) => {
                    console.log(values)
                    store.handleClick(e.target.value, setFieldValue)
                  }}
                >
                  {item.display}
                </button>
              ))}
              <button
                className="highlight"
                id="backspace"
                onClick={() => {
                  setFieldValue('input', values.input.slice(0, -1))
                  store.backspace(setFieldValue)
                }}
              >
                C
              </button>
              {/* <button
                type="submit"
                className="highlight"
                onClick={store.calculate}
                id="result"
              >
                =
              </button> */}
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}

export default observer(FormCalculator)
