import { render } from '@testing-library/react'
import React from 'react'
import Form from './Form'

describe('<Form />', () => {
  it('should render form element', () => {
    const screen = render(<Form />)
    expect(screen.container.querySelector('form')).toBeTruthy()
  })
})
