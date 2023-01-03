import { render } from '@testing-library/react'
import React from 'react'
import Section from './Section'

describe('<Section />', () => {
  it('should render section element', () => {
    const screen = render(<Section />)
    expect(screen.container.querySelector('section')).toBeTruthy()
  })
})
