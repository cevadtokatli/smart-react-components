import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import ColorPicker from "./ColorPicker"
import Console from "./Console"
import Buttons from "./Buttons"
import PaletteContainer from "./PaletteContainer"

describe("<ColorPicker />", () => {
    let props

    beforeEach(() => {
        props = {
            value: "red",
            setValue: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<ColorPicker {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should render console", () => {
        const wrapper = mountTheme(<ColorPicker {...props} />)
        expect(wrapper.find(Console).exists()).toBe(true)
    })
    
    it("should render buttons", () => {
        const wrapper = mountTheme(<ColorPicker {...props} />)
        expect(wrapper.find(Buttons).exists()).toBe(true)
    })
    
    it("should render palette", () => {
        const wrapper = mountTheme(<ColorPicker {...props} />)
        expect(wrapper.find(PaletteContainer).exists()).toBe(true)
    })
})