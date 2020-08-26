import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$StrictProps} from "../props/size$-strict-props"
import size from "../constants/form/radio-size"
import InputElement from "../element/Input"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild, Value, SetValue} from "../props"
import DV from "../default-value"
import RadioLabel from "./RadioLabel"
import RadioSpan from "./RadioSpan"

const OuterCircle = styled.div``

const ScaleArea = styled.div``

const InnerCircle = styled.div``

interface InputProps extends ElementProps, Size$StrictProps {
    type$: string
    fill$: boolean
    disabled?: boolean
}

const customKeys = {
    size$: (v, t) => `
        + ${OuterCircle} {
            width: ${size.outerCircle[v]};
            height: ${size.outerCircle[v]};

            ${InnerCircle} {
                width: ${size.innerCircle[v]};
                height: ${size.innerCircle[v]};
            }
        }

        ~ ${RadioSpan} {
            font-size: ${t.form.radioSpanFontSize[v]};
        }
    `
}

const Input = styled(InputElement).attrs<InputProps>({customKeys})<InputProps>(({theme,type$,fill$,disabled}) => `
    flex: 0 0 auto;
    display: none;

    + ${OuterCircle} {
        flex: 0 0 auto;
        box-sizing: border-box;
        border: solid 2px ${theme.src.type[type$].form.radioBorder};
        border-radius: 100%;
        background: ${fill$ ? theme.src.type[type$].form.radioBorder : theme.src.type[type$].form.radioColor};
        transition: border 200ms 0s ease-in-out;

        > ${ScaleArea} {
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(0);
            transform-origin: 50% 50%;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            margin: -1px 0 0 -1px;
            border-radius: 100%;
            background: ${theme.src.type[type$].form.radioBorder};
            transition: transform 200ms 0s ease-in-out, background 100ms 0s ease-in-out;

            > ${InnerCircle} {
                border-radius 100%;
                background: ${theme.src.type[type$].form.radioColor};
            }
        }
    }

    &:checked + ${OuterCircle} {
        border-color: ${theme.src.type[type$].main};

        > ${ScaleArea} {
            transform: scale(1);
            background: ${theme.src.type[type$].main};
        }
    }

    ${disabled ? `
        ~ * {
            opacity: ${theme.src.form.disabledOpacity};
            user-select: none;
        }
    ` : ""}
`)

export interface Props extends SizeProps {
    containerProps?: JSXElementProps
    inputProps?: JSXElementProps
    spanProps?: JSXElementProps
    children?: JSXChild
    type?: string
    fill?: boolean
    value: Value|boolean
    active: Value|boolean
    setActive: SetValue<Value|boolean>
}

const Radio: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,spanProps=DV.JSX_ELEMENT_PROPS,children,type="primary",fill=true,value,active,setActive}) => {
    /**
     * Sets active if event is not prevented.
     * 
     * @param e 
     */
    const change = (e:React.FormEvent<HTMLInputElement>): void => {
        if(!inputProps.disabled) {
            if(inputProps.onChange)
                inputProps.onChange(e)

            if(!e.defaultPrevented)
                setActive(value)
        }
    }
    
    return (
        <RadioLabel {...containerProps} space={children ? true : false}>
            <Input {...inputProps} type="radio" size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} checked={value == active} onChange={change} />
            <OuterCircle>
                <ScaleArea>
                    <InnerCircle />
                </ScaleArea>
            </OuterCircle>
            {children && <RadioSpan {...spanProps}>{children}</RadioSpan>}
        </RadioLabel>
    )
}

export default Radio