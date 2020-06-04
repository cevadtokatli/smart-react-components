import React from "react"
import {mount} from "enzyme"
import ServerRouter from "./ServerRouter"
import Route from "./Route"

describe("<Route />", () => {
    it("should render component", () => {
        const wrapper = mount(
            <ServerRouter url="/">
                <Route path="/" Component={() => <div />} />
            </ServerRouter>
        )
        expect(wrapper.find("div").exists()).toBe(true)
    })

    it("should not render component", () => {
        const wrapper = mount(
            <ServerRouter url="/">
                <Route path="/foo" Component={() => <div />} />
            </ServerRouter>
        )
        expect(wrapper.find("div").exists()).toBe(false)
    })

    it("should call render method", () => {
        const render = jest.fn()
        mount(
            <ServerRouter url="/">
                <Route path="/foo" render={render} />
            </ServerRouter>
        )
        expect(render).toHaveBeenCalled()
    })
})