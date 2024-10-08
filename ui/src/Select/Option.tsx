import { ContentElement, PaletteProp, SetState } from '@smart-react-components/core/types'
import React from 'react'
import DropdownItemElement from '../components/Dropdown/DropdownItemElement'
import { FormValue } from '../types'
import WaveEffect from '../WaveEffect'

export interface Props {
  children: ContentElement
  isDisabled?: boolean
  value: FormValue
}

export interface PrivateProps {
  active: FormValue | FormValue[]
  cursorKey: string
  hasHover: boolean
  hasWaveEffect: boolean
  hovered: FormValue
  isDisabled: boolean
  isEmbedded: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  setActive: SetState<FormValue | FormValue[]>
  setHovered: SetState<FormValue>
  waveEffectPalette: PaletteProp
}

const Option: React.FC<Props> = ({ active, children, cursorKey, hasHover, hasWaveEffect, hovered, isDisabled, isOutline, isSoft, palette, setActive, setHovered, value, waveEffectPalette }: (Props & PrivateProps)) => {
  const handleOnClick = () => {
    if (isDisabled) {
      return
    }

    if (!Array.isArray(active)) {
      setActive(value)
    } else {
      if (!active.includes(value)) {
        setActive([...active, value])
      } else {
        setActive(active.filter(i => i !== value))
      }
    }
  }

  const isActive = () => !Array.isArray(active) ? (value !== null && value === active) : active.includes(value)

  const isHovered = () => hovered !== undefined && hovered === value

  const content = (
    <DropdownItemElement
      cursor={`$cursor.${cursorKey}`}
      hasHover={hasHover}
      isActive={isActive()}
      isDisabled={isDisabled}
      isHovered={isHovered()}
      isOutline={isOutline}
      isSoft={isSoft}
      palette={palette}
      onClick={handleOnClick}
      {...(setHovered && !isDisabled) && { onMouseEnter: () => setHovered(value) }}
    >
      {children}
    </DropdownItemElement>
  )

  return hasWaveEffect ? <WaveEffect palette={waveEffectPalette}>{content}</WaveEffect> : content
}

Option.displayName = 'Option'

export default Option
