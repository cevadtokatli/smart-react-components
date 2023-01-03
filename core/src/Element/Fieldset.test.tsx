import { render } from '@testing-library/react'
import React from 'react'
import Fieldset from './Fieldset'

describe('<Fieldset />', () => {
  it('should render fieldset element', () => {
    const screen = render(<Fieldset />)
    expect(screen.container.querySelector('fieldset')).toBeTruthy()
  })
})
