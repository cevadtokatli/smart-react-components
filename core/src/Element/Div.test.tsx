import { render } from '@testing-library/react'
import React from 'react'
import Div from './Div'

describe('<Div />', () => {
  it('should render div element', () => {
    const screen = render(<Div />)
    expect(screen.container.querySelector('div')).toBeTruthy()
  })
})
