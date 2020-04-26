import React from "react"
import {shallow} from "enzyme"
import Area from "./Area"

describe("Area", () => {
    it("should render <area> element", () => {
        const wrapper = shallow(<Area />)
        expect(wrapper.first().type()).toEqual("area")
    })
})