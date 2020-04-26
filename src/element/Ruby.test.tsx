import React from "react"
import {shallow} from "enzyme"
import Ruby from "./Ruby"

describe("Ruby", () => {
    it("should render <ruby> element", () => {
        const wrapper = shallow(<Ruby />)
        expect(wrapper.first().type()).toEqual("ruby")
    })
})