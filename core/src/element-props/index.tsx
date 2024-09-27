/**
 * Extracts the element props out of all props.
 */
const extractElementProps = (props: object, elementProps: string[][]) => {
  const result = {}

  elementProps.forEach(group => {
    group.forEach(item => {
      if (props[item]) {
        result[item] = props[item]
      }
    })
  })

  return result
}

/**
 * Includes responsive props.
 */
export const includeResponsiveProps = (arr: string[]) => {
  const result = []

  arr.forEach(item => result.push(item, `${item}Sm`, `${item}Md`, `${item}Lg`, `${item}Xl`))

  return result
}

export default extractElementProps
