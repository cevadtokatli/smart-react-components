import React from "react"
import {shallow} from "enzyme"
import Address from "./Address"

describe("Address", () => {
    it("should render <address> element", () => {
        const wrapper = shallow(<Address />)
        expect(wrapper.first().type()).toEqual("address")
    })
})