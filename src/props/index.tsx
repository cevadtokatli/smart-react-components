import React from "react"
import {Theme} from "../theme"

export type ElementPropValueMethod = (value:any, theme:Theme) => string

// Element Prop Value
export type EPV<T> = T|[T, boolean]

export type JSXChild = string|JSX.Element

export type JSXChildren = JSXChild|JSXChild[]

export type Value = string|number

export type ValueMix = Value|Value[]

export type SetValue<T> = ((value:T) => void)|React.Dispatch<React.SetStateAction<T>>

export interface ThemeVariable<T> {
    [key:string]: T
}

export interface JSXElementProps {
    [key:string]: any
}

export interface Keys {
    [key:string]: string|ElementPropValueMethod
}