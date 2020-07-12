import React from "react"
import styled from "styled-components"
import size from "../constants/date-picker/size"
import IconContainer from "./IconContainer"
import {DateHourObject, DateObject, Language} from "../types/date-picker"
import Div from "../element/Div"
import Span from "../element/Span"
import * as PT from "../constants/date-picker/picker-type"
import CSSTransition from "../transition/CSSTransition"
import HourIcon from "./icons/Hour"
import DateIcon from "./icons/Date"
import CloseIcon from "./icons/Close"

interface HeaderElementProps {
    type: string
}

export const HeaderElement = styled.header<HeaderElementProps>(({theme,type}) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${size.paddingY} ${size.paddingX};
    background: ${theme.src.type[type].main};

    ${IconContainer} {
        position: relative;

        div {
            position: absolute;
            display: inline-flex;
        }

        svg {
            width: ${size.headerIconSize};
            height: ${size.headerIconSize};
            fill: ${theme.src.type[type].darker};
            transition: fill 150ms 0s ease-in-out;

            &:hover {
                fill: ${theme.src.type[type].darkest};
            }
        }
    }
`)

interface Props {
    valueObject: DateHourObject
    today: DateObject
    selectedPicker: number
    setSelectedPicker: React.Dispatch<React.SetStateAction<number>>
    type: string
    pickerType: number
    showCloseIcon: boolean
    lang: Language
    onClose: () => void
}

const Header: React.FC<Props> = ({valueObject,today,selectedPicker,setSelectedPicker,type,pickerType,showCloseIcon,lang,onClose}) => {
    const getValue = () => {
        let date = (valueObject && valueObject.date) ? valueObject.date : today
        return `${lang.days[date.weekDay]}, ${date.day} ${lang.months[date.month].substr(0, 3)} ${date.year}`
    }

    const [value, setValue] = React.useState<string>(() => getValue())

    /**
     * Calls onClose method.
     */
    const close = () => {
        if(onClose)
            onClose()
    }

    React.useEffect(() => setValue(getValue()), [valueObject])

    return (
        <HeaderElement type={type}>
            <Span color={`${type}.font`} className="src-date-picker-span-element">{value}</Span>
            <Div display="flex" alignItems="center">
                <IconContainer>
                    {pickerType == PT.DATE_HOUR && (
                        <>
                            <CSSTransition status={selectedPicker == PT.DATE} className="src-fade" duration={150}>
                                <div>
                                    <HourIcon onClick={() => setSelectedPicker(PT.HOUR)} />
                                </div>
                            </CSSTransition>
                            <CSSTransition status={selectedPicker == PT.HOUR} className="src-fade" duration={150}>
                                <div>
                                    <DateIcon onClick={() => setSelectedPicker(PT.DATE)} />
                                </div>
                            </CSSTransition>
                        </>
                    )}
                </IconContainer>
                {showCloseIcon && (
                    <IconContainer>
                        <CloseIcon onClick={close} />
                    </IconContainer>
                )}
            </Div>
        </HeaderElement>
    )
}

export default Header