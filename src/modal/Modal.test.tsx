import React from "react"
import renderTheme from "../test/renderTheme"
import Modal from "./Modal"
import ModalHeader from "./Header"
import ModalTitle from "./Title"
import ModalCloseIcon from "./CloseIcon"
import ModalBody from "./Body"
import ModalFooter from "./Footer"

describe("<Modal />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <Modal>
                <ModalHeader>
                    <ModalTitle>Header</ModalTitle>
                    <ModalCloseIcon />
                </ModalHeader>
                <ModalBody>
                    <p>Modal Body</p>
                </ModalBody>
                <ModalFooter>
                    <span>Modal Footer</span>
                </ModalFooter>
            </Modal>
        )
        expect(wrapper).toMatchSnapshot()
    })
})