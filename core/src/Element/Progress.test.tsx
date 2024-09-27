import { render } from '@testing-library/react'
import React from 'react'
import Progress from './Progress'

describe('<Progress />', () => {
  it('should render progress element', () => {
    const screen = render(<Progress />)
    expect(screen.container.querySelector('progress')).toBeTruthy()
  })
})
