import React from "react"
import {shallow} from "enzyme"
import Big from "./Big"

describe("Big", () => {
    it("should render <big> element", () => {
        const wrapper = shallow(<Big />)
        expect(wrapper.first().type()).toEqual("big")
    })
})