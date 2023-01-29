import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import InputAddon from '../Input/InputAddon'
import { OrderPosition } from '../types'

interface Props extends ResponsiveProp<'size', SizeProp> {
  hasBorder: boolean
  isDisabled: boolean
  isFocused: boolean
  isOutline: boolean
  isSoft: boolean
  leftAddon: ContentElement | null
  rightAddon: ContentElement | null
  palette: PaletteProp
  shape: ShapeProp
}

interface Return {
  leftAddon: JSX.Element | null
  rightAddon: JSX.Element | null
}

const useInputAddons = ({ hasBorder, isDisabled, isFocused, isOutline, isSoft, leftAddon, rightAddon, palette, shape, size, sizeSm, sizeMd, sizeLg, sizeXl }: Props): Return => {
  const generateAddonEl = (item, position) => {
    if (!item) {
      return null
    }

    const props = {
      hasBorder,
      isFocused,
      isOutline,
      isSoft,
      palette,
      position,
      shape,
      size,
      sizeSm,
      sizeMd,
      sizeLg,
      sizeXl,
    }

    if (item?.displayName === 'SRCInputAddon') {
      return React.cloneElement(item, {
        ...props,
        ...(item as JSX.Element).props,
      })
    }

    return (
      <InputAddon {...props}>
        {item}
      </InputAddon>
    )
  }

  const [leftAddonEl, setLeftAddonEl] = React.useState(() => generateAddonEl(leftAddon, OrderPosition.LEFT))
  const [rightAddonEl, setRightAddonEl] = React.useState(() => generateAddonEl(rightAddon, OrderPosition.RIGHT))

  useChangeEffect(() => {
    setLeftAddonEl(generateAddonEl(leftAddon, OrderPosition.LEFT))
  }, [leftAddon, isDisabled, isFocused])

  useChangeEffect(() => {
    setRightAddonEl(generateAddonEl(rightAddon, OrderPosition.RIGHT))
  }, [rightAddon, isDisabled, isFocused])

  return {
    leftAddon: leftAddonEl,
    rightAddon: rightAddonEl,
  }
}

export default useInputAddons
