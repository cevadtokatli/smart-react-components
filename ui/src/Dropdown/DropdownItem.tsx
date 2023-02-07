import { ContentElement, PaletteProp, SetState } from '@smart-react-components/core/types'
import React from 'react'
import WaveEffect from '../WaveEffect'
import DropdownItemElement from '../components/Dropdown/DropdownItemElement'

export interface Props {
  children: ContentElement
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>
}

export interface PrivateProps {
  hasHover: boolean
  hasWaveEffect: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  setStatus: SetState<boolean>
  waveEffectPalette: PaletteProp
}

const DropdownItem: React.FC<Props> = ({ children, hasHover, hasWaveEffect, isDisabled, isOutline, isSoft, onClick, palette, setStatus, waveEffectPalette }: (Props & PrivateProps)) => {
  const handleOnClick = async (e: React.MouseEvent<HTMLElement>) => {
    if (isDisabled) {
      return
    }

    await onClick?.(e)

    if (!e.defaultPrevented) {
      setStatus(false)
    }
  }

  const content = (
    <DropdownItemElement
      hasHover={hasHover}
      isActive={false}
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

export default DropdownItem