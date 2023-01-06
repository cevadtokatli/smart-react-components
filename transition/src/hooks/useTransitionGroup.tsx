import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Value } from '@smart-react-components/core/types'
import { useState } from 'react'

interface Props {
  afterHide?: (child: JSX.Element) => void | null
  children: JSX.Element[]
}

interface Return {
  elements: JSX.Element[]
  handleAfterHide: (child: JSX.Element) => void
  keys: Value[]
}

const useTransitionGroup = ({ afterHide, children }: Props): Return => {
  const [elements, setElements] = useState<JSX.Element[]>(() => children)
  const [addedKeys, setAddedKeys] = useState<Value[]>(() => [])
  const [removedKeys, setRemovedKeys] = useState<Value[]>(() => [])

  useChangeEffect(() => {
    const currentKeys = elements.map(i => i.key)
    const nextElements = [...children]
    const nextKeys = children.map(i => i.key)
    const nextAddedKeys = []
    const nextRemovedKeys = []

    nextElements.forEach(element => {
      if (!currentKeys.includes(element.key)) {
        nextAddedKeys.push(element.key)
      }
    })

    elements.forEach((element, index) => {
      if (!nextKeys.includes(element.key)) {
        nextRemovedKeys.push(element.key)
        nextElements.splice(index, 0, element)
      }
    })

    setElements(nextElements)

    if (nextAddedKeys.length > 0) {
      setAddedKeys([...addedKeys, ...nextAddedKeys])
    }

    if (nextRemovedKeys.length > 0) {
      setRemovedKeys([...removedKeys, ...nextRemovedKeys])
    }
  }, [children])

  useChangeEffect(() => {
    if (addedKeys.length > 0) {
      setAddedKeys([])
    }
  }, [addedKeys])

  const handleAfterHide = (child: JSX.Element) => {
    setRemovedKeys(removedKeys.filter(k => k !== child.key))
    setElements(elements.filter(e => e.key !== child.key))
    afterHide?.(child)
  }

  return {
    elements,
    handleAfterHide,
    keys: [...addedKeys, ...removedKeys],
  }
}

export default useTransitionGroup
