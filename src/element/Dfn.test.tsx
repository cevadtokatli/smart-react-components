import React from "react"
import {shallow} from "enzyme"
import Dfn from "./Dfn"

describe("Dfn", () => {
    it("should render <dfn> element", () => {
        const wrapper = shallow(<Dfn />)
        expect(wrapper.first().type()).toEqual("dfn")
    })
})