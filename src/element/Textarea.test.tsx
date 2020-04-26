import React from "react"
import {shallow} from "enzyme"
import Textarea from "./Textarea"

describe("Textarea", () => {
    it("should render <textarea> element", () => {
        const wrapper = shallow(<Textarea />)
        expect(wrapper.first().type()).toEqual("textarea")
    })
})