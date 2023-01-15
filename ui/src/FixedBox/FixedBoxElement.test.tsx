import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import FixedBoxElement from './FixedBoxElement'

describe('<FixedBoxElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<FixedBoxElement breakpoint={null} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should add breakpoint', () => {
    const { asFragment } = render(wrapTheme(<FixedBoxElement breakpoint="medium" width={300} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should replace width', () => {
    const { asFragment } = render(wrapTheme(<FixedBoxElement breakpoint="medium" width={300} />))
    expect(asFragment()).toMatchSnapshot()
  })
})
