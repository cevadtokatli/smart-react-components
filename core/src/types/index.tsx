import { Dispatch, SetStateAction } from 'react'

export type ContentElement = string | JSXChildren

export interface Coordinator<T> {
  x: T
  y: T
}

export type JSXChildren = JSX.Element | JSX.Element[]

export interface JSXElementProps {
  [key: string]: any
}

export interface NestedObject<T> {
  [key: string]: T | NestedObject<T>
}

export type PaletteProp = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | (string & {})

export type Partial<T> = {
  [key in keyof T]?: T[key] extends object ? Partial<T[key]> : T[key]
}

export type ResponsiveProp<K extends string, T> = {
  [key in K as K]: T
} & {
  [key in K as `${K}Sm` | `${K}Md` | `${K}Lg` | `${K}Xl`]?: T
}

export type ResponsiveProps<T> =
{ [key in keyof T as key]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Sm` : never]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Md` : never]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Lg` : never]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Xl` : never]?: T[key] }

export type SetState<T> = ((value: T) => void) | Dispatch<SetStateAction<T>>

export interface Size<T> {
  small: T
  medium: T
  large: T
  [key: string]: T
}

export type SizeProp = 'small' | 'medium' | 'large' | (string & {})

export type SizeProps = Partial<ResponsiveProp<'size', SizeProp>>

export type TimingFunction = 'cubic-bezier()' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'linear' | 'step-end' | 'step-start' | 'steps()' | (string & {})

export type Value = string | number
