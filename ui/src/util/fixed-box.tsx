import { Position } from '../types'

/**
 * Calculated fixed box position and size.
 */
export const calculatePosition = (
  triggerEl: HTMLElement,
  boxEl: HTMLDivElement | null,
  position: Position,
  maxWidth: number | undefined,
  minWidth: number | undefined,
  space: number,
) => {
  if (!boxEl) {
    return
  }

  boxEl.removeAttribute('style')

  const triggerRect = triggerEl.getBoundingClientRect()
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  let width = boxEl.offsetWidth

  if (minWidth && minWidth > width) {
    width = minWidth
  }

  if (maxWidth && maxWidth < width) {
    width = maxWidth
  }

  boxEl.style.width = `${width}px`
  boxEl.setAttribute('style', position & (Position.LEFT | Position.RIGHT)
    ? calculatePositionBasedOnXAxis(triggerRect, boxEl, position, space, windowWidth, windowHeight)
    : calculatePositionBasedOnYAxis(triggerRect, boxEl, position, space, windowWidth, windowHeight),
  )
}

/**
 * Calculates fixed box position and sized based on X axis position.
 */
const calculatePositionBasedOnXAxis = (
  triggerRect: DOMRect,
  boxEl: HTMLDivElement,
  position: Position,
  space: number,
  windowWidth: number,
  windowHeight: number,
): string => {
  // left & width
  let left: number
  const width = boxEl.offsetWidth
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

  // top & height
  let top: number
  let height: number
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

  return `
    left: ${left}px;
    top: ${top}px;
    width: ${width}px;
    height: ${height}px;
  `
}

/**
 * Calculates fixed box position and sized based on Y axis position.
 */
const calculatePositionBasedOnYAxis = (
  triggerRect: DOMRect,
  boxEl: HTMLDivElement,
  position: Position,
  space: number,
  windowWidth: number,
  windowHeight: number,
): string => {
  // left & width
  let left: number
  const width = boxEl.offsetWidth
  const diffLeft = windowWidth - (triggerRect.left + width)
  const diffRight = triggerRect.left - width

  if (diffLeft >= 0 || diffLeft >= diffRight) {
    left = triggerRect.left
  } else {
    left = triggerRect.left + triggerRect.width - width
  }

  // top & height
  let top: number
  let height = boxEl.offsetHeight
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

  return `
    left: ${left}px;
    top: ${top}px;
    width: ${width}px;
    height: ${height}px;
  `
}
