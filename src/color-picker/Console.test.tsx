import React from "react"
import renderTheme from "../test/renderTheme"
import Console from "./Console"

describe("<Console />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Console initialColor="red" setValue={jest.fn()} onRef={jest.fn()} />)
        expect(wrapper).toMatchSnapshot()
    })
})