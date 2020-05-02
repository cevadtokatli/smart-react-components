import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$StrictProps} from "../props/size$-strict-props"
import size from "../constants/form/checkbox-size"
import InputElement from "../element/Input"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild, Value, SetValue} from "../props"
import DV from "../default-value"
import useMultiple from "./UseMultiple"
import RadioLabel from "./RadioLabel"
import RadioSpan from "./RadioSpan"

const Rectangle = styled.div``

const StickContainer = styled.div``

const ShortStick = styled.div``

const LongStick = styled.div``

interface InputProps extends ElementProps, Size$StrictProps {
    type$: string
    fill$: boolean
    shape: string
    disabled?: boolean
}

const customKeys = {
    size$: (v, t) => `
        & + ${Rectangle} {
            width: ${size.rectangle[v]};
            height: ${size.rectangle[v]};

            > ${StickContainer} {
                left: ${size.stickContainer[v].left};
                top: ${size.stickContainer[v].top};

                > ${ShortStick} {
                    top: ${size.shortStick[v].top};
                }

                > ${LongStick} {
                    top: ${size.longStick[v].top};
                }
            }
        }

        &:checked + ${Rectangle} > ${StickContainer} > {
            ${ShortStick} {
                height: ${size.shortStick[v].height};
            }

            ${LongStick} {
                width: ${size.longStick[v].width};
            }
        }

        ~ ${RadioSpan} {
            font-size: ${t.form.radioSpanFontSize[v]};
        }
    `
}

const Input = styled(InputElement).attrs<InputProps>({customKeys})<InputProps>(({theme,type$,fill$,shape,disabled}) => `
    flex: 0 0 auto;
    display: none;

    + ${Rectangle} {
        position: relative;
        overflow: hidden;
        flex: 0 0 auto;
        box-sizing: border-box;
        border-radius: ${shape != "circle" ? "2px" : "100%"};
        border: solid 2px ${theme.src.type[type$].form.radioBorder};
        background: ${fill$ ? theme.src.type[type$].form.radioBorder : theme.src.type[type$].form.radioBackground};
        transition: 100ms 0s ease-in-out;
        transition-property: border, background;

        > ${StickContainer} {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            transform: rotate(-50deg);
            transform-origin: 0;

            > ${ShortStick} {
                position: absolute;
                left: 0;
                width: 2px;
                height: 0;
                background: ${theme.src.type[type$].form.radioColor};
                transition: height 60ms 40ms ease-in-out;
            }

            > ${LongStick} {
                position: absolute;
                left: 0;
                width: 0;
                height: 2px;
                background: ${theme.src.type[type$].form.radioColor};
                transition: width 40ms 0s ease-in-out;
            }
        }
    }

    &:checked + ${Rectangle} {
        border-color: ${theme.src.type[type$].main};
        background: ${theme.src.type[type$].main};

        > ${StickContainer} > {
            ${ShortStick} {
                transition: height 60ms 0s ease-in-out;
            }

            ${LongStick} {
                transition: width 40ms 60ms ease-in-out;
            }
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
    shape?: string
    value?: Value
    active?: Value[]
    setActive?: SetValue<Value[]>
    checked?: boolean
    setChecked?: SetValue<boolean>
}

const Checkbox:React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,spanProps=DV.JSX_ELEMENT_PROPS,children,type="primary",fill=true,shape="default",value,active,setActive,checked,setChecked}) => {
    const {checked$, change} = useMultiple({value,active,setActive,checked,setChecked,disabled:inputProps.disabled,onChange:inputProps.onChange})
    
    return (
        <RadioLabel {...containerProps} space={children ? true :false}>
            <Input {...inputProps} type="checkbox" size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} shape={shape} checked={checked$} onChange={change} />
            <Rectangle>
                <StickContainer>
                    <ShortStick />
                    <LongStick />
                </StickContainer>
            </Rectangle>
            {children && <RadioSpan {...spanProps}>{children}</RadioSpan>}
        </RadioLabel>
    )
}

export default Checkbox