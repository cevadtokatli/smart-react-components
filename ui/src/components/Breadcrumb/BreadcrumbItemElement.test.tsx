import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import BreadcrumbItemElement from './BreadcrumbItemElement'

describe('<BreadcrumbItemElement />', () => {
  let props

  beforeAll(() => {
    props = {
      isActive: false,
      isDisabled: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      separator: null,
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumbItemElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumbItemElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumbItemElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumbItemElement {...props} isOutline isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be active', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumbItemElement {...props} isActive />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumbItemElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

})
