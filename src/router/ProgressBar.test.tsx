import React from "react"
import renderTheme from "../test/renderTheme"
import RouterContext from "./RouterContext"
import RouterHelper from "../helper/RouterHelper"
import ProgressBar from "./ProgressBar"

describe("<ProgressBar />", () => {
    it("should match snapshot", () => {
        const value = {
            state: {
                url: null,
                newUrl: RouterHelper.setUrl("/"),
                percentage: 50,
                key: null,
                cancelCallback: null,
                loaderModules: {}
            },
            dispatch: () => {}
        }

        const wrapper = renderTheme(
            <RouterContext.Provider value={value}>
                <ProgressBar progressBarProps={{}} />
            </RouterContext.Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})