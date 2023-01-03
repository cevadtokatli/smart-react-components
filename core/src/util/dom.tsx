export const isServer = typeof window === 'undefined'

export const requestAnimationFrame: ((callback:(() => void)) => void) = !isServer
  ? (window as any).mozRequestAnimationFrame
  || window.requestAnimationFrame
  || (window as any).webkitRequestAnimationFrame
  || (window as any).oRequestAnimationFrame
  || (window as any).msRequestAnimationFrame
  || ((callback: Function) => { window.setTimeout(callback, 1000 / 60) })
  : () => {}
