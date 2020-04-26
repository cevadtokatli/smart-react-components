import React from "react"
import {shallow} from "enzyme"
import Bdo from "./Bdo"

describe("Bdo", () => {
    it("should render <bdo> element", () => {
        const wrapper = shallow(<Bdo />)
        expect(wrapper.first().type()).toEqual("bdo")
    })
})