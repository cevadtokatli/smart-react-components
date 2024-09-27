import { render } from '@testing-library/react'
import React from 'react'
import Td from './Td'

describe('<Td />', () => {
  it('should render td element', () => {
    const screen = render(<table><tbody><tr><Td /></tr></tbody></table>)
    expect(screen.container.querySelector('td')).toBeTruthy()
  })
})
