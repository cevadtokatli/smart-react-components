import Link from '@smart-react-components/router/Link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const LinkItem = styled.a`
  &.active {
      color: red;
  }

  &.activating {
      opacity: .7;
  }
`

export default () => {
  const list = useSelector(({ list }) => list)

  return (
    <ul>
      { list.map(item => (
        <li key={item.id}>
          <Link to={`/${item.id}`} as={LinkItem}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}
