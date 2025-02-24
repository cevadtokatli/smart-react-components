import { JSXChildren } from '@smart-react-components/core/types'
import { cloneElement, useCallback, useMemo, useRef } from 'react'

interface Props {
  children: JSXChildren
  dropdownStatus: boolean
  searchValue: string
}

interface Return {
  optionList: JSX.Element[]
}

const useSelectSearch = (props: Props): Return => {
  const lastOptionList = useRef<JSX.Element[]>([])

  const applySearch = useCallback((children: JSX.Element[], list: JSX.Element[], value: string) => {
    children.forEach(item => {
      switch (item?.type?.displayName) {
        case 'Option':
          if (
            !value
            || (typeof item.props.value === 'string' && item.props.value.trim().toLowerCase().includes(value))
            || (typeof item.props.children === 'string' && item.props.children.trim().toLowerCase().includes(value))
          ) {
            list.push(item)
          }
          break
        case 'OptionGroup':
          const group = cloneElement(item, { children: [] })
          if (item.props.children) {
            applySearch(Array.isArray(item.props.children) ? item.props.children : [item.props.children], group.props.children, value)
          }
          if (group.props.children.length > 0) {
            list.push(group)
          }
          break
      }
    })
  }, [])

  const optionList = useMemo<JSX.Element[]>(() => {
    /**
     * Returns the same list when the dropdown gets closed since it is not needed to update during the closing animation.
     */
    if (!props.dropdownStatus && lastOptionList.current.length > 0) {
      return lastOptionList.current
    }

    const children = []
    const value = props.searchValue.trim().toLowerCase()
    applySearch(Array.isArray(props.children) ? props.children : [props.children], children, value)

    if (props.dropdownStatus) {
      lastOptionList.current = children
    }

    return children
  }, [props.children, props.dropdownStatus, props.searchValue])

  return {
    optionList,
  }
}

export default useSelectSearch
