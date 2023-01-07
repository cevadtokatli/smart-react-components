import { matchPath } from 'react-router'
import { LazyModule, Match, Path, RouteModule, URL } from '../types'

/**
 * Checks and find the active routes.
 * Calls get methods of the active routes.
 */
export const callGetMethods = (url: string, routes: RouteModule[], modules: object, params?: any) => new Promise<void>(async resolve => {
  const getMethods = []
  const activeURL = generateURL(url)
  const setPercentage = (value: number) => {}
  const setCancelCallback = (callback: () => void) => {}
  let curRoutes = routes

  while (curRoutes) {
    let route: RouteModule

    for (const i in curRoutes) {
      const match = generateMatch(url, curRoutes[i].path, false)
      if (match) {
        getMethods.push(
          modules[curRoutes[i].module as any].get.bind(
            null,
            match,
            activeURL,
            setPercentage,
            setCancelCallback,
          ),
        )
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
 * Checks the given routes and finds the active route.
 * Checks if the active route needs the loader get method to be run.
 * Calls the method recursively for the active method children.
 */
export const collectLazyModules = (
  activeURL: URL,
  activatingURL: URL,
  routes: RouteModule[],
  modules: object,
  lazyModules: LazyModule[],
  modulesToInvokeGetMethods: Array<{ match: Match, module: LazyModule }>,
) => {
  for (const i in routes) {
    const item = routes[i]
    const activatingMatch = generateMatch(activatingURL.pathname, item.path, false)

    if (activatingMatch) {
      if (!modules[item.module as any]) {
        lazyModules.push(item.module)
      }

      const activeMatch = generateMatch(activeURL.pathname, item.path, false)
      if (activeMatch?.key !== activatingMatch.key) {
        modulesToInvokeGetMethods.push({ match: activatingMatch, module: item.module })
      }

      if (item.children) {
        collectLazyModules(activeURL, activatingURL, item.children, modules, lazyModules, modulesToInvokeGetMethods)
      }

      return
    }
  }
}

/**
 * Retuns the fullpath.
 */
export const getFullpath = () => window.location.pathname + window.location.search

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
 * Loads the modules of the given routes.
 * Calls the method recursively for the routes children.
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
