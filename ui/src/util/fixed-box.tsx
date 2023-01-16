import { Position } from '../types'

/**
 * Calculates left and width values.
 */
export const calculateXAxis = (
  triggerRect: DOMRect,
  boxReplicaEl: HTMLElement,
  position: Position,
  maxWidth: number | undefined,
  minWidth: number | undefined,
  space: number,
  windowWidth: number,
): string => {
  let left: number
  let width = boxReplicaEl.offsetWidth

  if (minWidth && minWidth > width) {
    width = minWidth
  }

  if (maxWidth && maxWidth < width) {
    width = maxWidth
  }

  if (position & (Position.LEFT | Position.RIGHT)) {
    const diffLeft = triggerRect.left - (space + width)
    const diffRight = windowWidth - (triggerRect.left + triggerRect.width + space + width)

    if (
      (position === Position.LEFT && (diffLeft >= 0 || diffLeft >= diffRight))
      || (position === Position.RIGHT && diffRight < 0 && diffLeft > diffRight)
    ) {
      left = diffLeft
    } else {
      left = triggerRect.left + triggerRect.width + space
    }
  } else {
    const diffLeft = windowWidth - (triggerRect.left + width)
    const diffRight = triggerRect.left - width

    if (diffLeft >= 0 || diffLeft >= diffRight) {
      left = triggerRect.left
    } else {
      left = triggerRect.left + triggerRect.width - width
    }
  }

  boxReplicaEl.style.width = `${width}px`

  return `
    left: ${left}px;
    width: ${width}px;
  `
}

/**
 * Calculates top and height values.
 */
export const calculateYAxis = (
  triggerRect: DOMRect,
  boxReplicaEl: HTMLElement,
  position: Position,
  space: number,
  windowHeight: number,
): string => {
  let top: number
  let height = boxReplicaEl.offsetHeight

  if (position & (Position.LEFT | Position.RIGHT)) {
    const triggerHeight = triggerRect.height + triggerRect.top <= windowHeight ? triggerRect.height : (windowHeight - triggerRect.top)

    const diffBottom = windowHeight - (triggerRect.top + height)
    const diffTop = (triggerRect.top + triggerHeight) - height

    if (diffBottom >= 0 || diffBottom >= diffTop) {
      height = diffBottom > 0 ? height : windowHeight - (triggerRect.top + height)
      top = triggerRect.top
    } else {
      height = height + Math.min(diffTop, 0)
      top = (height > triggerHeight) ? ((triggerRect.top + triggerHeight) - height) : triggerRect.top
    }
  } else {
    const diffBottom = windowHeight - (triggerRect.top + triggerRect.height + height + space)
    const diffTop = (triggerRect.top + triggerRect.height) - (height + 1)

    if (
      (position === Position.BOTTOM && (diffBottom >= 0 || diffBottom >= diffTop))
      || (position === Position.TOP && diffTop < 0 && diffBottom > diffTop)
    ) {
      height = diffBottom > 0 ? height : (windowHeight - (triggerRect.top + triggerRect.height + space))
      top = triggerRect.top + triggerRect.height + space
    } else {
      height = diffTop > 0 ? height : triggerRect.top
      top = (triggerRect.top + triggerRect.height) - (height + 1)
    }
  }

  return `
    top: ${top}px;
    height: ${height}px;
  `
}
