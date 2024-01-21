import extractElementProps from '@smart-react-components/core/element-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, Partial, ResponsiveProp } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import { ThemeContext } from 'styled-components'
import TableContainerElement from '../components/Table/TableContainerElement'
import { getBreakpointValue } from '../util/table'

export interface Props extends
  IntrinsicStyledCoreProps,
  Partial<ResponsiveProp<'stickyX', number>>,
  Partial<ResponsiveProp<'stickyY', number>> {
  children: JSX.Element
  elementProps?: JSXElementProps
  hasInternalScroll?: boolean
}

const TableContainer = React.forwardRef<HTMLElement, Props>((props, forwardRef) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const ref = React.useRef<HTMLDivElement>(null)
  const [styled, setStyled] = React.useState(() => '')

  const getRef = () => (forwardRef ?? ref) as React.MutableRefObject<HTMLDivElement>

  const handleResize = () => {
    const { x, y } = getBreakpointValue(
      [props.stickyX, props.stickyXSm, props.stickyXMd, props.stickyXLg, props.stickyXXl],
      [props.stickyY, props.stickyYSm, props.stickyYMd, props.stickyYLg, props.stickyYXl],
      theme,
    )

    let styled = `
      > table > * > tr > * {
        position: sticky;
      }
    `

    let left = 0
    let leftZIndex = x + 1
    let containerZIndex = leftZIndex
    const el = getRef()
    const xEls = el.current.querySelectorAll('table:first-child > * > tr > *')
    const yEls = el.current.querySelectorAll('table:first-child > thead > tr')

    if (x > 0 && xEls.length > 0) {
      if (props.hasInternalScroll) {
        styled += 'overflow-x: auto;'
      }

      for (let i = 0; i < x; i++) {
        styled += `
          > table > * > tr > *:nth-child(${i + 1}) {
            left: ${left}px;
            ${(!y || yEls.length === 0) ? `z-index: ${leftZIndex--};` : ''}
          }
        `
        left += (xEls[i] as HTMLElement).offsetWidth
      }
    }

    if (y > 0 && yEls.length > 0) {
      if (props.hasInternalScroll) {
        styled += 'overflow-y: auto;'
      }

      for (let i = yEls.length - 1; i > yEls.length - 1 - y; i--) {
        const top = (yEls[i] as HTMLElement).offsetTop

        styled += `
          > table > thead > tr:nth-of-type(${i + 1}) > * {
            top: ${top}px;
            ${(!x || xEls.length === 0) ? `z-index: ${i + 1};` : ''}
          }
        `
      }
    }

    if (
      (x > 0 && xEls.length > 0)
      && (y > 0 && yEls.length > 0)
    ) {
      for (let i = 1; i <= x; i++) {
        styled += `
          > table > tbody > tr > *:nth-child(${i}) {
            z-index: ${i};
          }
        `
      }

      const headEls = el.current.querySelectorAll('table:first-child > thead > tr > *')
      let zIndex = x + 1

      for (let i = headEls.length; i > 0; i--) {
        styled += `
          > table > thead > tr > *:nth-child(${i}) {
            z-index: ${zIndex++};
          }
        `
      }

      containerZIndex = zIndex
    }

    styled = `
      z-index: ${containerZIndex + 1};
      ${styled}
    `

    setStyled(styled)
  }

  React.useEffect(() => {
    addEventListener(window, ['resize'], handleResize)
    handleResize()

    return () => {
      removeEventListener(window, ['resize'], handleResize)
    }
  }, [])

  useChangeEffect(() => {
    handleResize()
  }, [props.children])

  return (
    <TableContainerElement
      {...extractElementProps(props, [intrinsicStyledCoreProps])}
      {...props.elementProps}
      ref={getRef()}
      styled={styled}
    >
      {props.children}
    </TableContainerElement>
  )
})

TableContainer.defaultProps = {
  elementProps: {},
  flex: '1 1 auto',
  hasInternalScroll: true,
  minHeight: 1,
  stickyX: 1,
  stickyY: 1,
}

export default TableContainer
