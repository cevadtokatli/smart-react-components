export type Get = (
  match: Match,
  url: URL,
  setPercentage: (payload: number) => void,
  setCancelCallback: (payload: () => void) => void
) => Promise<void>

export interface Match {
  isExact: boolean
  key: string
  params: {
    [key: string]: string | number
  }
  path: string
  url: string
}

export type Path = string | RegExp

export interface RouteModule {
  children?: RouteModule[]
  module: () => Promise<any>
  path: Path
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
