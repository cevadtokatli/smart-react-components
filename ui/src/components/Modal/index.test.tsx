import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Modal from './'

describe('<Modal />', () => {
  let props

  beforeAll(() => {
    props = {
      isBlock: false,
      isCentered: false,
      isFullScreen: false,
      isStretched: false,
      modalSize: 'medium',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Modal {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be block', () => {
    const { asFragment } = render(wrapTheme(<Modal {...props} isBlock />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be centered', () => {
    const { asFragment } = render(wrapTheme(<Modal {...props} isCentered />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be full screen', () => {
    const { asFragment } = render(wrapTheme(<Modal {...props} isFullScreen />))
    expect(asFragment()).toMatchSnapshot()
  })
  it('should be stretched', () => {
    const { asFragment } = render(wrapTheme(<Modal {...props} isStretched />))
    expect(asFragment()).toMatchSnapshot()
  })
})
