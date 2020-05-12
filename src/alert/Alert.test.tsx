import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Alert from "./Alert"

describe("<Alert />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Alert>Alert</Alert>)
        expect(wrapper).toMatchSnapshot()
    })

    describe("icon", () => {
        it("should include src-alert-content class", () => {
            const wrapper = mountTheme(<Alert icon={<i />}>Alert</Alert>)
            expect(wrapper.find(".src-alert-content").exists()).toBe(true)
        })
    
        it("should render icon", () => {
            const wrapper = mountTheme(<Alert icon={<i id="icon" />}>Alert</Alert>)
            expect(wrapper.find("#icon").exists()).toBe(true)
        })
    
        it("should render icon at the right of the child element", () => {
            const wrapper = mountTheme(<Alert icon={<i id="icon" />} iconPosition="right">Alert</Alert>)
            expect(wrapper.find(".src-alert-content + * #icon").exists()).toBe(true)
        })
    })
})