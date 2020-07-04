import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Input from "./Input"

describe("<Input />", () => {
    let props

    beforeEach(() => {
        props = {
            setValue: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Input {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setValue", () => {
        const wrapper = mountTheme(<Input {...props} />)
        wrapper.find("input").getDOMNode<HTMLInputElement>().value = "blue"
        wrapper.find("input").simulate("blur")
        expect(props.setValue).toHaveBeenCalled()
    })
})