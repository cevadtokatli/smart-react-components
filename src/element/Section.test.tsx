import React from "react"
import {shallow} from "enzyme"
import Section from "./Section"

describe("Section", () => {
    it("should render <section> element", () => {
        const wrapper = shallow(<Section />)
        expect(wrapper.first().type()).toEqual("section")
    })
})