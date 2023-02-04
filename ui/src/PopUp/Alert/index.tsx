import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, PaletteProp, SetState } from '@smart-react-components/core/types'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import Button from '../../Button'
import Modal from '../../Modal'
import ModalBody from '../../Modal/ModalBody'
import ModalFooter from '../../Modal/ModalFooter'
import ModalHeader from '../../Modal/ModalHeader'
import ModalTitle from '../../Modal/ModalTitle'

export interface Props {
  action?: () => (void | Promise<void>)
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  buttonLabel?: string
  buttonPalette?: PaletteProp
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  hasOverlayBackground?: boolean
  hasOverlayBlurEffect?: boolean
  message: ContentElement
  setStatus?: SetState<boolean>
  status?: boolean
  transitionClassName?: string
  transitionDuration?: number
  title?: ContentElement
}

const Alert: React.FC<Props> = ({ action, afterHide, afterShow, beforeHide, beforeShow, buttonLabel, buttonPalette, hasHideAnimation, hasShowAnimation, hasOverlayBackground, hasOverlayBlurEffect, message, setStatus, status, transitionClassName, transitionDuration, title }) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const [isClicked, setClicked] = React.useState(false)

  useChangeEffect(() => {
    if (status) {
      setClicked(false)
    }
  }, [status])

  const handleClick = async () => {
    if (isClicked) {
      return
    }

    setClicked(true)

    const result = action?.()

    if (result instanceof Promise) {
      await result
    }

    setStatus?.(false)
  }

  return (
    <Modal
      afterHide={afterHide}
      afterShow={afterShow}
      beforeHide={beforeHide}
      beforeShow={beforeShow}
      hasHideAnimation={hasHideAnimation}
      hasShowAnimation={hasShowAnimation}
      hasOverlayBackground={hasOverlayBackground}
      hasOverlayBlurEffect={hasOverlayBlurEffect}
      isDismissible={false}
      setStatus={setStatus}
      status={status}
      transitionClassName={transitionClassName}
      transitionDuration={transitionDuration}
    >
      { title && (
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
      ) }
      <ModalBody>{message}</ModalBody>
      <ModalFooter hasBorder={false} display="flex" justifyContent="flex-end">
        <Button
          onClick={handleClick}
          palette={buttonPalette}
        >
          {buttonLabel ?? theme.$.i18n.ok}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default Alert
