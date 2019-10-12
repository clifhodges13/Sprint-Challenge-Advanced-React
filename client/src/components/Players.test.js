import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Players from './Players'

afterEach(rtl.cleanup)

test('Renders with Player data', () => {
  const wrapper = rtl.render( <Players /> )

  const element = wrapper.queryByText(/player/i)

  expect(element).not.toBeInTheDocument()
})