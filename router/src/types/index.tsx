export type CancelCallback = () => void

export type LazyModule = () => Promise<any>

export interface Match {
  isExact: boolean
  key: string
  params: {
    [key: string]: string
  }
  path: string
  url: string
}

export type Path = string | RegExp

export interface RouteModule {
  children?: RouteModule[]
  module: LazyModule
  path: Path
  searchKeys?: string[]
  defaultSearchValues?: {
    [key: string]: string
  }
}

export interface URL {
  fullpath: string
  params: string[]
  pathname: string
  search: string
  query: {
    [key: string]: string
  }
}
