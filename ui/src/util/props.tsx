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
 * Apply the given props to each breakpoint which has a corresponding size prop.
 *
 * @param sizeProps - Object that holds size props.
 * @param sizePropKey - Name of the size prop.
 * @param responsiveProps - Object key indicates name of the applied prop, and its value is invoked with the given size prop value to return the responsive prop value.
 */
export const applyResponsiveStyledProps = (sizeProps: JSXElementProps, sizePropKey: string, responsiveProps: { [key: string]: (size: SizeProp) => Value }): JSXElementProps => {
  let result = {}

  Object.keys(responsiveProps).forEach(key => {
    result = {
      ...result,
      ...applyResponsiveStyledProp(sizeProps, sizePropKey, key, responsiveProps[key]),
    }
  })

  return result
}

/**
 * Returns reverse value of the order position.
 * If value is left, returns right.
 * If value is right, returns left.
 */
export const getReverseOrderPosition = (value: OrderPosition) => value ^ (OrderPosition.LEFT | OrderPosition.RIGHT)

/**
 * Checks if the item is clickable.
 * If onClick, onMouseDown, or onMouseUp are defined; isDisabled and isReadOnly are not, returns true.
 */
export const isItemClickable = props => (props.onClick || props.onMouseDown || props.onMouseUp) && !props.isDisabled && !props.isReadOnly
