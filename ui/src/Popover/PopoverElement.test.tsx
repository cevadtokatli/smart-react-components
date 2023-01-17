import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import PopoverArrow from '../components/PopoverArrow'
import PopoverElement, { PopoverHeader, PopoverContent} from './PopoverElement'

describe('<PopoverElement />', () => {
  let children
  let props
  
  beforeAll(() => {
    children = [
      <PopoverHeader key="header">Header</PopoverHeader>,
      <PopoverContent key="content">Content</PopoverContent>,
      <PopoverArrow key="arrow" />,
    ]

    props = {
      duraton: 300,
      hasTransition: false,
      isSoft: false,
      palette: 'primary',
      popoverSize: 'medium',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<PopoverElement {...props}>{children}</PopoverElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<PopoverElement {...props} isSoft>{children}</PopoverElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with responsive size props', () => {
    const { asFragment } = render(wrapTheme(<PopoverElement {...props} popoverSize="small" popoverSizeMd="medium" popoverSizeXl="large">{children}</PopoverElement>))
    expect(asFragment()).toMatchSnapshot()
  })
   
  it('should render component with transition', () => {
    const { asFragment } = render(wrapTheme(<PopoverElement {...props} hasTransition>{children}</PopoverElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})
