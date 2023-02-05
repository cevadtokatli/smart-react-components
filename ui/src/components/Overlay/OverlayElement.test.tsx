import { render } from '@testing-library/react'
import { wrapTheme } from '@smart-react-components/core/test'
import React from 'react'
import OverlayElement from './OverlayElement'

describe('<OverlayElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint={null} hasBackground={false} isDisplayedWhenBreakpointNull />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with background', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint={null} hasBackground isDisplayedWhenBreakpointNull />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component in media', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint="small" hasBackground={false} isDisplayedWhenBreakpointNull />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not render component when isDisplayedWhenBreakpointNull false', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint={null} hasBackground isDisplayedWhenBreakpointNull={false} />))
    expect(asFragment()).toMatchSnapshot()
  })
})
