import React from "react"
import renderTheme from "../test/renderTheme"
import MinorPicker from "./MinorPicker"

describe("<MinorPicker />", () => {
    let props

    beforeEach(() => {
        props = {
            breakpoint: "large",
            processStart: jest.fn(),
            processEnd: jest.fn(),
            minorPickerStart: jest.fn(),
            minorPickerProcess: jest.fn(),
            minorPickerDraggerEl: {}
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<MinorPicker {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

})