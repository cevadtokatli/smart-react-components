import React from "react"
import {shallow} from "enzyme"
import Summary from "./Summary"

describe("Summary", () => {
    it("should render <summary> element", () => {
        const wrapper = shallow(<Summary />)
        expect(wrapper.first().type()).toEqual("summary")
    })
})