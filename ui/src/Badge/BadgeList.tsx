import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import BadgeListElement from '../components/Badge/BadgeListElement'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledCoreProps {
  children: JSX.Element[]
  elementProps?: JSXElementProps
  hasSpace?: boolean
  isFixedSize?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

const BadgeList: React.FC<Props> = props => (
  <BadgeListElement
    badgeListSize={props.size ?? 'medium'}
    badgeListSizeSm={props.sizeSm}
    badgeListSizeMd={props.sizeMd}
    badgeListSizeLg={props.sizeLg}
    badgeListSizeXl={props.sizeXl}
    hasSpace={props.hasSpace ?? true}
    {...extractElementProps(props, [intrinsicStyledCoreProps])}
    {...props.elementProps}
  >
    { props.children.map((item, index) => React.cloneElement(item, {
      key: item.key ?? index,
      hasSpace: props.hasSpace ?? item.props.hasSpace ?? true,
      isFixedSize: props.isFixedSize ?? item.props.isFixedSize,
      isOutline: props.isOutline ?? item.props.isOutline,
      isSoft: props.isSoft ?? item.props.isSoft,
      palette: props.palette ?? item.props.palette,
      shape: props.shape ?? item.props.shape,
      size: props.size ?? item.props.size,
      sizeSm: props.sizeSm ?? item.props.sizeSm,
      sizeMd: props.sizeMd ?? item.props.sizeMd,
      sizeLg: props.sizeLg ?? item.props.sizeLg,
      sizeXl: props.sizeXl ?? item.props.sizeXl,
    })) }
  </BadgeListElement>
)

export default BadgeList
