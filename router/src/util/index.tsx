import { matchPath } from 'react-router'
import { Match, Path, URL } from '../types'

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
