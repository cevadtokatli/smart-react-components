/**
 * Extract the element props out of all props.
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

export default extractElementProps
