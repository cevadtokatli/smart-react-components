import * as Action from "./action-types"
import RouterHelper from "../helper/RouterHelper"
import {setUrl, setNewUrl, setCancelCallback, setPercentage, setLoaderModule} from "./actions"

describe("actions", () => {
    it("should handle setUrl action", () => {
        expect(setUrl(RouterHelper.setUrl("/"))).toEqual({
            type: Action.SET_URL,
            payload: {
                "fullpath": "/",
                "params": ["", ""],
                "pathname": "/",
                "query": {
                    "": undefined,
                },
                "search": "",
            }
        })
    })

    it("should handle setNewUrl action", () => {
        expect(setNewUrl(RouterHelper.setUrl("/"), "1")).toEqual({
            type: Action.SET_NEW_URL,
            payload: {
                "fullpath": "/",
                "params": ["", ""],
                "pathname": "/",
                "query": {
                    "": undefined,
                },
                "search": "",
            },
            key: "1"
        })
    })

    it("should handle setCancelCallback action", () => {
        const callback = () => {}
        expect(setCancelCallback(callback, "1")).toEqual({
            type: Action.SET_CANCEL_CALLBACK,
            payload: callback,
            key: "1"
        })
    })

    it("should handle setPercentage action", () => {
        expect(setPercentage(50, "1")).toEqual({
            type: Action.SET_PERCENTAGE,
            payload: 50,
            key: "1"
        })
    })

    it("should handle setLoaderModule action", () => {
        const loaderModule = null
        expect(setLoaderModule(loaderModule, "/", false)).toEqual({
            type: Action.SET_LOADER_MODULE,
            module: loaderModule,
            path: "/",
            exact: false
        })
    })
})