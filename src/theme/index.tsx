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
    alert?: {
        background?: string
        border?: string
        font?: string
        fontFill?: string
        linkFont?: string
        hr?: string
    }
    breadcrumb?: {
        background?: string
        font?: string
        fontFill?: string
    }
    button?: {
        background?: string
        placeholder?: string
        placeholderFill?: string
    }
    form?: {
        radioColor?: string
        radioBorder?: string
        inputBackground?: string
        inputBorder?: string
        inputFont?: string
        inputPlaceholder?: string
        inputPlaceholderFill?: string
    }
    pagination?: {
        background?: string
        border?: string
        font?: string
    }
    popover?: {
        background?: string
        border?: string
        headerBackground?: string
        headerBorder?: string
    }
    progressBar?: {
        background?: string
        backgroundFill?: string
        backgroundAlt?: string
    }
    table?: {
        background?: string
        border?: string
        font?: string
        stripedBackground?: string
        stripedFont?: string
        hoverBackground?: string
        hoverFont?: string
    }
    waveEffect?: {
        color?: string
    }
}

export interface TypeOptions {
    util?: boolean
    alert?: boolean
    breadcrumb?: boolean
    button?: boolean
    form?: boolean
    pagination?: boolean
    popover?: boolean
    progressBar?: boolean
    table?: boolean
    waveEffect?: boolean
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
    alert: {
        padding: ThemeVariable<Coordinator<string>&{xHalf:string}>
        radius: string
        fontSize: ThemeVariable<string>
        linkFontWeight: string
    }
    badge: {
        fixedSize: ThemeVariable<string>
        padding: ThemeVariable<Coordinator<string>>
        margin: Coordinator<string>
        radius: ThemeVariable<string>
        fontSize: ThemeVariable<string>
    }
    breadcrumb: {
        padding: Coordinator<string>
        radius: ThemeVariable<string>
        fontSize: string
        disabledOpacity: number
        transition: string
    }
    button: {
        fixedSize: ThemeVariable<string>
        padding: ThemeVariable<Coordinator<string>&{xHalf:string}>
        radius: ThemeVariable<string>
        fontSize: ThemeVariable<string>
        disabledOpacity: number
        transition: string
    }
    colorPicker: {
        colorLight: string
        colorDark: string
        pickerBoxShadow: string
        draggerBoxShadow: string
        paletteIconColor: string
        paletteBorderColor: string
    }
    datePicker: {
        background: string
        font: string
        inactive: string
        arrowActive: string
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
    loading: {
        size: ThemeVariable<string>
        animation: string
    }
    modal: {
        width: ThemeVariable<string>
        borderColor: string
        borderRadius: string
        backgroundColor: string
        modalContentPadding: Coordinator<string>
        modalContentBorderColor: string
        modalFooterPadding: Coordinator<string>
        modalFooterContentMargin: Coordinator<string>
    }
    overlay: {
        space: string
        background: string
    }
    pagination: {
        padding: Coordinator<string>
        margin: Coordinator<string>
        fixedSize: string
        radius: ThemeVariable<string>
        fontSize: string
        disabledOpacity: number
        transition: string
    }
    popover: {
        radius: string
        fontSize: ThemeVariable<string>
        headerPadding: ThemeVariable<Coordinator<string>>
        bodyPadding: ThemeVariable<Coordinator<string>>
    }
    progressBar: {
        radius: ThemeVariable<string>
        transitionType: string
        stripedAnimationType: string
    }    
    table: {
        padding: ThemeVariable<string>
        fontSize: ThemeVariable<string>
        stripedOrientation: string
        hoverTransition: string
    }
    tooltip: {
        padding: ThemeVariable<Coordinator<string>>
        radius: string
        fontSize: ThemeVariable<string>
    }
    waveEffect: {
        transition: string
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

    if(options === true || typeOptions.alert) {
        type.alert = type.alert || {}
        type.alert.background = type.alert.background || ColorHelper.mix(type.main, DV.ALERT_BG_LEVEL)
        type.alert.border = type.alert.border || ColorHelper.mix(type.main, DV.ALERT_BORDER_LEVEL)
        type.alert.font = type.alert.font || ColorHelper.mix(type.main, DV.ALERT_FONT_LEVEL)
        type.alert.fontFill = type.alert.fontFill || (type.font || ColorHelper.getFontColor(type.main))
        type.alert.linkFont = type.alert.linkFont || ColorHelper.getColor(type.alert.font).darken(DV.ALERT_LINK_FONT_DARKEN_LEVEL).rgb().toString()
        type.alert.hr = type.alert.hr || ColorHelper.getColor(type.alert.border).darken(DV.ALERT_HR_DARKEN_LEVEL).rgb().toString()
    }

    if(options === true || typeOptions.breadcrumb) {
        type.breadcrumb = type.breadcrumb || {}
        type.breadcrumb.background = type.breadcrumb.background || DV.BREADCRUMB_BG_COLOR
        type.breadcrumb.font = type.breadcrumb.font || DV.BREADCRUMB_FONT_COLOR
        type.breadcrumb.fontFill = type.breadcrumb.fontFill || (color.isDark() ? DV.BREADCRUMB_FONT_FILL_LIGHT_COLOR : DV.BREADCRUMB_FONT_FILL_DARK_COLOR)
    }

    if(options === true || typeOptions.button) {
        type.button = type.button || {}
        type.button.background = type.button.background || DV.BUTTON_BG_COLOR
        type.button.placeholder = type.button.placeholder || type.main
        type.button.placeholderFill = type.button.placeholderFill || ColorHelper.getFontColor(type.main)
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

    if(options === true || typeOptions.pagination) {
        type.pagination = type.pagination || {}
        type.pagination.background = type.pagination.background || DV.PAGINATION_BG_COLOR
        type.pagination.border = type.pagination.border || DV.PAGINATION_BORDER_COLOR
        type.pagination.font = type.pagination.font || ColorHelper.getFontColor(type.pagination.background)
    }

    if(options === true || typeOptions.popover) {
        type.popover = type.popover || {}
        type.popover.background = type.popover.background || type.main
        const popoverBgColor = ColorHelper.getColor(type.popover.background)
        type.popover.border = type.popover.border || popoverBgColor.darken(DV.POPOVER_BORDER_DARKEN_LEVEL).hex().toString()
        type.popover.headerBackground = type.popover.headerBackground || popoverBgColor.darken(DV.POPOVER_HEADER_BG_DARKEN_LEVEL).hex().toString()
        const popoverHeaderBgColor = ColorHelper.getColor(type.popover.headerBackground)
        type.popover.headerBorder = type.popover.headerBorder || popoverHeaderBgColor.darken(DV.POPOVER_BORDER_DARKEN_LEVEL).hex().toString()
    }

    if(options === true || typeOptions.progressBar) {
        type.progressBar = type.progressBar || {}
        type.progressBar.background = type.progressBar.background || DV.PROGRESS_BAR_BG
        type.progressBar.backgroundFill = type.progressBar.backgroundFill || DV.PROGRESS_BAR_BG_FILL
        type.progressBar.backgroundAlt = type.progressBar.backgroundAlt || color.alpha(DV.PROGRESS_BAR_BG_ALT_FADE_LEVEL).rgb().toString()
    }

    if(options === true || typeOptions.table) {
        type.table = type.table || {}
        type.table.background = type.table.background || ColorHelper.mix(type.main, DV.TABLE_BG_LEVEL)
        type.table.border = type.table.border || ColorHelper.mix(type.main, DV.TABLE_BORDER_LEVEL)
        type.table.font = type.table.font || ColorHelper.getFontColor(type.table.background)
        type.table.stripedBackground = type.table.stripedBackground || ColorHelper.mix(type.table.background, DV.TABLE_STRIPED_BG_LEVEL)
        type.table.stripedFont = type.table.stripedFont || ColorHelper.getFontColor(type.table.stripedBackground)
        type.table.hoverBackground = type.table.hoverBackground || ColorHelper.mix(type.table.background, DV.TABLE_HOVER_BG_LEVEL)
        type.table.hoverFont = type.table.hoverFont || ColorHelper.getFontColor(type.table.hoverBackground)
    }

    if(options === true || typeOptions.waveEffect) {
        type.waveEffect = type.waveEffect || {}
        const waveEffectColor = ColorHelper.getColor((type.waveEffect.color || type.main))
        type.waveEffect.color = `radial-gradient(${waveEffectColor.alpha(.2).toString()} 0, ${waveEffectColor.alpha(.3).toString()} 40%, ${waveEffectColor.alpha(.4).toString()} 50%, ${waveEffectColor.alpha(.5).toString()} 60%, ${waveEffectColor.alpha(0).toString()} 70%)`
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
        light: createType({
            main: DV.GRAY_100,
            table: {
                background: DV.TABLE_LIGHT_BG_COLOR,
                border: DV.TABLE_LIGHT_BORDER_COLOR
            },
            waveEffect: {
                color: DV.WHITE
            }
        }),
        gray: createType(DV.GRAY_500),
        dark: createType({
            main: DV.GRAY_900,
            table: {
                background: DV.TABLE_DARK_BG_COLOR,
                border: DV.TABLE_DARK_BORDER_COLOR
            },
            waveEffect: {
                color: DV.BLACK
            }
        }),
        white: createType(DV.WHITE),
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
        secondary: "Open Sans",
        alert: "inherit",
        badge: "inherit",
        button: "inherit",
        radioSpan: "inherit",
        input: "inherit",
        option: "inherit",
        popver: "inherit",
        tooltip: "inherit"
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
    alert: {
        padding: {
            small: {
                x: "1.25rem",
                y: ".375rem",
                xHalf: ".625rem"
            },
            default: {
                x: "1.25rem",
                y: ".75rem",
                xHalf: ".625rem"
            },
            large: {
                x: "1.25rem",
                y: "1rem",
                xHalf: ".625rem"
            }
        },
        radius: ".25rem",
        fontSize: {
            small: ".875rem",
            default: "1rem",
            large: "1rem"
        },
        linkFontWeight: "600"
    },
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
    breadcrumb: {
        padding: {
            x: ".6rem",
            y: ".475rem"
        },
        radius: {
            default: ".125rem",
            square: "0",
            rounded: ".875rem"
        },
        fontSize: "1rem",
        disabledOpacity: .7,
        transition: "ease-in-out 200ms 0ms"
    },
    button: {
        fixedSize: {
            small: "30px",
            default: "36px",
            large: "40px"
        },
        padding: {
            small: {
                x: ".8rem",
                y: ".28rem",
                xHalf: ".4rem"
            },
            default: {
                x: ".9rem",
                y: ".45rem",
                xHalf: ".45rem"
            },
            large: {
                x: "1rem",
                y: ".5rem",
                xHalf: ".5rem"
            }
        },
        radius: {
            default: ".125rem",
            square: "0",
            rounded: "1.8rem",
            circle: "100%"
        },
        fontSize: {
            small: ".875rem",
            default: ".875rem",
            large: "1rem"
        },
        disabledOpacity: .7,
        transition: "ease-in-out 200ms 0ms"
    },
    colorPicker: {
        colorLight: "#f4f4f4",
        colorDark: "#1d1d1d",
        pickerBoxShadow: "0 0 3px rgba(0,0,0,.3) inset",
        draggerBoxShadow: "0 0 5px rgba(0,0,0,.5)",
        paletteIconColor: "#c5cbd7",
        paletteBorderColor: "#d7def0"
    },
    datePicker: {
        background: "#fff",
        font: "#4d4d4d",
        inactive: "#919191",
        arrowActive: "#000"
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
    loading: {
        size: {
            small: "10px",
            default: "20px",
            large: "30px"
        },
        animation: "linear 2000ms 0ms"
    },
    modal: {
        width: {
            small: "300px",
            default: "500px",
            large: "800px"
        },
        borderColor: "rgba(0,0,0,.2)",
        borderRadius: ".3rem",
        backgroundColor: "#fff",
        modalContentPadding: {
            x: "1rem",
            y: "1rem"
        },
        modalContentBorderColor: "#dee2e6",
        modalFooterPadding: {
            x: ".75rem",
            y: ".75rem"
        },
        modalFooterContentMargin: {
            x: ".25rem",
            y: ".25rem"
        }
    },
    overlay: {
        space: "1.75rem",
        background: "rgba(0,0,0,.3)"
    },
    pagination: {
        padding: {
            x: ".65rem",
            y: ".4rem"
        },
        margin: {
            x: ".2525rem",
            y: ".2525rem"
        },
        radius: {
            default: ".125rem",
            square: "0",
            rounded: ".5rem"
        },
        fixedSize: "32px",
        fontSize: "1rem",
        disabledOpacity: .7,
        transition: "ease-in-out 200ms 0ms"
    },
    popover: {
        radius: ".25rem",
        fontSize: {
            small: ".875rem",
            default: ".875rem",
            large: "1rem"
        },
        headerPadding: {
            small: {
                x: ".5rem",
                y: ".4rem"
            },
            default: {
                x: ".8rem",
                y: ".7rem"
            },
            large: {
                x: "1.1rem",
                y: "1rem"
            }
        },
        bodyPadding: {
            small: {
                x: ".5rem",
                y: ".25rem"
            },
            default: {
                x: ".75rem",
                y: ".5rem"
            },
            large: {
                x: "1rem",
                y: ".75rem"
            }
        }
    },
    progressBar: {
        radius: {
            default: ".125rem",
            square: "0",
            rounded: "1rem",
            circle: "100%"
        },
        transitionType: "ease-in-out",
        stripedAnimationType: "linear"
    },
    table: {
        padding: {
            small: ".3rem",
            default: ".75rem",
            large: "1rem"
        },
        fontSize: {
            small: ".875rem",
            default: "1rem",
            large: "1rem"
        },
        stripedOrientation: "odd",
        hoverTransition: "ease-in-out 300ms 0ms"
    },
    tooltip: {
        padding: {
            small: {
                x: ".4rem",
                y: ".15rem"
            },
            default: {
                x: ".6rem",
                y: ".3rem"
            },
            large: {
                x: ".8rem",
                y: ".45rem"
            }
        },
        radius: ".25rem",
        fontSize: {
            small: ".75rem",
            default: ".875rem",
            large: "1rem"
        }
    },
    waveEffect: {
        transition: `${DV.WAVE_EFFECT_TRANSITION_TYPE} ${DV.WAVE_EFFECT_TRANSITION_DURATION}ms 0ms` 
    }
}

export default theme