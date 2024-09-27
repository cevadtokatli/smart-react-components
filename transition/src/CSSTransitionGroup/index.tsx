import React from 'react'
import CSSTransition from '../CSSTransition'
import useTransitionGroup from '../hooks/useTransitionGroup'
import { CSSTransitionProps, TransitionGroupProps } from '../types'

export interface Props extends CSSTransitionProps, TransitionGroupProps {}

const CSSTransitionGroup: React.FC<Props> = ({ afterHide, afterShow, beforeHide, beforeShow, children, className, duration, hasHideAnimation, hasShowAnimation }) => {
  const { elements, handleAfterHide, keys } = useTransitionGroup({ afterHide, children })

  return (
    <>
      { elements.map(element => (
        <CSSTransition
          afterHide={handleAfterHide}
          afterShow={afterShow}
          beforeHide={beforeHide}
          beforeShow={beforeShow}
          className={className}
          duration={duration}
          hasHideAnimation={hasHideAnimation}
          hasShowAnimation={hasShowAnimation}
          key={element.key}
          status={!keys.includes(element.key)}
        >
          { element }
        </CSSTransition>
      )) }
    </>
  )
}

export default CSSTransitionGroup
