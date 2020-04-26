import React from "react"
import {shallow} from "enzyme"
import Footer from "./Footer"

describe("Footer", () => {
    it("should render <footer> element", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.first().type()).toEqual("footer")
    })
})