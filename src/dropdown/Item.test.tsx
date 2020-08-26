import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import DropdownItem from "./Item"

describe("<Dropdown />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<DropdownItem>Item</DropdownItem>)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setStatus and callback", () => {
        const setStatus = jest.fn()
        const callback = jest.fn()
        const wrapper = mountTheme(<DropdownItem setStatus={setStatus} callback={callback} elementProps={{id:"item"}}>Item</DropdownItem>)
        wrapper.find("#item").hostNodes().simulate("click")
        expect(setStatus).toHaveBeenCalled()
        expect(callback).toHaveBeenCalled()
    })
})