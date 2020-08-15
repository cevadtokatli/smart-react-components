import * as Action from "./action-types"
import {Url, CancelCallback, LoaderModule} from "../types/router"

export const setUrl = (url:Url) => ({
    type: Action.SET_URL,
    payload: url
})

export const setNewUrl = (newUrl:Url, key:string) => ({
    type: Action.SET_NEW_URL,
    payload: newUrl,
    key
})

export const setCancelCallback = (callback:CancelCallback, key:string) => ({
    type: Action.SET_CANCEL_CALLBACK,
    payload: callback,
    key
})

export const setPercentage = (percentage:number, key:string) => ({
    type: Action.SET_PERCENTAGE,
    payload: percentage,
    key
})

export const setLoaderModule = (loaderModule:LoaderModule, path:string, exact:boolean) => ({
    type: Action.SET_LOADER_MODULE,
    module: loaderModule || null,
    path,
    exact
})