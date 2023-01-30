import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import { OrderPosition } from '../../types'
import BadgeIcon from './'

describe('<BadgeIcon />', () => {
  let props

  beforeAll(() => {
    props = {
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      position: OrderPosition.LEFT,
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<BadgeIcon {...props}><svg /></BadgeIcon>))
    expect(asFragment()).toMatchSnapshot()
  })
})
