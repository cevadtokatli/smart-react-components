import { JSXChildren } from '@smart-react-components/core/types'
import React from 'react'
import reducer, { generateInitialState } from '../reducer'
import RouterContext from '../RouterContext'
import RoutesContext from '../RoutesContext'
import { RouteModule } from '../types'

export interface Props {
  children: JSXChildren
  routes: RouteModule[]
  url: string
}

const ServerRouter: React.FC<Props> = ({ children, routes, url }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState(url))
  const modules = React.useRef<object>({}).current

  return (
    <RouterContext.Provider value={{ state, dispatch, modules }}>
      <RoutesContext.Provider value={routes}>
        { children }
      </RoutesContext.Provider>
    </RouterContext.Provider>
  )
}

export default ServerRouter
