import { render } from '@testing-library/react'
import React from 'react'
import Caption from './Caption'

describe('<Caption />', () => {
  it('should render caption element', () => {
    const screen = render(<table><Caption /></table>)
    expect(screen.container.querySelector('caption')).toBeTruthy()
  })
})
