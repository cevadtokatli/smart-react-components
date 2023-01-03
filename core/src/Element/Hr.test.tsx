import { render } from '@testing-library/react'
import React from 'react'
import Hr from './Hr'

describe('<Hr />', () => {
  it('should render hr element', () => {
    const screen = render(<Hr />)
    expect(screen.container.querySelector('hr')).toBeTruthy()
  })
})
