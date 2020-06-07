import React from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"
import {createSelector} from "reselect"
import {NavLink} from "smart-react-components/router"

const LinkItem = styled.a`
    &.active {
        color: red;
    }

    &.activating {
        opacity: .7;
    }
`

export default () => {
    const list = useSelector(createSelector(
        ({list}) => list,
        list => list
    ))

    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <NavLink to={`/${item.id}`} elementProps={{as:LinkItem}}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
    )
}