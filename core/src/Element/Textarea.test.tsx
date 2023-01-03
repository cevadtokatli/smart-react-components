import { render } from '@testing-library/react'
import React from 'react'
import Textarea from './Textarea'

describe('<Textarea />', () => {
  it('should render textarea element', () => {
    const screen = render(<Textarea />)
    expect(screen.container.querySelector('textarea')).toBeTruthy()
  })
})
