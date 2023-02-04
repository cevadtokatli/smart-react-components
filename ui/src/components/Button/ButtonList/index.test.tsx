import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonList from './'

describe('<ButtonList />', () => {
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
    const { asFragment } = render(wrapTheme(<ButtonList {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('children should have space', () => {
    const { asFragment } = render(wrapTheme(<ButtonList {...props} hasSpace />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('children should be block', () => {
    const { asFragment } = render(wrapTheme(<ButtonList {...props} isBlock />))
    expect(asFragment()).toMatchSnapshot()
  })
})
