import { render } from '@testing-library/react'
import React from 'react'
import S from './S'

describe('<S />', () => {
  it('should render s element', () => {
    const screen = render(<S />)
    expect(screen.container.querySelector('s')).toBeTruthy()
  })
})
