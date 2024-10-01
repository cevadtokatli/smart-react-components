import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { SetState } from '@smart-react-components/core/types'
import { useState } from 'react'
import { FormValue } from '../types'

interface Props {
  active: FormValue | FormValue[]
  children: JSX.Element[]
  dropdownStatus: boolean
  hasHover: boolean
  isDisabled: boolean
  setActive: SetState<FormValue | FormValue[]>
  setDropdownStatus: SetState<boolean>
}

interface Return {
  hovered: FormValue
  setHovered: SetState<FormValue>
}

const useSelectBoxHover = ({ active, children, dropdownStatus, hasHover, isDisabled, setActive, setDropdownStatus }: Props): Return => {
  const [hovered, setHovered] = useState<FormValue>(undefined)

  /**
   * Finds the hovered JSX element based on the value.
   * Pushes the parents to the path array.
   */
  const findHoveredChild = (parent: JSX.Element | JSX.Element[], path: Array<JSX.Element | JSX.Element[]>): JSX.Element => {
    let children: JSX.Element[]

    if (Array.isArray(parent)) {
      children = parent
    } else {
      children = Array.isArray(parent.props.children) ? parent.props.children : [parent.props.children]
    }

    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      switch (child.type.displayName) {
        case 'Option':
          if (child.props.value === hovered) {
            return child
          }

          break
        case 'OptionGroup':
          path.push(child)

          const hoveredChild = findHoveredChild(child, path)
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
  const findNextHoveredChild = (child: JSX.Element, path: Array<JSX.Element | JSX.Element[]>, direction: 1 | -1, skipIncrease: boolean = false): JSX.Element => {
    if (path.length === 0) {
      return null
    }

    const parent = path.pop()
    let children: JSX.Element[]

    if (Array.isArray(parent)) {
      children = parent
    } else {
      children = Array.isArray(parent.props.children) ? parent.props.children : [parent.props.children]
    }

    let idx = children.findIndex(i => i === child) + (skipIncrease ? 0 : direction)

    while (idx >= 0 && idx < children.length) {
      const child = children[idx]

      switch (child.type.displayName) {
        case 'Option':
          if (!child.props.isDisabled && ![null, undefined].includes(child.props.value)) {
            return child
          }

          break
        case 'OptionGroup':
          path.push(child)

          const nextChildCandidate = Array.isArray(child.props.children)
            ? direction === 1 ? child.props.children[0] : child.props.children[child.props.children.length - 1]
            : child.props.children
          const nextChild = findNextHoveredChild(nextChildCandidate, path, direction, true)

          if (nextChild) {
            return nextChild
          }

          path.pop()

          break
      }

      idx += direction
    }

    // Array means that parent is root, so no need to go further since the root cannot have more parents.
    if (Array.isArray(parent)) {
      return null
    }

    return findNextHoveredChild(parent, path, direction)
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
    if (hasHover && dropdownStatus && !isDisabled) {
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [dropdownStatus, hasHover, hovered, isDisabled])

  return {
    hovered,
    setHovered,
  }
}

export default useSelectBoxHover
