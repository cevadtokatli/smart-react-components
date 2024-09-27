import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonGroupElement from './ButtonGroupElement'

describe('<ButtonGroupElement />', () => {
  let props

  beforeAll(() => {
    props = {
      buttonSize: 'medium',
      hasSpace: false,
      isBlock: false,
      length: 10,
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ButtonGroupElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('children should have space', () => {
    const { asFragment } = render(wrapTheme(<ButtonGroupElement {...props} hasSpace />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('children should be block', () => {
    const { asFragment } = render(wrapTheme(<ButtonGroupElement {...props} isBlock />))
    expect(asFragment()).toMatchSnapshot()
  })
})
