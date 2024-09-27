import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, JSXElementProps, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import { OrderPosition } from '../types'
import WaveEffect from '../WaveEffect'
import ButtonAddonElement from '../components/Button/ButtonAddonElement'
import { getWaveEffectPalette } from '../util/wave-effect'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents {
  children: ContentElement
  elementProps?: JSXElementProps
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
  const theme = useTheme() as Theme

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.palette, props.isOutline, props.isSoft, props.waveEffectPalette, theme.$.vars.isDarkMode])

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
      {...props.elementProps}
    >
      {props.children}
    </ButtonAddonElement>
  )

  return props.isSeparated && props.hasWaveEffect ? <WaveEffect palette={waveEffectPalette}>{El}</WaveEffect> : El
}

ButtonAddon.defaultProps = {
  elementProps: {},
}

ButtonAddon.displayName = 'SRCAddon'

export default ButtonAddon
