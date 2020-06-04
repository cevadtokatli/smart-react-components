import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import RouterHelper from "../helper/RouterHelper"
import RouterContext from "./RouterContext"
import Link from "./Link"

describe("<Link />", () => {
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
                <Link to="/link">Link</Link>
            </RouterContext.Provider>
        )
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(children)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call click method", () => {
        const wrapper = mountTheme(children)
        const spy = jest.spyOn(history, "push")
        wrapper.find("a").simulate("click")
        expect(spy).toHaveBeenCalled()
    })
})