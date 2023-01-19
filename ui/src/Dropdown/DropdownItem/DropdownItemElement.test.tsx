import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import DropdownItemElement from './DropdownItemElement'

describe('<DropdownItemElement />', () => {
  let props

  beforeAll(() => {
    props = {
      hasHover: true,
      isActive: false,
      isDisabled: false,
      isFilled: false,
      isSoft: false,
      palette: 'primary',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not have hover', () => {
    const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} hasHover={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component filled', () => {
    const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} isFilled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<DropdownItemElement {...props}  isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component filled with soft colors', () => {
    const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} isFilled isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })


  describe('isActive', () => {
    beforeAll(() => {
      props = {
        ...props,
        isActive: true,
      }
    })

    it('should render component', () => {
      const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} />))
      expect(asFragment()).toMatchSnapshot()
    })

    it('should render component filled', () => {
      const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} isFilled />))
      expect(asFragment()).toMatchSnapshot()
    })
  
    it('should render component with soft colors', () => {
      const { asFragment } = render(wrapTheme(<DropdownItemElement {...props}  isSoft />))
      expect(asFragment()).toMatchSnapshot()
    })
  
    it('should render component filled with soft colors', () => {
      const { asFragment } = render(wrapTheme(<DropdownItemElement {...props} isFilled isSoft />))
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
