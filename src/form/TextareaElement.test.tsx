import React from "react"
import mountTheme from "../test/mountTheme"
import TextareaElement from "./TextareaElement"

describe("<TextareaElement />", () => {
    it("should render InputElement as textarea", () => {
        const wrapper = mountTheme(<TextareaElement />)
        expect(wrapper.find("textarea").exists()).toBe(true)
    })
})