import React from "react"
import {shallow} from "enzyme"
import Br from "./Br"

describe("Br", () => {
    it("should render <br> element", () => {
        const wrapper = shallow(<Br />)
        expect(wrapper.first().type()).toEqual("br")
    })
})