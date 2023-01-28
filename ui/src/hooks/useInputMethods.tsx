import { SetState } from '@smart-react-components/core/types'
import { ChangeEvent, FocusEvent, useState } from 'react'

interface Props<DOMElement> {
  isDisabled: boolean
  isReadOnly: boolean
  onBlur?: (e: FocusEvent<DOMElement>) => void
  onChange?: (e: ChangeEvent<DOMElement>) => void
  onFocus?: (e: FocusEvent<DOMElement>) => void
  setValue?: SetState<string>
}

interface Return<DOMElement> {
  handleOnBlur?: (e: FocusEvent<DOMElement>) => void
  handleOnChange?: (e: ChangeEvent<DOMElement>) => void
  handleOnFocus?: (e: FocusEvent<DOMElement>) => void
  isFocused: boolean
}

export default function useInputMethods <DOMElement extends HTMLInputElement | HTMLTextAreaElement> ({ isDisabled, isReadOnly, onBlur, onChange, onFocus, setValue }: Props<DOMElement>): Return<DOMElement> {
  const [isFocused, setFocused] = useState(false)

  /**
   * Calls onBlur methhod.
   * Sets focus status if event is not prevented.
   */
  const handleOnBlur = (e: FocusEvent<DOMElement>) => {
    onBlur?.(e)

    if (!e.defaultPrevented) {
      setFocused(false)
    }
  }

  /**
   * Calls onChange method.
   * Sets value if event is not prevented.
   */
  const handleOnChange = (e: ChangeEvent<DOMElement>): void => {
    if (isDisabled || isReadOnly) {
      return
    }

    onChange?.(e)

    if (!e.defaultPrevented) {
      setValue?.(e.target.value)
    }
  }

  /**
   * Calls onFocus method.
   * Sets focus status if event is not prevented.
   */
  const handleOnFocus = (e: FocusEvent<DOMElement>) => {
    if (isDisabled) {
      return
    }

    onFocus?.(e)

    if (!e.defaultPrevented) {
      setFocused(true)
    }
  }

  return {
    handleOnBlur,
    handleOnChange,
    handleOnFocus,
    isFocused,
  }
}
