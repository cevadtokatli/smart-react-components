import React from "react"
import {shallow} from "enzyme"
import Header from "./Header"

describe("Header", () => {
    it("should render <header> element", () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.first().type()).toEqual("header")
    })
})