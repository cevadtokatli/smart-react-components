import React from "react"
import {shallow} from "enzyme"
import Colgroup from "./Colgroup"

describe("Colgroup", () => {
    it("should render <colgroup> element", () => {
        const wrapper = shallow(<Colgroup />)
        expect(wrapper.first().type()).toEqual("colgroup")
    })
})