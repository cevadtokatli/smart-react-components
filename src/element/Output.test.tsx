import React from "react"
import {shallow} from "enzyme"
import Output from "./Output"

describe("Output", () => {
    it("should render <output> element", () => {
        const wrapper = shallow(<Output />)
        expect(wrapper.first().type()).toEqual("output")
    })
})