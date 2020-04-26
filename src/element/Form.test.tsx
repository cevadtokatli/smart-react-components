import React from "react"
import {shallow} from "enzyme"
import Form from "./Form"

describe("Form", () => {
    it("should render <form> element", () => {
        const wrapper = shallow(<Form />)
        expect(wrapper.first().type()).toEqual("form")
    })
})