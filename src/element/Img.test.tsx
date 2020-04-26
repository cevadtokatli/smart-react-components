import React from "react"
import {shallow} from "enzyme"
import Img from "./Img"

describe("Img", () => {
    it("should render <img> element", () => {
        const wrapper = shallow(<Img />)
        expect(wrapper.first().type()).toEqual("img")
    })
})