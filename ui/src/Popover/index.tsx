import { Theme } from '@smart-react-components/core/theme'
import { Partial, PaletteProp, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { createPortal } from 'react-dom'
import { ThemeContext } from 'styled-components'
import PopArrow from '../components/PopArrow'
import useFixedBoxMethods from '../hooks/useFixedBoxMethods'
import { Position, TriggerInteraction } from '../types'
import { canBeRenderedInPortal } from '../util/dom'
import { calculatePosition, getPopArrowViewBox } from '../util/popover'
import PopoverElement, { PopoverHeader, PopoverContent } from './PopoverElement'

export { Position, TriggerInteraction } from '../types'

export interface Props extends Partial<ResponsiveProp<'size', SizeProp>> {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  children: [JSX.Element, JSX.Element] | [JSX.Element, JSX.Element, JSX.Element]
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
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

const Popover: React.FC<Props> = ({
  afterHide,
  afterShow,
  beforeHide,
  beforeShow,
  children,
  hasHideAnimation = true,
  hasShowAnimation = true,
  isDismissible = true,
  isSoft,
  palette = 'dynamic',
  position = Position.RIGHT,
  setStatus,
  size = 'medium',
  sizeSm,
  sizeMd,
  sizeLg,
  sizeXl,
  space = 0,
  status,
  transitionClassName,
  transitionDuration,
  triggerInteraction = TriggerInteraction.CLICK,
}) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const triggerEl = React.useRef<HTMLElement>(null)
  const boxEl = React.useRef<HTMLDivElement>(null)
  const headerEl = React.useRef<HTMLHeadingElement>(null)
  const arrowEl = React.useRef<SVGSVGElement>(null)

  const getTriggerEl = () => ((children[0] as any).ref ?? triggerEl).current as HTMLElement
  const getTransitionDuration = () => transitionDuration ?? theme.$.transition.popoverDuration

  const handlePosition = () => {
    const { arrowStyle, isArrowInHeader, pos, style } = calculatePosition(triggerEl.current.getBoundingClientRect(), boxEl.current.getBoundingClientRect(), headerEl.current?.getBoundingClientRect(), position, space)
    boxEl.current.setAttribute('style', style)
    boxEl.current.setAttribute('data-src-position', String(pos))
    arrowEl.current.setAttribute('style', arrowStyle)
    arrowEl.current.setAttribute('viewBox', getPopArrowViewBox(pos))
    arrowEl.current.setAttribute('data-src-position', String(pos))
    arrowEl.current.setAttribute('data-arrow-header', String(isArrowInHeader))
  }

  const {
    getStatus,
    handleBeforeShow,
  } = useFixedBoxMethods({ beforeShow, boxEl, getTriggerEl, handlePosition, isDismissible, key: 'popover', setStatus, status, triggerInteraction })

  const content = (
    <CSSTransition
      afterHide={afterHide}
      afterShow={afterShow}
      beforeHide={beforeHide}
      beforeShow={handleBeforeShow}
      className={transitionClassName ?? 'src-popover'}
      duration={getTransitionDuration()}
      hasHideAnimation={hasHideAnimation}
      hasShowAnimation={hasShowAnimation}
      status={getStatus()}
    >
      <PopoverElement
        duration={getTransitionDuration()}
        hasTransition={!transitionClassName}
        isSoft={isSoft}
        palette={palette}
        popoverSize={size}
        popoverSizeSm={sizeSm}
        popoverSizeMd={sizeMd}
        popoverSizeLg={sizeLg}
        popoverSizeXl={sizeXl}
        ref={boxEl}
      >
        { children.length === 3 && <PopoverHeader ref={headerEl}>{children[1]}</PopoverHeader> }
        { <PopoverContent>{children[2] ?? children[1]}</PopoverContent> }
        <PopArrow ref={arrowEl} />
      </PopoverElement>
    </CSSTransition>
  )

  return (
    <>
      { React.cloneElement(children[0], { ref: (children[0] as any).ref ?? triggerEl }) }
      { canBeRenderedInPortal() ? createPortal(content, document.body) : content }
    </>
  )
}

export default Popover
