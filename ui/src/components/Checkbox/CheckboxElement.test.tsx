import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import CheckboxElement from './CheckboxElement'

describe('<CheckboxElement />', () => {
  let props

  beforeAll(() => {
    props = {
      checkboxSize: 'medium',
      isChecked: true,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<CheckboxElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be checked', () => {
    const { asFragment } = render(wrapTheme(<CheckboxElement {...props} isChecked={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<CheckboxElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<CheckboxElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })
})
