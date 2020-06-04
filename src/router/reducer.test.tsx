import RouterHelper from "../helper/RouterHelper"
import * as Action from "./action-types"
import reducer from "./reducer"

describe("reducer", () => {
    let initialState

    beforeEach(() => {
        initialState = {
            url: RouterHelper.setUrl("/"),
            newUrl: null,
            key: null,
            cancelCallback: null,
            percentage: 0,
            loaderModules: {}
        }
    })

    it("should provide SET_URL", () => {
        const action = {
            type: Action.SET_URL,
            payload: RouterHelper.setUrl("/")
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            url: action.payload,
            newUrl: null,
            key: null,
            cancelCallback: null,
            percentage: 0
        })
    })

    it("should provide SET_NEW_URL", () => {
        const action = {
            type: Action.SET_NEW_URL,
            payload: RouterHelper.setUrl("/"),
            key: "1"
        }
        
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            newUrl: action.payload,
            key: action.key,
            cancelCallback: null,
            percentage: 0
        })
    })

    it("should provide SET_CANCEL_CALLBACK", () => {
        initialState.key = "1"
        const action = {
            type: Action.SET_CANCEL_CALLBACK,
            payload: () => {},
            key: "1"
        }
        
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            cancelCallback: action.payload
        })
    })

    it("should provide SET_PERCENTAGE", () => {
        initialState.key = "1"
        const action = {
            type: Action.SET_PERCENTAGE,
            payload: 50,
            key: "1"
        }
        
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            percentage: action.payload
        })
    })

    it("should provide SET_LOADER_MODULE", () => {
        const action = {
            type: Action.SET_LOADER_MODULE,
            module: {
                default: null
            },
            path: "/",
            exact: false
        }
        
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loaderModules: {
                [action.path]: {
                    module: action.module,
                    exact: action.exact
                }
            }
        })
    })
})