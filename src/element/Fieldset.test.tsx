import React from "react"
import {shallow} from "enzyme"
import Fieldset from "./Fieldset"

describe("Fieldset", () => {
    it("should render <fieldset> element", () => {
        const wrapper = shallow(<Fieldset />)
        expect(wrapper.first().type()).toEqual("fieldset")
    })
})