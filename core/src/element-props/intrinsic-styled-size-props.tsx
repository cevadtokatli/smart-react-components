import { Property, Size } from '../styled-props/css-properties'

export interface IntrinsicStyledSizeProps {
  height: Property<Size>
  maxHeight: Property<Size>
  maxWidth: Property<Size>
  minHeight: Property<Size>
  minWidth: Property<Size>
  width: Property<Size>
}

const intrinsicStyledSizeProps = [
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'width',
]

export default intrinsicStyledSizeProps
