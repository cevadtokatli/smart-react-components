import { render } from '@testing-library/react'
import React from 'react'
import Th from './Th'

describe('<Th />', () => {
  it('should render th element', () => {
    const screen = render(<table><thead><tr><Th /></tr></thead></table>)
    expect(screen.container.querySelector('th')).toBeTruthy()
  })
})
