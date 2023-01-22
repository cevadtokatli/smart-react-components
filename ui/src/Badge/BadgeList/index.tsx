import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import BadgeListElement from './BadgeListElement'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
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
    badgeListSize={props.size}
    badgeListSizeSm={props.sizeSm}
    badgeListSizeMd={props.sizeMd}
    badgeListSizeLg={props.sizeLg}
    badgeListSizeXl={props.sizeXl}
    hasSpace={props.hasSpace}
    {...extractElementProps(props, [intrinsicStyledProps])}
    {...props.elementProps}
  >
    { props.children.map((item, index) => React.cloneElement(item, {
      key: item.key ?? index,
      hasSpace: props.hasSpace,
      isFixedSizze: props.isFixedSize,
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      shape: props.shape,
      size: props.size,
      sizeSm: props.sizeSm,
      sizeMd: props.sizeMd,
      sizeLg: props.sizeLg,
      sizeXl: props.sizeXl,
      ...item.props,
    })) }
  </BadgeListElement>
)

BadgeList.defaultProps = {
  hasSpace: true,
  size: 'medium',
}

export default BadgeList
