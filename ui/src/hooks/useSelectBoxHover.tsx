import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { SetState } from '@smart-react-components/core/types'
import { useState } from 'react'
import { FormValue } from '../types'

interface Props {
  active: FormValue | FormValue[]
  children: JSX.Element[]
  dropdownStatus: boolean
  hasHover: boolean
  setActive: SetState<FormValue | FormValue[]>
  setDropdownStatus: SetState<boolean>
}

interface Return {
  hovered: FormValue
  setHovered: SetState<FormValue>
}

const useSelectBoxHover = ({ active, children, dropdownStatus, hasHover, setActive, setDropdownStatus }: Props): Return => {
  const [hovered, setHovered] = useState<FormValue>(undefined)

  /**
   * Finds the hovered JSX element based on the value.
   * Pushes the parents to the path array.
   */
  const findHoveredChild = (children: JSX.Element[], path: JSX.Element[][]): JSX.Element => {
    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      switch (child.type.displayName) {
        case 'Option':
          if (child.props.value === hovered) {
            return child
          }

          break
        case 'OptionGroup':
          const arr = Array.isArray(child.props.children) ? child.props.children : [child.props.children]
          path.push(arr)

          const hoveredChild = findHoveredChild(arr, path)
          if (hoveredChild) {
            return hoveredChild
          }

          path.pop()

          break
      }
    }

    return null
  }

  /**
   * Finds the next hovered JSX element based on the current hovered element and direction.
   */
  const findNextHoveredChild = (child: JSX.Element, path: JSX.Element[][], direction: 1 | -1): JSX.Element => {
    if (path.length === 0) {
      return null
    }

    const children = path.pop()
    let idx = -1

    if (!child) {
      idx = direction === 1 ? 0 : children.length - 1
    } else {
      idx = children.findIndex(i => i === child)
      idx += direction
    }

    while (idx >= 0 && idx < children.length) {
      const child = children[idx]

      switch (child.type.displayName) {
        case 'Option':
          if (!child.props.isDisabled && ![null, undefined].includes(child.props.value)) {
            return child
          }

          break
        case 'OptionGroup':
          const arr = Array.isArray(child.props.children) ? child.props.children : [child.props.children]
          path.push(arr)
          const nextChild = findNextHoveredChild(null, path, direction)
          if (nextChild) {
            return nextChild
          }
          path.pop()

          break
      }

      idx += direction
    }

    return findNextHoveredChild(null, path, direction)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
      const hoveredChildPath = [children]
      const currentChild = findHoveredChild(children, hoveredChildPath)
      const nextChild = findNextHoveredChild(currentChild, hoveredChildPath, e.key === 'ArrowDown' ? 1 : -1)

      if (nextChild) {
        setHovered(nextChild.props.value)
      }

      e.preventDefault()
    }

    if (e.key === 'Enter' && hovered !== undefined) {
      if (!Array.isArray(active)) {
        setDropdownStatus(false)
        setActive(hovered)
      } else {
        if (!active.includes(hovered)) {
          setActive([...active, hovered])
        } else {
          setActive(active.filter(i => i !== hovered))
        }
      }
    }
  }

  useChangeEffect(() => {
    if (dropdownStatus) {
      setHovered(undefined)
    }
  }, [dropdownStatus])

  useChangeEffect(() => {
    if (hasHover && dropdownStatus) {
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [dropdownStatus, hasHover, hovered])

  return {
    hovered,
    setHovered,
  }
}

export default useSelectBoxHover
