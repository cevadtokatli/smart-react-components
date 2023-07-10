import React from 'react'
import useRouter from '../useRouter'

export interface Props {
  to: string
}

const Push: React.FC<Props> = ({ to }) => {
  const { push } = useRouter()

  React.useEffect(() => {
    push(to)
  }, [to])

  return null
}

export default Push
