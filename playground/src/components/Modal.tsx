import React from 'react'
import Modal from '@smart-react-components/ui/Modal'
import { Button, ButtonList, ModalBody, ModalCloseIcon, ModalFooter, ModalHeader, ModalTitle } from '@smart-react-components/ui'

export const ModalC = () => {
  const [status, setStatus] = React.useState(false)
  
  return (
    <>
      <Button onClick={() => setStatus(true)}>Toggle</Button>
      <Modal setStatus={setStatus} status={status} hasOverlayBlurEffect>
        <ModalHeader>
          <ModalTitle>Title</ModalTitle>
          <ModalCloseIcon />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter>
          <ButtonList>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}
