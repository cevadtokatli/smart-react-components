import React from 'react'
import useTransitionGroup from './hooks/useTransitionGroup'
import Transition from './Transition'
import { TransitionGroupProps, TransitionProps } from './types'

export interface Props extends TransitionGroupProps, TransitionProps {}

const TransitionGroup: React.FC<Props> = ({ afterHide, afterShow, beforeHide, beforeShow, children, hide, show }) => {
  const { elements, handleAfterHide, keys } = useTransitionGroup({ afterHide, children })

  return (
    <>
      { elements.map(element => (
        <Transition
          afterHide={handleAfterHide}
          afterShow={afterShow}
          beforeHide={beforeHide}
          beforeShow={beforeShow}
          hide={hide}
          key={element.key}
          show={show}
          status={!keys.includes(element.key)}
        >
          { element }
        </Transition>
      )) }
    </>
  )
}

export default TransitionGroup
