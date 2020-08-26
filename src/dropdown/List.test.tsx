import React from "react"
import renderTheme from "../test/renderTheme"
import DropdownList from "./List"
import DropdownItem from "./Item"

describe("<Dropdown />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <DropdownList>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownList>
        )
        expect(wrapper).toMatchSnapshot()
    })
})