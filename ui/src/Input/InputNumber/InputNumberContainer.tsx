import Div from '@smart-react-components/core/Element/Div'
import { PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import CaretDown from '../../icons/CaretDown'
import CaretUp from '../../icons/CaretUp'
import { OrderPosition } from '../../types'
import InputAddon from '../InputAddon'
import InputElement from '../InputElement'
import InputNumberContainerElement from './InputNumberContainerElement'

interface Props extends Partial<ResponsiveProp<'inputSize', SizeProp>> {
  hasBorder?: boolean
  isDisabled?: boolean
  isFocused?: boolean
  isOutline?: boolean
  isSoft?: boolean
  min?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  palette?: PaletteProp
  shape?: ShapeProp
  value?: number
}

const InputNumberContainer: React.FC<Props> = props => {
  const el = React.useRef<HTMLDivElement>(null)

  const toggleValue = (isInc: boolean) => {
    if (props.isDisabled) {
      return
    }

    let value = props.value

    if (value !== null) {
      if (isInc) {
        value++
      } else {
        value--
      }
    } else {
      value = props.min

      if (isInc) {
        value++
      }
    }

    const e: any = { target: { value: String(value) } }
    props.onChange(e)
  }

  const addonProps = {
    hasBorder: props.hasBorder,
    isDisabled: props.isDisabled,
    isFocused: props.isFocused,
    isOutline: props.isOutline,
    isSeparated: false,
    isSoft: props.isSoft,
    palette: props.palette,
    position: OrderPosition.RIGHT,
    shape: props.shape,
    size: props.inputSize,
    sizeSm: props.inputSizeSm,
    sizeMd: props.inputSizeMd,
    sizeLg: props.inputSizeLg,
    sizeXl: props.inputSizeXl,
  }

  return (
    <InputNumberContainerElement
      inputSize={props.inputSize}
      inputSizeSm={props.inputSizeSm}
      inputSizeMd={props.inputSizeMd}
      inputSizeLg={props.inputSizeLg}
      inputSizeXl={props.inputSizeXl}
      ref={el}
    >
      <InputElement
        {...props}
        hasRightAddon
        hasSeparatedRightAddon
      />
      <InputAddon {...addonProps}>
        <Div alignItems="flex-end" onClick={() => toggleValue(true)}>
          <CaretUp />
        </Div>
        <Div alignItems="flex-start" onClick={() => toggleValue(false)}>
          <CaretDown />
        </Div>
      </InputAddon>
    </InputNumberContainerElement>
  )
}

export default InputNumberContainer
