import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import WaveEffectElement from './WaveEffectElement'

describe('<WaveEffectElement />', () => {
  let props

  beforeAll(() => {
    props = {
      duration: 750,
      left: 50,
      palette: 'light',
      scale: 3,
      top: 25,
    }
  })

  it('should render wave effect', () => {
    const { asFragment } = render(wrapTheme(<WaveEffectElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })
})
