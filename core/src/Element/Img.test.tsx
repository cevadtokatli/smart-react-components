import { render } from '@testing-library/react'
import React from 'react'
import Img from './Img'

describe('<Img />', () => {
  it('should render img element', () => {
    const screen = render(<Img />)
    expect(screen.container.querySelector('img')).toBeTruthy()
  })
})
