import React from "react"
import {shallow} from "enzyme"
import Cite from "./Cite"

describe("Cite", () => {
    it("should render <cite> element", () => {
        const wrapper = shallow(<Cite />)
        expect(wrapper.first().type()).toEqual("cite")
    })
})