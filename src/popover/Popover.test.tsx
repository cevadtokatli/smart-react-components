import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Popover from "./Popover"
import PopoverBody from "./Body"

describe("<Popover />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <Popover status={true} setStatus={jest.fn()}>
                <button>Toggle element</button>
                <PopoverBody>Popover element</PopoverBody>
            </Popover>
        )
        expect(wrapper).toMatchSnapshot()
    })

    describe("when status is false", () => {
        let props
        let wrapper

        beforeEach(() => {
            props = {
                status: false,
                setStatus: jest.fn(v => props.status = v)
            }
            
            wrapper = mountTheme(
                <Popover {...props}>
                    <button onClick={e => (e.target as HTMLElement).click()}>Toggle element</button>
                    <PopoverBody>Popover element</PopoverBody>
                </Popover>
            )

            wrapper.find("button").simulate("click")
            wrapper.update()
        })

        it("status should be true", () => {
            expect(props.status).toBe(true)
        })

        it("should call setStatus method", () => {
            expect(props.setStatus).toHaveBeenCalled()
        })
    })

    describe("when status is true", () => {        
        let props
        let wrapper

        beforeEach(() => {
            props = {
                status: true,
                setStatus: jest.fn(v => props.status = v)
            }
            
            wrapper = mountTheme(
                <Popover {...props}>
                    <button onClick={e => (e.target as HTMLElement).click()}>Toggle element</button>
                    <PopoverBody>Popover element</PopoverBody>
                </Popover>
            )

            wrapper.find("button").simulate("click")
            wrapper.update()
        })

        it("status should be false", () => {
            expect(props.status).toBe(false)
        })

        it("should call setStatus method", () => {
            expect(props.setStatus).toHaveBeenCalled()
        })
    })
})