import React from "react"
import renderTheme from "../test/renderTheme"
import List from "./List"
import Item from "./Item"

describe("<List />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <List>
                <Item>
                    <a href="/">Home</a>
                </Item>
                <Item>
                    <a href="/section/1">Section 1</a>
                </Item>
                <Item>
                    <a href="/section/1/a">Section 1-A</a>
                </Item>
            </List>
        )
        expect(wrapper).toMatchSnapshot()
    })
})