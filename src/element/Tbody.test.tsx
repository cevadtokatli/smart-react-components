import React from "react"
import {shallow} from "enzyme"
import Tbody from "./Tbody"

describe("Tbody", () => {
    it("should render <tbody> element", () => {
        const wrapper = shallow(<Tbody />)
        expect(wrapper.first().type()).toEqual("tbody")
    })
})