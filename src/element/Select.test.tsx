import React from "react"
import {shallow} from "enzyme"
import Select from "./Select"

describe("Select", () => {
    it("should render <select> element", () => {
        const wrapper = shallow(<Select />)
        expect(wrapper.first().type()).toEqual("select")
    })
})