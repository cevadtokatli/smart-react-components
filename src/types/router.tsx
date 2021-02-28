import React from "react"
import Loadable from "react-loadable"
import {match as Match} from "react-router"

export type Path = string|RegExp

export interface Url {
    pathname: string
    search: string
    fullpath: string
    params: string[]
    query: {
        [key:string]: string
    }
}

export type CancelCallback = () => void

export type LoaderMethod = (match:Match, url:Url, setPercentage:((payload:number) => void), setCancelCallback:((payload:CancelCallback) => void), params?:any) => Promise<void>

export type LoaderModule = Loadable.LoadableComponent

export interface PreloadModule {
    default: {
        get: LoaderMethod
    }
}

export interface ReducerState {
    url: Url
    newUrl: Url
    key: string
    cancelCallback: CancelCallback
    percentage: number
}

export interface RouterContextValue {
    state: ReducerState
    dispatch: React.Dispatch<any>
}

export interface RouteProps {
    path: Path
    exact?: boolean
    Component?: React.ComponentType<any>
    render?: (match:Match, url:Url) => JSX.Element|JSX.Element[]
    loaderModule?: LoaderModule
    children?: RouteProps[]
    searchKeys?: string[]
    defaultSearchValues?: {
        [key: string]: string
    }
}

export interface RouteMatch extends Match {
    key: string
    params: {
        [key:string]: string
    }
}

export interface RouteComponentProps {
    url: Url
    match: RouteMatch
}