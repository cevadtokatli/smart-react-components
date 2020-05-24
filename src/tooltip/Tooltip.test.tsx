import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import Tooltip from "./Tooltip"
import DOMHelper from "../helper/DOMHelper"

describe("<Tooltip />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <Tooltip>
                <button>Toggle element</button>
                <span>Tooltip element</span>
            </Tooltip>
        )
        expect(wrapper).toMatchSnapshot()
    })

    describe("desktop", () => {
        let wrapper

        beforeAll(() => {
            wrapper = mountTheme(
                <Tooltip showAnimation={false} hideAnimation={false}>
                    <button
                        onMouseOver={e => (e.target as HTMLElement).dispatchEvent(new Event("mouseover"))}
                        onMouseLeave={e => (e.target as HTMLElement).dispatchEvent(new Event("mouseleave"))}
                    >Toggle element</button>
                    <span>Tooltip element</span>
                </Tooltip>
            )
        })

        it("should render tooltip when mouseover is triggered", () => {
            wrapper.find("button").simulate("mouseover")
            expect(wrapper.find("span").exists()).toBe(true)
        })

        it("should not render tooltip when mouseleave is triggered", done => {
            wrapper.find("button").simulate("mouseleave")
            setTimeout(() => {
                wrapper.update()
                expect(wrapper.find("span").exists()).toBe(false)
                done()
            }, 0)
        })
    })

    describe("mobile", () => {
        let wrapper

        beforeAll(() => {
            DOMHelper.isMobile = true
            wrapper = mountTheme(
                <Tooltip showAnimation={false} hideAnimation={false}>
                    <button onClick={e => (e.target as HTMLElement).click()}>Toggle element</button>
                    <span>Tooltip element</span>
                </Tooltip>
            )
        })

        it("should render tooltip when clicked", () => {
            wrapper.find("button").simulate("click")
            expect(wrapper.find("span").exists()).toBe(true)
        })

        it("should not render tooltip when clicked again", done => {
            wrapper.find("button").simulate("click")
            setTimeout(() => {
                wrapper.update()
                expect(wrapper.find("span").exists()).toBe(false)
                done()
            }, 0)
        })
    })
})