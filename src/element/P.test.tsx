import React from "react"
import {shallow} from "enzyme"
import P from "./P"

describe("P", () => {
    it("should render <p> element", () => {
        const wrapper = shallow(<P />)
        expect(wrapper.first().type()).toEqual("p")
    })
})