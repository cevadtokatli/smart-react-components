import React from "react"
import renderTheme from "../test/renderTheme"
import Overlay from "./Overlay"

describe("<Overlay />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<Overlay><div>Overlay Element</div></Overlay>)
        expect(wrapper).toMatchSnapshot()
    })
})