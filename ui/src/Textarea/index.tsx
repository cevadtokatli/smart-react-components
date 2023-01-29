import { Property, Resize } from '@smart-react-components/core/styled-props/css-properties'
import { addEventListener, debounce, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import Input, { Props as InputProps } from '../Input'
import InputElement from '../Input/InputElement'

export interface Props extends Omit<InputProps, 'type'> {
  areaMaxHeight?: number
  areaMinHeight?: number
  resize?: Property<Resize>
}

const Textarea = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const ref = React.useRef<HTMLInputElement>(null)

  const calculateHeight = () => {
    const el = ((forwardRef ?? ref) as React.RefObject<HTMLElement>).current

    if (!el) {
      return
    }

    el.style.height = 'auto'

    let height = el.scrollHeight + 5

    if (height < props.areaMinHeight) {
      height = props.areaMinHeight
    } else if (props.areaMaxHeight > -1 && height > props.areaMaxHeight) {
      height = props.areaMaxHeight
    }

    el.style.height = `${height}px`
  }

  React.useEffect(() => {
    if (props.areaMaxHeight > -1 || props.areaMinHeight > -1) {
      const calculateHeightDebounce = debounce(calculateHeight)

      addEventListener(window, ['resize'], calculateHeightDebounce)

      return () => {
        removeEventListener(window, ['resize'], calculateHeightDebounce)
      }
    }
  }, [props.areaMaxHeight, props.areaMinHeight])

  React.useEffect(() => {
    if (props.areaMaxHeight > -1 || props.areaMinHeight > -1) {
      calculateHeight()
    }
  }, [props.value, props.areaMaxHeight, props.areaMinHeight])

  return (
    <Input
      {...props}
      ref={forwardRef ?? ref}
      template={React.cloneElement(props.template, { resize: props.resize })}
    />
  )
})

Textarea.defaultProps = {
  ...Input.defaultProps,
  areaMaxHeight: 350,
  areaMinHeight: 150,
  resize: 'none',
  template: <InputElement as="textarea" />,
}

export default Textarea
