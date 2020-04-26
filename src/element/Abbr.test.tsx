import React from "react"
import {shallow} from "enzyme"
import Abbr from "./Abbr"

describe("Abbr", () => {
    it("should render <abbr> element", () => {
        const wrapper = shallow(<Abbr />)
        expect(wrapper.first().type()).toEqual("abbr")
    })
})