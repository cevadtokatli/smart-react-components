import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import InputAddon from './'

describe('<InputAddon />', () => {
  let props

  beforeAll((() => {
    props = {
      hasBorder: true,
      isDisabled: false,
      isFocused: false,
      isOutline: true,
      isSeparated: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  }))

  it ('should render component', () => {
    const { asFragment } = render(wrapTheme(<InputAddon {...props}>Addon</InputAddon>))
    expect(asFragment()).toMatchSnapshot()
  })
})
