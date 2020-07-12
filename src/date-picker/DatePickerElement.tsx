import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeStrictProps} from "../props/size-strict-props"
import size from "../constants/date-picker/size"
import Div from "../element/Div"

interface Props extends ElementProps, SizeStrictProps {
    type: string
}

const customKeys = {
    size: v => `
        width: ${size[v].width};

        .src-date-picker-span-element {
            margin-left: ${size[v].spanMarginLeft};
        }

        .src-date-picker-icon-container {
            width: ${size[v].iconContainerSize};
        }

        .src-date-picker-body {
            height: ${size[v].bodyHeight};
        }

        .src-date-picker-date-header {
            padding: ${size[v].dateHeaderPaddingY} 0;
        }

        .src-date-picker-week-item {
            width: ${size[v].dateWeekItemSize};
            height: ${size[v].dateWeekItemSize};
            margin: ${size[v].dateWeekItemSpace};
        }

        .src-date-picker-date-item {
            width: ${size[v].dateListItemSize};
            height: ${size[v].dateListItemSize};
            margin: ${size[v].dateListItemSpace};
        }

        .src-date-picker-hour-element {
            width: ${size[v].hourItemSize};
            height: ${size[v].hourItemSize};
        }

        .src-date-picker-hour-arrow-container svg {
            width: ${size[v].hourIconSize};
            height: ${size[v].hourIconSize};
        }

        .src-date-picker-hour-input {
            font-size: ${size[v].hourItemFontSize};
        }

        .src-date-picker-buttons {
            padding: ${size[v].buttonsPadding};

            > div {
                margin-left: ${size[v].buttonMarginLeft};
            }
        }
    `
}

export default styled(Div).attrs<Props>({customKeys})<Props>(({theme,type}) => `
    overflow: hidden;
    flex: 0 0 auto;
    border-radius: ${size.radius};
    background: ${theme.src.datePicker.background};
    color: ${theme.src.datePicker.font};
    font-family: "Open Sans", sans-serif;
    font-size: ${size.fontSize};

    .src-date-picker-body {
        box-sizing: border-box;
        user-select: none;
    }

    .src-date-picker-item {    
        &.src-date-picker-item-inactive {
            color: ${theme.src.datePicker.inactive};
            font-weight: 400;
        }

        &.src-date-picker-item-active {
            background: ${theme.src.type[type].main};
            color: ${theme.src.type[type].font};
        }
    }

    .src-date-picker-hour-input {
        background: ${theme.src.type[type].main};
        color: ${theme.src.type[type].font};

        &:focus {
            background: ${theme.src.type[type].active};
        }
    }
`)