import React from "react"
import {shallow} from "enzyme"
import Sub from "./Sub"

describe("Sub", () => {
    it("should render <sub> element", () => {
        const wrapper = shallow(<Sub />)
        expect(wrapper.first().type()).toEqual("sub")
    })
})