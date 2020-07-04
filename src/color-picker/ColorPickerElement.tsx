import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeStrictProps} from "../props/size-strict-props"
import size from "../constants/color-picker/size"
import MajorPickerElement from "./MajorPickerElement"
import MajorDraggerElement from "./MajorDraggerElement"
import MinorPickerElement from "./MinorPickerElement"
import OpacityPickerElement from "./OpacityPickerElement"
import MinorDraggerElement from "./MinorDraggerElement"
import Div from "../element/Div"

interface ColorPickerElementProps extends ElementProps, SizeStrictProps {}

const customKeys = {
    size: v => `
        width: ${size[v].width}px;    

        ${MajorPickerElement} {
            width: ${size[v].majorPickerWidth}px;
            height: ${size[v].majorPickerHeight}px;

            ${MajorDraggerElement} {
                width: ${size[v].majorDraggerSize}px;
                height: ${size[v].majorDraggerSize}px;
            }
        }

        ${MinorPickerElement},
        ${OpacityPickerElement} {
            width: ${size[v].minorPickerWidth}px;
            height: ${size[v].minorPickerHeight}px;
        }

        ${MinorDraggerElement} {
            width: ${size[v].minorDraggerSize}px;
            height: ${size[v].minorDraggerSize}px;
        }
    
        .src-color-picker-palette-item {
            width: ${size[v].paletteItemElementSize}px;
            height: ${size[v].paletteItemElementSize}px;
        }
    `
}

export default styled(Div).attrs<ColorPickerElementProps>({customKeys})<ColorPickerElementProps>(({theme}) => `
    box-sizing: border-box;
    padding: ${size.space.default}px;
    border-radius: ${size.radius.default}px;
    background: ${theme.src.colorPicker.colorLight};
    
    ${MajorPickerElement},
    ${MinorPickerElement},
    ${OpacityPickerElement} {
        position: relative;
        overflow: hidden;
        flex: 0 0 auto;
        cursor: pointer;
        touch-action: none;
        
        &,
        div {
            border-radius: ${size.radius.default}px;
        }

        div {
            height: 100%;
        }
    }

    ${MajorDraggerElement},
    ${MinorDraggerElement} {
        position: absolute;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 100%;
        border: solid 2px ${theme.src.colorPicker.colorLight};
        box-shadow: ${theme.src.colorPicker.draggerBoxShadow};

        &[data-src-is-dark="true"] {
            &,
            &:after {
                border-color: ${theme.src.colorPicker.colorDark};
            }
        }
    }

    div.src-color-picker-picker-shadow {
        box-shadow: ${theme.src.colorPicker.pickerBoxShadow};
    }
    
    .src-color-picker-bg-transparent {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==');
    }
`)