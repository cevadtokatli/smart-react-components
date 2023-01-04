import intrinsicStyledFlexProps, { IntrinsicStyledFlexProps } from './intrinsic-styled-flex-props'
import intrinsicStyledMarginProps, { IntrinsicStyledMarginProps } from './intrinsic-styled-margin-props'
import intrinsicStyledSizeProps, { IntrinsicStyledSizeProps } from './intrinsic-styled-size-props'

export interface IntrinsicStyledProps extends IntrinsicStyledFlexProps, IntrinsicStyledMarginProps, IntrinsicStyledSizeProps {}

const intrinsicStyledProps = [...intrinsicStyledFlexProps, ...intrinsicStyledMarginProps, ...intrinsicStyledSizeProps]

export default intrinsicStyledProps
