import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonLoadingElement from './ButtonLoadingElement'

describe('<ButtonLoadingElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ButtonLoadingElement hasAnimation={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have animation', () => {
    const { asFragment } = render(wrapTheme(<ButtonLoadingElement hasAnimation />))
    expect(asFragment()).toMatchSnapshot()
  })
})
