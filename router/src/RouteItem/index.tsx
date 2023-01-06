import React from 'react'
import RouterContext from '../RouterContext'
import { Match, RouteModule, URL } from '../types'

export interface Props {
  props?: {
    match: Match | null
    url: URL
  }
  route: RouteModule
}

const RouteItem: React.FC<Props> = ({ props = {}, route }) => {
  const { modules } = React.useContext(RouterContext)
  const [component, setComponent] = React.useState<JSX.Element | null>(() => {
    if (modules[route.module as any]) {
      return React.createElement(modules[route.module as any].default, props as object)
    }

    return null
  })

  React.useEffect(() => {
    if (!component) {
      route.module()
        .then(module => {
          modules[route.module as any] = module
          setComponent(React.createElement(module.default, props as object))
        })
    }
  }, [])

  return component
}

export default RouteItem
