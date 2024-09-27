import { render } from '@testing-library/react'
import React from 'react'
import Wbr from './Wbr'

describe('<Wbr />', () => {
  it('should render wbr element', () => {
    const screen = render(<Wbr />)
    expect(screen.container.querySelector('wbr')).toBeTruthy()
  })
})
