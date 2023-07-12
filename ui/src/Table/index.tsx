import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp, TableStripedOrientation } from '@smart-react-components/core/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import TableElement from '../components/Table/TableElement'

export interface Props extends
  IntrinsicStyledCoreProps,
  Partial<ResponsiveProp<'size', SizeProp>> {
  children: JSX.Element | JSX.Element[]
  elementProps?: JSXElementProps
  hasBorderX?: boolean
  hasBorderY?: boolean
  hasHeadBackground?: boolean
  hasHover?: boolean
  hasInternalScroll?: boolean
  isBlock?: boolean
  isSoft?: boolean
  isStriped?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
  stripedOrientation?: TableStripedOrientation
}

const Table = React.forwardRef<HTMLTableElement, Props>((props, forwardRef) => {
  const theme = React.useContext<Theme>(ThemeContext)

  return (
    <TableElement
      {...extractElementProps(props, [intrinsicStyledCoreProps])}
      hasBorderX={props.hasBorderX}
      hasBorderY={props.hasBorderY}
      hasHeadBackground={props.hasHeadBackground}
      hasHover={props.hasHover}
      isBlock={props.isBlock}
      isSoft={props.isSoft}
      isStriped={props.isStriped}
      palette={props.palette}
      ref={forwardRef}
      shape={props.shape}
      stripedOrientation={props.stripedOrientation ?? theme.$.vars.tableStripedOrientation}
      tableSize={props.size}
      tableSizeSm={props.sizeSm}
      tableSizeMd={props.sizeMd}
      tableSizeLg={props.sizeLg}
      tableSizeXl={props.sizeXl}
      {...props.elementProps}
    >
      {props.children}
    </TableElement>
  )
})

Table.defaultProps = {
  elementProps: {},
  hasBorderY: true,
  hasInternalScroll: true,
  isBlock: true,
  palette: 'dynamic',
  shape: 'rectangle',
  size: 'medium',
}

export default Table
