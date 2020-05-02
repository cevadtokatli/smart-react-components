import React from "react"
import {shallow} from "enzyme"
import Text from "./Text"

describe("<Text />", () => {
    it("should contain src-badge-text class", () => {
        const wrapper = shallow(<Text />)
        expect(wrapper.find(".src-badge-text").exists()).toBe(true)
    })
})