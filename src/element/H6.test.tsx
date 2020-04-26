import React from "react"
import {shallow} from "enzyme"
import H6 from "./H6"

describe("H6", () => {
    it("should render <h6> element", () => {
        const wrapper = shallow(<H6 />)
        expect(wrapper.first().type()).toEqual("h6")
    })
})