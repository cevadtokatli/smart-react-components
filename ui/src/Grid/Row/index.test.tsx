import { render } from '@testing-library/react'
import React from 'react'
import Row from './'

describe('<Row />', () => {
  it('should render component with default props', () => {
    const { asFragment } = render(<Row />)
    expect(asFragment()).toMatchSnapshot()
  })
})