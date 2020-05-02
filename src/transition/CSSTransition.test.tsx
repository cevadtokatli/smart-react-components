import React from "react"
import {mount} from "enzyme"
import CSSTransition from "./CSSTransition"

describe("<CSSTransition />", () => {
    let props

    beforeEach(() => {
        props = {
            className: "test"
        }
    })

    describe("status", () => {
        it("should render element", () => {
            props.status = true
            const wrapper = mount(<CSSTransition {...props}><div id="element" /></CSSTransition>)
            expect(wrapper.find("#element").exists()).toBe(true)
        })

        it("should not render element", () => {
            props.status = false
            const wrapper = mount(<CSSTransition {...props}><div id="element" /></CSSTransition>)
            expect(wrapper.find("#element").exists()).toBe(false)
        })
    })

    describe("display", () => {
        let wrapper 

        beforeEach(() => {
            props.status = false
            props.display = true
            wrapper = mount(<CSSTransition {...props}><div id="element" /></CSSTransition>)
        })

        it("should render element", () => {
            expect(wrapper.find("#element").exists()).toBe(true)
        })

        it("should not display element", () => {
            const style = getComputedStyle(wrapper.find("#element").getDOMNode())
            expect(style.getPropertyValue("display")).toEqual("none")
        })
    })
})