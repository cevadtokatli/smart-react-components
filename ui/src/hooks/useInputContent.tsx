import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'

interface Props extends ResponsiveProp<'size', SizeProp> {
  children: ContentElement | ContentElement[]
  hasBorder: boolean
  isDisabled: boolean
  isFocused: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

interface Return {
  hasSeparatedLeftAddon: boolean
  hasSeparatedRightAddon: boolean
  labelContent: JSX.Element
  leftAddon: JSX.Element | null
  rightAddon: JSX.Element | null
}

const useInputContent = ({ children, hasBorder, isFocused, isOutline, isSoft, palette, shape, size, sizeSm, sizeMd, sizeLg, sizeXl }: Props): Return => {
  const getContent = () => {
    let hasSeparatedLeftAddon = false
    let hasSeparatedRightAddon = false
    let labelContent: JSX.Element
    let leftAddon: JSX.Element
    let rightAddon: JSX.Element

    (Array.isArray(children) ? children : [children]).forEach(item => {
      if ((item as JSX.Element).type?.displayName !== 'SRCAddon') {
        labelContent = <span>{item}</span>
      } else {
        const addon = React.cloneElement(item as JSX.Element, {
          hasBorder,
          isFocused,
          isOutline,
          isSoft,
          palette,
          shape,
          size,
          sizeSm,
          sizeMd,
          sizeLg,
          sizeXl,
          ...(item as JSX.Element).props,
        })

        if (addon.props.position === OrderPosition.RIGHT) {
          rightAddon = addon
          hasSeparatedRightAddon = addon.props.isSeparated
        } else {
          leftAddon = addon
          hasSeparatedLeftAddon = addon.props.isSeparated
        }
      }
    })

    return {
      hasSeparatedLeftAddon,
      hasSeparatedRightAddon,
      labelContent,
      leftAddon,
      rightAddon,
    }
  }

  const [{ hasSeparatedLeftAddon, hasSeparatedRightAddon, labelContent, leftAddon, rightAddon }, setContent] = React.useState(() => getContent())

  useChangeEffect(() => {
    setContent(getContent())
  }, [children, isFocused])

  return {
    hasSeparatedLeftAddon,
    hasSeparatedRightAddon,
    labelContent,
    leftAddon,
    rightAddon,
  }
}

export default useInputContent
