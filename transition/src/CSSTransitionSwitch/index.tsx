import React from 'react'
import CSSTransition from '../CSSTransition'
import useTransitionSwitch from '../hooks/useTransitionSwitch'
import { CSSTransitionProps, TransitionSwitchProps } from '../types'

export interface Props extends CSSTransitionProps, TransitionSwitchProps {}

const CSSTransitionSwitch: React.FC<Props> = ({ active, afterHide, afterShow, beforeHide, beforeShow, children, className, duration, hasHideAnimation, hasShowAnimation, isPreserved }) => {
  const { handleAfterHide, status } = useTransitionSwitch({ active, afterHide })

  return (
    <>
      { children.map(child => (
        <CSSTransition
          afterHide={handleAfterHide}
          afterShow={afterShow}
          beforeHide={beforeHide}
          beforeShow={beforeShow}
          className={className}
          duration={duration}
          hasHideAnimation={hasHideAnimation}
          hasShowAnimation={hasShowAnimation}
          isPreserved={isPreserved}
          key={child.key}
          status={!status.isProcessing && child.key === status.active}
        >
          { child }
        </CSSTransition>
      )) }
    </>
  )
}

export default CSSTransitionSwitch
