import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Button from '../Button'
import ButtonList from '../Button/ButtonList'
import OverlayElement from '../components/Modal/OverlayElement'
import Modal from './'
import ModalBody from './ModalBody'
import ModalCloseIcon from './ModalCloseIcon'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalTitle from './ModalTitle'

describe('<Modal />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <Modal>
        <ModalHeader>
          <ModalTitle>Title</ModalTitle>
          <ModalCloseIcon />
        </ModalHeader>
        <ModalBody>
          <p>Paragraph</p>
          <p>Another Paragraph</p>
        </ModalBody>
        <ModalFooter>
          <ButtonList>
              <Button>Cancel</Button>
              <Button>OK</Button>
            </ButtonList>
        </ModalFooter>
      </Modal>
    ))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setStatus when overlay clicked on', () => {
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Modal setStatus={setStatus}>Modal</Modal>))
    fireEvent.click(container.querySelector(`.${OverlayElement.styledComponentId} > div`)!)
    expect(setStatus).toHaveBeenCalled()
  })
})
