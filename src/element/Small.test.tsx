import React from "react"
import {shallow} from "enzyme"
import Small from "./Small"

describe("Small", () => {
    it("should render <small> element", () => {
        const wrapper = shallow(<Small />)
        expect(wrapper.first().type()).toEqual("small")
    })
})