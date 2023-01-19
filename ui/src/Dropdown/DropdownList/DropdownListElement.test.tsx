import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import DropdownListElement from './DropdownListElement'

describe('<DropdownListElement />', () => {
  let props

  beforeAll(() => {
    props = {
      isFilled: false,
      isSoft: false,
      palette: 'primary',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<DropdownListElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })
  
  it('should render component filled', () => {
    const { asFragment } = render(wrapTheme(<DropdownListElement {...props} isFilled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<DropdownListElement {...props}  isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component filled with soft colors', () => {
    const { asFragment } = render(wrapTheme(<DropdownListElement {...props} isFilled isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<DropdownListElement {...props} dropdownListSize="small" dropdownListSizeMd="medium" dropdownListSizeLg="large" />))
    expect(asFragment()).toMatchSnapshot()
  })
})
