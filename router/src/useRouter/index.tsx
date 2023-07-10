import { useContext } from 'react'
import RouterContext from '../RouterContext'

export default () => {
  const router = useContext(RouterContext)

  return {
    activatingURL: router.state.activatingURL,
    activeURL: router.state.activeURL,
    percentage: router.state.percentage,
    push: router.push,
    redirect: router.redirect,
    replace: router.replace,
  }
}
