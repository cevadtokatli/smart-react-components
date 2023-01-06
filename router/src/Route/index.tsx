import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import React from 'react'
import RouterContext from '../RouterContext'
import { Match, Path, URL } from '../types'
import { generateMatch } from '../util'

export interface Props {
  children: JSX.Element | ((params: { match: Match | null, url: URL }) => JSX.Element)
  isExact?: boolean
  path: Path
}

const Route: React.FC<Props> = ({ children, isExact, path }) => {
  const rctx = React.useContext(RouterContext).state
  const [match, setMatch] = React.useState(() => generateMatch(rctx.activeURL.pathname, path, isExact))

  useChangeEffect(() => setMatch(generateMatch(rctx.activeURL.pathname, path, isExact)), [rctx.activeURL])

  if (typeof children !== 'function' && match) {
    return (
      <React.Fragment key={match.key}>
        { React.cloneElement(children, { match, url: rctx.activeURL }) }
      </React.Fragment>
    )
  }

  if (typeof children === 'function') {
    return children({ match, url: rctx.activeURL })
  }

  return null
}

export default Route
