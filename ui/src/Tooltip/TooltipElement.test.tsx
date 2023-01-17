import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import PopoverArrow from '../components/PopoverArrow'
import TooltipElement from './TooltipElement'

describe('<TooltipElement />', () => {
  let children
  let props

  beforeAll(() => {
    children = (
      <>
        <span>Tooltip</span>
        <PopoverArrow />
      </>
    )

    props = {
      duraton: 300,
      hasTransition: false,
      isSoft: false,
      palette: 'primary',
      tooltipSize: 'medium',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<TooltipElement {...props}>{children}</TooltipElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<TooltipElement {...props} isSoft>{children}</TooltipElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with responsive size props', () => {
    const { asFragment } = render(wrapTheme(<TooltipElement {...props} tooltipSize="small" tooltipSizeMd="medium" tooltipSizeXl="large">{children}</TooltipElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with transition', () => {
    const { asFragment } = render(wrapTheme(<TooltipElement {...props} hasTransition>{children}</TooltipElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})
