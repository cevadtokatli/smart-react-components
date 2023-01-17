import { Position } from '../types'
import { PopoverCalculationResult } from '../types/popover'

/**
 * Calculates the box and arrow position based on X axis.
 */
const calculatePositionBasedOnXAxis = (
  triggerRect: DOMRect,
  boxRect: DOMRect,
  headerRect: DOMRect | null,
  pos: Position,
  space: number,
  windowWidth: number,
  windowHeight: number,
): PopoverCalculationResult => {
  const [arrowWidth, arrowHeight] = getPopArrowSize(pos)
  let left: number
  let arrowLeft: number
  let overflow: number

  if (pos === Position.RIGHT) {
    left = triggerRect.left + triggerRect.width + space + arrowWidth
    overflow = Math.abs(Math.min(windowWidth - (left + boxRect.width), 0))
    arrowLeft = (arrowWidth - 2) * -1
  } else {
    left = triggerRect.left - (boxRect.width + arrowWidth + space)
    overflow = Math.abs(Math.min(left, 0))
    arrowLeft = boxRect.width - 2
  }

  const top = headerRect
    ? (triggerRect.top + (triggerRect.height / 2) - (headerRect.height + (arrowHeight / 2)))
    : (triggerRect.top + (triggerRect.height / 2) - (boxRect.height / 2))
  const arrowTop = headerRect?.height ?? ((boxRect.height - arrowHeight) / 2)
  const isArrowInHeader = headerRect && arrowTop + (arrowHeight * 2) < headerRect.height

  if (top < 0) {
    overflow += Math.abs(top)
  } else {
    overflow += Math.abs(Math.min(windowHeight - (top + boxRect.height), 0))
  }

  return {
    arrowStyle: `
      left: ${arrowLeft}px;
      top: ${arrowTop}px;
    `,
    isArrowInHeader,
    overflow,
    pos,
    style: `
      left: ${left}px;
      top: ${top}px;
    `,
  }
}

/**
 * Calculates the box and arrow position based on Y axis.
 */
const calculatePositionBasedOnYAxis = (
  triggerRect: DOMRect,
  boxRect: DOMRect,
  headerRect: DOMRect | null,
  pos: Position,
  space: number,
  windowWidth: number,
  windowHeight: number,
): PopoverCalculationResult => {
  const [arrowWidth, arrowHeight] = getPopArrowSize(pos)
  let arrowTop: number
  let top: number
  let overflow: number

  if (pos === Position.TOP) {
    top = triggerRect.top - (boxRect.height + arrowHeight + space)
    overflow = Math.abs(Math.min(top, 0))
    arrowTop = boxRect.height - 1
  } else {
    top = triggerRect.top + triggerRect.height + space + arrowHeight
    overflow = Math.abs(Math.min(windowHeight - (top + boxRect.height), 0))
    arrowTop = (arrowHeight - 1) * -1
  }

  const left = (triggerRect.left) + (triggerRect.width / 2) - (boxRect.width / 2)
  const arrowLeft = (boxRect.width / 2) - (arrowWidth / 2)
  if (left < 0) {
    overflow += Math.abs(left)
  } else {
    overflow += Math.abs(Math.min(windowWidth - (left + boxRect.width), 0))
  }

  return {
    arrowStyle: `
      left: ${arrowLeft}px;
      top: ${arrowTop}px;
    `,
    isArrowInHeader: headerRect && pos === Position.BOTTOM,
    overflow,
    pos,
    style: `
      left: ${left}px;
      top: ${top}px;
    `,
  }
}

/**
 * Calculates the box and arrow position.
 */
export const calculatePosition = (
  triggerRect: DOMRect,
  boxRect: DOMRect,
  headerRect: DOMRect | null,
  position: Position,
  space: number,
): PopoverCalculationResult => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  let result: PopoverCalculationResult

  for (let i = 0, p: Position; i < 4; i++) {
    switch (i) {
      case 0:
        p = position
        break
      case 1:
      case 3:
        if (p & (Position.LEFT | Position.TOP)) {
          p <<= 1
        } else {
          p >>= 1
        }
        break
      case 2:
        if (p & (Position.LEFT | Position.RIGHT)) {
          p = Position.TOP
        } else {
          p = Position.LEFT
        }
        break
    }

    const r = p & (Position.LEFT | Position.RIGHT)
      ? calculatePositionBasedOnXAxis(triggerRect, boxRect, headerRect, p, space, windowWidth, windowHeight)
      : calculatePositionBasedOnYAxis(triggerRect, boxRect, headerRect, p, space, windowWidth, windowHeight)

    if (!result || r.overflow < result.overflow) {
      result = r
    }

    if (result.overflow === 0) {
      break
    }
  }

  return result
}

/**
 * Generates CSS transition classes.
 */
export const generateCSSTransitionClasses = (key: string, duration: number) => `
  &.src-${key}-show-active,
  &.src-${key}-hide-active {
    transition: ${duration}ms 0s ease-in-out;
    transition-property: transform, opacity;
  }

  &.src-${key}-show {
    opacity: 0;

    &[data-src-position="${Position.LEFT}"] { transform: translateX(-30px); }
    &[data-src-position="${Position.RIGHT}"] { transform: translateX(30px); }
    &[data-src-position="${Position.TOP}"] { transform: translateY(-30px); }
    &[data-src-position="${Position.BOTTOM}"] { transform: translateY(-30px); }
  }

  &.src-${key}-show-active {
    opacity: 1;

    &[data-src-position="${Position.LEFT}"],
    &[data-src-position="${Position.RIGHT}"] {
      transform: translateX(0);
    }

    &[data-src-position="${Position.TOP}"],
    &[data-src-position="${Position.BOTTOM}"] {
      transform: translateY(0);
    }
  }

  &.src-${key}-hide {
    opacity: 1;

    &[data-src-position="${Position.LEFT}"],
    &[data-src-position="${Position.RIGHT}"] {
      transform: translateX(0);
    }

    &[data-src-position="${Position.TOP}"],
    &[data-src-position="${Position.BOTTOM}"] {
      transform: translateY(0);
    }
  }

  &.src-${key}-hide-active {
    opacity: 0;

    &[data-src-position="${Position.LEFT}"] { transform: translateX(-30px); }
    &[data-src-position="${Position.RIGHT}"] { transform: translateX(30px); }
    &[data-src-position="${Position.TOP}"] { transform: translateY(-30px); }
    &[data-src-position="${Position.BOTTOM}"] { transform: translateY(-30px); }
  }
`

/**
 * Returns width and height attributes depending on position
 */
export const getPopArrowSize = (position: Position) => position & (Position.LEFT | Position.RIGHT) ? [10, 15] : [15, 10]

/**
 * Returns viewBox attribute depending on position
 */
export const getPopArrowViewBox = (position: Position) => position & (Position.LEFT | Position.RIGHT) ? '0 0 252.8 378.5' : '0 0 377.3 251.9'
