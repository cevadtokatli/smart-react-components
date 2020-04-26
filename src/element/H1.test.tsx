import React from "react"
import {shallow} from "enzyme"
import H1 from "./H1"

describe("H1", () => {
    it("should render <h1> element", () => {
        const wrapper = shallow(<H1 />)
        expect(wrapper.first().type()).toEqual("h1")
    })
})