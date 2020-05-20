import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Confirm from "./Confirm"
import Button from "../button"

describe("<Confirm />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Confirm title="Title" message="Message" callback={jest.fn()} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should invoke callback method with its first argument as true", () => {
        const callback = jest.fn()
        const wrapper = mountTheme(<Confirm message="message" callback={callback} />)
        wrapper.find(Button).at(1).find("a").simulate("click")
        expect(callback).toHaveBeenCalled()
        expect(callback.mock.calls[0][0]).toEqual(true)
    })
})