import { Theme } from '@smart-react-components/core'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledSizeProps, { IntrinsicStyledSizeProps } from '@smart-react-components/core/element-props/intrinsic-styled-size-props'
import { ContentElement, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import ModalElement from '../components/Modal/ModalElement'
import OverlayElement from '../components/Modal/OverlayElement'
import Overlay from '../Overlay'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledSizeProps {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  children: ContentElement | ContentElement[]
  hasBorder?: boolean
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  hasOverlayBackground?: boolean
  hasOverlayBlurEffect?: boolean
  isBlock?: boolean
  isCentered?: boolean
  isDismissible?: boolean
  isStretched?: boolean
  isFullScreen?: boolean
  setStatus?: SetState<boolean>
  shape?: ShapeProp
  status?: boolean
  transitionClassName?: string
  transitionDuration?: number
}

const Modal: React.FC<Props> = (props) => {
  const theme = React.useContext<Theme>(ThemeContext)

  return (
    <CSSTransition
      afterHide={props.afterHide}
      afterShow={props.afterShow}
      beforeHide={props.beforeHide}
      beforeShow={props.beforeShow}
      className={props.transitionClassName ?? 'src-modal'}
      duration={props.transitionDuration ?? theme.$.transition.modalDuration}
      hasHideAnimation={props.hasHideAnimation}
      hasShowAnimation={props.hasShowAnimation}
      status={props.status}
    >
      <Overlay
        hasBackground={props.hasOverlayBackground}
        hasBlurEffect={props.hasOverlayBlurEffect}
        template={
          <OverlayElement
            duration={props.transitionDuration ?? theme.$.transition.modalDuration}
            isFullScreen={props.isFullScreen}
          />
        }
        {...(props.isDismissible && { onClick: () => props.setStatus(false) })}
      >
        <ModalElement
          {...extractElementProps(props, [intrinsicStyledSizeProps])}
          isBlock={props.isBlock}
          isCentered={props.isCentered}
          isStretched={props.isStretched}
          isFullScreen={props.isFullScreen}
          hasBorder={props.hasBorder}
          modalSize={props.size}
          modalSizeSm={props.sizeSm}
          modalSizeMd={props.sizeMd}
          modalSizeLg={props.sizeLg}
          modalSizeXl={props.sizeXl}
          shape={props.shape}
        >
          {props.children}
        </ModalElement>
      </Overlay>
    </CSSTransition>
  )
}

Modal.defaultProps = {
  hasBorder: true,
  hasHideAnimation: true,
  hasShowAnimation: true,
  hasOverlayBackground: true,
  isDismissible: true,
  size: 'medium',
  shape: 'rectangle',
  status: true,
}

export default Modal
