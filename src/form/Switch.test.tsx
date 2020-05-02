import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Switch from "./Switch"
import RadioSpan from "./RadioSpan"

describe("<Switch />", () => {
    let props

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Switch>Label</Switch>)
        expect(wrapper).toMatchSnapshot()
    })

    it("should render span", () => {
        const wrapper = mountTheme(<Switch>Label</Switch>)
        expect(wrapper.find(RadioSpan).exists()).toBe(true)
    })

    describe("setActive", () => {
        beforeEach(() => {
            props = {
                value: "value",
                active: ["value"],
                setActive: jest.fn()
            }
        })

        it("should call setActive", () => {
            const wrapper = mountTheme(<Switch {...props} />)
            wrapper.find("input").simulate("change", {target:{checked:false}})
            expect(props.setActive).toHaveBeenCalled()
        })
    
        it("should not call setActive", () => {
            const wrapper = mountTheme(<Switch {...props} inputProps={{disabled:true}} />)
            wrapper.find("input").simulate("change")
            expect(props.setActive).not.toHaveBeenCalled()
        })
    })

    describe("setChecked", () => {
        beforeEach(() => {
            props = {
                checked: false,
                setChecked: jest.fn()
            }
        })

        it("should call setChecked", () => {
            const wrapper = mountTheme(<Switch {...props} />)
            wrapper.find("input").simulate("change")
            expect(props.setChecked).toHaveBeenCalled()
        })
    
        it("should not call setChecked", () => {
            const wrapper = mountTheme(<Switch {...props} inputProps={{disabled:true}} />)
            wrapper.find("input").simulate("change")
            expect(props.setChecked).not.toHaveBeenCalled()
        })
    })
})