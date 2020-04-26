import React from "react"
import {shallow} from "enzyme"
import Canvas from "./Canvas"

describe("Canvas", () => {
    it("should render <canvas> element", () => {
        const wrapper = shallow(<Canvas />)
        expect(wrapper.first().type()).toEqual("canvas")
    })
})