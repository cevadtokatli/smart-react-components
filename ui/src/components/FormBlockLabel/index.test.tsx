import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import FormBlockLabel from './'

describe('<FormBlockLabel />', () => {
  let children
  let props
  
  beforeAll(() => {
    children = [
      <span key="label">Label</span>,
      <input key="input" />,
    ]
    props = {
      formSize: 'medium',
      isBlock: true,
      isDisabled: false,
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<FormBlockLabel {...props}>{children}</FormBlockLabel>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be block', () => {
    const { asFragment } = render(wrapTheme(<FormBlockLabel {...props} isBlock={false}>{children}</FormBlockLabel>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<FormBlockLabel {...props} isDisabled>{children}</FormBlockLabel>))
    expect(asFragment()).toMatchSnapshot()
  })
})
