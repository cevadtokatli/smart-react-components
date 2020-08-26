import RouterHelper from "../helper/RouterHelper"
import {ReducerState} from "../types/router"
import * as Action from "./action-types"

export const getInitialState = (url=RouterHelper.getUrl()): ReducerState => ({
    url: RouterHelper.setUrl(url),
    newUrl: null,
    key: null,
    cancelCallback: null,
    percentage: 0,
    loaderModules: {}
})

const reducer = (state:ReducerState, action): ReducerState => {
    switch(action.type) {
        case Action.SET_URL:
            return {
                ...state,
                url: action.payload,
                newUrl: null,
                key: null,
                cancelCallback: null,
                percentage: 0
            }
        case Action.SET_NEW_URL:
            if(state.cancelCallback)
                state.cancelCallback()

            return {
                ...state,
                newUrl: action.payload,
                key: action.key,
                cancelCallback: null,
                percentage: 0
            }
        case Action.SET_CANCEL_CALLBACK:
            return {
                ...state,
                cancelCallback: state.key == action.key ? action.payload : state.cancelCallback
            }
        case Action.SET_PERCENTAGE:
            if(state.key == action.key)
                return action.payload == 100 ? reducer(state, {type:Action.SET_URL,payload:state.newUrl}) : {...state,percentage:action.payload}
            else
                return state
        case Action.SET_LOADER_MODULE:
            return {
                ...state,
                loaderModules: {
                    ...state.loaderModules,
                    [action.path]: {
                        module: action.module,
                        exact: action.exact,
                        searchKeys: action.searchKeys
                    }
                }
            }
        default:
            throw new Error()
    }
}

export default reducer