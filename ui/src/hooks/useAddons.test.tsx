import { render } from '@testing-library/react'
import React from 'react'
import useAddons from './useAddons'

describe('useAddons', () => {
  let Component
  let hook
  let props

  beforeAll(() => {
    Component = props => {
      hook = useAddons(props)
      return null
    }

    props = {
      Component: () => <div />,
      leftAddon: null,
      rightAddon: null,
      props: {},
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
