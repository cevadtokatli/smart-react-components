import React from "react"
import {shallow} from "enzyme"
import Meter from "./Meter"

describe("Meter", () => {
    it("should render <meter> element", () => {
        const wrapper = shallow(<Meter />)
        expect(wrapper.first().type()).toEqual("meter")
    })
})