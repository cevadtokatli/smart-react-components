import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, SetState } from '@smart-react-components/core/types'
import { Breakpoint } from '@smart-react-components/core/types/grid'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import useFixedBoxMethods from '../hooks/useFixedBoxMethods'
import Overlay from '../Overlay'
import { Position, TriggerInteraction } from '../types'
import { calculatePosition } from '../util/fixed-box'
import FixedBoxElement from '../components/FixedBox/FixedBoxElement'
import OverlayElement from '../components/FixedBox/OverlayElement'

export { Position, TriggerInteraction } from '../types'

export interface Props {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  breakpoint?: Breakpoint
  children: [JSX.Element, JSX.Element]
  elementProps?: JSXElementProps
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  isDismissible?: boolean
  maxWidth?: number
  minWidth?: number
  position?: Position
  setStatus?: SetState<boolean>
  space?: number
  status?: boolean
  transitionClassName?: string
  transitionDuration?: number
  triggerInteraction?: TriggerInteraction
}

const FixedBox: React.FC<Props> = ({
  afterHide,
  afterShow,
  beforeHide,
  beforeShow,
  breakpoint = 'medium',
  children,
  elementProps = {},
  hasHideAnimation = true,
  hasShowAnimation = true,
  isDismissible = true,
  maxWidth,
  minWidth,
  position = Position.BOTTOM,
  setStatus,
  space = 0,
  status,
  transitionClassName,
  transitionDuration,
  triggerInteraction = TriggerInteraction.CLICK,
}) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const triggerEl = React.useRef<HTMLElement>(null)
  const boxEl = React.useRef<HTMLDivElement>(null)

  const getTriggerEl = () => ((children[0] as any).ref ?? triggerEl).current as HTMLElement

  const handlePosition = e => calculatePosition(getTriggerEl(), boxEl.current, e, position, maxWidth, minWidth, space)

  const {
    getStatus,
    handleBeforeShow,
  } = useFixedBoxMethods({ beforeShow, boxEl, getTriggerEl, handlePosition, isDismissible, key: 'fixed-box', setStatus, status, triggerInteraction })

  return (
    <>
      { React.cloneElement(children[0], { ref: (children[0] as any).ref ?? triggerEl }) }
      <CSSTransition
        afterHide={afterHide}
        afterShow={afterShow}
        beforeHide={beforeHide}
        beforeShow={handleBeforeShow}
        className={transitionClassName ?? 'src-fixed-box'}
        duration={transitionDuration ?? theme.$.transition.fixedBoxDuration}
        hasHideAnimation={hasHideAnimation}
        hasShowAnimation={hasShowAnimation}
        status={getStatus()}
      >
        <Overlay
          breakpoint={triggerInteraction & TriggerInteraction.RIGHT_CLICK ? null : breakpoint}
          elementProps={{
            as: OverlayElement,
            duration: transitionDuration ?? theme.$.transition.fixedBoxDuration,
            isDisplayedWhenBreakpointNull: triggerInteraction & TriggerInteraction.RIGHT_CLICK,
          }}
          hasBackground={!(triggerInteraction & TriggerInteraction.RIGHT_CLICK)}
        >
          <FixedBoxElement
            {...elementProps}
            breakpoint={breakpoint}
            ref={boxEl}
          >{children[1]}</FixedBoxElement>
        </Overlay>
      </CSSTransition>
    </>
  )
}

export default FixedBox
