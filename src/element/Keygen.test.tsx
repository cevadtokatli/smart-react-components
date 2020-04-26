import React from "react"
import {shallow} from "enzyme"
import Keygen from "./Keygen"

describe("Keygen", () => {
    it("should render <keygen> element", () => {
        const wrapper = shallow(<Keygen />)
        expect(wrapper.first().type()).toEqual("keygen")
    })
})