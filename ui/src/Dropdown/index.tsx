
import React from 'react'
import FixedBox, { Props } from '../FixedBox'

export * from '../FixedBox'

const Dropdown: React.FC<Props> = ({ afterHide, afterShow, beforeHide, beforeShow, breakpoint, children, elementProps = {}, hasHideAnimation, hasShowAnimation, isDismissible, maxWidth, minWidth, position, setStatus, space, status, transitionClassName, transitionDuration, triggerInteraction }) => {
  const [localStatus, setLocalStatus] = React.useState(() => false)

  return (
    <FixedBox
      afterHide={afterHide}
      afterShow={afterShow}
      beforeHide={beforeHide}
      beforeShow={beforeShow}
      breakpoint={breakpoint}
      elementProps={{
        overflow: ['initial', true],
        ...elementProps,
      }}
      hasHideAnimation={hasHideAnimation}
      hasShowAnimation={hasShowAnimation}
      isDismissible={isDismissible}
      maxWidth={maxWidth}
      minWidth={minWidth}
      position={position}
      setStatus={setStatus ?? setLocalStatus}
      space={space}
      status={status ?? localStatus}
      transitionClassName={transitionClassName}
      transitionDuration={transitionDuration}
      triggerInteraction={triggerInteraction}
    >
      { children[0] }
      { React.cloneElement(children[1], { setStatus: setStatus ?? setLocalStatus }) }
    </FixedBox>
  )
}

export default Dropdown
