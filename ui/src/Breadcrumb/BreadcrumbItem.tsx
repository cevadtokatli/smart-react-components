import A from '@smart-react-components/core/Element/A'
import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import BreadcrumbItemElement from '../components/Breadcrumb/BreadcrumbItemElement'
import { getWaveEffectPalette } from '../util/wave-effect'
import WaveEffect from '../WaveEffect'

export interface Props extends ClickEvents {
  children: ContentElement
  elementProps?: JSXElementProps
  href?: string
  isActive?: boolean
  isDisabled?: boolean
}

export interface PrivateProps {
  hasWaveEffect: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  separator: string
  shape: ShapeProp
  waveEffectPalette: PaletteProp
}

const BreadcrumbItem: React.FC<Props> = (props: Props & PrivateProps) => {
  const theme = useTheme() as Theme

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.palette, props.isOutline, props.isSoft, props.waveEffectPalette, theme.$.vars.isDarkMode])

  const AnchorEl = (
    <A
      {...extractElementProps(props, [clickEvents])}
      {...props.elementProps}
    >
      {props.children}
    </A>
  )

  const El = props.hasWaveEffect ? <WaveEffect palette={waveEffectPalette}>{AnchorEl}</WaveEffect> : AnchorEl

  return (
    <BreadcrumbItemElement
      isActive={props.isActive}
      isDisabled={props.isDisabled}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      separator={props.separator}
      shape={props.shape}
    >
      {El}
    </BreadcrumbItemElement>
  )
}

export default BreadcrumbItem
