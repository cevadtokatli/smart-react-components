import { render } from '@testing-library/react'
import React from 'react'
import Figure from './Figure'

describe('<Figure />', () => {
  it('should render figure element', () => {
    const screen = render(<Figure />)
    expect(screen.container.querySelector('figure')).toBeTruthy()
  })
})
