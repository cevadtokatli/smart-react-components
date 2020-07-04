import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import DEFAULT_LANGUAGE from "../constants/color-picker/default-language"
import Buttons from "./Buttons"

describe("<Buttons />", () => {
    let props

    beforeEach(() => {
        props = {
            type: "primary",
            save: jest.fn(),
            cancel: jest.fn(),
            lang: DEFAULT_LANGUAGE
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Buttons {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call save method", () => {
        const wrapper = mountTheme(<Buttons {...props} />)
        wrapper.find("a").at(0).simulate("click")
        expect(props.save).toHaveBeenCalled()
    })

    it("should call cancel method", () => {
        const wrapper = mountTheme(<Buttons {...props} />)
        wrapper.find("a").at(1).simulate("click")
        expect(props.cancel).toHaveBeenCalled()
    })
})