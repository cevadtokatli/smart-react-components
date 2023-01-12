import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledMarginProps, { IntrinsicStyledMarginProps } from '@smart-react-components/core/element-props/intrinsic-styled-margin-props'
import { SizeProps } from '@smart-react-components/core/types'
import React from 'react'
import LoadingElement from './LoadingElement'

export interface Props extends IntrinsicStyledMarginProps, SizeProps {
  color?: string
}

const Loading: React.FC<Props> = props => (
  <LoadingElement
    loadingColor={props.color}
    loadingSize={props.size}
    loadingSizeSm={props.sizeSm}
    loadingSizeMd={props.sizeMd}
    loadingSizeLg={props.sizeLg}
    loadingSizeXl={props.sizeXl}
    {...extractElementProps(props, [intrinsicStyledMarginProps])}
  />
)

Loading.defaultProps = {
  color: '$color.blue',
  size: 'medium',
}

export default Loading
