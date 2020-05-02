import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Checkbox from "./Checkbox"
import RadioSpan from "./RadioSpan"

describe("<Checkbox />", () => {
    let props

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Checkbox>Label</Checkbox>)
        expect(wrapper).toMatchSnapshot()
    })

    it("should render span", () => {
        const wrapper = mountTheme(<Checkbox>Label</Checkbox>)
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
            const wrapper = mountTheme(<Checkbox {...props} />)
            wrapper.find("input").simulate("change", {target:{checked:false}})
            expect(props.setActive).toHaveBeenCalled()
        })
    
        it("should not call setActive", () => {
            const wrapper = mountTheme(<Checkbox {...props} inputProps={{disabled:true}} />)
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
            const wrapper = mountTheme(<Checkbox {...props} />)
            wrapper.find("input").simulate("change")
            expect(props.setChecked).toHaveBeenCalled()
        })
    
        it("should not call setChecked", () => {
            const wrapper = mountTheme(<Checkbox {...props} inputProps={{disabled:true}} />)
            wrapper.find("input").simulate("change")
            expect(props.setChecked).not.toHaveBeenCalled()
        })
    })
})