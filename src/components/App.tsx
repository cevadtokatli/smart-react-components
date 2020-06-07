import React from "react"
import {Route} from "smart-react-components/router"
import GlobalStyle from "./GlobalStyle"
import List from "./List"
import routes from "../routes"

export default () => (
    <main>
        <GlobalStyle />
        <List />
        {routes.map(item => <Route key={item.path} path={item.path} Component={item.Component} loaderModule={item.loaderModule} />)}
    </main>
)