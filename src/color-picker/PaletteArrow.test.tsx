import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import PaletteArrow from "./PaletteArrow"

describe("<PaletteArrow />", () => {
    let props

    beforeEach(() => {
        props = {
            status: false,
            setStatus: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<PaletteArrow {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setStatus", () => {
        const wrapper = mountTheme(<PaletteArrow {...props} />)
        wrapper.find("svg").simulate("click")
        expect(props.setStatus).toHaveBeenCalled()
    })
})