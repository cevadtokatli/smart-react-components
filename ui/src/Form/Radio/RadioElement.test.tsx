import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import RadioElement, { ScaleArea, Circle } from './RadioElement'

describe('<RadioElement />', () => {
  let children
  let props

  beforeAll(() => {
    children = <ScaleArea><Circle /></ScaleArea>
    props = {
      isChecked: true,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      radioSize: 'medium',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props}>{children}</RadioElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be checked', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} isChecked={false}>{children}</RadioElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} isOutline>{children}</RadioElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<RadioElement {...props} isSoft>{children}</RadioElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})
