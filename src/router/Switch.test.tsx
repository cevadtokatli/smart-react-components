import React from "react"
import {mount} from "enzyme"
import ServerRouter from "./ServerRouter"
import Switch from "./Switch"
import Route from "./Route"

describe("<Switch />", () => {
    it("should render component at / path ", () => {
        const wrapper = mount(
            <ServerRouter url="/">
                <Switch>
                    <Route path="/" Component={() => <div id="home" />} />
                    <Route path="*" Component={() => <div id="not-found" />} />
                </Switch>
            </ServerRouter>
        )
        expect(wrapper.find("#home").exists()).toBe(true)
    })

    it("should render component at * path ", () => {
        const wrapper = mount(
            <ServerRouter url="/foo">
                <Switch>
                    <Route path="/" exact={true} Component={() => <div id="home" />} />
                    <Route path="*" Component={() => <div id="not-found" />} />
                </Switch>
            </ServerRouter>
        )
        expect(wrapper.find("#not-found").exists()).toBe(true)
    })
})