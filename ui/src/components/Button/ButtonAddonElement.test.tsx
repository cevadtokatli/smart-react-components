import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonAddonElement from './ButtonAddonElement'
import { OrderPosition } from '../../types'

describe('<ButtonAddonElement />', () => {
  let props

  beforeAll(() => {
    props = {
      addonPosition: OrderPosition.LEFT,
      buttonSize: 'medium',
      hasHover: true,
      isDisabled: false,
      isOutline: false,
      isSeparated: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component disabled', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} isOutline isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} buttonSize="small" buttonSizeMd="medium" buttonSizeLg="large" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component at right', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} addonPosition={OrderPosition.RIGHT} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be separated', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddonElement {...props} isSeparated />))
    expect(asFragment()).toMatchSnapshot()
  })
})
