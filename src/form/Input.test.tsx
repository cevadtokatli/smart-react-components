import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Input from "./Input"
import InputLabel from "./InputLabel"
import InputHint from "./InputHint"
import InputError from "./InputError"
import InputAddon from "./InputAddon"

describe("<Input />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Input label="Label" inputProps={{placeholder:"Placeholder..."}} />)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<Input setValue={setValue} />)
        wrapper.find("input").simulate("change")
        expect(setValue).toHaveBeenCalled()
    })

    it("should not call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<Input setValue={setValue} inputProps={{disabled:true}} />)
        wrapper.find("input").simulate("change")
        expect(setValue).not.toHaveBeenCalled()
    })

    it("should render label", () => {
        const wrapper = mountTheme(<Input label="Label" />)
        expect(wrapper.find(InputLabel).exists()).toBe(true)
    })

    it("should render hint", () => {
        const wrapper = mountTheme(<Input hint="Hint" />)
        wrapper.find("input").simulate("focus")
        expect(wrapper.find(InputHint).exists()).toBe(true)
    })

    it("should render error", () => {
        const wrapper = mountTheme(<Input error="Error" />)
        expect(wrapper.find(InputError).exists()).toBe(true)
    })

    it("should render left addon", () => {
        const wrapper = mountTheme(<Input leftAddon="Left Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render right addon", () => {
        const wrapper = mountTheme(<Input rightAddon="Right Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })
})