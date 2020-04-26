import React from "react"
import {shallow} from "enzyme"
import Tfoot from "./Tfoot"

describe("Tfoot", () => {
    it("should render <tfoot> element", () => {
        const wrapper = shallow(<Tfoot />)
        expect(wrapper.first().type()).toEqual("tfoot")
    })
})