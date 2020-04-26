export interface ColorObject {
    color: number[]
    valpha: number
    isDark: () => boolean
    isLight: () => boolean
    hex: () => ColorObject
    rgb: () => ColorObject
    hsl: () => ColorObject
    darken: (value:number) => ColorObject
    alpha: (value:number) => ColorObject
}

export interface Coordinator<T> {
    x: T
    y: T
}