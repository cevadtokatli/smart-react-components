import React from "react"
import {hydrate} from "react-dom"
import Loadable from "react-loadable"
import {Provider} from "react-redux"
import {ThemeProvider} from "styled-components"
import src from "smart-react-components/theme"
import {ClientRouter} from "smart-react-components/router"
import {ReduxStore} from "./types/redux"
import createStore from "./create-store"
import App from "./components/App"

declare global {
    interface Window {
        __INITIAL_STATE__?: ReduxStore
    }
}

Loadable.preloadReady().then(() => {
    const store = createStore(window.__INITIAL_STATE__)
    delete window.__INITIAL_STATE__

    hydrate(
        <ThemeProvider theme={{src}}>
            <Provider store={store}>
                <ClientRouter params={{store}}>
                    <App />
                </ClientRouter>
            </Provider>
        </ThemeProvider>,
        document.getElementById("app")
    )
})