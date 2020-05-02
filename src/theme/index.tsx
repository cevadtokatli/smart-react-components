import {Coordinator, ColorObject} from "../types"
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

    // components
    form?: {
        radioColor?: string
        radioBorder?: string
        inputBackground?: string
        inputBorder?: string
        inputFont?: string
        inputPlaceholder?: string
        inputPlaceholderFill?: string
    }
}

export interface TypeOptions {
    util?: boolean
    form?: boolean
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
    badge: {
        fixedSize: ThemeVariable<string>
        padding: ThemeVariable<Coordinator<string>>
        margin: Coordinator<string>
        radius: ThemeVariable<string>
        fontSize: ThemeVariable<string>
    }
    fixedBox: {
        boxShadow: string
    }
    form: {
        disabledOpacity: number
        radioSpanSpace: string
        radioSpanFontSize: ThemeVariable<string>
        inputPadding: ThemeVariable<Coordinator<string>>
        inputRadius: ThemeVariable<string>
        inputFontSize: ThemeVariable<string>
        optionPadding: ThemeVariable<string>
        optionMargin: ThemeVariable<Coordinator<string>>
        optionFontSize: ThemeVariable<string>
    }
    grid: {
        breakpoint: Grid
        containerWidth: Grid
        columnGap: string
    }
    overlay: {
        space: string
        background: string
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

    if(options === true || typeOptions.form) {
        type.form = type.form || {}
        type.form.radioColor = type.form.radioColor || DV.FORM_RADIO_COLOR
        type.form.radioBorder = type.form.radioBorder || DV.FORM_RADIO_BORDER_COLOR
        type.form.inputBackground = type.form.inputBackground || DV.FORM_INPUT_BG_COLOR
        type.form.inputBorder = type.form.inputBorder || DV.FORM_INPUT_BORDER_COLOR
        type.form.inputFont = type.form.inputFont || ColorHelper.getFontColor(type.form.inputBackground)
        type.form.inputPlaceholder = type.form.inputPlaceholder || DV.FORM_INPUT_PLACEHOLDER_COLOR
        type.form.inputPlaceholderFill = type.form.inputPlaceholderFill || ColorHelper.getColor(type.font).alpha(DV.FORM_INPUT_PLACEHOLDER_FILL_FADE_LEVEL).rgb().toString()
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
    badge: {
        fixedSize: {
            small: "18px",
            default: "20px",
            large: "22px"
        },
        padding: {
            small: {
                x: ".1875rem",
                y: ".09375rem"
            },
            default: {
                x: ".375rem",
                y: ".1875rem"
            },
            large: {
                x: ".65rem",
                y: ".3rem"
            }
        },
        margin: {
            x: ".3125rem",
            y: ".3125rem"
        },
        radius: {
            default: ".15rem",
            square: "0",
            rounded: ".875rem",
            circle: "100%"
        },
        fontSize: {
            small: ".75rem",
            default: ".75rem",
            large: ".875rem"
        }
    },
    fixedBox: {
        boxShadow: "0 0 35px 0 rgba(154,161,171,.15)"
    },
    form: {
        disabledOpacity: .7,
        radioSpanSpace: ".46875rem",
        radioSpanFontSize: {
            small: ".875rem",
            default: "1rem",
            large: "1rem"
        },
        inputPadding: {
            small: {
                x: ".8rem",
                y: ".28rem"
            },
            default: {
                x: ".9rem",
                y: ".45rem"
            },
            large: {
                x: "1rem",
                y: ".5rem"
            }
        },
        inputRadius: {
            default: ".2rem",
            square: "0",
            rounded: "2rem"
        },
        inputFontSize: {
            small: ".875rem",
            default: "1rem",
            large: "1rem"
        },
        optionPadding: {
            small: ".15625rem",
            default: ".3125rem",
            large: ".625rem"
        },
        optionMargin: {
            small: {
                x: ".28rem",
                y: ".06rem"
            },
            default: {
                x: ".45rem",
                y: ".125rem"
            },
            large: {
                x: ".5rem",
                y: ".175rem"
            }
        },
        optionFontSize: {
            small: ".875rem",
            default: ".875rem",
            large: "1rem"
        }
    },
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
    },
    overlay: {
        space: "1.75rem",
        background: "rgba(0,0,0,.3)"
    }
}

export default theme