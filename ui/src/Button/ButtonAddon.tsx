import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { ContentElement, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'
import WaveEffect from '../WaveEffect'
import ButtonAddonElement from '../components/Button/ButtonAddonElement'
import { getWaveEffectPalette } from '../util/wave-effect'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents {
  children: ContentElement
  isDisabled?: boolean
  isOutline?: boolean
  isSeparated?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  waveEffectPalette?: PaletteProp
}

interface PrivateProps {
  hasHover: boolean
  hasWaveEffect: boolean
  position: OrderPosition
  shape: ShapeProp
}

const ButtonAddon: React.FC<Props> = (props: Props & PrivateProps) => {
  const El = (
    <ButtonAddonElement
      addonPosition={props.position}
      buttonSize={props.size}
      buttonSizeSm={props.sizeSm}
      buttonSizeMd={props.sizeMd}
      buttonSizeLg={props.sizeLg}
      buttonSizeXl={props.sizeXl}
      hasHover={props.hasHover}
      isDisabled={props.isDisabled}
      isOutline={props.isOutline}
      isSeparated={props.isSeparated}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
      {...(!props.isDisabled && extractElementProps(props, [clickEvents]))}
    >
      {props.children}
    </ButtonAddonElement>
  )

  return props.isSeparated && props.hasWaveEffect ? <WaveEffect palette={getWaveEffectPalette(props.waveEffectPalette, props.palette, props.isSoft)}>{El}</WaveEffect> : El
}

ButtonAddon.displayName = 'SRCAddon'

export default ButtonAddon
