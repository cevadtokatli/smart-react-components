import React from "react"
import mountTheme from "../test/mountTheme"
import useLinkMethods from "./UseLinkMethods"
import RouterHelper from "../helper/RouterHelper"
import RouterContext from "./RouterContext"

describe("UseLinkMethods", () => {
    let hook
    let wrapper

    history.push = () => {}

    const Component = () => {
        hook = useLinkMethods({to:"/foo"})
        return <a onClick={hook.click} />
    }

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

        wrapper = mountTheme(
            <RouterContext.Provider value={value}>
                <Component />
            </RouterContext.Provider>
        )
    })

    it("should call click method", () => {
        const spy = jest.spyOn(history, "push")
        wrapper.find("a").simulate("click")
        expect(spy).toHaveBeenCalled()
    })

    it("active should be falsy", () => {
        expect(hook.active).toBeFalsy()
    })

    it("activating should be falsy", () => {
        expect(hook.activating).toBeFalsy()
    })
})