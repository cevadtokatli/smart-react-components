import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Option from "./Option"

describe("<Option />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Option value="option-1">Option-1</Option>)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should include active class", () => {
        const wrapper = mountTheme(<Option value="option-1" active="option-1">Option-1</Option>)
        expect(wrapper.find(".src-option-active").exists()).toBe(true)
    })

    it("should not include active class", () => {
        const wrapper = mountTheme(<Option value="option-1" active="option-2">Option-1</Option>)
        expect(wrapper.find(".src-option-active").exists()).toBe(false)
    })

    it("should call setActive", () => {
        const setActive = jest.fn()
        const wrapper = mountTheme(<Option value="option-1" setActive={setActive}>Option-1</Option>)
        wrapper.find("div").simulate("click")
        expect(setActive).toHaveBeenCalled()
    })

    it("should not call setActive", () => {
        const setActive = jest.fn()
        const wrapper = mountTheme(<Option value="option-1" setActive={setActive} disabled={true}>Option-1</Option>)
        wrapper.find("div").simulate("click")
        expect(setActive).not.toHaveBeenCalled()
    })
})