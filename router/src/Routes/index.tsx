import React from 'react'
import RouteItem from '../RouteItem'
import RouterContext from '../RouterContext'
import RoutesContext from '../RoutesContext'
import { Match, URL } from '../types'
import { generateMatch } from '../util'

export interface Props {
  children?: (params: { children: JSX.Element, match: Match, url: URL }) => JSX.Element
}

const Routes: React.FC<Props> = ({ children }) => {
  const router = React.useContext(RouterContext).state
  const routes = React.useContext(RoutesContext)

  const component = React.useMemo(() => {
    if (!routes) {
      return null
    }

    if (children) {
      return (
        <>
          { routes.map(i => (
            <RoutesContext.Provider key={String(i.path)} value={i.children}>
              { children({
                children: React.createElement(RouteItem, { route: i }),
                match: generateMatch(router.activeURL.pathname, i.path, false),
                url: router.activeURL,
              })}
            </RoutesContext.Provider>
          )) }
        </>
      )
    } else {
      let item: JSX.Element | null = null

      for (const i in routes) {
        const match = generateMatch(router.activeURL.pathname, routes[i].path, false)
        if (match) {
          item = (
            <RoutesContext.Provider key={String(routes[i].path)} value={routes[i].children}>
              <RouteItem key={match.key} route={routes[i]} props={{ match, url: router.activeURL }} />
            </RoutesContext.Provider>
          )
          break
        }
      }

      return item
    }
  }, [children, router.activeURL.fullpath])

  return component
}

export default Routes
