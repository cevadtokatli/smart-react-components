import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Option from "../form/Option"
import Select from "./Select"

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
            buttonProps: {
                id: "button",
                onClick: e => e.target.click()
            },
            showAnimation: false,
            hideAnimation: false
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Select {...props}>{children}</Select>)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setActive", () => {
        const wrapper = mountTheme(<Select {...props}>{children}</Select>)
        wrapper.find("#button").hostNodes().simulate("click")
        wrapper.find(Option).at(0).simulate("click")
        expect(props.setActive).toHaveBeenCalled()
    })

    it("should render placeholder", () => {
        props.active = null
        const wrapper = mountTheme(<Select {...props} placeholder={<span id="placeholder" />}>{children}</Select>)
        expect(wrapper.find("#placeholder").exists()).toBe(true)
    })

    it("should render loading element", () => {
        const wrapper = mountTheme(<Select {...props} loading={<span id="loading" />} loadingStatus={true}>{children}</Select>)
        expect(wrapper.find("#loading").exists()).toBe(true)
    })

    it("should render search input", () => {
        const wrapper = mountTheme(<Select {...props} search={true} searchInputProps={{id:"search-input"}}>{children}</Select>)
        wrapper.find("#button").hostNodes().simulate("click")
        expect(wrapper.find("#search-input").exists()).toBe(true)
    })
})