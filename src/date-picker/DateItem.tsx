import styled from "styled-components"

interface Props {
    inactive: boolean
    active?: boolean
}

export default styled.li.attrs<Props>(({className,active,inactive}) => ({
    className: `${className} src-date-picker-item ${active ? "src-date-picker-item-active" : ""} ${inactive ? "src-date-picker-item-inactive" : ""}`
}))<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    line-height: 100%;
    font-weight: 600;
`