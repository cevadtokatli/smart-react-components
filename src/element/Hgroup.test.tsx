import React from "react"
import {shallow} from "enzyme"
import Hgroup from "./Hgroup"

describe("Hgroup", () => {
    it("should render <hgroup> element", () => {
        const wrapper = shallow(<Hgroup />)
        expect(wrapper.first().type()).toEqual("hgroup")
    })
})