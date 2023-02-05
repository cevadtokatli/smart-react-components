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
  hasHover: boolean
  hasWaveEffect: boolean
  isDisabled: boolean
  isEmbedded: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  setActive: SetState<FormValue | FormValue[]>
  waveEffectPalette: PaletteProp
}

const Option: React.FC<Props> = ({ active, children, hasHover, hasWaveEffect, isDisabled, isOutline, isSoft, palette, setActive, value, waveEffectPalette }: (Props & PrivateProps)) => {
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

  const isActive = () => !Array.isArray(active) ? value === active : active.includes(value)

  const content = (
    <DropdownItemElement
      hasHover={hasHover}
      isActive={isActive()}
      isDisabled={isDisabled}
      isOutline={isOutline}
      isSoft={isSoft}
      palette={palette}
      onClick={handleOnClick}
    >
      {children}
    </DropdownItemElement>
  )

  return hasWaveEffect ? <WaveEffect palette={waveEffectPalette}>{content}</WaveEffect> : content
}

export default Option
