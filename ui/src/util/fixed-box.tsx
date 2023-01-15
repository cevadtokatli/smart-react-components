import { Position } from '../types'

/**
 * Calculates position of the fixed box based on X axis.
 */
export const calculateXAxisBasedPosition = (
  triggerRect: DOMRect,
  boxReplicaRect: DOMRect,
  position: Position,
  width: number,
  space: number,
  windowWidth: number,
  windowHeight: number,
): string => {
  let style = `width: ${width}px;`

  // left
  const diffLeft = triggerRect.left - (space + width)
  const diffRight = windowWidth - (triggerRect.left + triggerRect.width + space + width)

  if (
    (position === Position.LEFT && (diffLeft >= 0 || diffLeft >= diffRight))
    || (position === Position.RIGHT && diffRight < 0 && diffLeft > diffRight)
  ) {
    style += `left: ${diffLeft}px;`
  } else {
    style += `left: ${triggerRect.left + triggerRect.width + space}px;`
  }

  // top
  const triggerHeight = triggerRect.height + triggerRect.top <= windowHeight ? triggerRect.height : (windowHeight - triggerRect.top)

  const diffBottom = windowHeight - (triggerRect.top + boxReplicaRect.height)
  const diffTop = (triggerRect.top + triggerHeight) - boxReplicaRect.height

  if (diffBottom >= 0 || diffBottom >= diffTop) {
    const height = diffBottom > 0 ? boxReplicaRect.height : windowHeight - (triggerRect.top + boxReplicaRect.height)
    style += `
      height: ${height}px;
      top: ${triggerRect.top}px;
    `
  } else {
    const height = boxReplicaRect.height + Math.min(diffTop, 0)
    const top = (height > triggerHeight) ? ((triggerRect.top + triggerHeight) - height) : triggerRect.top
    style += `
      height: ${height}px;
      top: ${top}px;
    `
  }

  return style
}

/**
 * Calculates position of the fixed box based on Y axis.
 */
export const calculateYAxisBasedPosition = (
  triggerRect: DOMRect,
  boxReplicaRect: DOMRect,
  position: Position,
  width: number,
  space: number,
  windowWidth: number,
  windowHeight: number,
): string => {
  let style = `width: ${width}px;`

  // left
  const diffLeft = windowWidth - (triggerRect.left + width)
  const diffRight = triggerRect.left - width

  if (diffLeft >= 0 || diffLeft >= diffRight) {
    style += `left: ${triggerRect.left}px;`
  } else {
    style += `left: ${triggerRect.left + triggerRect.width - width}px;`
  }

  // top
  const diffBottom = windowHeight - (triggerRect.top + triggerRect.height + boxReplicaRect.height + space)
  const diffTop = (triggerRect.top + triggerRect.height) - (boxReplicaRect.height + 1)

  if (
    (position === Position.BOTTOM && (diffBottom >= 0 || diffBottom >= diffTop))
    || (position === Position.TOP && diffTop < 0 && diffBottom > diffTop)
  ) {
    const height = diffBottom > 0 ? boxReplicaRect.height : (windowHeight - (triggerRect.top + triggerRect.height + space))
    style += `
      height: ${height}px;
      top: ${triggerRect.top + triggerRect.height + space}px;
    `
  } else {
    const height = diffTop > 0 ? boxReplicaRect.height : triggerRect.top
    style += `
      height: ${height}px;
      top: ${(triggerRect.top + triggerRect.height) - (height + 1)}px;
    `
  }

  return style
}
