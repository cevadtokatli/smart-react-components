import { Nullable, SizeProp } from '@smart-react-components/core/types'
import { OrderPosition } from '../types'

/**
 * Gets icon size based on the given generic size props
 */
export const getIconSizeProps = (size: SizeProp, sizeSm?: Nullable<SizeProp>, sizeMd?: Nullable<SizeProp>, sizeLg?: Nullable<SizeProp>, sizeXl?: Nullable<SizeProp>) => ({
  height: `$size.icon.${size}`,
  width: `$size.icon.${size}`,
  ...(sizeSm && { heightSm: `$size.icon.${sizeSm}`, widthSm: `$size.icon.${sizeSm}` }),
  ...(sizeMd && { heightMd: `$size.icon.${sizeMd}`, widthMd: `$size.icon.${sizeMd}` }),
  ...(sizeLg && { heightLg: `$size.icon.${sizeLg}`, widthLg: `$size.icon.${sizeLg}` }),
  ...(sizeXl && { heightXl: `$size.icon.${sizeXl}`, widthXl: `$size.icon.${sizeXl}` }),
})

/**
 * Returns reverse value of the order position.
 * If value is left, returns right.
 * If value is right, returns left.
 */
export const getReverseOrderPosition = (value: OrderPosition) => value ^ (OrderPosition.LEFT | OrderPosition.RIGHT)
