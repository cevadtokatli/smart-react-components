import React from "react"
import {shallow} from "enzyme"
import Time from "./Time"

describe("Time", () => {
    it("should render <time> element", () => {
        const wrapper = shallow(<Time />)
        expect(wrapper.first().type()).toEqual("time")
    })
})