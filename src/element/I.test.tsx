import React from "react"
import {shallow} from "enzyme"
import I from "./I"

describe("I", () => {
    it("should render <i> element", () => {
        const wrapper = shallow(<I />)
        expect(wrapper.first().type()).toEqual("i")
    })
})