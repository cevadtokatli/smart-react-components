import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Option from "./Option"
import Select from "./Select"
import InputLabel from "./InputLabel"
import InputError from "./InputError"
import InputAddon from "./InputAddon"

describe("<Select />", () => {
    let children
    let props

    beforeAll(() => {
        children = [
            <Option key="0" value="value-1">Value-1</Option>,
            <Option key="1" value="value-2">Value-2</Option>,
            <Option key="2" value="value-3">Value-3</Option>   
        ]
    })

    beforeEach(() => {
        props = {
            active: "value-2",
            setActive: jest.fn(),
            waveEffect: null
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Select {...props} label="Label" selectProps={{placeholder:"Placeholder..."}}>{children}</Select>)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should call setActive", () => {
        const wrapper = mountTheme(<Select {...props}>{children}</Select>)
        wrapper.find(Option).at(0).simulate("click")
        expect(props.setActive).toHaveBeenCalled()
    })

    it("should not call setActive", () => {
        const wrapper = mountTheme(<Select {...props} selectProps={{disabled:true}}>{children}</Select>)
        wrapper.find(Option).at(0).simulate("click")
        expect(props.setActive).not.toHaveBeenCalled()
    })

    it("should render label", () => {
        props.setActive = value => props.active = value
        const wrapper = mountTheme(<Select {...props} label="Label">{children}</Select>)
        expect(wrapper.find(InputLabel).exists()).toBe(true)
    })

    it("should render error", () => {
        const wrapper = mountTheme(<Select {...props} error="Error">{children}</Select>)
        expect(wrapper.find(InputError).exists()).toBe(true)
    })

    it("should render left addon", () => {
        const wrapper = mountTheme(<Select {...props} leftAddon="Left Addon">{children}</Select>)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render right addon", () => {
        const wrapper = mountTheme(<Select {...props} rightAddon="Right Addon">{children}</Select>)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render search input", () => {
        const wrapper = mountTheme(<Select {...props} search={true} searchInputProps={{id:"search-input"}}>{children}</Select>)
        expect(wrapper.find("#search-input").exists()).toBe(true)
    })
})