import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import BreadcrumblListElement from './BreadcrumbListElement'

describe('<BradcrumbListElement />', () => {
  let props

  beforeAll(() => {
    props = {
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumblListElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumblListElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BreadcrumblListElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })
})
