import { render } from '@testing-library/react'
import React from 'react'
import Object from './Object'

describe('<Object />', () => {
  it('should render object element', () => {
    const screen = render(<Object />)
    expect(screen.container.querySelector('object')).toBeTruthy()
  })
})
