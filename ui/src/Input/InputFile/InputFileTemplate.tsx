import { PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import Badge from '../../Badge'
import BadgeIcon from '../../Badge/BadgeIcon'
import BadgeList from '../../Badge/BadgeList'
import CloseIcon from '../../icons/Close'
import InputElement, { InputPlaceholder } from '../InputElement'

interface Props extends Partial<ResponsiveProp<'inputSize', SizeProp>> {
  children?: JSX.Element
  hasBorder?: boolean
  hasLeftAddon?: boolean
  hasRightAddon?: boolean
  hasSeparatedLeftAddon?: boolean
  hasSeparatedRightAddon?: boolean
  isDisabled?: boolean
  isFocused?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  placeholder?: string
  setValue?: SetState<File | File[]>
  shape?: ShapeProp
  value?: File | File[]
}

const InputFileTemplate: React.FC<Props> = ({ children, hasBorder, hasLeftAddon, hasRightAddon, hasSeparatedLeftAddon, hasSeparatedRightAddon, inputSize, inputSizeSm, inputSizeMd, inputSizeLg, inputSizeXl, isDisabled, isFocused, isOutline, isSoft, palette, placeholder, setValue, shape, value }) => {
  const handleIconClick = (e, idx) => {
    e.preventDefault()
    setValue((value as File[]).filter((_, i) => i !== idx))
  }

  return (
    <InputElement
      hasBorder={hasBorder}
      hasLeftAddon={hasLeftAddon}
      hasRightAddon={hasRightAddon}
      hasSeparatedLeftAddon={hasSeparatedLeftAddon}
      hasSeparatedRightAddon={hasSeparatedRightAddon}
      inputSize={inputSize}
      inputSizeSm={inputSizeSm}
      inputSizeMd={inputSizeMd}
      inputSizeLg={inputSizeLg}
      inputSizeXl={inputSizeXl}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isInput={false}
      isOutline={isOutline}
      isSoft={isSoft}
      palette={palette}
      shape={shape}
    >
      {children}
      { !value || (value as File[]).length === 0
        ? <InputPlaceholder>{placeholder}</InputPlaceholder>
        : (!Array.isArray(value)
            ? value.name
            : (
              <BadgeList
                palette={palette}
                isSoft={isSoft}
                shape={shape}
                size={inputSize}
                sizeSm={inputSizeSm}
                sizeMd={inputSizeMd}
                sizeLg={inputSizeLg}
                sizeXl={inputSizeXl}
              >
                { value.map((item, idx) => (
                  <Badge key={idx}>
                    <BadgeIcon
                      {...(!isDisabled && { onClick: e => handleIconClick(e, idx) })}
                    >
                      <CloseIcon />
                    </BadgeIcon>
                    {item.name}
                  </Badge>
                )) }
              </BadgeList>
              )
          )
      }
    </InputElement>
  )
}

export default InputFileTemplate
