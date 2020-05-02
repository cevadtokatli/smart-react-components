import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Radio from "./Radio"
import RadioSpan from "./RadioSpan"

describe("<Radio />", () => {
    let props

    beforeEach(() => {
        props = {
            value: "value",
            active: "value",
            setActive: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Radio {...props}>Label</Radio>)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setActive", () => {
        const wrapper = mountTheme(<Radio {...props} />)
        wrapper.find("input").simulate("change")
        expect(props.setActive).toHaveBeenCalled()
    })

    it("should not call setActive", () => {
        const wrapper = mountTheme(<Radio {...props} inputProps={{disabled:true}} />)
        wrapper.find("input").simulate("change")
        expect(props.setActive).not.toHaveBeenCalled()
    })

    it("should render span", () => {
        const wrapper = mountTheme(<Radio {...props}>Label</Radio>)
        expect(wrapper.find(RadioSpan).exists()).toBe(true)
    })
})