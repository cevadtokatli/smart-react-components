import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonLoading from './ButtonLoading'

describe('<ButtonLoading />', () => {
  let props

  beforeAll(() => {
    props = {
      hasAnimation: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      status: true,
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ButtonLoading {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with custom content', () => {
    const { asFragment } = render(wrapTheme(<ButtonLoading {...props}><div /></ButtonLoading>))
    expect(asFragment()).toMatchSnapshot()
  })
})
