import React from "react"
import renderTheme from "../test/renderTheme"
import Group from "./Group"
import Button from "./Button"

describe("<Group />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <Group>
                <Button>Button-1</Button>
                <Button>Button-2</Button>
                <Button>Button-3</Button>
            </Group>
        )
        expect(wrapper).toMatchSnapshot()
    })
})