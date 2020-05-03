import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Textarea from "./Textarea"
import InputLabel from "./InputLabel"
import InputHint from "./InputHint"
import InputError from "./InputError"
import InputAddon from "./InputAddon"

describe("<Textarea />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Textarea label="Label" textareaProps={{placeholder:"Placeholder..."}} />)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<Textarea setValue={setValue} />)
        wrapper.find("textarea").simulate("change")
        expect(setValue).toHaveBeenCalled()
    })

    it("should not call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<Textarea setValue={setValue} textareaProps={{disabled:true}} />)
        wrapper.find("textarea").simulate("change")
        expect(setValue).not.toHaveBeenCalled()
    })

    it("should render label", () => {
        const wrapper = mountTheme(<Textarea label="Label" />)
        expect(wrapper.find(InputLabel).exists()).toBe(true)
    })

    it("should render hint", () => {
        const wrapper = mountTheme(<Textarea hint="Hint" />)
        wrapper.find("textarea").simulate("focus")
        expect(wrapper.find(InputHint).exists()).toBe(true)
    })

    it("should render error", () => {
        const wrapper = mountTheme(<Textarea error="Error" />)
        expect(wrapper.find(InputError).exists()).toBe(true)
    })

    it("should render left addon", () => {
        const wrapper = mountTheme(<Textarea leftAddon="Left Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render right addon", () => {
        const wrapper = mountTheme(<Textarea rightAddon="Right Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })
})