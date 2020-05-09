import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Button from "./Button"

describe("<Button />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Button>Button</Button>)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call onClick", () => {
        const onClick = jest.fn()
        const wrapper = mountTheme(<Button elementProps={{id:"button",onClick}}>Button</Button>)
        wrapper.find("#button").hostNodes().simulate("click")
        expect(onClick).toHaveBeenCalled()
    })

    it("should render icon", () => {
        const wrapper = mountTheme(<Button icon={<i id="icon" />}>Button</Button>)
        expect(wrapper.find("#icon").exists()).toBe(true)
    })

    it("should render icon at the right of the child element", () => {
        const wrapper = mountTheme(<Button elementProps={{id:"button"}} icon={<i id="icon" />} iconPosition="right"><span id="child">Button</span></Button>)
        expect(wrapper.find("#button").hostNodes().find("#child + * #icon").exists()).toBe(true)
    })

    it("should render loading element", () => {
        const wrapper = mountTheme(<Button loading={<span id="loading" />} loadingStatus={true}>Button</Button>)
        expect(wrapper.find("#loading").exists()).toBe(true)
    })
})