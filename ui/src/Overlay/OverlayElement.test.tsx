import { render } from '@testing-library/react'
import { wrapTheme } from '@smart-react-components/core/test'
import React from 'react'
import OverlayElement from './OverlayElement'

describe('<OverlayElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint={null} hasBackground={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with background', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint={null} hasBackground />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component in media', () => {
    const { asFragment } = render(wrapTheme(<OverlayElement breakpoint="small" hasBackground={false} />))
    expect(asFragment()).toMatchSnapshot()
  })
})
