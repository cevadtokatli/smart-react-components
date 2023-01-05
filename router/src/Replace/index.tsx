import React from 'react'

export interface Props {
  to: string
}

const Replace: React.FC<Props> = ({ to }) => {
  React.useEffect(() => {
    history.replace(to)
  }, [to])

  return null
}

export default Replace
