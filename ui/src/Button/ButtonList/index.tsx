import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps from '@smart-react-components/core/element-props/intrinsic-styled-props'
import React from 'react'
import ButtonListElement from '../../components/Button/ButtonList'
import { ButtonListGenericProps } from '../../types/button'

export interface Props extends ButtonListGenericProps {
  hasSpace?: boolean
  template?: JSX.Element
}

const ButtonList: React.FC<Props> = props => React.cloneElement(props.template, {
  ...extractElementProps(props, [intrinsicStyledProps]),
  buttonSize: props.size ?? 'medium',
  buttonSizeSm: props.sizeSm,
  buttonSizeMd: props.sizeMd,
  buttonSizeLg: props.sizeLg,
  buttonSizeXl: props.sizeXl,
  hasSpace: props.hasSpace,
  isBlock: props.isBlock,
  length: props.children.length,
  ...props.template.props,
  children: props.children.map((item, idx) => React.cloneElement(item, {
    key: item.key ?? idx,
    hasHover: props.hasHover ?? item.props.hasHover,
    hasSpace: props.hasSpace ?? item.props.hasSpace,
    hasWaveEffect: props.hasWaveEffect ?? item.props.hasWaveEffect,
    isBlock: props.isBlock ?? item.props.isBlock,
    isLink: props.isLink ?? item.props.isLink,
    isOutline: props.isOutline ?? item.props.isOutline,
    isSoft: props.isSoft ?? item.props.isSoft,
    palette: props.palette ?? item.props.palette,
    shape: props.shape ?? item.props.shape,
    size: props.size ?? item.props.size,
    sizeSm: props.sizeSm ?? item.props.sizeSm,
    sizeMd: props.sizeMd ?? item.props.sizeMd,
    sizeLg: props.sizeLg ?? item.props.sizeLg,
    sizeXl: props.sizeXl ?? item.props.sizeXl,
    waveEffectPalette: props.waveEffectPalette,
  })),
})

ButtonList.defaultProps = {
  hasSpace: true,
  template: <ButtonListElement />,
}

export default ButtonList
