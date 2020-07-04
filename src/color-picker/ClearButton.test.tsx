import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import ClearButton from "./ClearButton"

describe("<ClearButton />", () => {
    let props

    beforeEach(() => {
        props = {
            setValue: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<ClearButton {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setValue", () => {
        const wrapper = mountTheme(<ClearButton {...props} />)
        wrapper.find("div").simulate("click")
        expect(props.setValue).toHaveBeenCalled()
    })
})