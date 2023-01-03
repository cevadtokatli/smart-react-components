import { render } from '@testing-library/react'
import React from 'react'
import Figcaption from './Figcaption'

describe('<Figcaption />', () => {
  it('should render figcaption element', () => {
    const screen = render(<Figcaption />)
    expect(screen.container.querySelector('figcaption')).toBeTruthy()
  })
})
