import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import InitialButton from "./InitialButton"

describe("<InitialButton />", () => {
    let props

    beforeEach(() => {
        props = {
            value: "red",
            setValue: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<InitialButton {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setValue", () => {
        const wrapper = mountTheme(<InitialButton {...props} />)
        wrapper.find("div").at(1).simulate("click")
        expect(props.setValue).toHaveBeenCalled()
    })
})