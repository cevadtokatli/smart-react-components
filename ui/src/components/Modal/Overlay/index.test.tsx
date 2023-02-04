import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Modal from '../'
import Overlay from './'

describe('<Overlay />', () => {
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
    const { asFragment } = render(wrapTheme(<Overlay {...props}><Modal {...modalProps} /></Overlay>))
    expect(asFragment()).toMatchSnapshot()
  })

    it('should be full screen', () => {
    const { asFragment } = render(wrapTheme(<Overlay {...props} isFullScreen><Modal {...modalProps} isFullScreen /></Overlay>))
    expect(asFragment()).toMatchSnapshot()
  })
})
