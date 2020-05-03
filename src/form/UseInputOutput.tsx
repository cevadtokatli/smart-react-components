import React from "react"
import {JSXElementProps, JSXChild} from "../props"
import InputWrapper from "./InputWrapper"
import SlideTransition from "../transition/SlideTransition"
import InputAddon from "./InputAddon"
import InputHint from "./InputHint"
import InputError from "./InputError"
import FormGroup from "./FormGroup"
import InputLabel from "./InputLabel"

interface Props {
    element: JSX.Element
    containerProps: JSXElementProps
    inputProps: JSXElementProps
    labelProps: JSXElementProps
    label: JSXChild
    shape?: string
    leftAddon?: JSXChild
    leftAddonProps?: JSXElementProps
    leftAddonAbsolute?: boolean
    rightAddon?: JSXChild
    rightAddonProps?: JSXElementProps
    rightAddonAbsolute?: boolean
    hint?: JSXChild
    error?: JSXChild
    isFocused?: boolean
}

export default ({element,containerProps,inputProps,labelProps,label,shape="default",leftAddon=null,leftAddonProps,leftAddonAbsolute,rightAddon=null,rightAddonProps,rightAddonAbsolute,hint=null,error=null,isFocused}:Props): JSX.Element => {
    const FragmentEl = (
        <>
            {(leftAddon || rightAddon)
                ? (
                    <InputWrapper>
                        {leftAddon && <InputAddon {...leftAddonProps} type="left" shape={shape} absolute={leftAddonAbsolute}>{leftAddon}</InputAddon>}
                        {element}
                        {rightAddon && <InputAddon {...rightAddonProps} type="right" shape={shape} absolute={rightAddonAbsolute}>{rightAddon}</InputAddon>}
                    </InputWrapper>

                )
                : element
            }
            {hint && <SlideTransition status={isFocused}><InputHint>{hint}</InputHint></SlideTransition>}
            {error && <InputError>{error}</InputError>}
        </>
    )

    if(label)
        return (
            <FormGroup {...containerProps}>
                <InputLabel {...labelProps} as="label" disabled={labelProps.disabled} htmlFor={inputProps.id}>{label}</InputLabel>
                {FragmentEl}
            </FormGroup>
        )
    else
        return FragmentEl
}