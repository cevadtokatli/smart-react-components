import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { createPortal } from 'react-dom'
import { ThemeContext } from 'styled-components'
import TooltipElement from '../components/Tooltip/TooltipElement'
import PopoverArrow from '../components/Popover/PopoverArrow'
import useFixedBoxMethods from '../hooks/useFixedBoxMethods'
import { Position, TriggerInteraction } from '../types'
import { canBeRenderedInPortal } from '../util/dom'
import { calculatePosition } from '../util/popover'

export { Position, TriggerInteraction } from '../types'

export interface Props extends Partial<ResponsiveProp<'size', SizeProp>> {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  children: [JSX.Element, JSX.Element]
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  hoverDelay?: number
  isDismissible?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  position?: Position
  setStatus?: SetState<boolean>
  space?: number
  status?: boolean
  transitionClassName?: string
  transitionDuration?: number
  triggerInteraction?: TriggerInteraction
}

const Tooltip = React.forwardRef<HTMLElement, Props>(({ afterHide, afterShow, beforeHide, beforeShow, children, hasHideAnimation = true, hasShowAnimation = true, hoverDelay, isDismissible, isSoft, palette = '!dynamic', position = Position.TOP, setStatus, size = 'medium', sizeSm, sizeMd, sizeLg, sizeXl, space = 0, status, transitionClassName, transitionDuration, triggerInteraction = TriggerInteraction.CLICK | TriggerInteraction.HOVER }, forwardRef) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const triggerEl = React.useRef<HTMLElement>(null)
  const boxEl = React.useRef<HTMLDivElement>(null)
  const arrowEl = React.useRef<SVGSVGElement>(null)

  const getTriggerEl = () => (forwardRef ?? (children[0] as any).ref ?? triggerEl).current as HTMLElement
  const getTransitionDuration = () => transitionDuration ?? theme.$.transition.tooltipDuration

  const handlePosition = () => calculatePosition(getTriggerEl(), boxEl.current, null, arrowEl.current, position, space)

  const {
    getStatus,
    handleBeforeShow,
  } = useFixedBoxMethods({ beforeShow, boxEl, getTriggerEl, handlePosition, hoverDelay, isDismissible, key: 'tooltip', setStatus, status, triggerInteraction })

  const content = (
    <CSSTransition
      afterHide={afterHide}
      afterShow={afterShow}
      beforeHide={beforeHide}
      beforeShow={handleBeforeShow}
      className={transitionClassName ?? 'src-tooltip'}
      duration={getTransitionDuration()}
      hasHideAnimation={hasHideAnimation}
      hasShowAnimation={hasShowAnimation}
      status={getStatus()}
    >
      <TooltipElement
        duration={getTransitionDuration()}
        hasTransition={!transitionClassName}
        isSoft={isSoft}
        palette={palette}
        tooltipSize={size}
        tooltipSizeSm={sizeSm}
        tooltipSizeMd={sizeMd}
        tooltipSizeLg={sizeLg}
        tooltipSizeXl={sizeXl}
        ref={boxEl}
      >
        {children[1]}
        <PopoverArrow ref={arrowEl} />
      </TooltipElement>
    </CSSTransition>
  )

  return (
    <>
      { React.cloneElement(children[0], { ref: forwardRef ?? (children[0] as any).ref ?? triggerEl }) }
      { canBeRenderedInPortal() ? createPortal(content, document.body) : content }
    </>
  )
})

export default Tooltip
