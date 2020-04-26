import React from "react"
import {shallow} from "enzyme"
import Ins from "./Ins"

describe("Ins", () => {
    it("should render <ins> element", () => {
        const wrapper = shallow(<Ins />)
        expect(wrapper.first().type()).toEqual("ins")
    })
})