import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Container from './'

describe('<Container />', () => {
  it('should render component with default props', () => {
    const { asFragment } = render(wrapTheme(<Container />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with custom props', () => {
    const { asFragment } = render(wrapTheme(<Container marginHorizontal={15} />))
    expect(asFragment()).toMatchSnapshot()
  })
})
