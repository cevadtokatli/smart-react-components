import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Prompt from "./Prompt"
import Button from "../button"

describe("<Prompt />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Prompt title="Title" message="Message" placeholder="Placeholder" value="Value" callback={jest.fn()} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should invoke callback method with its first argument as the given value", () => {
        const callback = jest.fn()
        const wrapper = mountTheme(<Prompt message="message" callback={callback} />)
        wrapper.find("input").getDOMNode<HTMLInputElement>().value = "value"
        wrapper.find(Button).at(1).find("a").simulate("click")
        expect(callback).toHaveBeenCalled()
        expect(callback.mock.calls[0][0]).toEqual("value")
    })
})