import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import BreadcrumbListElement from '../components/Breadcrumb/BreadcrumbListElement'
import { getWaveEffectPalette } from '../util/wave-effect'

export interface Props extends IntrinsicStyledCoreProps {
  children: JSX.Element[]
  elementProps?: JSXElementProps
  hasWaveEffect?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  separator?: string
  shape?: ShapeProp
  waveEffectPalette?: PaletteProp
}

const BreadcrumbList: React.FC<Props> = props => {
  const theme = useTheme() as Theme

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.waveEffectPalette, props.palette, props.isSoft])

  return (
    <BreadcrumbListElement
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
      {...extractElementProps(props, [intrinsicStyledCoreProps])}
      {...props.elementProps}
    >
      { props.children.map((item, idx) => React.cloneElement(item, {
        key: item.key ?? idx,
        hasWaveEffect: props.hasWaveEffect,
        isOutline: props.isOutline,
        isSoft: props.isSoft,
        palette: props.palette,
        separator: props.separator,
        shape: props.shape,
        waveEffectPalette,
      })) }
    </BreadcrumbListElement>
  )
}

BreadcrumbList.defaultProps = {
  hasWaveEffect: true,
  palette: 'primary',
  shape: 'rectangle',
}

export default BreadcrumbList
