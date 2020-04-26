import React from "react"
import {shallow} from "enzyme"
import Datalist from "./Datalist"

describe("Datalist", () => {
    it("should render <datalist> element", () => {
        const wrapper = shallow(<Datalist />)
        expect(wrapper.first().type()).toEqual("datalist")
    })
})