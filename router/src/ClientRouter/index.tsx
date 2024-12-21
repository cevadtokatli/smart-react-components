import { JSXChildren } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import reducer, { generateInitialState, setActivatingURL, setActiveURL, setCancelCallback, setPercentage } from '../reducer'
import RouterContext from '../RouterContext'
import RoutesContext from '../RoutesContext'
import { CancelCallback, RouteModule } from '../types'
import { generateURL, getFullpath, loadModules } from '../util'

export interface Props {
  children: JSXChildren
  isHashRouter?: boolean
  fallback?: JSX.Element
  params?: any
  progressBar?: JSX.Element
  routes: RouteModule[]
}

export const modules: object = {}

const ClientRouter: React.FC<Props> = ({ children, fallback, isHashRouter, params, routes, progressBar }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState(getFullpath(isHashRouter), isHashRouter))

  const handleURLChange = () => {
    const url = generateURL(getFullpath(isHashRouter))

    if (
      state.activatingURL?.fullpath === url.fullpath
      || (!state.activatingURL && state.activeURL.fullpath === url.fullpath)
    ) {
      return
    }

    (async function () {
      const modulesToInvokeGetMethods = await loadModules(state.activeURL, url, routes, modules)

      if (modulesToInvokeGetMethods.length === 0) {
        dispatch(setActiveURL(url))
      } else {
        const key = new Date().getTime()
        dispatch(setActivatingURL({ key, url }))
        const _setPercentage = (value: number) => dispatch(setPercentage({ key, value }))
        const _setCancelCallback = (callback: CancelCallback) => dispatch(setCancelCallback({ callback, key }))

        _setPercentage(10)

        for (const i in modulesToInvokeGetMethods) {
          await modules[modulesToInvokeGetMethods[i].module as any].get?.(
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

  const redirect = React.useCallback((to, isNewPage) => {
    if (isNewPage) {
      window.open(to, '_blank')
    } else {
      window.location.href = isHashRouter ? `${window.location.pathname}${window.location.search}#${to}` : to
    }
  }, [])

  const push = React.useCallback((to: string) => {
    const url = isHashRouter ? `${window.location.pathname}${window.location.search}#${to}` : to
    history.pushState({}, null, url)
    handleURLChange()
  }, [isHashRouter, state.activeURL.fullpath, state.activatingURL?.fullpath])

  const replace = React.useCallback((to: string) => {
    const url = isHashRouter ? `${window.location.pathname}${window.location.search}#${to}` : to
    history.replaceState({}, null, url)
    handleURLChange()
  }, [isHashRouter, state.activeURL.fullpath, state.activatingURL?.fullpath])

  React.useEffect(() => {
    addEventListener(window, ['popstate'], handleURLChange)

    return () => {
      removeEventListener(window, ['popstate'], handleURLChange)
    }
  }, [state.activeURL.fullpath, state.activatingURL?.fullpath])

  return (
    <RouterContext.Provider value={{ fallback, state, dispatch, modules, push, redirect, replace }}>
      <RoutesContext.Provider value={routes}>
        { progressBar && React.cloneElement(progressBar, { value: state.percentage }) }
        { children }
      </RoutesContext.Provider>
    </RouterContext.Provider>
  )
}

ClientRouter.defaultProps = {
  isHashRouter: false,
}

export default ClientRouter
