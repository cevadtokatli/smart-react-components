import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, Partial, ResponsiveProp } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import { ThemeContext } from 'styled-components'
import TableContainerElement from '../components/Table/TableContainerElement'
import { getBreakpointValue } from '../util/table'

export interface Props extends
  IntrinsicStyledProps,
  Partial<ResponsiveProp<'stickyX', number>>,
  Partial<ResponsiveProp<'stickyY', number>> {
  children: JSX.Element
  elementProps?: JSXElementProps
  hasInternalScroll?: boolean
}

const TableContainer: React.FC<Props> = props => {
  const theme = React.useContext<Theme>(ThemeContext)
  const el = React.useRef<HTMLDivElement>(null)
  const [styled, setStyled] = React.useState(() => '')

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
    const xEls = el.current.querySelectorAll('table > * > tr > *')

    if (x > 0 && xEls.length > 0) {
      if (props.hasInternalScroll) {
        styled += 'overflow-x: auto;'
      }

      for (let i = 0; i < x; i++) {
        styled += `
          > table > * > tr > *:nth-child(${i + 1}) {
            left: ${left}px;
            z-index: ${leftZIndex--};
          }
        `
        left += (xEls[i] as HTMLElement).offsetWidth
      }
    }

    const yEls = el.current.querySelectorAll('table > thead > tr')

    if (y > 0 && yEls.length > 0) {
      if (props.hasInternalScroll) {
        styled += 'overflow-y: auto;'
      }

      styled += `
        > table > thead {
          position: relative;
          z-index: ${(x ?? 0) + 1 + 1};
        }
      `

      for (let i = yEls.length - 1; i > yEls.length - 1 - y; i--) {
        const top = (yEls[i] as HTMLElement).offsetTop

        styled += `
          > table > thead > tr:nth-of-type(${i + 1}) > * {
            top: ${top}px;
          }
        `
      }
    }

    setStyled(styled)
  }

  React.useEffect(() => {
    addEventListener(window, ['resize'], handleResize)
    handleResize()

    return () => {
      removeEventListener(window, ['resize'], handleResize)
    }
  }, [])

  return (
    <TableContainerElement
      {...extractElementProps(props, [intrinsicStyledProps])}
      {...props.elementProps}
      ref={el}
      styled={styled}
    >
      {props.children}
    </TableContainerElement>
  )
}

TableContainer.defaultProps = {
  elementProps: {},
  hasInternalScroll: true,
}

export default TableContainer
