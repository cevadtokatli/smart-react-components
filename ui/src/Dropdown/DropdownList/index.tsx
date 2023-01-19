import { PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import DropdownListElement from './DropdownListElement'

export interface Props extends Partial<ResponsiveProp<'size', SizeProp>> {
  children: JSX.Element[]
  hasHover?: boolean
  hasWaveEffect?: boolean
  isFilled?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  waveEffectPalette?: PaletteProp
}

interface PrivateProps {
  setStatus: SetState<boolean>
}

const Dropdown: React.FC<Props> = ({ children, hasHover = true, hasWaveEffect = true, isFilled, isSoft, palette = 'primary', setStatus, size = 'medium', sizeSm, sizeMd, sizeLg, sizeXl, waveEffectPalette = 'light' }: Props & PrivateProps) => (
  <DropdownListElement
    dropdownListSize={size}
    dropdownListSizeSm={sizeSm}
    dropdownListSizeMd={sizeMd}
    dropdownListSizeLg={sizeLg}
    dropdownListSizeXl={sizeXl}
    isFilled={isFilled}
    isSoft={isSoft}
    palette={palette}
  >
    { children.map((item, index) => React.cloneElement(item, { key: item.key ?? index, hasHover, hasWaveEffect, isFilled, isSoft, palette, setStatus, waveEffectPalette })) }
  </DropdownListElement>
)

export default Dropdown
