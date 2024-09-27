/**
 * Calculates the inner circle size value of the radio element.
 */
export const calculateRadioInnerCircleSize = (size: number) => {
  let value = Math.max(Math.round(size / 5), 2)

  if (value % 2 > 0) {
    value++
  }

  return value
}
