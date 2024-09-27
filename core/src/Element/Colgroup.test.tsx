import { render } from '@testing-library/react'
import React from 'react'
import Colgroup from './Colgroup'

describe('<Colgroup />', () => {
  it('should render colgroup element', () => {
    const screen = render(<table><Colgroup /></table>)
    expect(screen.container.querySelector('colgroup')).toBeTruthy()
  })
})
