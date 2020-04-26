import React from "react"
import {shallow} from "enzyme"
import Li from "./Li"

describe("Li", () => {
    it("should render <li> element", () => {
        const wrapper = shallow(<Li />)
        expect(wrapper.first().type()).toEqual("li")
    })
})