import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonLoading from './'

describe('<ButtonLoading />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ButtonLoading hasAnimation={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have animation', () => {
    const { asFragment } = render(wrapTheme(<ButtonLoading hasAnimation />))
    expect(asFragment()).toMatchSnapshot()
  })
})
