import React from "react"
import {shallow} from "enzyme"
import Kbd from "./Kbd"

describe("Kbd", () => {
    it("should render <kbd> element", () => {
        const wrapper = shallow(<Kbd />)
        expect(wrapper.first().type()).toEqual("kbd")
    })
})