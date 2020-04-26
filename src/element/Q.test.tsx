import React from "react"
import {shallow} from "enzyme"
import Q from "./Q"

describe("Q", () => {
    it("should render <q> element", () => {
        const wrapper = shallow(<Q />)
        expect(wrapper.first().type()).toEqual("q")
    })
})