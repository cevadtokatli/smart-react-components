import React from "react"
import renderTheme from "../test/renderTheme"
import OpacityPicker from "./OpacityPicker"

describe("<OpacityPicker />", () => {
    let props

    beforeEach(() => {
        props = {
            breakpoint: "large",
            processStart: jest.fn(),
            processEnd: jest.fn(),
            opacityPickerProcess: jest.fn(),
            opacityPickerBgEl: {},
            opacityPickerDraggerEl: {}
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<OpacityPicker {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

})