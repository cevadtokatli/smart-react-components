
import React from 'react'
import FixedBox, { Props, TriggerInteraction } from '../FixedBox'

export * from '../FixedBox'

const Dropdown: React.FC<Props> = ({ afterHide, afterShow, beforeHide, beforeShow, breakpoint, children, elementProps = {}, hasHideAnimation, hasShowAnimation, isDismissible, maxWidth, minWidth, position, setStatus, space, status, transitionClassName, transitionDuration, triggerInteraction }) => {
  const triggerEl = React.useRef<HTMLElement>(null)

  const [localStatus, setLocalStatus] = React.useState(() => false)

  const getTriggerEl = () => ((children[0] as any).ref ?? triggerEl).current as HTMLElement

  React.useEffect(() => {
    getTriggerEl().dispatchEvent(new Event('src.fixedBox.setPosition'))
  }, [children?.[1]?.props?.children?.length])

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
      { React.cloneElement(children[0], { ref: (children[0] as any).ref ?? triggerEl, cursor: triggerInteraction & TriggerInteraction.CLICK ? '$cursor.dropdown' : undefined }) }
      { React.cloneElement(children[1], { setStatus: setStatus ?? setLocalStatus }) }
    </FixedBox>
  )
}

export default Dropdown
