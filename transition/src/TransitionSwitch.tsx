import React from 'react'
import useTransitionSwitch from './hooks/useTransitionSwitch'
import Transition from './Transition'
import { TransitionProps, TransitionSwitchProps } from './types'

export interface Props extends TransitionProps, TransitionSwitchProps {}

const TransitionSwitch: React.FC<Props> = ({ active, afterHide, afterShow, beforeHide, beforeShow, children, hide, isPreserved, show }) => {
  const { handleAfterHide, status } = useTransitionSwitch({ active, afterHide })

  return (
    <>
      { children.map(child => (
        <Transition
          afterHide={handleAfterHide}
          afterShow={afterShow}
          beforeHide={beforeHide}
          beforeShow={beforeShow}
          hide={hide}
          isPreserved={isPreserved}
          key={child.key}
          show={show}
          status={!status.isProcessing && child.key === status.active}
        >
          { child }
        </Transition>
      )) }
    </>
  )
}

export default TransitionSwitch
