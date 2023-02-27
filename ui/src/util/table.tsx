import { Theme } from '@smart-react-components/core/theme'

/**
 * Gets the breakpoint value according to the given breakpoints and the window size.
 * Breakpoints are given as an array from small to large - [xs, sm, md, lg, xl]
 */
export const getBreakpointValue = (xProps: number[], yProps: number[], theme: Theme) => {
  let x: number
  let y: number
  const width = window.innerWidth

  if (width > theme.$.length.breakpoint.xlarge) {
    x = xProps[4]
    y = yProps[4]
  }

  if (width > theme.$.length.breakpoint.large) {
    x ??= xProps[3]
    y ??= yProps[3]
  }

  if (width > theme.$.length.breakpoint.medium) {
    x ??= xProps[2]
    y ??= yProps[2]
  }

  if (width > theme.$.length.breakpoint.small) {
    x ??= xProps[1]
    y ??= yProps[1]
  }

  x ??= xProps[0]
  y ??= yProps[0]

  return { x, y }
}
