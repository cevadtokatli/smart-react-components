import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import DatePicker from "./DatePicker"
import DatePicker$ from "./DatePicker$"
import Buttons from "./Buttons"

describe("<DatePicker />", () => {
    let props

    beforeEach(() => {
        props = {
            value: new Date("07/10/2020 2:23 AM"),
            setValue: jest.fn(),
            showButtons: true
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<DatePicker {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should render date picker", () => {
        const wrapper = mountTheme(<DatePicker {...props} />)
        expect(wrapper.find(DatePicker$).exists()).toBe(true)
    })

    it("should render buttons", () => {
        const wrapper = mountTheme(<DatePicker {...props} />)
        expect(wrapper.find(Buttons).exists()).toBe(true)
    })
})