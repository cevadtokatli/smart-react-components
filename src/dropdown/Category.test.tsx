import React from "react"
import renderTheme from "../test/renderTheme"
import DropdownCategory from "./Category"

describe("<Dropdown />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<DropdownCategory>Category</DropdownCategory>)
        expect(wrapper).toMatchSnapshot()
    })
})