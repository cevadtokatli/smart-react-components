import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
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

  const getComponent = () => {
    if (!routes) {
      return null
    }

    if (children) {
      return (
        <>
          { routes.map(i => (
            <React.Fragment key={String(i.path)}>
              { children({
                children: React.createElement(RouteItem, { route: i }),
                match: generateMatch(router.activeURL.fullpath, i.path, false),
                url: router.activeURL,
              })}
            </React.Fragment>
          )) }
        </>
      )
    } else {
      let item: JSX.Element | null = null

      for (const i in routes) {
        const match = generateMatch(router.activeURL.fullpath, routes[i].path, false)
        if (match) {
          item = <RouteItem key={String(routes[i].path)} route={routes[i]} props={{ match, url: router.activeURL }} />
          break
        }
      }

      return item
    }
  }

  const [component, setComponent] = React.useState<JSX.Element | null>(() => getComponent())

  useChangeEffect(() => setComponent(getComponent()), [children, router.activeURL.fullpath])

  return component
}

export default Routes
