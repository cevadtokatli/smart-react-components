import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import SwitchElement from './SwitchElement'

describe('<SwitchElement />', () => {
  let props

  beforeAll(() => {
    props = {
      isChecked: true,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      switchSize: 'medium',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<SwitchElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be checked', () => {
    const { asFragment } = render(wrapTheme(<SwitchElement {...props} isChecked={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<SwitchElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<SwitchElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })
})
