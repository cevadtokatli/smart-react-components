import React from "react"
import renderTheme from "../test/mountTheme"
import OptionCategory from "./OptionCategory"

describe("<OptionCategory />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<OptionCategory>Category</OptionCategory>)
        expect(wrapper).toMatchSnapshot()
    })
})