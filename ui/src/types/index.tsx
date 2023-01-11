export type ResponsiveProp<K extends string, T> = {
  [key in K as K]: T
} & {
  [key in K as `${K}Sm` | `${K}Md` | `${K}Lg` | `${K}Xl`]?: T
}
