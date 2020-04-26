import React from "react"
import {shallow} from "enzyme"
import Article from "./Article"

describe("Article", () => {
    it("should render <article> element", () => {
        const wrapper = shallow(<Article />)
        expect(wrapper.first().type()).toEqual("article")
    })
})