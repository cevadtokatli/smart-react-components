"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_ProgressBar_tsx"],{

/***/ "./src/containers/ProgressBar.tsx":
/*!****************************************!*\
  !*** ./src/containers/ProgressBar.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputNumber */ "./node_modules/@smart-react-components/ui/Input/InputNumber.js");
/* harmony import */ var _smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/ProgressBar */ "./node_modules/@smart-react-components/ui/ProgressBar/index.js");
/* harmony import */ var _smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");














const ProgressBarDefaultValueExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [value2, setValue2] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setValue, value: value, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, value: value })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setValue2, value: value2, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { elementProps: {
                    flex: '1 1 auto',
                }, value: value2 }))));
};
const ProgressBarTotalValueExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [value2, setValue2] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setValue, value: value, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, value: value })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setValue2, value: value2, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, suffix: "", totalValue: 100, value: value2 }))));
};
const ProgressBarPaletteExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setPrimaryValue, value: primaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, value: primaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "secondary", setValue: setSecondaryValue, value: secondaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "secondary", value: secondaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "success", setValue: setSuccessValue, value: successValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "success", value: successValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "danger", setValue: setDangerValue, value: dangerValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "danger", value: dangerValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "warning", setValue: setWarningValue, value: warningValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "warning", value: warningValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "info", setValue: setInfoValue, value: infoValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "info", value: infoValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "light", setValue: setLightValue, value: lightValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "light", value: lightValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "dark", setValue: setDarkValue, value: darkValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, palette: "dark", value: darkValue }))));
};
const ProgressBarFilledExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setPrimaryValue, value: primaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, value: primaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "secondary", setValue: setSecondaryValue, value: secondaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "secondary", value: secondaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "success", setValue: setSuccessValue, value: successValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "success", value: successValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "danger", setValue: setDangerValue, value: dangerValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "danger", value: dangerValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "warning", setValue: setWarningValue, value: warningValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "warning", value: warningValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "info", setValue: setInfoValue, value: infoValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "info", value: infoValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "light", setValue: setLightValue, value: lightValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "light", value: lightValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "dark", setValue: setDarkValue, value: darkValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isFilled: true, palette: "dark", value: darkValue }))));
};
const ProgressBarStripedExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setPrimaryValue, value: primaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, value: primaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "secondary", setValue: setSecondaryValue, value: secondaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "secondary", value: secondaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "success", setValue: setSuccessValue, value: successValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "success", value: successValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "danger", setValue: setDangerValue, value: dangerValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "danger", value: dangerValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "warning", setValue: setWarningValue, value: warningValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "warning", value: warningValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "info", setValue: setInfoValue, value: infoValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "info", value: infoValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "light", setValue: setLightValue, value: lightValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "light", value: lightValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "dark", setValue: setDarkValue, value: darkValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, isStriped: true, palette: "dark", value: darkValue }))));
};
const ProgressBarStripedNoAnimationExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(50);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", setValue: setPrimaryValue, value: primaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, value: primaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "secondary", setValue: setSecondaryValue, value: secondaryValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "secondary", value: secondaryValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "success", setValue: setSuccessValue, value: successValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "success", value: successValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "danger", setValue: setDangerValue, value: dangerValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "danger", value: dangerValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "warning", setValue: setWarningValue, value: warningValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "warning", value: warningValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "info", setValue: setInfoValue, value: infoValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "info", value: infoValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "light", setValue: setLightValue, value: lightValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "light", value: lightValue })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_1___default()), { flex: "0 0 auto", marginRight: "$length.3", palette: "dark", setValue: setDarkValue, value: darkValue, width: 50 }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_2___default()), { displayValue: true, elementProps: {
                    flex: '1 1 auto',
                }, hasStripedAnimation: false, isStriped: true, palette: "dark", value: darkValue }))));
};
const ProgressBar = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_12__["default"])({ title: 'Progress Bar' });
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_11__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", null, "Progress Bar"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Animated progress bar."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'value',
                            type: 'number',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "If ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                " is given, it is enumerator if not, it is percentage value and can be ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "0"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "100"),
                                "."),
                        },
                        {
                            name: 'totalValue',
                            type: 'number',
                            description: 'Denominator value.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isFilled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Fills blank area with color in ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "backgroundFilled"),
                                "."),
                        },
                        {
                            name: 'isNested',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Sets background to ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "backgroundNested"),
                                " and height to ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "100%"),
                                ".It is useful when Progress Bar is used in another component."),
                        },
                        {
                            name: 'isStriped',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, "Adds striped effect to Progress Bar."),
                        },
                        {
                            name: 'displayValue',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Displays value at the middle of the bar.',
                        },
                        {
                            name: 'prefix',
                            type: 'string',
                            defaultValue: 'i18n.progressBar.prefix',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Prefix value of both ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                "."),
                        },
                        {
                            name: 'suffix',
                            type: 'string',
                            defaultValue: 'i18n.progressBar.suffix',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Suffix value of both ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                ". Defaults to ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "null"),
                                " if ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                " is given."),
                        },
                        {
                            name: 'separator',
                            type: 'string',
                            defaultValue: 'i18n.progressBar.separator',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Separator value between ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                ". Displayed only when ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                " is given."),
                        },
                        {
                            name: 'transitionDuration',
                            type: 'number',
                            defaultValue: '450',
                            description: 'Duration of progress bar transition during value change.',
                        },
                        {
                            name: 'transitionTimingFunction',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/styled-props" }, "StyledProps.TimingFunction"),
                            defaultValue: 'linear',
                        },
                        {
                            name: 'hasStripedAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Adds animation to striped effect.',
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Progress Bar element ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_13__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState(50)
  const [value2, setValue2] = React.useState(50)

  return (
    <>
      <Div
        alignItems="center"
        display="flex"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setValue}
          value={value}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          value={value}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setValue2}
          value={value2}
          width={50}
        />
        <ProgressBar
          elementProps={{
            flex: '1 1 auto',
          }}
          value={value2}
        />
      </Div>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ProgressBarDefaultValueExample, null),
                        title: 'Default Value',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState(50)
  const [value2, setValue2] = React.useState(50)

  return (
    <>
      <Div
        alignItems="center"
        display="flex"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setValue}
          value={value}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          value={value}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setValue2}
          value={value2}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          suffix=""
          totalValue={100}
          value={value2}
        />
      </Div>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ProgressBarTotalValueExample, null),
                        title: 'Total Value',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_13__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState(50)
  const [secondaryValue, setSecondaryValue] = React.useState(50)
  const [successValue, setSuccessValue] = React.useState(50)
  const [dangerValue, setDangerValue] = React.useState(50)
  const [warningValue, setWarningValue] = React.useState(50)
  const [infoValue, setInfoValue] = React.useState(50)
  const [lightValue, setLightValue] = React.useState(50)
  const [darkValue, setDarkValue] = React.useState(50)

  return (
    <>
      <Div
        alignItems="center"
        display="flex"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setPrimaryValue}
          value={primaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          value={primaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="secondary"
          setValue={setSecondaryValue}
          value={secondaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="secondary"
          value={secondaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="success"
          setValue={setSuccessValue}
          value={successValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="success"
          value={successValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="danger"
          setValue={setDangerValue}
          value={dangerValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="danger"
          value={dangerValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="warning"
          setValue={setWarningValue}
          value={warningValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="warning"
          value={warningValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="info"
          setValue={setInfoValue}
          value={infoValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="info"
          value={infoValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="light"
          setValue={setLightValue}
          value={lightValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="light"
          value={lightValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="dark"
          setValue={setDarkValue}
          value={darkValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          palette="dark"
          value={darkValue}
        />
      </Div>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ProgressBarPaletteExample, null),
                        title: 'Palette',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState(50)
  const [secondaryValue, setSecondaryValue] = React.useState(50)
  const [successValue, setSuccessValue] = React.useState(50)
  const [dangerValue, setDangerValue] = React.useState(50)
  const [warningValue, setWarningValue] = React.useState(50)
  const [infoValue, setInfoValue] = React.useState(50)
  const [lightValue, setLightValue] = React.useState(50)
  const [darkValue, setDarkValue] = React.useState(50)

  return (
    <>
      <Div
        alignItems="center"
        display="flex"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setPrimaryValue}
          value={primaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          value={primaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="secondary"
          setValue={setSecondaryValue}
          value={secondaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="secondary"
          value={secondaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="success"
          setValue={setSuccessValue}
          value={successValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="success"
          value={successValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="danger"
          setValue={setDangerValue}
          value={dangerValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="danger"
          value={dangerValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="warning"
          setValue={setWarningValue}
          value={warningValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="warning"
          value={warningValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="info"
          setValue={setInfoValue}
          value={infoValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="info"
          value={infoValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="light"
          setValue={setLightValue}
          value={lightValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="light"
          value={lightValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="dark"
          setValue={setDarkValue}
          value={darkValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isFilled
          palette="dark"
          value={darkValue}
        />
      </Div>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ProgressBarFilledExample, null),
                        title: 'Filled',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_13__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState(50)
  const [secondaryValue, setSecondaryValue] = React.useState(50)
  const [successValue, setSuccessValue] = React.useState(50)
  const [dangerValue, setDangerValue] = React.useState(50)
  const [warningValue, setWarningValue] = React.useState(50)
  const [infoValue, setInfoValue] = React.useState(50)
  const [lightValue, setLightValue] = React.useState(50)
  const [darkValue, setDarkValue] = React.useState(50)

  return (
    <>
      <Div
        alignItems="center"
        display="flex"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setPrimaryValue}
          value={primaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          value={primaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="secondary"
          setValue={setSecondaryValue}
          value={secondaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="secondary"
          value={secondaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="success"
          setValue={setSuccessValue}
          value={successValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="success"
          value={successValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="danger"
          setValue={setDangerValue}
          value={dangerValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="danger"
          value={dangerValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="warning"
          setValue={setWarningValue}
          value={warningValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="warning"
          value={warningValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="info"
          setValue={setInfoValue}
          value={infoValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="info"
          value={infoValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="light"
          setValue={setLightValue}
          value={lightValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="light"
          value={lightValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="dark"
          setValue={setDarkValue}
          value={darkValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          isStriped
          palette="dark"
          value={darkValue}
        />
      </Div>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ProgressBarStripedExample, null),
                        title: 'Striped',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState(50)
  const [secondaryValue, setSecondaryValue] = React.useState(50)
  const [successValue, setSuccessValue] = React.useState(50)
  const [dangerValue, setDangerValue] = React.useState(50)
  const [warningValue, setWarningValue] = React.useState(50)
  const [infoValue, setInfoValue] = React.useState(50)
  const [lightValue, setLightValue] = React.useState(50)
  const [darkValue, setDarkValue] = React.useState(50)

  return (
    <>
      <Div
        alignItems="center"
        display="flex"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          setValue={setPrimaryValue}
          value={primaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          value={primaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="secondary"
          setValue={setSecondaryValue}
          value={secondaryValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="secondary"
          value={secondaryValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="success"
          setValue={setSuccessValue}
          value={successValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="success"
          value={successValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="danger"
          setValue={setDangerValue}
          value={dangerValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="danger"
          value={dangerValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="warning"
          setValue={setWarningValue}
          value={warningValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="warning"
          value={warningValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="info"
          setValue={setInfoValue}
          value={infoValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="info"
          value={infoValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="light"
          setValue={setLightValue}
          value={lightValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="light"
          value={lightValue}
        />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        marginTop="$length.3"
      >
        <InputNumber
          flex="0 0 auto"
          marginRight="$length.3"
          palette="dark"
          setValue={setDarkValue}
          value={darkValue}
          width={50}
        />
        <ProgressBar
          displayValue
          elementProps={{
            flex: '1 1 auto',
          }}
          hasStripedAnimation={false}
          isStriped
          palette="dark"
          value={darkValue}
        />
      </Div>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ProgressBarStripedNoAnimationExample, null),
                        title: 'Striped No Animation',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_4__["default"], { attrs: [
                        {
                            name: 'fontFamily.progressBar',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontSize.progressBar',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'i18n.progressBar.prefix',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Prefix value of both ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                "."),
                        },
                        {
                            name: 'i18n.progressBar.suffix',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Suffix value of both ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                "."),
                        },
                        {
                            name: 'i18n.progressBar.separator',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Separator value between ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                ". Displayed only when ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "totalValue"),
                                " is given."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__["default"], { next: {
                    label: 'Radio',
                    to: '/ui-components/radio',
                }, prev: {
                    label: 'Popover',
                    to: '/ui-components/popover',
                } })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], { list: [
                { label: 'Popover', id: 'popover' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ })

}]);
//# sourceMappingURL=4b1d72222b72700251fe.js.map