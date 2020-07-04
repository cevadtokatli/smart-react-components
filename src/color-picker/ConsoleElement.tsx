import styled from "styled-components"
import size from "../constants/color-picker/size"
import {InputElement} from "./Input"
import ClearIcon from "./icons/Clear"

export default styled.div(({theme}) => `
    padding-top: ${size.space.default}px;

    > div {
        > div {
            position: relative;
            overflow: hidden;
            display: flex;
            border-radius: ${size.radius.small}px;
    
            > div {
                flex: 0 0 auto;
            }
    
            > input {
                flex: 1 1 auto;
            }

            ${InputElement} {
                color: ${theme.src.colorPicker.colorLight};
            }
        
            ${ClearIcon} {
                fill: ${theme.src.colorPicker.colorLight};
            }
        
            &[data-src-is-dark="true"] {
                ${InputElement} {
                    color: ${theme.src.colorPicker.colorDark};
                }
        
                ${ClearIcon} {
                    fill: ${theme.src.colorPicker.colorDark};
                }
            }
        }
    }
`)