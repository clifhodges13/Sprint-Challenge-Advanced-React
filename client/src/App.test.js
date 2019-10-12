import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(rtl.cleanup)

test(`Renders without crashing, has class name of 'App'`, () => {
  const wrapper = rtl.render( <App /> )

  const element = wrapper.getByTestId("app-test-id")

  expect(element).toHaveClass('App')
})