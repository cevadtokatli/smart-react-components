import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Alert from "./Alert"
import Button from "../button"

describe("<Alert />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Alert title="Title" message="Message" />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should invoke callback method", () => {
        const callback = jest.fn()
        const wrapper = mountTheme(<Alert message="message" callback={callback} />)
        wrapper.find(Button).find("a").simulate("click")
        expect(callback).toHaveBeenCalled()
    })
})