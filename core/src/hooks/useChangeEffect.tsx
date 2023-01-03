import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

const useChangeEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const initial = useRef(false)

  useEffect(() => {
    if (!initial.current) {
      initial.current = true
    } else {
      return effect()
    }
  }, deps)
}

export default useChangeEffect
