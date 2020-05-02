import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$StrictProps} from "../props/size$-strict-props"
import size from "../constants/form/switch-size"
import InputElement from "../element/Input"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild, Value, SetValue} from "../props"
import DV from "../default-value"
import useMultiple from "./UseMultiple"
import RadioLabel from "./RadioLabel"
import RadioSpan from "./RadioSpan"

const Foundation = styled.div``

const Slider = styled.div``

interface InputProps extends ElementProps, Size$StrictProps {
    type$: string
    fill$: boolean
    disabled?: boolean
}

const customKeys = {
    size$: (v, t) => `
        + ${Foundation} {
            width: ${size.foundation[v].width};
            height: ${size.foundation[v].height};

            > ${Slider} {
                width: ${size.slider[v].size};
                height: ${size.slider[v].size};
            }
        }

        &:checked + ${Foundation} > ${Slider} {
            left: ${size.slider[v].left};
        }

        ~ ${RadioSpan} {
            font-size: ${t.form.radioSpanFontSize[v]};
        }
    `
}

const Input = styled(InputElement).attrs<InputProps>({customKeys})<InputProps>(({theme,type$,fill$,disabled}) => `
    flex: 0 0 auto;
    display: none;

    + ${Foundation} {
        position: relative;
        flex: 0 0 auto;
        box-sizing: border-box;
        border-radius: 20px;
        border: solid 1px ${theme.src.type[type$].form.radioBorder};
        background: ${fill$ ? theme.src.type[type$].form.radioBorder : theme.src.type[type$].form.radioColor};
        box-shadow: ${theme.src.type[type$].form.radioBorder} 0 0 0 0 inset;
        transition: 400ms 0s ease-in-out;
        transition-property: border, box-shadow;

        > ${Slider} {
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 100%;
            background: ${theme.src.type[type$].form.radioColor};
            box-shadow: 0 1px 3px rgba(0,0,0,.4);
            transition: left 200ms 0s ease-in-out;
        }
    }

    &:checked + ${Foundation} {
        border-color: ${theme.src.type[type$].main};
        background: ${theme.src.type[type$].main};
        box-shadow: ${theme.src.type[type$].main} 0 0 0 11px inset;
        transition: border 400ms 0s ease-in-out, box-shadow 400ms 0s ease-in-out, background 0s 400ms ease-in-out;
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
    value?: Value
    active?: Value[]
    setActive?: SetValue<Value[]>
    checked?: boolean
    setChecked?: SetValue<boolean>
}

const Switch: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,spanProps=DV.JSX_ELEMENT_PROPS,children,type="primary",fill=true,value,active,setActive,checked,setChecked}) => {
    const {checked$, change} = useMultiple({value,active,setActive,checked,setChecked,disabled:inputProps.disabled,onChange:inputProps.onChange})
    
    return (
        <RadioLabel {...containerProps} space={children ? true : false}>
            <Input {...inputProps} type="checkbox" size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} checked={checked$} onChange={change} />
            <Foundation>
                <Slider />
            </Foundation>
            {children && <RadioSpan {...spanProps}>{children}</RadioSpan>}
        </RadioLabel>
    )
}

export default Switch