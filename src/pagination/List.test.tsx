import React from "react"
import renderTheme from "../test/renderTheme"
import List from "./List"
import Item from "./Item"

describe("<List />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <List>
                <Item>
                    <a href="/1">1</a>
                </Item>
                <Item>
                    <a href="/2">2</a>
                </Item>
                <Item>
                    <a href="/3">3</a>
                </Item>
            </List>
        )
        expect(wrapper).toMatchSnapshot()
    })
})