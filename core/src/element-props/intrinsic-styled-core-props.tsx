import intrinsicStyledFlexProps, { IntrinsicStyledFlexProps } from './intrinsic-styled-flex-props'
import intrinsicStyledMarginProps, { IntrinsicStyledMarginProps } from './intrinsic-styled-margin-props'
import intrinsicStyledSizeProps, { IntrinsicStyledSizeProps } from './intrinsic-styled-size-props'

export interface IntrinsicStyledCoreProps extends IntrinsicStyledFlexProps, IntrinsicStyledMarginProps, IntrinsicStyledSizeProps {}

const intrinsicStyledCoreProps = [...intrinsicStyledFlexProps, ...intrinsicStyledMarginProps, ...intrinsicStyledSizeProps]

export default intrinsicStyledCoreProps
