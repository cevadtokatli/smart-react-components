import { JSXChildren } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import reducer, { generateInitialState, setActivatingURL, setActiveURL, setCancelCallback, setPercentage } from '../reducer'
import RouterContext from '../RouterContext'
import RoutesContext from '../RoutesContext'
import { LazyModule, Match, RouteModule } from '../types'
import { collectLazyModules, generateURL, getFullpath } from '../util'

declare global {
  interface History {
    push: (to: string) => void
    redirect: (to: string, isNewPage?: boolean) => void
    replace: (to: string) => void
  }
}

export interface Props {
  children: JSXChildren
  params?: any
  progressBar?: JSX.Element
  routes: RouteModule[]
}

export const modules: object = {}

const ClientRouter: React.FC<Props> = ({ children, params, routes, progressBar }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState())

  const handleURLChange = () => {
    const url = generateURL(getFullpath())

    if (
      state.activatingURL?.fullpath === url.fullpath
      || (!state.activatingURL && state.activeURL.fullpath === url.fullpath)
    ) {
      return
    }

    (async function () {
      const lazyModules: LazyModule[] = []
      const modulesToInvokeGetMethods: Array<{ match: Match, module: LazyModule }> = []
      collectLazyModules(state.activeURL, url, routes, modules, lazyModules, modulesToInvokeGetMethods)

      if (lazyModules.length > 0) {
        await Promise.all(lazyModules.map(i => i()))
          .then(list => {
            for (const i in list) {
              modules[lazyModules[i] as any] = list[i]
            }
          })
      }

      if (modulesToInvokeGetMethods.length === 0) {
        dispatch(setActiveURL(url))
      } else {
        const key = new Date().getTime()
        dispatch(setActivatingURL({ key, url }))
        const _setPercentage = (value: number) => dispatch(setPercentage({ key, value }))
        const _setCancelCallback = (callback: () => void) => dispatch(setCancelCallback({ callback, key }))

        _setPercentage(10)

        for (const i in modulesToInvokeGetMethods) {
          await modules[modulesToInvokeGetMethods[i].module as any].get(
            modulesToInvokeGetMethods[i].match,
            url,
            _setPercentage,
            _setCancelCallback,
            params,
          )
        }

        _setPercentage(100)
      }
    }())
  }

  React.useEffect(() => {
    history.redirect = (to, isNewPage) => {
      if (isNewPage) {
        window.open(to, '_blank')
      } else {
        window.location.href = to
      }
    }
  }, [])

  React.useEffect(() => {
    history.push = to => {
      history.pushState({}, null, to)
      handleURLChange()
    }

    history.replace = to => {
      history.replaceState({}, null, to)
      handleURLChange()
    }

    addEventListener(window, ['popstate'], handleURLChange)

    return () => {
      removeEventListener(window, ['popstate'], handleURLChange)
    }
  }, [state.activeURL.fullpath, state.activatingURL?.fullpath])

  return (
    <RouterContext.Provider value={{ state, dispatch, modules }}>
      <RoutesContext.Provider value={routes}>
        { progressBar && React.cloneElement(progressBar, { value: state.percentage }) }
        { children }
      </RoutesContext.Provider>
    </RouterContext.Provider>
  )
}

export default ClientRouter
