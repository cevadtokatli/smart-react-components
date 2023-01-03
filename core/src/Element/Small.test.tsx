import { render } from '@testing-library/react'
import React from 'react'
import Small from './Small'

describe('<Small />', () => {
  it('should render small element', () => {
    const screen = render(<Small />)
    expect(screen.container.querySelector('small')).toBeTruthy()
  })
})
