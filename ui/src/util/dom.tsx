import { Theme } from '@smart-react-components/core/theme'
import { Partial, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import { isServer } from '@smart-react-components/core/util/dom'

export const mouseWheel = ['wheel', 'mousewheel', 'DOMMouseScroll']
export const placeholder = ['::-webkit-input-placeholder', '::-moz-placeholder', ':-moz-placeholder', ':-ms-input-placeholder', '::placeholder']

/**
 * Calculates the left, top, width and height of the element shown on the screen.
 */
export const calculateShownPart = (el: HTMLElement | null): { left: number, top: number, width: number, height: number } => {
  if (!el) {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const parent = calculateShownPart(getScrollParent(el))
  let { left, top, width, height } = el.getBoundingClientRect()

  // left & width
  if (left < 0) {
    width += left
    left = 0
  }

  if (width > 0 && left < parent.left) {
    width -= parent.left - left
    left = parent.left
  }

  if (width > 0 && width + left > parent.width + parent.left) {
    width -= (width + left) - (parent.width + parent.left)
  }

  // top & height
  if (top < 0) {
    height += top
    top = 0
  }

  if (height > 0 && top < parent.top) {
    height -= parent.top - top
    top = parent.top
  }

  if (height > 0 && height + top > parent.height + parent.top) {
    height -= (height + top) - (parent.height + parent.top)
  }

  return {
    left,
    top,
    width,
    height,
  }
}

/**
 * Checks if an element can be rendered in the React portal.
 */
export const canBeRenderedInPortal = () => !isServer && process.env.NODE_ENV !== 'test'

/**
 * Gets breakpoint key by window size.
 */
export const getBreakpointKey = ({ size, sizeSm, sizeMd, sizeLg, sizeXl }: Partial<ResponsiveProp<'size', SizeProp>>, theme: Theme): string => {
  const width = window.innerWidth

  if (sizeXl && width > theme.$.length.breakpoint.xlarge) {
    return sizeXl
  }

  if (sizeLg && width > theme.$.length.breakpoint.large) {
    return sizeLg
  }

  if (sizeMd && width > theme.$.length.breakpoint.medium) {
    return sizeMd
  }

  if (sizeSm && width > theme.$.length.breakpoint.small) {
    return sizeSm
  }

  return size
}

/**
 * Gets scroll parent of the given element.
 *
 * @param el
 */
export const getScrollParent = (el: HTMLElement): HTMLElement => {
  for (let parent = el; (parent = parent.parentElement);) {
    const style = window.getComputedStyle(parent, null)

    if (/(auto|scroll|hidden)/.test(style.overflow + style.overflowX + style.overflowY)) {
      return parent
    }
  }

  return null
}

/**
 * Checks if target is a clickable element.
 */
export const isTargetClickable = (target: HTMLElement, container: HTMLElement): boolean => {
  while (container.contains(target)) {
    if (target.hasAttribute('data-src-not-clickable')) {
      return false
    }

    target = target.parentNode as HTMLElement
  }

  return true
}
