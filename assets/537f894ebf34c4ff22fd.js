"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_ColorPicker_tsx"],{

/***/ "./src/containers/ColorPicker.tsx":
/*!****************************************!*\
  !*** ./src/containers/ColorPicker.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/ColorPicker */ "./node_modules/@smart-react-components/ui/ColorPicker/index.js");
/* harmony import */ var _smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");














const ColorPickerValueExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#0F9AEF');
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: value, setValue: setValue });
};
const ColorPickerPaletteExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#0665D0');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#EF3752');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: primaryValue, setValue: setPrimaryValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", value: dangerValue, setValue: setDangerValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerSizeExample = () => {
    const [smallValue, setSmallValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#6C757D');
    const [mediumValue, setMediumValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#19B394');
    const [largeValue, setLargeValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#F7B84B');
    const [responsiveValue, setResponsiveValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#4FC6E1');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", palette: "secondary", value: smallValue, setValue: setSmallValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", value: mediumValue, setValue: setMediumValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { size: "large", palette: "warning", value: largeValue, setValue: setLargeValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", sizeMd: "medium", sizeLg: "large", palette: "info", value: responsiveValue, setValue: setResponsiveValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerFormatExample = () => {
    const [rgbValue, setRGBValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#F9FBFC');
    const [hslValue, setHSLValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#323A46');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { format: _smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.ColorPickerFormat.RGB, palette: "light", value: rgbValue, setValue: setRGBValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { format: _smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.ColorPickerFormat.HSL, palette: "dark", value: hslValue, setValue: setHSLValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerOpacityPickerExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#0665D0');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#19B394');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: primaryValue, setValue: setPrimaryValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { hasOpacityPicker: false, palette: "success", value: successValue, setValue: setSuccessValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerConsoleExample = () => {
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#6C757D');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#EF3752');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", value: secondaryValue, setValue: setSecondaryValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { hasConsole: false, palette: "danger", value: dangerValue, setValue: setDangerValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerButtonsExample = () => {
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#F7B84B');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#4FC6E1');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", value: warningValue, setValue: setWarningValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { hasButtons: false, palette: "info", value: infoValue, setValue: setInfoValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerColorPaletteExample = () => {
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#F9FBFC');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#323A46');
    const [paletteColors, setPaletteColors] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { paletteColors: paletteColors, setPaletteColors: setPaletteColors, palette: "light", value: lightValue, setValue: setLightValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { hasPalette: false, palette: "dark", value: darkValue, setValue: setDarkValue, marginLeft: 10, marginTop: 10 })));
};
const ColorPickerEventsExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#0F9AEF');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: value, setValue: setValue, onDrag: e => console.log('onDrag', e), onSave: e => console.log('onSave', e), onCancel: e => console.log('onCancel', e) }));
};
const ColorPickerI18NExample = () => {
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#19B394');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('#EF3752');
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { marginLeft: 10, marginTop: 10, palette: "success", value: successValue, setValue: setSuccessValue }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_ColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { marginLeft: 10, marginTop: 10, palette: "danger", value: dangerValue, setValue: setDangerValue, cancelLabel: "\u0130ptal", saveLabel: "Kaydet" })));
};
const ColorPicker = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_13__["default"])({ title: 'Color Picker' });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_12__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_11__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", { id: "color-picker" }, "Color Picker"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "An embedded color picker."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'value',
                            type: 'string',
                            isRequired: true,
                            description: 'Picker color value.',
                        },
                        {
                            name: 'setValue',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#set-state" }, "SetState"),
                                "<string>"),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "value"),
                                "."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Prevents user from changing the value.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Removes the background color.',
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Uses the soft colors in the palette.',
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Picker size, has responsive support.',
                        },
                        {
                            name: 'format',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#color-picker-format" }, "ColorPickerFormat"),
                            defaultValue: 'HEX',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "value"),
                                " format."),
                        },
                        {
                            name: 'hasOpacityPicker',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Displays the opacity picker.',
                        },
                        {
                            name: 'hasConsole',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Displays the color console.',
                        },
                        {
                            name: 'hasButtons',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Displays the save and cancel buttons.',
                        },
                        {
                            name: 'hasPalette',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Displays the color palette.',
                        },
                        {
                            name: 'paletteColors',
                            type: 'string[]',
                            description: 'Stores the palette colors. If not given, The component stores the colors itself.',
                        },
                        {
                            name: 'setPaletteColors',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#set-state" }, "SetState"),
                                "<string[]>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "paletteColors"),
                                "."),
                        },
                        {
                            name: 'canAddColorToPalette',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Indicates if users can add colors to the palette.',
                        },
                        {
                            name: 'onDrag',
                            type: '(e: Event) => void',
                            description: 'Invoked when the dragger changes the color.',
                        },
                        {
                            name: 'onSave',
                            type: '(e: Event) => void',
                            description: 'Invoked when clicked on the save button. If event is prevented, aborts the save operation.',
                        },
                        {
                            name: 'onCancel',
                            type: '(e: Event) => void',
                            description: 'Invoked when clicked on the cancel button. If event is prevented, aborts the cancel operation.',
                        },
                        {
                            name: 'saveLabel',
                            type: 'string',
                            defaultValue: 'i18n.save',
                            description: 'The save button label.',
                        },
                        {
                            name: 'cancelLabel',
                            type: 'string',
                            defaultValue: 'i18n.cancel',
                            description: 'The cancel button label.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                    "Color Picker provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the picker element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('#0F9AEF')

  return <ColorPicker value={value} setValue={setValue} />
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerValueExample, null),
                        title: 'Value',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('#0665D0')
  const [dangerValue, setDangerValue] = React.useState('#EF3752')

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        value={primaryValue}
        setValue={setPrimaryValue}
        marginLeft={10}
        marginTop={10}
      />
      <ColorPicker
        palette="danger"
        value={dangerValue}
        setValue={setDangerValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerPaletteExample, null),
                        title: 'Palette',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
  import ColorPicker from '@smart-react-components/ui/ColorPicker'
  import React from 'react'

  export default () => {
    const [smallValue, setSmallValue] = React.useState('#6C757D')
    const [mediumValue, setMediumValue] = React.useState('#19B394')
    const [largeValue, setLargeValue] = React.useState('#F7B84B')
    const [responsiveValue, setResponsiveValue] = React.useState('#4FC6E1')

    return (
      <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
        <ColorPicker
          size="small"
          palette="secondary"
          value={smallValue}
          setValue={setSmallValue}
          marginLeft={10}
          marginTop={10}
        />
        <ColorPicker
          palette="success"
          value={mediumValue}
          setValue={setMediumValue}
          marginLeft={10}
          marginTop={10}
        />
        <ColorPicker
          size="large"
          palette="warning"
          value={largeValue}
          setValue={setLargeValue}
          marginLeft={10}
          marginTop={10}
        />
        <ColorPicker
          size="small"
          sizeMd="medium"
          sizeLg="large"
          palette="info"
          value={responsiveValue}
          setValue={setResponsiveValue}
          marginLeft={10}
          marginTop={10}
        />
      </Div>
    )
  }`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerSizeExample, null),
                        title: 'Size',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker, { ColorPickerFormat } from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [rgbValue, setRGBValue] = React.useState('#F9FBFC')
  const [hslValue, setHSLValue] = React.useState('#323A46')

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        format={ColorPickerFormat.RGB}
        palette="light"
        value={rgbValue}
        setValue={setRGBValue}
        marginLeft={10}
        marginTop={10}
      />
      <ColorPicker
        format={ColorPickerFormat.HSL}
        palette="dark"
        value={hslValue}
        setValue={setHSLValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerFormatExample, null),
                        title: 'Format'
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('#0665D0')
  const [successValue, setSuccessValue] = React.useState('#19B394')

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        value={primaryValue}
        setValue={setPrimaryValue}
        marginLeft={10}
        marginTop={10}
      />
      <ColorPicker
        hasOpacityPicker={false}
        palette="success"
        value={successValue}
        setValue={setSuccessValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerOpacityPickerExample, null),
                        title: 'Opacity Picker',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [secondaryValue, setSecondaryValue] = React.useState('#6C757D')
  const [dangerValue, setDangerValue] = React.useState('#EF3752')

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        palette="secondary"
        value={secondaryValue}
        setValue={setSecondaryValue}
        marginLeft={10}
        marginTop={10}
      />
      <ColorPicker
        hasConsole={false}
        palette="danger"
        value={dangerValue}
        setValue={setDangerValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerConsoleExample, null),
                        title: 'Console',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [warningValue, setWarningValue] = React.useState('#F7B84B')
  const [infoValue, setInfoValue] = React.useState('#4FC6E1')

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        palette="warning"
        value={warningValue}
        setValue={setWarningValue}
        marginLeft={10}
        marginTop={10}
      />
      <ColorPicker
        hasButtons={false}
        palette="info"
        value={infoValue}
        setValue={setInfoValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerButtonsExample, null),
                        title: 'Buttons',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [lightValue, setLightValue] = React.useState('#F9FBFC')
  const [darkValue, setDarkValue] = React.useState('#323A46')
  const [paletteColors, setPaletteColors] = React.useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        paletteColors={paletteColors}
        setPaletteColors={setPaletteColors}
        palette="light"
        value={lightValue}
        setValue={setLightValue}
        marginLeft={10}
        marginTop={10}
      />
      <ColorPicker
        hasPalette={false}
        palette="dark"
        value={darkValue}
        setValue={setDarkValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerColorPaletteExample, null),
                        title: 'Color Palette',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('#0F9AEF')

  return (
    <ColorPicker
      value={value}
      setValue={setValue}
      onDrag={e => console.log('onDrag', e)}
      onSave={e => console.log('onSave', e)}
      onCancel={e => console.log('onCancel', e)}
    />
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerEventsExample, null),
                        title: 'Events',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import ColorPicker from '@smart-react-components/ui/ColorPicker'
import React from 'react'

export default () => {
  const [successValue, setSuccessValue] = React.useState('#19B394')
  const [dangerValue, setDangerValue] = React.useState('#EF3752')

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <ColorPicker
        marginLeft={10}
        marginTop={10}
        palette="success"
        value={successValue}
        setValue={setSuccessValue}
      />
      <ColorPicker
        marginLeft={10}
        marginTop={10}
        palette="danger"
        value={dangerValue}
        setValue={setDangerValue}
        cancelLabel="İptal"
        saveLabel="Kaydet"
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorPickerI18NExample, null),
                        title: 'I18N',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'i18n.cancel',
                            type: 'string',
                            description: 'The cancel button label.',
                        },
                        {
                            name: 'i18n.save',
                            type: 'string',
                            description: 'The save button label.',
                        },
                        {
                            name: 'media.opacityBackground',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The background image is used in the opacity picker, console, and palette items ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", null, "(in base64 format)"),
                                "."),
                        },
                        {
                            name: 'radius.colorPicker',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "border-radius"),
                                " value.")
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'colorPicker.majorDraggerSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The major dragger ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", null, "(used in the major picker)"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'colorPicker.majorPickerSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The major picker ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'colorPicker.minorDraggerSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The minor dragger ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", null, "(used in the minor and opacity picker)"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'colorPicker.minorPickerWidth',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The minor and opacity picker ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " value."),
                        },
                        {
                            name: 'colorPicker.paletteItemSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The palette item ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'colorPicker.space',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "padding"),
                                " value."),
                        },
                        {
                            name: 'colorPicker.width',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The picker element ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__["default"], { next: {
                    label: 'Date Picker',
                    to: '/ui-components/date-picker',
                }, prev: {
                    label: 'Checkbox',
                    to: '/ui-components/checkbox',
                } })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], { list: [
                { label: 'Color Picker', id: 'color-picker' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPicker);


/***/ })

}]);
//# sourceMappingURL=537f894ebf34c4ff22fd.js.map