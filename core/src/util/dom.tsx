import { EventAddOptions, EventCallback, EventElement, EventRemoveOptions } from '../types/dom'

export const isServer = typeof window === 'undefined'

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
 * Removes events from the given element.
 */
export const removeEventListener = (el: EventElement, events: string[], callback: EventCallback, options: EventRemoveOptions = true) => {
  for (const i in events) {
    el.removeEventListener(events[i], callback, options)
  }
}
