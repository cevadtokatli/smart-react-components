import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import DropdownListElement from '../components/Dropdown/DropdownListElement'
import { getWaveEffectPalette } from '../util/wave-effect'

export interface Props extends Partial<ResponsiveProp<'size', SizeProp>> {
  children: JSX.Element | JSX.Element[]
  elementProps?: JSXElementProps
  hasHover?: boolean
  hasWaveEffect?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  waveEffectPalette?: PaletteProp
}

interface PrivateProps {
  setStatus: SetState<boolean>
}

const DropdownList = React.forwardRef<HTMLDivElement, Props>((props: Props & PrivateProps, forwardRef) => {
  const theme = useTheme() as Theme

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.waveEffectPalette, props.palette, props.isOutline, props.isSoft, theme.$.vars.isDarkMode])

  return (
    <DropdownListElement
      dropdownListSize={props.size}
      dropdownListSizeSm={props.sizeSm}
      dropdownListSizeMd={props.sizeMd}
      dropdownListSizeLg={props.sizeLg}
      dropdownListSizeXl={props.sizeXl}
      elementProps={props.elementProps}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      ref={forwardRef}
    >
      { (Array.isArray(props.children) ? props.children : [props.children]).map((item, idx) => item && React.cloneElement(item, { key: item.key ?? idx, hasHover: props.hasHover, hasWaveEffect: props.hasWaveEffect, isOutline: props.isOutline, isSoft: props.isSoft, palette: props.palette, setStatus: props.setStatus, waveEffectPalette })) }
    </DropdownListElement>
  )
})

DropdownList.defaultProps = {
  elementProps: {},
  hasHover: true,
  hasWaveEffect: true,
  isOutline: true,
  palette: 'primary',
  size: 'medium',
}

export default DropdownList
