import { Theme } from '@smart-react-components/core'
import { IntrinsicStyledSizeProps } from '@smart-react-components/core/element-props/intrinsic-styled-size-props'
import { ContentElement, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import ModalElement from '../components/Modal'
import OverlayElement from '../components/Modal/Overlay'
import Overlay from '../Overlay'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledSizeProps {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  children: ContentElement | ContentElement[]
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

const Modal: React.FC<Props> = ({ afterHide, afterShow, beforeHide, beforeShow, children, hasHideAnimation = true, hasShowAnimation = true, hasOverlayBackground = true, hasOverlayBlurEffect, isBlock, isCentered, isDismissible = true, isStretched, isFullScreen, setStatus, size = 'medium', sizeSm, sizeMd, sizeLg, sizeXl, shape = 'rectangle', status = true, transitionClassName, transitionDuration }) => {
  const theme = React.useContext<Theme>(ThemeContext)

  return (
    <CSSTransition
      afterHide={afterHide}
      afterShow={afterShow}
      beforeHide={beforeHide}
      beforeShow={beforeShow}
      className={transitionClassName ?? 'src-modal'}
      duration={transitionDuration ?? theme.$.transition.modalDuration}
      hasHideAnimation={hasHideAnimation}
      hasShowAnimation={hasShowAnimation}
      status={status}
    >
      <Overlay
        hasBackground={hasOverlayBackground}
        hasBlurEffect={hasOverlayBlurEffect}
        template={
          <OverlayElement
            duration={transitionDuration ?? theme.$.transition.modalDuration}
            isFullScreen={isFullScreen}
          />
        }
        {...(isDismissible && { onClick: () => setStatus(false) })}
      >
        <ModalElement
          isBlock={isBlock}
          isCentered={isCentered}
          isStretched={isStretched}
          isFullScreen={isFullScreen}
          modalSize={size}
          modalSizeSm={sizeSm}
          modalSizeMd={sizeMd}
          modalSizeLg={sizeLg}
          modalSizeXl={sizeXl}
          shape={shape}
        >
          {children}
        </ModalElement>
      </Overlay>
    </CSSTransition>
  )
}

export default Modal
