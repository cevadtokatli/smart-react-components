import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import { OrderPosition } from '../../types'
import FormInlineLabel from './'

describe('<FormInlineLabel />', () => {
  let children
  let props
  
  beforeAll(() => {
    children = [
      <input key="input" />,
      <div key="item" />,
      <span key="label">Label</span>,
    ]

    props = {
      formSize: 'medium',
      isBlock: false,
      isDisabled: false,
      labelPosition: OrderPosition.RIGHT,
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<FormInlineLabel {...props}>{children}</FormInlineLabel>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be block', () => {
    const { asFragment } = render(wrapTheme(<FormInlineLabel {...props} isBlock>{children}</FormInlineLabel>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<FormInlineLabel {...props} isDisabled>{children}</FormInlineLabel>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('label should be at left', () => {
    const { asFragment } = render(wrapTheme(<FormInlineLabel {...props} labelPosition={OrderPosition.LEFT}>{children}</FormInlineLabel>))
    expect(asFragment()).toMatchSnapshot()
  })
})
