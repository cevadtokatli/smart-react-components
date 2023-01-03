import { render } from '@testing-library/react'
import React from 'react'
import Select from './Select'

describe('<Select />', () => {
  it('should render select element', () => {
    const screen = render(<Select />)
    expect(screen.container.querySelector('select')).toBeTruthy()
  })
})
