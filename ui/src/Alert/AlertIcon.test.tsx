import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import AlertIcon from './'

describe('<AlertIcon />', () => {
  let props

  beforeAll(() => {
    props = {
      alertPalette: 'primary',
      isSoft: false,
      size: 'medium',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<AlertIcon {...props}><svg /></AlertIcon>))
    expect(asFragment()).toMatchSnapshot()
  })
})
