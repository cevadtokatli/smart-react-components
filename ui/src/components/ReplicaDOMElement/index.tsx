import Div from '@smart-react-components/core/Element/Div'
import React from 'react'
import { createPortal } from 'react-dom'
import { canBeRenderedInPortal } from '../../util/dom'

const ReplicaDOMElement = React.forwardRef<HTMLDivElement>((props, ref) => canBeRenderedInPortal()
  ? createPortal(
    <Div
      className="src-replica"
      left={-999}
      opacity={0}
      pointerEvents="none"
      position="fixed"
      ref={ref}
      top={-999}
      visibility="hidden"
      zIndex="-999"
    />,
    document.body,
  )
  : null,
)

export default ReplicaDOMElement
