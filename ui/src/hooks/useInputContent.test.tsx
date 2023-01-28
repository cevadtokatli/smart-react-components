import { render } from '@testing-library/react'
import React from 'react'
import InputAddon, { Position } from '../Input/InputAddon'
import useInputContent from './useInputContent'

describe('useInputContent', () => {
  let Component
  let hook
  let props

  beforeAll(() => {
    Component = props => {
      hook = useInputContent(props)
      return null
    }

    props = {
      hasBorder: true,
      isDisabled: false,
      isFocused: false,
      isOutline: true,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should have label content', () => {
    render(<Component {...props}>Label</Component>)
    expect(hook.labelContent).toBeTruthy()
    expect(hook.leftAddon).toBeFalsy()
    expect(hook.rightAddon).toBeFalsy()
  })

  it('should have left addon', () => {
    render(<Component {...props}><InputAddon>Addon</InputAddon></Component>)
    expect(hook.labelContent).toBeFalsy()
    expect(hook.leftAddon).toBeTruthy()
    expect(hook.rightAddon).toBeFalsy()
    expect(hook.hasSeparatedLeftAddon).toBeFalsy()
  })

  it('should have right addon', () => {
    render(<Component {...props}><InputAddon position={Position.RIGHT}>Addon</InputAddon></Component>)
    expect(hook.labelContent).toBeFalsy()
    expect(hook.leftAddon).toBeFalsy()
    expect(hook.rightAddon).toBeTruthy()
    expect(hook.hasSeparatedRightAddon).toBeFalsy()
  })

  it('should have separated left addon', () => {
    render(<Component {...props}><InputAddon isSeparated>Addon</InputAddon></Component>)
    expect(hook.labelContent).toBeFalsy()
    expect(hook.leftAddon).toBeTruthy()
    expect(hook.rightAddon).toBeFalsy()
    expect(hook.hasSeparatedLeftAddon).toBeTruthy()
  })

  it('should have separated right addon', () => {
    render(<Component {...props}><InputAddon position={Position.RIGHT} isSeparated>Addon</InputAddon></Component>)
    expect(hook.labelContent).toBeFalsy()
    expect(hook.leftAddon).toBeFalsy()
    expect(hook.rightAddon).toBeTruthy()
    expect(hook.hasSeparatedRightAddon).toBeTruthy()
  })
})
