import { render } from '@testing-library/react'
import React from 'react'
import Datalist from './Datalist'

describe('<Datalist />', () => {
  it('should render datalist element', () => {
    const screen = render(<Datalist />)
    expect(screen.container.querySelector('datalist')).toBeTruthy()
  })
})
