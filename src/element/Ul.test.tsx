import React from "react"
import {shallow} from "enzyme"
import Ul from "./Ul"

describe("Ul", () => {
    it("should render <ul> element", () => {
        const wrapper = shallow(<Ul />)
        expect(wrapper.first().type()).toEqual("ul")
    })
})