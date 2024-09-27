import { render } from '@testing-library/react'
import React from 'react'
import Tr from './Tr'

describe('<Tr />', () => {
  it('should render tr element', () => {
    const screen = render(<table><thead><Tr /></thead></table>)
    expect(screen.container.querySelector('tr')).toBeTruthy()
  })
})
