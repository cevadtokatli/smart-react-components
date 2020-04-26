import React from "react"
import {shallow} from "enzyme"
import Input from "./Input"

describe("Input", () => {
    it("should render <input> element", () => {
        const wrapper = shallow(<Input />)
        expect(wrapper.first().type()).toEqual("input")
    })
})