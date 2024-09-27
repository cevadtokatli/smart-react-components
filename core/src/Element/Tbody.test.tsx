import { render } from '@testing-library/react'
import React from 'react'
import Tbody from './Tbody'

describe('<Tbody />', () => {
  it('should render tbody element', () => {
    const screen = render(<table><Tbody /></table>)
    expect(screen.container.querySelector('tbody')).toBeTruthy()
  })
})
