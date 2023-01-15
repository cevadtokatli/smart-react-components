import { isServer } from '@smart-react-components/core/util/dom'

export const mouseWheel = ['wheel', 'mousewheel', 'DOMMouseScroll']

/**
 * Checks if an element can be rendered in the React portal.
 */
export const canBeRenderedInPortal = () => !isServer && process.env.NODE_ENV !== 'test'

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
