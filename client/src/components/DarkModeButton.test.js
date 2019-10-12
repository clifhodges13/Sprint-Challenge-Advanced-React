import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DarkModeButton from './DarkModeButton'

afterEach(rtl.cleanup)

test('Renders with Player data', () => {
  const wrapper = rtl.render( <DarkModeButton /> )
  wrapper.debug()

  const element = wrapper.getByText(/toggle dark mode/i)
  expect(element).toBeInTheDocument()
})