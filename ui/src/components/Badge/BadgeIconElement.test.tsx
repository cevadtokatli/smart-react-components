import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import { OrderPosition } from '../../types'
import BadgeIconElement from './BadgeIconElement'

describe('<BadgeIconElement />', () => {
  let props

  beforeAll(() => {
    props = {
      iconPosition: OrderPosition.LEFT,
      isClickable: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<BadgeIconElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BadgeIconElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<BadgeIconElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BadgeIconElement {...props} isOutline isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be clickable', () => {
    const { asFragment } = render(wrapTheme(<BadgeIconElement {...props} isClickable />))
    expect(asFragment()).toMatchSnapshot()
  })
})
