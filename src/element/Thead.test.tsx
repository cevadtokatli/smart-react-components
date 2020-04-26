import React from "react"
import {shallow} from "enzyme"
import Thead from "./Thead"

describe("Thead", () => {
    it("should render <thead> element", () => {
        const wrapper = shallow(<Thead />)
        expect(wrapper.first().type()).toEqual("thead")
    })
})