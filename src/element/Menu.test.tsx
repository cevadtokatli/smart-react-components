import React from "react"
import {shallow} from "enzyme"
import Menu from "./Menu"

describe("Menu", () => {
    it("should render <menu> element", () => {
        const wrapper = shallow(<Menu />)
        expect(wrapper.first().type()).toEqual("menu")
    })
})