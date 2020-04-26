import React from "react"
import {shallow} from "enzyme"
import Hr from "./Hr"

describe("Hr", () => {
    it("should render <hr> element", () => {
        const wrapper = shallow(<Hr />)
        expect(wrapper.first().type()).toEqual("hr")
    })
})