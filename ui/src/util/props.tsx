import { JSXElementProps, SizeProp, Value } from '@smart-react-components/core/types'
import { OrderPosition } from '../types'

/**
 * Apply the given prop to each breakpoint which has a corresponding size prop.
 *
 * @param sizeProps - Object that holds size props.
 * @param sizePropKey - Name of the size prop.
 * @param responsivePropKey - Name of the applied prop.
 * @param valueCallback - It is invoked with the given size prop value to return the responsive prop value.
 */
export const applyResponsiveStyledProp = (sizeProps: JSXElementProps, sizePropKey: string, responsivePropKey: string, valueCallback: (size: SizeProp) => Value): JSXElementProps => ({
  [responsivePropKey]: valueCallback(sizeProps[sizePropKey]),
  ...(sizeProps[`${sizePropKey}Sm`] && { [`${responsivePropKey}Sm`]: valueCallback(sizeProps[`${sizePropKey}Sm`]) }),
  ...(sizeProps[`${sizePropKey}Md`] && { [`${responsivePropKey}Md`]: valueCallback(sizeProps[`${sizePropKey}Md`]) }),
  ...(sizeProps[`${sizePropKey}Lg`] && { [`${responsivePropKey}Lg`]: valueCallback(sizeProps[`${sizePropKey}Lg`]) }),
  ...(sizeProps[`${sizePropKey}Xl`] && { [`${responsivePropKey}Xl`]: valueCallback(sizeProps[`${sizePropKey}Xl`]) }),
})

/**
 * Returns reverse value of the order position.
 * If value is left, returns right.
 * If value is right, returns left.
 */
export const getReverseOrderPosition = (value: OrderPosition) => value ^ (OrderPosition.LEFT | OrderPosition.RIGHT)
