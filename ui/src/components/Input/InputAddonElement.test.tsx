import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import { OrderPosition } from '../../types'
import InputAddonElement from './InputAddonElement'

describe('<InputAddonElement />', () => {
  let props

  beforeAll(() => {
    props = {
      addonPosition: OrderPosition.LEFT,
      hasBorder: true,
      inputSize: 'medium',
      isDisabled: false,
      isFocused: false,
      isOutline: true,
      isSeparated: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

    it('should render component focused', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isFocused />))
    expect(asFragment()).toMatchSnapshot()
  })

    it('should render component disabled', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component not outline', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isOutline={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isOutline={false} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} inputSize="small" inputSizeMd="medium" inputSizeLg="large" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component at right', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} addonPosition={OrderPosition.RIGHT} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be focused', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isFocused />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be separated', () => {
    const { asFragment } = render(wrapTheme(<InputAddonElement {...props} isSeparated />))
    expect(asFragment()).toMatchSnapshot()
  })
})
