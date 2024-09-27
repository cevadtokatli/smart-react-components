import { useEffect, useRef } from 'react'

const usePrevious = function<T>(value) {
  const previousRef = useRef<T>()

  useEffect(() => {
    previousRef.current = value
  }, [value])

  return previousRef.current
}

export default usePrevious
