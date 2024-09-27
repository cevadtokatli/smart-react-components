"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_DatePicker_tsx"],{

/***/ "./src/containers/DatePicker.tsx":
/*!***************************************!*\
  !*** ./src/containers/DatePicker.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/DatePicker */ "./node_modules/@smart-react-components/ui/DatePicker/index.js");
/* harmony import */ var _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");

















const DatePickerValueExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: primaryValue, setValue: setPrimaryValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", value: secondaryValue, setValue: setSecondaryValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", value: dangerValue, setValue: setDangerValue, marginLeft: 10, marginTop: 10 })));
};
const DatePickerSizeExample = () => {
    const [smallValue, setSmallValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [mediumValue, setMediumValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [largeValue, setLargeValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [responsiveValue, setResponsiveValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", value: smallValue, setValue: setSmallValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", value: mediumValue, setValue: setMediumValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { size: "large", palette: "warning", value: largeValue, setValue: setLargeValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", sizeMd: "medium", sizeLg: "large", palette: "info", value: responsiveValue, setValue: setResponsiveValue, marginLeft: 10, marginTop: 10 })));
};
const DatePickerPickerTypeExample = () => {
    const [dateTimeValue, setDateTimeValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [dateValue, setDateValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [timeValue, setTimeValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light", value: dateTimeValue, setValue: setDateTimeValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { pickerType: _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__.DatePickerType.DATE, palette: "secondary", value: dateValue, setValue: setDateValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { pickerType: _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__.DatePickerType.TIME, palette: "dark", value: timeValue, setValue: setTimeValue, marginLeft: 10, marginTop: 10 })));
};
const DatePickerCloseIconExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { hasCloseIcon: true, value: primaryValue, setValue: setPrimaryValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", value: dangerValue, setValue: setDangerValue, marginLeft: 10, marginTop: 10 })));
};
const DatePickerButtonsExample = () => {
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { hasButtons: true, palette: "warning", value: warningValue, setValue: setWarningValue, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", value: infoValue, setValue: setInfoValue, marginLeft: 10, marginTop: 10 })));
};
const DatePickerEventsExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { onCancel: (e) => console.log('onCancel', e), onClose: (e) => console.log('onClose', e), onSave: (e) => console.log('onSave', e), hasButtons: true, hasCloseIcon: true, value: value, setValue: setValue }));
};
const DatePickerLanguageExample = () => {
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.useTheme)();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const newTheme = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
        const newTheme = (0,_theme__WEBPACK_IMPORTED_MODULE_15__["default"])(theme.$.vars.isDark, theme.$.vars.isMobile);
        newTheme.$.i18n.am = 'ÖÖ';
        newTheme.$.i18n.pm = 'ÖS';
        newTheme.$.i18n.days = {
            0: {
                acroynm2: 'Pz',
                acroynm3: 'Paz',
            },
            1: {
                acroynm2: 'Pt',
                acroynm3: 'Pzt',
            },
            2: {
                acroynm2: 'Sa',
                acroynm3: 'Sal',
            },
            3: {
                acroynm2: 'Ça',
                acroynm3: 'Çar',
            },
            4: {
                acroynm2: 'Pe',
                acroynm3: 'Per',
            },
            5: {
                acroynm2: 'Cu',
                acroynm3: 'Cum',
            },
            6: {
                acroynm2: 'Ct',
                acroynm3: 'Cmt',
            },
        };
        newTheme.$.i18n.months = {
            0: {
                acroynm3: 'Oca',
                name: 'Ocak',
            },
            1: {
                acroynm3: 'Şub',
                name: 'Şubat',
            },
            2: {
                acroynm3: 'Mar',
                name: 'Mart',
            },
            3: {
                acroynm3: 'Nis',
                name: 'Nisan',
            },
            4: {
                acroynm3: 'May',
                name: 'Mayıs',
            },
            5: {
                acroynm3: 'Haz',
                name: 'Haziran',
            },
            6: {
                acroynm3: 'Tem',
                name: 'Temmuz',
            },
            7: {
                acroynm3: 'Ağu',
                name: 'Ağustos',
            },
            8: {
                acroynm3: 'Eyl',
                name: 'Eylül',
            },
            9: {
                acroynm3: 'Eki',
                name: 'Ekim',
            },
            10: {
                acroynm3: 'Kas',
                name: 'Kasım',
            },
            11: {
                acroynm3: 'Ara',
                name: 'Aralık',
            },
        };
        return newTheme;
    }, [theme.$.vars.isMobile]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_16__.ThemeProvider, { theme: newTheme },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", hasButtons: true, value: value, setValue: setValue })));
};
const DatePickerTimeTypeExample = () => {
    const [t24Value, setT24Value] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    const [t12Value, setT12Value] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", marginLeft: -10, marginTop: -10 },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { pickerType: _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__.DatePickerType.TIME, value: t12Value, setValue: setT12Value, marginLeft: 10, marginTop: 10 }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { timeType: _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__.DatePickerTimeType.T24, pickerType: _smart_react_components_ui_DatePicker__WEBPACK_IMPORTED_MODULE_1__.DatePickerType.TIME, palette: "success", value: t24Value, setValue: setT24Value, marginLeft: 10, marginTop: 10 })));
};
const DatePicker = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_14__["default"])({ title: 'Date Picker' });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_13__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", { id: "date-picker" }, "Date Picker"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "An embedded date/time picker."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_9__["default"], { props: [
                        {
                            name: 'value',
                            type: 'Date',
                            isRequired: true,
                            description: 'Picker date/time value.',
                        },
                        {
                            name: 'setValue',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-state" }, "SetState"),
                                "<Date>"),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "value"),
                                "."),
                        },
                        {
                            name: 'pickerType',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#date-picker-type" }, "DatePickerType"),
                            defaultValue: 'DATE_TIME',
                            description: 'Picker type.',
                        },
                        {
                            name: 'timeType',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#date-picker-time-type" }, "DatePickerTimeType"),
                            defaultValue: 'T12',
                            description: 'Picker time type.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Uses the soft colors in the palette.',
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Picker size, has responsive support.',
                        },
                        {
                            name: 'hasCloseIcon',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Displays a close icon in the header.',
                        },
                        {
                            name: 'hasButtons',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Displays the save and cancel buttons.',
                        },
                        {
                            name: 'onClose',
                            type: '(e: Event) => void',
                            description: 'Invoked when clicked on the close icon. If event is prevented, aborts the close operation.',
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
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Date Picker element ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_11__["default"], null,
                    "Date Picker provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the date picker element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import DatePicker from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState(new Date())
  const [secondaryValue, setSecondaryValue] = React.useState(new Date())
  const [dangerValue, setDangerValue] = React.useState(new Date())

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <DatePicker
        value={primaryValue}
        setValue={setPrimaryValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        palette="secondary"
        value={secondaryValue}
        setValue={setSecondaryValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        palette="danger"
        value={dangerValue}
        setValue={setDangerValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerValueExample, null), title: "Value" }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import DatePicker from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [smallValue, setSmallValue] = React.useState(new Date())
  const [mediumValue, setMediumValue] = React.useState(new Date())
  const [largeValue, setLargeValue] = React.useState(new Date())
  const [responsiveValue, setResponsiveValue] = React.useState(new Date())

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <DatePicker
        size="small"
        value={smallValue}
        setValue={setSmallValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        palette="success"
        value={mediumValue}
        setValue={setMediumValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        size="large"
        palette="warning"
        value={largeValue}
        setValue={setLargeValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
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
}`, output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerSizeExample, null), title: "Size" }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import DatePicker, { DatePickerType } from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [dateTimeValue, setDateTimeValue] = React.useState(new Date())
  const [dateValue, setDateValue] = React.useState(new Date())
  const [timeValue, setTimeValue] = React.useState(new Date())

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <DatePicker
        palette="light"
        value={dateTimeValue}
        setValue={setDateTimeValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        pickerType={DatePickerType.DATE}
        palette="secondary"
        value={dateValue}
        setValue={setDateValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        pickerType={DatePickerType.TIME}
        palette="dark"
        value={timeValue}
        setValue={setTimeValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerPickerTypeExample, null), title: "Picker Type" }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import DatePicker, { DatePickerTimeType, DatePickerType } from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [t24Value, setT24Value] = React.useState(new Date())
  const [t12Value, setT12Value] = React.useState(new Date())

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <DatePickerComponent
        pickerType={DatePickerType.TIME}
        value={t12Value}
        setValue={setT12Value}
        marginLeft={10}
        marginTop={10}
      />
      <DatePickerComponent
        timeType={DatePickerTimeType.T24}
        pickerType={DatePickerType.TIME}
        palette="success"
        value={t24Value}
        setValue={setT24Value}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerTimeTypeExample, null), title: "Time Type" }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import DatePicker from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState(new Date())
  const [dangerValue, setDangerValue] = React.useState(new Date())

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <DatePicker
        hasCloseIcon
        value={primaryValue}
        setValue={setPrimaryValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePicker
        palette="danger"
        value={dangerValue}
        setValue={setDangerValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerCloseIconExample, null),
                        title: 'Close Icon',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import DatePicker from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [warningValue, setWarningValue] = React.useState(new Date())
  const [infoValue, setInfoValue] = React.useState(new Date())

  return (
    <Div alignItems="flex-start" display="flex" flexWrap="wrap" marginLeft={-10} marginTop={-10}>
      <DatePickerComponent
        hasButtons
        palette="warning"
        value={warningValue}
        setValue={setWarningValue}
        marginLeft={10}
        marginTop={10}
      />
      <DatePickerComponent
        palette="info"
        value={infoValue}
        setValue={setInfoValue}
        marginLeft={10}
        marginTop={10}
      />
    </Div>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerButtonsExample, null),
                        title: 'Buttons',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
                        code: `import DatePicker from '@smart-react-components/ui/DatePicker'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState(new Date())

  return (
    <DatePicker
      onCancel={(e) => console.log('onCancel', e)}
      onClose={(e) => console.log('onClose', e)}
      onSave={(e) => console.log('onSave', e)}
      hasButtons
      hasCloseIcon
      value={value}
      setValue={setValue}
    />
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerEventsExample, null),
                        title: 'Events',
                    }, second: {
                        code: `import createTheme from '@smart-react-components/core/theme'
import DatePicker from '@smart-react-components/ui/DatePicker'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = createTheme({
  $: {
    i18n: {
      am: 'ÖÖ',
      pm: 'ÖS',
      days: {
        0: {
          acroynm2: 'Pz',
          acroynm3: 'Paz',
        },
        1: {
          acroynm2: 'Pt',
          acroynm3: 'Pzt',
        },
        2: {
          acroynm2: 'Sa',
          acroynm3: 'Sal',
        },
        3: {
          acroynm2: 'Ça',
          acroynm3: 'Çar',
        },
        4: {
          acroynm2: 'Pe',
          acroynm3: 'Per',
        },
        5: {
          acroynm2: 'Cu',
          acroynm3: 'Cum',
        },
        6: {
          acroynm2: 'Ct',
          acroynm3: 'Cmt',
        },
      },
      months: {
        0: {
          acroynm3: 'Oca',
          name: 'Ocak',
        },
        1: {
          acroynm3: 'Şub',
          name: 'Şubat',
        },
        2: {
          acroynm3: 'Mar',
          name: 'Mart',
        },
        3: {
          acroynm3: 'Nis',
          name: 'Nisan',
        },
        4: {
          acroynm3: 'May',
          name: 'Mayıs',
        },
        5: {
          acroynm3: 'Haz',
          name: 'Haziran',
        },
        6: {
          acroynm3: 'Tem',
          name: 'Temmuz',
        },
        7: {
          acroynm3: 'Ağu',
          name: 'Ağustos',
        },
        8: {
          acroynm3: 'Eyl',
          name: 'Eylül',
        },
        9: {
          acroynm3: 'Eki',
          name: 'Ekim',
        },
        10: {
          acroynm3: 'Kas',
          name: 'Kasım',
        },
        11: {
          acroynm3: 'Ara',
          name: 'Aralık',
        },
      },
    },
  },
})

export default () => {
  const [value, setValue] = React.useState(new Date())

  return (
    <ThemeProvider theme={theme}>
      <DatePicker
        palette="secondary"
        hasButtons
        value={value}
        setValue={setValue}
      />
    </ThemeProvider>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DatePickerLanguageExample, null),
                        title: 'Language',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'fontFamily.datePicker',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontWeight.datePicker',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-weight"),
                                " value."),
                        },
                        {
                            name: 'i18n.cancel',
                            type: 'string',
                            description: 'The cancel button label.',
                        },
                        {
                            name: 'i18n.ok',
                            type: 'string',
                            description: 'The save button label.',
                        },
                        {
                            name: 'i18n.days',
                            type: '{ [key: number]: { acroynm2: string, acroynm3: string } }',
                            description: 'Days starting from Sunday to Saturday.',
                        },
                        {
                            name: 'i18n.months',
                            type: '{ [key: number]: { acroynm3: string, name: string } }',
                            description: 'Months starting from January to December.',
                        },
                        {
                            name: 'i18n.am',
                            type: 'string',
                            description: 'AM label.',
                        },
                        {
                            name: 'i18n.pm',
                            type: 'string',
                            description: 'PM label.',
                        },
                        {
                            name: 'radius.datePicker',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "border-radius"),
                                " value."),
                        },
                        {
                            name: 'radius.datePickerItem',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Item ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "border-radius"),
                                " value."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'datePicker.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'datePicker.headerSpace',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Header ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "padding-left"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "right"),
                                " value."),
                        },
                        {
                            name: 'datePicker.iconSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Icon ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'datePicker.itemSize',
                            type: 'string',
                            description: 'Date picker item size value.',
                        },
                        {
                            name: 'datePicker.itemSpace',
                            type: 'string',
                            description: 'Date picker item space value.',
                        },
                        {
                            name: 'datePicker.itemWeekSize',
                            type: 'string',
                            description: 'Date picker item week size value.',
                        },
                        {
                            name: 'datePicker.itemWeekSpace',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: 'Date picker item week space value.',
                        },
                        {
                            name: 'datePicker.space',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "padding"),
                                " value."),
                        },
                        {
                            name: 'datePicker.timeArrowSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Time picker arrow ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'datePicker.timeInputFontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Time picker input ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'datePicker.timeSize',
                            type: 'string',
                            description: 'Time picker size value.',
                        },
                        {
                            name: 'datePicker.timeSpace',
                            type: 'string',
                            description: 'Time picker space value.',
                        },
                        {
                            name: 'datePicker.width',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_10__["default"], { next: {
                    label: 'Dropdown',
                    to: '/ui-components/dropdown',
                }, prev: {
                    label: 'Color Picker',
                    to: '/ui-components/color-picker',
                } })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], { list: [
                { label: 'Date Picker', id: 'date-picker' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);


/***/ })

}]);
//# sourceMappingURL=569581132a48144b5286.js.map