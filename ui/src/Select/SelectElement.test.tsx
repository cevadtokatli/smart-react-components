import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import SelectElement from './SelectElement'

describe('<SelectElement />', () => {
  let props

  beforeAll(() => {
    props = {
      hasBorder: true,
      hasLeftAddon: false,
      hasRightAddon: false,
      hasSeparatedLeftAddon: false,
      hasSeparatedRightAddon: false,
      inputSize: 'medium',
      isDisabled: false,
      isFocused: false,
      isOutline: true,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<SelectElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })
})
