import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import useInputMethods from './useInputMethods'

describe('useInputMethods', () => {
  let Component 
  let hook

  beforeAll(() => {
    Component = props => {
      hook = useInputMethods<HTMLInputElement>(props)
      const { handleOnBlur, handleOnChange, handleOnFocus } = hook
      return (
        <input
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
        />
      )
    }
  })

  describe('onChange', () => {
    it('should call onChange and setValue', () => {
      const onChange = jest.fn()
      const setValue = jest.fn()
      const { container } = render(<Component isDisabled={false} onChange={onChange} setValue={setValue} />)        
      fireEvent.change(container.querySelector('input')!, { target: { value: 'value' } })
      expect(onChange).toHaveBeenCalled()
      expect(setValue).toHaveBeenCalled()
    })

    it('should call onChange and not setValue when event prevented', () => {
      const onChange = jest.fn(e => e.preventDefault())
      const setValue = jest.fn()
      const { container } = render(<Component isDisabled={false} onChange={onChange} setValue={setValue} />)
      fireEvent.change(container.querySelector('input')!, { target: { value: 'value' } })
      expect(onChange).toHaveBeenCalled()
      expect(setValue).not.toHaveBeenCalled()
    })

    it('should not call onChange and setValue when disabled', () => {
      const onChange = jest.fn()
      const setValue = jest.fn()
      const { container } = render(<Component isDisabled onChange={onChange} setValue={setValue} />)
      fireEvent.change(container.querySelector('input')!, { target: { value: 'value' } })
      expect(onChange).not.toHaveBeenCalled()
      expect(setValue).not.toHaveBeenCalled()
    })

    it('should not call onChange and setValue when readonly', () => {
      const onChange = jest.fn()
      const setValue = jest.fn()
      const { container } = render(<Component isReadOnly onChange={onChange} setValue={setValue} />)
      fireEvent.change(container.querySelector('input')!, { target: { value: 'value' } })
      expect(onChange).not.toHaveBeenCalled()
      expect(setValue).not.toHaveBeenCalled()
    })
  })

  describe('onFocus', () => {
    it('should call onFocus and set isFocused', () => {
      const onFocus = jest.fn()
      const { container } = render(<Component isDisabled={false} onFocus={onFocus} />)        
      fireEvent.focus(container.querySelector('input')!)
      expect(onFocus).toHaveBeenCalled()
      expect(hook.isFocused).toBeTruthy()
    })

    it('should call onFocus and not set isFocused when event prevented', () => {
      const onFocus = jest.fn(e => e.preventDefault())
      const { container } = render(<Component isDisabled={false} onFocus={onFocus} />)        
      fireEvent.focus(container.querySelector('input')!)
      expect(onFocus).toHaveBeenCalled()
      expect(hook.isFocused).toBeFalsy()
    })

    it('should not call onFocus and set isFocused when disabled', () => {
      const onFocus = jest.fn()
      const { container } = render(<Component isDisabled onFocus={onFocus} />)
      fireEvent.focus(container.querySelector('input')!)
      expect(onFocus).not.toHaveBeenCalled()
      expect(hook.isFocused).toBeFalsy()
    })
  })

  describe('onBlur', () => {
    it('should call onBlur and set isFocused', () => {
      const onBlur = jest.fn()
      const { container } = render(<Component isDisabled={false} onBlur={onBlur} />)        
      fireEvent.focus(container.querySelector('input')!)
      fireEvent.blur(container.querySelector('input')!)
      expect(onBlur).toHaveBeenCalled()
      expect(hook.isFocused).toBeFalsy()
    })

    it('should call onBlur and not set isFocused when event prevented', () => {
      const onBlur = jest.fn(e => e.preventDefault())
      const { container } = render(<Component isDisabled={false} onBlur={onBlur} />)        
      fireEvent.focus(container.querySelector('input')!)
      fireEvent.blur(container.querySelector('input')!)
      expect(onBlur).toHaveBeenCalled()
      expect(hook.isFocused).toBeTruthy()
    })
  })
})
