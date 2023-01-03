import { render } from '@testing-library/react'
import React from 'react'
import Option from './Option'

describe('<Option />', () => {
  it('should render option element', () => {
    const screen = render(<Option />)
    expect(screen.container.querySelector('option')).toBeTruthy()
  })
})
