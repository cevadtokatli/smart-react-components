import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonAddon from './'
import { OrderPosition } from '../../../types'

describe('<ButtonAddon />', () => {
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
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component disabled', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} isOutline isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} buttonSize="small" buttonSizeMd="medium" buttonSizeLg="large" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component at right', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} addonPosition={OrderPosition.RIGHT} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be separated', () => {
    const { asFragment } = render(wrapTheme(<ButtonAddon {...props} isSeparated />))
    expect(asFragment()).toMatchSnapshot()
  })
})
