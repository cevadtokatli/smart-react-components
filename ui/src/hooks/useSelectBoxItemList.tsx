import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement } from '@smart-react-components/core/types'
import { useState } from 'react'
import { FormValue } from '../types'

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface Return {
  itemList: {
    [key: string]: {
      children: ContentElement
      idx: number
    }
  }
}

const useSelectBoxItemList = ({ children }: Props): Return => {
  const collectItems = (arr: Array<{ children: ContentElement, value: FormValue }>, children: JSX.Element | JSX.Element[]) => {
    (!Array.isArray(children) ? [children] : children).forEach(item => {
      if (typeof item !== 'undefined') {
        if (typeof item.props.value !== 'undefined' && item.props.value !== null) {
          arr.push(item.props)
        } else if (typeof item.props.children !== 'undefined') {
          collectItems(arr, item.props.children)
        }
      }
    })
  }

  const getItemList = () => {
    const arr = []

    collectItems(arr, children)

    const itemList = {}

    arr.forEach((item, idx) => {
      itemList[String(item.value)] = {
        children: item.children,
        idx,
      }
    })

    return itemList
  }

  const [itemList, setItemList] = useState<{ [key: string]: { children: ContentElement, idx: number } }>(() => getItemList())

  useChangeEffect(() => {
    setItemList(getItemList())
  }, [children])

  return {
    itemList,
  }
}

export default useSelectBoxItemList