import { PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import DropdownListElement from '../components/Dropdown/DropdownListElement'

export interface Props extends Partial<ResponsiveProp<'size', SizeProp>> {
  children: JSX.Element | JSX.Element[]
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

const DropdownList: React.FC<Props> = ({ children, hasHover = true, hasWaveEffect = true, isOutline = true, isSoft, palette = 'primary', setStatus, size = 'medium', sizeSm, sizeMd, sizeLg, sizeXl, waveEffectPalette = 'light' }: Props & PrivateProps) => (
  <DropdownListElement
    dropdownListSize={size}
    dropdownListSizeSm={sizeSm}
    dropdownListSizeMd={sizeMd}
    dropdownListSizeLg={sizeLg}
    dropdownListSizeXl={sizeXl}
    isOutline={isOutline}
    isSoft={isSoft}
    palette={palette}
  >
    { (Array.isArray(children) ? children : [children]).map((item, idx) => item && React.cloneElement(item, { key: item.key ?? idx, hasHover, hasWaveEffect, isOutline, isSoft, palette, setStatus, waveEffectPalette })) }
  </DropdownListElement>
)

export default DropdownList
