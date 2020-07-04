import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Palette from "./Palette"

describe("<Palette />", () => {
    let props

    beforeEach(() => {
        props = {
            value: "red",
            setValue: jest.fn(),
            allowAddColorPalette: false,
            palette: ["red", "green", "blue"],
            setPalette: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Palette {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setValue", () => {
        const wrapper = mountTheme(<Palette {...props} />)
        wrapper.find(".src-color-picker-palette-item").at(1).simulate("click")
        expect(props.setValue).toHaveBeenCalled()
    })

    it("should render palette colors", () => {
        const wrapper = mountTheme(<Palette {...props} />)
        expect(wrapper.find("li.src-color-picker-palette-item").length).toEqual(props.palette.length)
    })
})