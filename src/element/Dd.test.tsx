import React from "react"
import {shallow} from "enzyme"
import Dd from "./Dd"

describe("Dd", () => {
    it("should render <dd> element", () => {
        const wrapper = shallow(<Dd />)
        expect(wrapper.first().type()).toEqual("dd")
    })
})