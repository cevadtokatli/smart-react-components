import React from 'react'
import Modal from '@smart-react-components/ui/Modal'
import { Button, ButtonList, Confirm, ModalBody, ModalCloseIcon, ModalFooter, ModalHeader, ModalTitle, Prompt } from '@smart-react-components/ui'
import Alert from '@smart-react-components/ui/PopUp/Alert'

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

export const PopUp = () => {
  const [status, setStatus] = React.useState(false)
  const [status2, setStatus2] = React.useState(false)
  const [status3, setStatus3] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Alert</Button>
      <Alert setStatus={setStatus} status={status} message="Message" action={() => console.log('Alert')} />
      <Button onClick={() => setStatus2(true)}>Confirm</Button>
      <Confirm setStatus={setStatus2} status={status2} message="Message" action={isConfirmed => console.log('Confirm', isConfirmed)} />
      <Button onClick={() => setStatus3(true)}>Prompt</Button>
      <Prompt setStatus={setStatus3} status={status3} placeholder="Placeholder" message="Message" action={(text, isConfirmed) => console.log('Prompt', text, isConfirmed)} />
    </>
  )
}
