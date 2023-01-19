import { SetState } from '@smart-react-components/core/types'
import { ContentElement, PaletteProp } from '@smart-react-components/core/types'
import React from 'react'
import WaveEffect from '../../WaveEffect'
import DropdownItemElement from './DropdownItemElement'

export interface Props {
  children: ContentElement
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>
}

interface PrivateProps {
  hasHover: boolean
  hasWaveEffect: boolean
  isFilled: boolean
  isSoft: boolean
  palette: PaletteProp
  setStatus: SetState<boolean>
  waveEffectPalette: PaletteProp
}

const DropdownItem: React.FC<Props> = ({ children, hasHover, hasWaveEffect, isDisabled, isFilled, isSoft, onClick, palette, setStatus, waveEffectPalette }: (Props & PrivateProps)) => {
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
      isFilled={isFilled}
      isDisabled={isDisabled}
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
