import React from "react"
import {shallow} from "enzyme"
import Aside from "./Aside"

describe("Aside", () => {
    it("should render <aside> element", () => {
        const wrapper = shallow(<Aside />)
        expect(wrapper.first().type()).toEqual("aside")
    })
})