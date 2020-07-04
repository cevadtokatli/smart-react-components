import React from "react"
import styled from "styled-components"
import size from "../constants/color-picker/size"
import {Language} from "../types/color-picker"
import Button from "../button/Button"
import SaveIcon from "./icons/Save"
import CancelIcon from "./icons/Cancel"

const ButtonContainer = styled.div`
    display: flex;
    padding-top: ${size.space.default}px;
    margin: -${size.space.small}px;

    > a {
        flex: 1 1 calc(50% - ${size.space.small*2}px);
        justify-content: center;
        margin: ${size.space.small}px;
        white-space: nowrap;

        svg {
            flex: 0 0 auto;
            width: ${size.icon.width}px;
            height: ${size.icon.height}px;
            margin-right: ${size.space.small}px;
        }
    }
`

interface Props {
    type: string
    save: () => void
    cancel: () => void
    lang: Language
}

const Buttons: React.FC<Props> = ({type,save,cancel,lang}) => {
    return (
        <ButtonContainer>
            <Button type={type} size="small" elementProps={{onClick:save}}>
                <SaveIcon />
                {lang.save}
            </Button>
            <Button type={type} size="small" elementProps={{onClick:cancel}}>
                <CancelIcon />
                {lang.cancel}
            </Button>
        </ButtonContainer>
    )
}

export default Buttons