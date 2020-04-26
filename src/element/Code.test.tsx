import React from "react"
import {shallow} from "enzyme"
import Code from "./Code"

describe("Code", () => {
    it("should render <code> element", () => {
        const wrapper = shallow(<Code />)
        expect(wrapper.first().type()).toEqual("code")
    })
})