import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import InputColorPicker from "./InputColorPicker"
import InputLabel from "./InputLabel"
import InputAddon from "./InputAddon"

describe("<InputColorPicker />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<InputColorPicker label="Label" />)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<InputColorPicker setValue={setValue} />)
        wrapper.find("input").simulate("blur")
        expect(setValue).toHaveBeenCalled()
    })

    it("should render label", () => {
        const wrapper = mountTheme(<InputColorPicker label="Label" />)
        expect(wrapper.find(InputLabel).exists()).toBe(true)
    })

    it("should render left addon", () => {
        const wrapper = mountTheme(<InputColorPicker leftAddon="Left Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render right addon", () => {
        const wrapper = mountTheme(<InputColorPicker rightAddon="Right Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })
})