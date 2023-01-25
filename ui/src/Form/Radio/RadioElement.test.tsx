import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import RadioElement from './RadioElement'

describe('<RadioElement />', () => {
  let props

  beforeAll(() => {
    props = {
      isChecked: true,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      radioSize: 'medium',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be checked', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} isChecked={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} isOutline />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })
})
