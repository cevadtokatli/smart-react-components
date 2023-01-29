import { render } from '@testing-library/react'
import React from 'react'
import useInputAddons from './useInputAddons'

describe('useInputAddons', () => {
  let Component
  let hook
  let props

  beforeAll(() => {
    Component = props => {
      hook = useInputAddons(props)
      return null
    }

    props = {
      hasBorder: true,
      isDisabled: false,
      isFocused: false,
      isOutline: true,
      isSoft: false,
      leftAddon: null,
      palette: 'primary',
      rightAddon: null,
      shape: 'rectangle',
    }
  })

  it('should have left addon', () => {
    render(<Component {...props} leftAddon={<div />} />)
    expect(hook.leftAddon).toBeTruthy()
    expect(hook.rightAddon).toBeFalsy()
  })

  it('should have right addon', () => {
    render(<Component {...props} rightAddon={<div />} />)
    expect(hook.leftAddon).toBeFalsy()
    expect(hook.rightAddon).toBeTruthy()
  })
})
