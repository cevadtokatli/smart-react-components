import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, PaletteProp, SetState } from '@smart-react-components/core/types'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import Button from '../Button'
import ButtonList from '../Button/ButtonList'
import Modal from '../Modal'
import ModalBody from '../Modal/ModalBody'
import ModalFooter from '../Modal/ModalFooter'
import ModalHeader from '../Modal/ModalHeader'
import ModalTitle from '../Modal/ModalTitle'

export interface Props {
  action?: (isConfirmed: boolean) => (void | Promise<void>)
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  cancelButtonLabel?: string
  cancelButtonPalette?: PaletteProp
  confirmButtonLabel?: string
  confirmButtonPalette?: PaletteProp
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  hasOverlayBackground?: boolean
  hasOverlayBlurEffect?: boolean
  message: ContentElement
  setStatus?: SetState<boolean>
  status?: boolean
  title?: ContentElement
  transitionClassName?: string
  transitionDuration?: number
}

const Confirm: React.FC<Props> = ({ action, afterHide, afterShow, beforeHide, beforeShow, cancelButtonLabel, cancelButtonPalette, confirmButtonLabel, confirmButtonPalette, hasHideAnimation, hasShowAnimation, hasOverlayBackground, hasOverlayBlurEffect, message, setStatus, status, transitionClassName, transitionDuration, title }) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const [isClicked, setClicked] = React.useState(false)

  useChangeEffect(() => {
    if (status) {
      setClicked(false)
    }
  }, [status])

  const handleClick = async (isConfirmed) => {
    if (isClicked) {
      return
    }

    setClicked(true)

    const result = action?.(isConfirmed)

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
      <ModalFooter hasBorder={false}>
        <ButtonList>
          <Button
            isOutline
            onClick={() => handleClick(false)}
            palette={cancelButtonPalette}
          >
            {cancelButtonLabel ?? theme.$.i18n.cancel}
          </Button>
          <Button
            onClick={() => handleClick(true)}
            palette={confirmButtonPalette}
          >
            {confirmButtonLabel ?? theme.$.i18n.ok}
          </Button>
        </ButtonList>
      </ModalFooter>
    </Modal>
  )
}

export default Confirm
