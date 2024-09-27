import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, PaletteProp, SetState } from '@smart-react-components/core/types'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import Button from '../Button'
import ButtonList from '../Button/ButtonList'
import Input from '../Input'
import Modal from '../Modal'
import ModalBody from '../Modal/ModalBody'
import ModalFooter from '../Modal/ModalFooter'
import ModalHeader from '../Modal/ModalHeader'
import ModalTitle from '../Modal/ModalTitle'

export interface Props {
  action?: (text: string, isConfirmed: boolean) => (void | Promise<void>)
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  cancelButtonLabel?: string
  cancelButtonPalette?: PaletteProp
  confirmButtonLabel?: string
  confirmButtonPalette?: PaletteProp
  defaultValue?: string
  message: string
  placeholder?: string
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  hasOverlayBackground?: boolean
  hasOverlayBlurEffect?: boolean
  setStatus?: SetState<boolean>
  status?: boolean
  title?: ContentElement
  transitionClassName?: string
  transitionDuration?: number
}

const Prompt: React.FC<Props> = ({ action, afterHide, afterShow, beforeHide, beforeShow, cancelButtonLabel, cancelButtonPalette, confirmButtonLabel, confirmButtonPalette, defaultValue = '', hasHideAnimation, hasShowAnimation, hasOverlayBackground, hasOverlayBlurEffect, message, placeholder, setStatus, status, transitionClassName, transitionDuration, title }) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const [isClicked, setClicked] = React.useState(false)
  const [text, setText] = React.useState(() => defaultValue)

  useChangeEffect(() => {
    if (status) {
      setClicked(false)
    }
  }, [status])

  useChangeEffect(() => {
    if (status) {
      setText(defaultValue)
    }
  }, [status])

  useChangeEffect(() => {
    setText(defaultValue)
  }, [defaultValue])

  const handleClick = async (isConfirmed) => {
    if (isClicked) {
      return
    }

    setClicked(true)

    const result = action?.(text, isConfirmed)

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
      <ModalBody>
        <Input
          label={message}
          placeholder={placeholder}
          setValue={setText}
          value={text}
        />
      </ModalBody>
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

export default Prompt
