import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Option from "./Option"
import SelectBox from "./SelectBox"
import InputLabel from "./InputLabel"
import InputError from "./InputError"
import InputAddon from "./InputAddon"

describe("<SelectBox />", () => {
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
            selectProps: {
                id: "selectbox",
                onClick: e => e.target.click()
            },
            showAnimation: false,
            hideAnimation: false
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<SelectBox {...props} label="Label" selectProps={{placeholder:"Placeholder..."}}>{children}</SelectBox>)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should call setActive", () => {
        const wrapper = mountTheme(<SelectBox {...props}>{children}</SelectBox>)
        wrapper.find("#selectbox").hostNodes().simulate("click")
        wrapper.find(Option).at(0).simulate("click")
        expect(props.setActive).toHaveBeenCalled()
    })

    it("should not call setActive", () => {
        const wrapper = mountTheme(<SelectBox {...props} selectProps={{...props.selectProps,disabled:true}}>{children}</SelectBox>)
        wrapper.find("#selectbox").hostNodes().simulate("click")
        wrapper.find(Option).at(0).simulate("click")
        expect(props.setActive).not.toHaveBeenCalled()
    })

    it("should render label", () => {
        props.setActive = value => props.active = value
        const wrapper = mountTheme(<SelectBox {...props} label="Label">{children}</SelectBox>)
        expect(wrapper.find(InputLabel).exists()).toBe(true)
    })

    it("should render error", () => {
        const wrapper = mountTheme(<SelectBox {...props} error="Error">{children}</SelectBox>)
        expect(wrapper.find(InputError).exists()).toBe(true)
    })

    it("should render left addon", () => {
        const wrapper = mountTheme(<SelectBox {...props} leftAddon="Left Addon">{children}</SelectBox>)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render right addon", () => {
        const wrapper = mountTheme(<SelectBox {...props} rightAddon="Right Addon">{children}</SelectBox>)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render search input", () => {
        const wrapper = mountTheme(<SelectBox {...props} search={true} searchInputProps={{id:"search-input"}}>{children}</SelectBox>)
        wrapper.find("#selectbox").hostNodes().simulate("click")
        expect(wrapper.find("#search-input").exists()).toBe(true)
    })
})