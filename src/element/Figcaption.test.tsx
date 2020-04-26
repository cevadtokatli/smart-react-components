import React from "react"
import {shallow} from "enzyme"
import Figcaption from "./Figcaption"

describe("Figcaption", () => {
    it("should render <figcaption> element", () => {
        const wrapper = shallow(<Figcaption />)
        expect(wrapper.first().type()).toEqual("figcaption")
    })
})