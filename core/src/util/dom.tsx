import { EventAddOptions, EventCallback, EventElement, EventRemoveOptions } from '../types/dom'

export const isServer = typeof window === 'undefined'

export const isMobile = !isServer && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent)

export const requestAnimationFrame: ((callback:(() => void)) => void) = !isServer
  ? (window as any).mozRequestAnimationFrame
  || window.requestAnimationFrame
  || (window as any).webkitRequestAnimationFrame
  || (window as any).oRequestAnimationFrame
  || (window as any).msRequestAnimationFrame
  || ((callback: Function) => { window.setTimeout(callback, 1000 / 60) })
  : () => {}

/**
 * Attaches events to the given element.
 */
export const addEventListener = (el: EventElement, events: string[], callback: EventCallback, options: EventAddOptions = true) => {
  for (const i in events) {
    el.addEventListener(events[i], callback, options)
  }
}

/**
 * Attaches events to the given element for once.
 */
export const addEventListenerOnce = (el: EventElement, events: string[], callback: EventCallback, addOptions: EventAddOptions = true, removeOptions: EventRemoveOptions = true) => {
  const cb: EventListener = (e: Event) => {
    removeEventListener(el, events, cb, removeOptions)
    callback(e)
  }

  addEventListener(el, events, cb, addOptions)
}

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 */
export const debounce = (func: Function, wait: number = 100) => {
  let timeout: NodeJS.Timeout

  return (...args: any[]) => {
    const callback = () => {
      timeout = null
      func.apply(null, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(callback, wait)
  }
}

/**
 * Displays the given message if it is not prod mode.
 */
export const displayWarning = (msg: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(msg)
  }
}

/**
 * Removes events from the given element.
 */
export const removeEventListener = (el: EventElement, events: string[], callback: EventCallback, options: EventRemoveOptions = true) => {
  for (const i in events) {
    el.removeEventListener(events[i], callback, options)
  }
}
