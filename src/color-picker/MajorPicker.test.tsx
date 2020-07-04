import React from "react"
import renderTheme from "../test/renderTheme"
import MajorPicker from "./MajorPicker"

describe("<MajorPicker />", () => {
    let props

    beforeEach(() => {
        props = {
            breakpoint: "large",
            rgba: {
                current: ["0","0","0","1"]
            },
            processStart: jest.fn(),
            processEnd: jest.fn(),
            majorPickerProcess: jest.fn(),
            majorPickerBgEl: {},
            majorPickerDraggerEl: {},
            onRef: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<MajorPicker {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

})