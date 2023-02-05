import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ModalElement from './ModalElement'

describe('<ModalElement />', () => {
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
    const { asFragment } = render(wrapTheme(<ModalElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be block', () => {
    const { asFragment } = render(wrapTheme(<ModalElement {...props} isBlock />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be centered', () => {
    const { asFragment } = render(wrapTheme(<ModalElement {...props} isCentered />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be full screen', () => {
    const { asFragment } = render(wrapTheme(<ModalElement {...props} isFullScreen />))
    expect(asFragment()).toMatchSnapshot()
  })
  it('should be stretched', () => {
    const { asFragment } = render(wrapTheme(<ModalElement {...props} isStretched />))
    expect(asFragment()).toMatchSnapshot()
  })
})
