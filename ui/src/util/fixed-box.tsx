import { Nullable } from '@smart-react-components/core/types'
import { Position } from '../types'
import { calculateShownPart } from './dom'

/**
 * Calculated fixed box position and size.
 */
export const calculatePosition = (
  triggerEl: HTMLElement,
  boxEl: HTMLDivElement | null,
  e: Nullable<MouseEvent>,
  position: Position,
  maxWidth: number | undefined,
  minWidth: number | undefined,
  space: number,
  isOverflowPrevented: boolean,
) => {
  if (!boxEl) {
    return
  }

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const triggerRect = {
    ...triggerEl.getBoundingClientRect(),
    ...calculateShownPart(triggerEl),
  }

  if (triggerRect.width <= 0 || triggerRect.height <= 0) {
    boxEl.setAttribute('style', 'pointer-events: none; visibility: hidden;')
    return
  }

  boxEl.removeAttribute('style')

  let width = Math.max(boxEl.offsetWidth + .5, position & (Position.TOP | Position.BOTTOM) ? triggerEl.offsetWidth : 0)

  if (minWidth && minWidth > width) {
    width = minWidth
  }

  if (maxWidth && maxWidth < width) {
    width = maxWidth
  }

  boxEl.style.width = `${width}px`
  boxEl.setAttribute('style', position & (Position.LEFT | Position.RIGHT)
    ? calculatePositionBasedOnXAxis(triggerRect, boxEl, e, position, space, windowWidth, windowHeight, isOverflowPrevented)
    : calculatePositionBasedOnYAxis(triggerRect, boxEl, e, position, space, windowWidth, windowHeight, isOverflowPrevented),
  )
}

/**
 * Calculates fixed box position and sized based on X axis position.
 */
const calculatePositionBasedOnXAxis = (
  triggerRect: DOMRect,
  boxEl: HTMLDivElement,
  e: Nullable<MouseEvent>,
  position: Position,
  space: number,
  windowWidth: number,
  windowHeight: number,
  isOverflowPrevented: boolean,
): string => {
  // left & width
  let left: number
  const width = boxEl.offsetWidth + .5
  const triggerLeft = e?.clientX ?? triggerRect.left
  const triggerWidth = e ? 0 : triggerRect.width
  const diffLeft = triggerRect.left - (space + width)
  const diffRight = windowWidth - (triggerLeft + triggerWidth + space + width)

  if (
    (position === Position.LEFT && (diffLeft >= 0 || diffLeft >= diffRight))
    || (position === Position.RIGHT && diffRight < 0 && diffLeft > diffRight)
  ) {
    left = diffLeft
  } else {
    left = triggerLeft + triggerWidth + space
  }

  if (isOverflowPrevented) {
    left = Math.max(0, Math.min(windowWidth - width, left))
  }

  // top & height
  let top: number
  let height = boxEl.offsetHeight
  const triggerTop = e?.clientY ?? triggerRect.top
  const triggerHeight = e ? 0 : triggerRect.height + triggerRect.top <= windowHeight ? triggerRect.height : (windowHeight - triggerRect.top)
  const diffBottom = windowHeight - (triggerRect.top + height)
  const diffTop = (triggerRect.top + triggerHeight) - height

  if (diffBottom >= 0 || diffBottom >= diffTop) {
    height = diffBottom > 0 ? height : windowHeight - (triggerTop + height)
    top = triggerTop
  } else {
    height = height + Math.min(diffTop, 0)
    top = (height > triggerHeight) ? ((triggerTop + triggerHeight) - height) : triggerTop
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
  e: Nullable<MouseEvent>,
  position: Position,
  space: number,
  windowWidth: number,
  windowHeight: number,
  isOverflowPrevented: boolean,
): string => {
  // left & width
  let left: number
  const width = boxEl.offsetWidth + .5
  const triggerLeft = e?.clientX ?? triggerRect.left
  const triggerWidth = e ? 0 : triggerRect.width
  const diffLeft = windowWidth - (triggerLeft + width)
  const diffRight = triggerLeft - width

  if (diffLeft >= 0 || diffLeft >= diffRight) {
    left = triggerLeft
  } else {
    left = triggerLeft + triggerWidth - width
  }

  if (isOverflowPrevented) {
    left = Math.max(0, Math.min(windowWidth - width, left))
  }

  // top & height
  let top: number
  let height = boxEl.offsetHeight
  const triggerTop = e?.clientY ?? triggerRect.top
  const triggerHeight = e ? 0 : triggerRect.height
  const diffBottom = windowHeight - (triggerTop + triggerHeight + height + space)
  const diffTop = (triggerTop + triggerHeight) - (height + 1)

  if (
    (position === Position.BOTTOM && (diffBottom >= 0 || diffBottom >= diffTop))
    || (position === Position.TOP && diffTop < 0 && diffBottom > diffTop)
  ) {
    height = diffBottom > 0 ? height : (windowHeight - (triggerTop + triggerHeight + space))
    top = triggerTop + triggerHeight + space
  } else {
    height = diffTop > 0 ? height : triggerRect.top
    top = (triggerTop + triggerHeight) - (height + 1)
  }

  return `
    left: ${left}px;
    top: ${top}px;
    width: ${width}px;
    height: ${height}px;
  `
}
