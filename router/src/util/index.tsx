import { matchPath } from 'react-router'
import { modules } from '../ClientRouter'
import { CancelCallback, LazyModule, Match, Path, RouteModule, URL } from '../types'

/**
 * Checks and find the active routes.
 * Calls the get methods of the active routes.
 */
export const callGetMethods = (url: string, routes: RouteModule[], modules: object, params?: any) => new Promise<void>(async resolve => {
  const getMethods = []
  const activeURL = generateURL(url)
  const setPercentage = (value: number) => {}
  const setCancelCallback = (callback: CancelCallback) => {}
  let curRoutes = routes

  while (curRoutes) {
    let route: RouteModule

    for (const i in curRoutes) {
      const match = generateMatch(activeURL.pathname, curRoutes[i].path, false)
      if (match) {
        const { get } = modules[curRoutes[i].module as any]
        if (get) {
          getMethods.push(
            get.bind(
              null,
              match,
              activeURL,
              setPercentage,
              setCancelCallback,
              params,
            ),
          )
        }

        route = curRoutes[i]

        break
      }
    }

    curRoutes = route?.children
  }

  for (const i in getMethods) {
    await getMethods[i]()
  }

  resolve()
})

/**
 * Retuns the fullpath.
 */
export const getFullpath = () => window.location.pathname + window.location.search + window.location.hash

/**
 * Returns the pathname.
 */
export const getPathname = () => window.location.pathname

/**
 * Parses path and generates match object.
 */
export const generateMatch = (pathname: string, path: Path, isExact: boolean): Match | null => {
  const match = matchPath(pathname, { path, exact: isExact })

  if (match) {
    return {
      isExact: match.isExact,
      key: JSON.stringify(match.params),
      params: match.params,
      path: match.path,
      url: pathname,
    }
  }

  return null
}

/**
 * Creates URL object by parsing the fullpath.
 */
export const generateURL = (fullpath: string): URL => {
  let [pathname, search] = fullpath.split('#')[0].split('?')
  search ??= ''

  const params = pathname.split('/').filter(i => !!i)

  const query = {}
  search.split('&').forEach(item => {
    if (item) {
      const [key, value] = item.split('=')
      query[key] = value
    }
  })

  return {
    fullpath,
    params,
    pathname,
    search,
    query,
  }
}

/**
 * Checks the given routes and finds the active routes.
 * Checks if the active routes need the loader get methods to be run.
 * Loads the modules of the active routes.
 */
export const loadModules = (
  activeURL: URL,
  activatingURL: URL,
  routes: RouteModule[],
  modules: object,
) => new Promise<Array<{ match: Match, module: LazyModule }>>(async resolve => {
  let curRoutes = routes
  const lazyModules: LazyModule[] = []
  const modulesToInvokeGetMethods: Array<{ match: Match, module: LazyModule }> = []

  while (curRoutes) {
    let route: RouteModule

    for (const i in curRoutes) {
      const item = curRoutes[i]
      const activatingMatch = generateMatch(activatingURL.pathname, item.path, false)

      if (activatingMatch) {
        if (!modules[item.module as any]) {
          lazyModules.push(item.module)
        }

        const activeMatch = generateMatch(activeURL.pathname, item.path, false)
        const activeSearch = item.searchKeys?.map(key => activeURL.query[key] ?? item.defaultSearchValues?.[key]).filter(key => key).join('&')
        const activatingSearch = item.searchKeys?.map(key => activatingURL.query[key] ?? item.defaultSearchValues?.[key]).filter(key => key).join('&')

        if (
          activeMatch?.key !== activatingMatch.key
          || activeSearch !== activatingSearch
        ) {
          modulesToInvokeGetMethods.push({ match: activatingMatch, module: item.module })
        }

        route = item

        break
      }
    }

    curRoutes = route?.children
  }

  await Promise.all(lazyModules.map(i => i()))
    .then(list => {
      for (const i in list) {
        modules[lazyModules[i] as any] = list[i]
      }
    })

  resolve(modulesToInvokeGetMethods)
})

/**
 * Loads the modules of the active routes.
 */
export const loadModulesOnClient = (routes: RouteModule[]) => new Promise<void>(async resolve => {
  let curRoutes = routes
  const lazyModules: LazyModule[] = []

  while (curRoutes) {
    let route: RouteModule

    for (const i in curRoutes) {
      if (generateMatch(getPathname(), curRoutes[i].path, false)) {
        lazyModules.push(curRoutes[i].module)
        route = curRoutes[i]
        break
      }
    }

    curRoutes = route?.children
  }

  await Promise.all(lazyModules.map(i => i()))
    .then(list => {
      for (const i in list) {
        modules[lazyModules[i] as any] = list[i]
      }
    })

  resolve()
})

/**
 * Loads the modules of the given routes.
 */
export const loadModulesOnServer = (routes: RouteModule[]) => new Promise<object>(async resolve => {
  let modules = {}

  for (const i in routes) {
    if (!modules[routes[i].module as any]) {
      modules[routes[i].module as any] = await routes[i].module()
    }

    if (routes[i].children) {
      modules = {
        ...modules,
        ...(await loadModulesOnServer(routes[i].children)),
      }
    }
  }

  resolve(modules)
})
