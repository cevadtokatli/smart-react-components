import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ProgressBarElement, { Bar, Percentage } from './ProgressBarElement'

describe('<ProgressBarElement />', () => {
  let props
  let children

  beforeAll(() => {
    props = {
      hasStripedAnimation: true,
      height: '400px',
      isFilled: false,
      isNested: false,
      isStriped: true,
      palette: 'primary',
      stripedAnimationDuration: 400,
      transitionDuration: 450,
      transitionTimingFunction: 'linear',
    }

    children = (
      <>
        <Percentage style={{ left: 200 }}>50%</Percentage>
        <Bar style={{ width: '50%' }}>
          <Percentage style={{ left: 200 }}>50%</Percentage>
        </Bar>
      </>
    )
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ProgressBarElement {...props}>{children}</ProgressBarElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component filled', () => {
    const { asFragment } = render(wrapTheme(<ProgressBarElement {...props} isFilled>{children}</ProgressBarElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component nested', () => {
    const { asFragment } = render(wrapTheme(<ProgressBarElement {...props} isNested>{children}</ProgressBarElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})
