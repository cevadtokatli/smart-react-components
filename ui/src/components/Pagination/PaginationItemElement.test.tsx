import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import PaginationItemElement from './PaginationItemElement'

describe('<PaginationItemElement />', () => {
  let props

  beforeAll(() => {
    props = {
      isActive: false,
      isDisabled: false,
      isFixedSize: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} isSoft isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be active', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} isActive />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be circle', () => {
    const { asFragment } = render(wrapTheme(<PaginationItemElement {...props} isFixedSize shape="rounded" />))
    expect(asFragment()).toMatchSnapshot()
  })
})
