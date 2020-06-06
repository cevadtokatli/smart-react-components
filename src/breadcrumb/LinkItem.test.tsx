import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import RouterHelper from "../helper/RouterHelper"
import RouterContext from "../router/RouterContext"
import LinkItem from "./LinkItem"

describe("<LinkItem />", () => {
    let children

    history.push = () => {}

    beforeEach(() => {
        const value = {
            state: {
                url: RouterHelper.setUrl("/"),
                newUrl: null,
                percentage: 0,
                key: null,
                cancelCallback: null,
                loaderModules: {}
            },
            dispatch: () => {}
        }

        children = (
            <RouterContext.Provider value={value}>
                <ul>
                    <LinkItem to="/">Breadcrumb Link</LinkItem>
                </ul>
            </RouterContext.Provider>
        )
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(children)
        expect(wrapper).toMatchSnapshot()
    })

    it("should not call click method", () => {
        const wrapper = mountTheme(children)
        const spy = jest.spyOn(history, "push")
        wrapper.find("a").simulate("click")
        expect(spy).not.toHaveBeenCalled()
    })

    it("should include active class", () => {
        const wrapper = mountTheme(children)
        expect(wrapper.find(".active").exists()).toBe(true)
    })

    it("should not include activating class", () => {
        const wrapper = mountTheme(children)
        expect(wrapper.find(".activating").exists()).toBe(false)
    })
})