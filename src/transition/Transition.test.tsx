import React from "react"
import {mount} from "enzyme"
import Transition from "./Transition"

describe("<Transition />", () => {
    describe("status", () => {
        it("should render element", () => {
            const wrapper = mount(<Transition status={true}><div id="element" /></Transition>)
            expect(wrapper.find("#element").exists()).toBe(true)
        })

        it("should not render element", () => {
            const wrapper = mount(<Transition status={false}><div id="element" /></Transition>)
            expect(wrapper.find("#element").exists()).toBe(false)
        })
    })

    describe("display", () => {
        let wrapper 

        beforeEach(() => {
            wrapper = mount(<Transition status={false} display={true}><div id="element" /></Transition>)
        })

        it("should render element", () => {
            expect(wrapper.find("#element").exists()).toBe(true)
        })

        it("should not display element", () => {
            const style = getComputedStyle(wrapper.find("#element").getDOMNode())
            expect(style.getPropertyValue("display")).toEqual("none")
        })
    })

    describe("callbacks", () => {
        describe("show", () => {
            let props
            
            beforeEach(() => {
                props = {
                    beforeShow: jest.fn(() => Promise.resolve()),
                    show: jest.fn(() => Promise.resolve()),
                    afterShow: jest.fn(),
                    status: false
                }
                const wrapper = mount(<Transition {...props}><div /></Transition>)
                const instance = wrapper.instance()
                const oldProps = instance.props
                const oldState = instance.state
                wrapper.setProps({
                    status: true
                })
                wrapper.instance().componentDidUpdate(oldProps, oldState)
            })

            it("should call beforeShow method", () => {
                expect(props.beforeShow).toHaveBeenCalled()
            })

            it("should call show method", () => {
                expect(props.show).toHaveBeenCalled()
            })

            it("should call afterShow method", () => {
                expect(props.afterShow).toHaveBeenCalled()
            })
        })
    
        describe("hide", () => {
            let props
            
            beforeEach(() => {
                props = {
                    beforeHide: jest.fn(() => Promise.resolve()),
                    hide: jest.fn(() => Promise.resolve()),
                    afterHide: jest.fn(),
                    status: true
                }
                const wrapper = mount(<Transition {...props}><div /></Transition>)
                const instance = wrapper.instance()
                const oldProps = instance.props
                const oldState = instance.state
                wrapper.setProps({
                    status: false
                })
                wrapper.instance().componentDidUpdate(oldProps, oldState)
            })

            it("should call beforeHide method", () => {
                expect(props.beforeHide).toHaveBeenCalled()
            })

            it("should call hide method", () => {
                expect(props.hide).toHaveBeenCalled()
            })

            it("should call afterHide method", () => {
                expect(props.afterHide).toHaveBeenCalled()
            })
        })
    })
})