import React from "react"
import {shallow} from "enzyme"
import H4 from "./H4"

describe("H4", () => {
    it("should render <h4> element", () => {
        const wrapper = shallow(<H4 />)
        expect(wrapper.first().type()).toEqual("h4")
    })
})