import { render } from '@testing-library/react'
import React from 'react'
import Optgroup from './Optgroup'

describe('<Optgroup />', () => {
  it('should render optgroup element', () => {
    const screen = render(<Optgroup />)
    expect(screen.container.querySelector('optgroup')).toBeTruthy()
  })
})
