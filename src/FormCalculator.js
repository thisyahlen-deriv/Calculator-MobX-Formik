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
                  disabled="disabled"
                />
              )}
            </Field>
            <div className="equals">=</div>
            <Field name="result">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  values={values.result}
                  onChange={handleChange}
                  disabled="disabled"
                />
              )}
            </Field>
            <div className="keypad">
              <button
                name="clear"
                className="highlight-clear"
                id="clear"
                onClick={() => {
                  setFieldValue('input', '')
                  setFieldValue('result', '')
                  store.clear(setFieldValue)
                }}
              >
                CLEAR
              </button>

              {buttons.map((item, index) => (
                <button
                  key={index}
                  className={`highlight__${item.classes}`}
                  value={item.value}
                  onClick={(e) => {
                    store.handleClick(e.target.value, setFieldValue)
                  }}
                >
                  {item.display}
                </button>
              ))}
              <button
                className="highlight-c"
                id="backspace"
                onClick={() => {
                  setFieldValue('input', values.input.slice(0, -1))
                  store.backspace(setFieldValue)
                }}
              >
                C
              </button>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}

export default observer(FormCalculator)
