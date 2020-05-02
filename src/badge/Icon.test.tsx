import React from "react"
import {shallow} from "enzyme"
import Icon from "./Icon"

describe("<Icon />", () => {
    it("should contain src-badge-icon class", () => {
        const wrapper = shallow(<Icon />)
        expect(wrapper.find(".src-badge-icon").exists()).toBe(true)
    })
})