export type ContentElement = string | JSXChildren

export type JSXChildren = JSX.Element | JSX.Element[]

export interface JSXElementProps {
  [key: string]: any
}

export interface NestedObject<T> {
  [key: string]: T | NestedObject<T>
}

export type Partial<T> = {
  [key in keyof T]?: T[key] extends object ? Partial<T[key]> : T[key]
}

export type ResponsiveProps<T> =
{ [key in keyof T as key]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Sm` : never]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Md` : never]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Lg` : never]?: T[key] }
& { [key in keyof T as key extends string ? `${key}Xl` : never]?: T[key] }

export interface Size<T> {
  small: T
  medium: T
  large: T
  [key: string]: T
}

export type SizeProp = 'small' | 'medium' | 'large' | (string & {})

export type Value = string | number
