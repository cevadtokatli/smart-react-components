import { wrapTheme } from '@smart-react-components/core/test'
import { createEvent, fireEvent, render, waitFor } from '@testing-library/react' 
import React from 'react'
import DropdownItem from './DropdownItem'

describe('<DropdownItem />', () => {
  let children
  let props

  beforeAll(() => {
    children = 'Content'

    props = {
      hasHover: false,
      hasWaveEffect: false,
      isOutline: true,
      isSoft: false,
      palette: 'primary',
      waveEffectPalette: 'light',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<DropdownItem {...props}>{children}</DropdownItem>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render waveEffect', () => {
    const { asFragment } = render(wrapTheme(<DropdownItem {...props} hasWaveEffect>{children}</DropdownItem>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onClick and setStatus', async () => {
    const onClick = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<DropdownItem {...props} onClick={onClick} setStatus={setStatus}>{children}</DropdownItem>))
    const node = container.querySelector('div')!
    fireEvent(node, createEvent.click(node))
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
      expect(setStatus).toHaveBeenCalled()
    })
  })

  it('should call only onClick when event prevented', async () => {
    const onClick = jest.fn(e => e.preventDefault())
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<DropdownItem {...props} onClick={onClick} setStatus={setStatus}>{children}</DropdownItem>))
    const node = container.querySelector('div')!
    fireEvent(node, createEvent.click(node))
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
      expect(setStatus).not.toHaveBeenCalled()
    })
  })

  it('should not call onClick and setStatus when disabled', async () => {
    const onClick = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<DropdownItem {...props} isDisabled onClick={onClick} setStatus={setStatus}>{children}</DropdownItem>))
    const node = container.querySelector('div')!
    fireEvent(node, createEvent.click(node))
    await waitFor(() => {
      expect(onClick).not.toHaveBeenCalled()
      expect(setStatus).not.toHaveBeenCalled()
    })
  })

  it('should call setStatus', async () => {
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<DropdownItem {...props} setStatus={setStatus}>{children}</DropdownItem>))
    const node = container.querySelector('div')!
    fireEvent(node, createEvent.click(node))
    await waitFor(() => {
      expect(setStatus).toHaveBeenCalled()
    })
  })
})
