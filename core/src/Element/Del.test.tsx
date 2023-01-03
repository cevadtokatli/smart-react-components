import { render } from '@testing-library/react'
import React from 'react'
import Del from './Del'

describe('<Del />', () => {
  it('should render del element', () => {
    const screen = render(<Del />)
    expect(screen.container.querySelector('del')).toBeTruthy()
  })
})
