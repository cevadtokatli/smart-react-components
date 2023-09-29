import A from '@smart-react-components/core/Element/A'
import { Theme } from '@smart-react-components/core/theme'
import useLink, { LinkProps } from '@smart-react-components/router/hooks/useLink'
import React from 'react'
import { useTheme } from 'styled-components'
import WaveEffect from '../WaveEffect'
import { PrivateProps as BreadcrumbItemPrivateProps } from './BreadcrumbItem'
import BreadcrumbItemElement from '../components/Breadcrumb/BreadcrumbItemElement'
import { getWaveEffectPalette } from '../util/wave-effect'

export interface Props extends LinkProps {}

const BreadcrumbLink: React.FC<Props> = (props: Props & BreadcrumbItemPrivateProps) => {
  const theme = useTheme() as Theme

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.palette, props.isOutline, props.isSoft, props.waveEffectPalette, theme.$.vars.isDarkMode])

  const { children, handleOnClick, isActive } = useLink({
    children: props.children,
    isDisabled: props.isDisabled,
    isExact: props.isExact,
    onClick: null,
    path: props.path,
    to: props.to,
  })

  const AnchorEl = (
    <A
      {...props.elementProps}
      href={props.to}
      onClick={handleOnClick}
    >
      {children}
    </A>
  )
  const El = props.hasWaveEffect ? <WaveEffect palette={waveEffectPalette}>{AnchorEl}</WaveEffect> : AnchorEl

  return (
    <BreadcrumbItemElement
      isActive={isActive}
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

BreadcrumbLink.defaultProps = {
  isExact: true,
}

export default BreadcrumbLink
