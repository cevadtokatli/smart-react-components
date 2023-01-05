import React from 'react'

export interface Props {
  to: string
}

const Push: React.FC<Props> = ({ to }) => {
  React.useEffect(() => {
    history.push(to)
  }, [to])

  return null
}

export default Push
