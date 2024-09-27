import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ModalElement from './ModalElement'
import OverlayElement from './OverlayElement'

describe('<OverlayElement />', () => {
  let props
  let modalProps

  beforeAll(() => {
    props = {
      duration: 300,
      hasBackground: true,
      isDisplayedWhenBreakpointNull: true,
      isFullScreen: false,
    }

    modalProps = {
      isBlock: false,
      isCentered: false,
      isFullScreen: false,
      isStretched: false,
      modalSize: 'medium',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement {...props}><ModalElement {...modalProps} /></OverlayElement>))
    expect(asFragment()).toMatchSnapshot()
  })

    it('should be full screen', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement {...props} isFullScreen><ModalElement {...modalProps} isFullScreen /></OverlayElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})
