import { render } from '@testing-library/react'
import React from 'react'
import Tfoot from './Tfoot'

describe('<Tfoot />', () => {
  it('should render tfoot element', () => {
    const screen = render(<table><Tfoot /></table>)
    expect(screen.container.querySelector('tfoot')).toBeTruthy()
  })
})
