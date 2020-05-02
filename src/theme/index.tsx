import {ColorObject} from "../types"
import {ThemeVariable, Value} from "../props"
import {Grid} from "../types/grid"
import ColorHelper from "../helper/ColorHelper"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"

export interface Type {
    main: string
    font?: string
    dark?: string
    darker?: string
    darkest?: string
    light?: string
    lighter?: string
    lightest?: string
    shadow?: string
}

export interface TypeOptions {
    util?: boolean
}

export interface Theme {
    type: {
        [key:string]: Type
    }
    isMobile: boolean

    // variables
    zIndex: ThemeVariable<number>
    length: ThemeVariable<Value>
    radius: ThemeVariable<Value>
    color: ThemeVariable<string>
    fontFamily: ThemeVariable<string>
    fontWeight: ThemeVariable<Value>
    fontSize: ThemeVariable<Value>
    iconSize: ThemeVariable<Value>

    // components
    grid: {
        breakpoint: Grid
        containerWidth: Grid
        columnGap: string
    }
}

/**
 * Creates a Type object and returns it.
 * value could be a string or Type object.
 * If value is string, sets value as the main color of the type and defines other colors by default values.
 * If value is a Type object, defines undefined properties by default values.
 * If option is given as an object, createType defines only colors whose properties are true in the option object. 
 * 
 * @param value
 */
export const createType = (value:string|Type, options:boolean|TypeOptions=true): Type => {
    const typeOptions = options as TypeOptions
    let type: Type
    let color: ColorObject

    if(typeof value === "string")
        type = {
            main: value
        }
    else
        type = value

    try {
        color = ColorHelper.getColor(type.main)
    } catch(ignored) {
        throw "Main color is not valid."
    }

    if(options === true || typeOptions.util) {
        type.font = type.font || ColorHelper.getFontColor(type.main)
        type.dark = type.dark || color.darken(DV.DARK_LEVEL).hex().toString()
        type.darker = type.darker || color.darken(DV.DARKER_LEVEL).hex().toString()
        type.darkest = type.darkest || ColorHelper.getColor(type.darker).darken(DV.DARK_LEVEL).hex().toString()
        type.light = type.light || color.darken(DV.LIGHT_LEVEL).hex().toString()
        type.lighter = type.lighter || color.darken(DV.LIGHTER_LEVEL).hex().toString()
        type.lightest = type.lightest || ColorHelper.getColor(type.lighter).darken(DV.LIGHT_LEVEL).hex().toString()
        type.shadow = type.shadow || color.alpha(DV.SHADOW_FADE_LEVEL).rgb().toString()
    }

    return type
}

const theme: Theme = {
    // util
    type: {
        primary: createType(DV.BLUE),
        secondary: createType(DV.GRAY_700),
        success: createType({
            main: DV.GREEN,
            font: DV.LIGHT_FONT_COLOR
        }),
        danger: createType({
            main: DV.RED,
            font: DV.LIGHT_FONT_COLOR
        }),
        warning: createType(DV.YELLOW),
        info: createType(DV.CYAN),
        light: createType(DV.GRAY_100),
        gray: createType(DV.GRAY_500),
        dark: createType({
            main: DV.GRAY_900
        }),
        white: createType({
            main: DV.WHITE
        }),
        black: createType(DV.BLACK)
    },
    isMobile: DOMHelper.isMobile,

    // variables
    zIndex: {
        buttonLoading: 10,
        fixedBox: 1000,
        loading: 10,
        modal: 1000,
        overlay: 2000,
        popover: 1000,
        popup: 1000,
        routerProgressBar: 9999,
        tooltip: 1000,
        waveEffect: 10
    },
    length: {
        "-5": "-3rem",
        "-4": "-2rem",
        "-3": "-1rem",
        "-2": "-.5rem",
        "-1": "-.25rem",
        "0": "0",
        "1": ".25rem",
        "2": ".5rem",
        "3": "1rem",
        "4": "2rem",
        "5": "3rem"
    },
    radius: {
        default: ".25rem",
        circle: "1rem"
    },
    color: {
        blue: DV.BLUE,
        indigo: DV.INDIGO,
        purple: DV.PURPLE,
        pink: DV.PINK,
        red: DV.RED,
        orange: DV.ORANGE,
        yellow: DV.YELLOW,
        green: DV.GREEN,
        teal: DV.TEAL,
        cyan: DV.CYAN,
        white: DV.WHITE,
        gray_100: DV.GRAY_100,
        gray_200: DV.GRAY_200,
        gray_300: DV.GRAY_300,
        gray_400: DV.GRAY_400,
        gray_500: DV.GRAY_500,
        gray_600: DV.GRAY_600,
        gray_700: DV.GRAY_700,
        gray_800: DV.GRAY_800,
        gray_900: DV.GRAY_900,
        black: DV.BLACK
    },
    fontFamily: {
        primary: "Nunito",
        secondary: "Open Sans"
    },
    fontWeight: {
        light: "300",
        normal: "400",
        semiBold: "500",
        bold: "600",
    },
    fontSize: {
        "1": ".625rem",
        "2": ".8125rem",
        "3": ".875rem",
        "4": "1rem"
    },
    iconSize: {
        "1": ".25rem",
        "2": ".5rem",
        "3": ".75rem",
        "4": "1rem",
        "5": "1.5rem",
        small: ".5rem",
        default: ".75rem",
        large: "1rem"
    },

    // components
    grid: {
        breakpoint: {
            small: 576,
            medium: 768,
            large: 992,
            xlarge: 1200
        },
        containerWidth: {
            small: 540,
            medium: 720,
            large: 960,
            xlarge: 1140
        },
        columnGap: "15px"
    }
}

export default theme