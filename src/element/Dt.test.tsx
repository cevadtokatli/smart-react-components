import React from "react"
import {shallow} from "enzyme"
import Dt from "./Dt"

describe("Dt", () => {
    it("should render <dt> element", () => {
        const wrapper = shallow(<Dt />)
        expect(wrapper.first().type()).toEqual("dt")
    })
})