import React from "react"
import Loadable from "react-loadable"

const Detail = Loadable({
    loader: () => import("./components/Detail"),
    loading: () => <div />
})

export default [
    {
        path: "/:id([0-9]+)",
        Component: Detail,
        loaderModule: Detail
    }
]