import { render } from '@testing-library/react'
import React from 'react'
import Col from './Col'

describe('<Col />', () => {
  it('should render col element', () => {
    const screen = render(<table><colgroup><Col /></colgroup></table>)
    expect(screen.container.querySelector('col')).toBeTruthy()
  })
})
