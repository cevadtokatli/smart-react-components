import React from "react"
import mountTheme from "../test/mountTheme"
import TransitionSwitch from "./TransitionSwitch"
import Transition from "./Transition"

describe("<TransitionSwitch />", () => {
    it("should render the active component", () => {
        const wrapper = mountTheme(
            <TransitionSwitch active="foo">
                <Transition value="foo">
                    <div id="foo" />
                </Transition>
                <Transition value="bar">
                    <div id="bar" />
                </Transition>
            </TransitionSwitch>
        )
        expect(wrapper.find("#foo").exists()).toBe(true)
    })
})