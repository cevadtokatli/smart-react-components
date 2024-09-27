"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Select_tsx"],{

/***/ "./src/containers/Select.tsx":
/*!***********************************!*\
  !*** ./src/containers/Select.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Select */ "./node_modules/@smart-react-components/ui/Select/index.js");
/* harmony import */ var _smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Select_SelectAddon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Select/SelectAddon */ "./node_modules/@smart-react-components/ui/Select/SelectAddon.js");
/* harmony import */ var _smart_react_components_ui_Select_SelectAddon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Select_SelectAddon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Select/SelectBox */ "./node_modules/@smart-react-components/ui/Select/SelectBox.js");
/* harmony import */ var _smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Select/Option */ "./node_modules/@smart-react-components/ui/Select/Option.js");
/* harmony import */ var _smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Select/OptionGroup */ "./node_modules/@smart-react-components/ui/Select/OptionGroup.js");
/* harmony import */ var _smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");



















const SelectSingleExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Single", active: value, setActive: setValue },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")));
};
const SelectMultipleExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Multiple", active: value, setActive: setValue },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")));
};
const SelectPaletteExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: false, label: "Primary", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", isOutline: false, label: "Secondary", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", isOutline: false, label: "Success", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", isOutline: false, label: "Danger", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", isOutline: false, label: "Warning", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", isOutline: false, label: "Info", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light", isOutline: false, label: "Light", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark", isOutline: false, label: "Dark", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectOutlineExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Primary", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", label: "Secondary", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", label: "Success", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", label: "Danger", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", label: "Warning", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", label: "Info", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light", label: "Light", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark", label: "Dark", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectSoftExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: false, isSoft: true, label: "Primary", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", isOutline: false, isSoft: true, label: "Secondary", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", isOutline: false, isSoft: true, label: "Success", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", isOutline: false, isSoft: true, label: "Danger", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", isOutline: false, isSoft: true, label: "Warning", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", isOutline: false, isSoft: true, label: "Info", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light", isOutline: false, isSoft: true, label: "Light", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark", isOutline: false, isSoft: true, label: "Dark", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectSoftOutlineExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, label: "Primary", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", isSoft: true, label: "Secondary", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", isSoft: true, label: "Success", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", isSoft: true, label: "Danger", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", isSoft: true, label: "Warning", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", isSoft: true, label: "Info", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light", isSoft: true, label: "Light", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark", isSoft: true, label: "Dark", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectSizeExample = () => {
    const [smallValue, setSmallValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [mediumValue, setMediumValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [largeValue, setLargeValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [responsiveValue, setResponsiveValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", label: "Small", active: smallValue, setActive: setSmallValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Medium", active: mediumValue, setActive: setMediumValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { size: "large", label: "Large", active: largeValue, setActive: setLargeValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", sizeMd: "medium", sizeLg: "large", label: "Responsive", active: responsiveValue, setActive: setResponsiveValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBlockExample = () => {
    const [blockValue, setBlockValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [inlineValue, setInlineValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Block", active: blockValue, setActive: setBlockValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: false, label: "Inline", active: inlineValue, setActive: setInlineValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectShapeExample = () => {
    const [rectangleValue, setRectangleValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [roundedValue, setRoundedValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Rectangle", active: rectangleValue, setActive: setRectangleValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { shape: "rounded", label: "Rounded", active: roundedValue, setActive: setRoundedValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBorderExample = () => {
    const [borderedValue, setBorderedValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [borderlessValue, setBorderlessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Bordered", active: borderedValue, setActive: setBorderedValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { hasBorder: false, label: "Borderless", active: borderlessValue, setActive: setBorderlessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectGroupExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Group", active: value, setActive: setValue },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default()), { label: "Group A" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "A-1" }, "Option A-1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "A-2" }, "Option A-2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "A-3" }, "Option A-3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default()), { label: "Group B" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "B-1" }, "Option B-1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "B-2" }, "Option B-2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "B-3" }, "Option B-3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default()), { label: "Group C" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "C-1" }, "Option C-1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "C-2" }, "Option C-2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "C-3" }, "Option C-3"))));
};
const SelectDisabledExample = () => {
    const [disabledSelectValue, setDisabledSelectValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('1');
    const [disabledOptionValue, setDisabledOptionValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { isDisabled: true, label: "Disabled Select", active: disabledSelectValue, setActive: setDisabledSelectValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { label: "Disabled Option", active: disabledOptionValue, setActive: setDisabledOptionValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1", isDisabled: true }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxSingleExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Single", placeholder: "Single...", active: value, setActive: setValue },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")));
};
const SelectBoxMultiExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Multiple", placeholder: "Multiple...", active: value, setActive: setValue },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")));
};
const SelectBoxPaletteExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { isOutline: false, label: "Primary", placeholder: "Primary...", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "secondary", isOutline: false, label: "Secondary", placeholder: "Secondary...", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "success", isOutline: false, label: "Success", placeholder: "Success...", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "danger", isOutline: false, label: "Danger", placeholder: "Danger...", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "warning", isOutline: false, label: "Warning", placeholder: "Warning...", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "info", isOutline: false, label: "Info", placeholder: "Info...", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "light", isOutline: false, label: "Light", placeholder: "Light...", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "dark", isOutline: false, label: "Dark", placeholder: "Dark...", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxOutlineExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Primary", placeholder: "Primary...", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "secondary", label: "Secondary", placeholder: "Secondary...", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "success", label: "Success", placeholder: "Success...", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "danger", label: "Danger", placeholder: "Danger...", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "warning", label: "Warning", placeholder: "Warning...", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "info", label: "Info", placeholder: "Info...", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "light", label: "Light", placeholder: "Light...", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "dark", label: "Dark", placeholder: "Dark...", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxSoftExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { isOutline: false, isSoft: true, label: "Primary", placeholder: "Primary...", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "secondary", isOutline: false, isSoft: true, label: "Secondary", placeholder: "Secondary...", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "success", isOutline: false, isSoft: true, label: "Success", placeholder: "Success...", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "danger", isOutline: false, isSoft: true, label: "Danger", placeholder: "Danger...", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "warning", isOutline: false, isSoft: true, label: "Warning", placeholder: "Warning...", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "info", isOutline: false, isSoft: true, label: "Info", placeholder: "Info...", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "light", isOutline: false, isSoft: true, label: "Light", placeholder: "Light...", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "dark", isOutline: false, isSoft: true, label: "Dark", placeholder: "Dark...", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxSoftOutlineExample = () => {
    const [primaryValue, setPrimaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [secondaryValue, setSecondaryValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [successValue, setSuccessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [dangerValue, setDangerValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [warningValue, setWarningValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [infoValue, setInfoValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [lightValue, setLightValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [darkValue, setDarkValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { isSoft: true, label: "Primary", placeholder: "Primary...", active: primaryValue, setActive: setPrimaryValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "secondary", isSoft: true, label: "Secondary", placeholder: "Secondary...", active: secondaryValue, setActive: setSecondaryValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "success", isSoft: true, label: "Success", placeholder: "Success...", active: successValue, setActive: setSuccessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "danger", isSoft: true, label: "Danger", placeholder: "Danger...", active: dangerValue, setActive: setDangerValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "warning", isSoft: true, label: "Warning", placeholder: "Warning...", active: warningValue, setActive: setWarningValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "info", isSoft: true, label: "Info", placeholder: "Info...", active: infoValue, setActive: setInfoValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "light", isSoft: true, label: "Light", placeholder: "Light...", active: lightValue, setActive: setLightValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "dark", isSoft: true, label: "Dark", placeholder: "Dark...", active: darkValue, setActive: setDarkValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxSizeExample = () => {
    const [smallValue, setSmallValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [mediumValue, setMediumValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [largeValue, setLargeValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [responsiveValue, setResponsiveValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { size: "small", label: "Small", placeholder: "Small...", active: smallValue, setActive: setSmallValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Medium", placeholder: "Medium...", active: mediumValue, setActive: setMediumValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { size: "large", label: "Large", placeholder: "Large...", active: largeValue, setActive: setLargeValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { size: "small", sizeMd: "medium", sizeLg: "large", label: "Responsive", placeholder: "Responsive...", active: responsiveValue, setActive: setResponsiveValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxBlockExample = () => {
    const [blockValue, setBlockValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [inlineValue, setInlineValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Block", placeholder: "Block...", active: blockValue, setActive: setBlockValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { isBlock: false, label: "Inline", placeholder: "Inline...", active: inlineValue, setActive: setInlineValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxShapeExample = () => {
    const [rectangleValue, setRectangleValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [roundedValue, setRoundedValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Rectangle", placeholder: "Rectangle...", active: rectangleValue, setActive: setRectangleValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { shape: "rounded", label: "Rounded", placeholder: "Rounded...", active: roundedValue, setActive: setRoundedValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxBorderExample = () => {
    const [borderedValue, setBorderedValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [borderlessValue, setBorderlessValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Bordered", placeholder: "Bordered...", active: borderedValue, setActive: setBorderedValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { hasBorder: false, label: "Borderless", placeholder: "Borderless...", active: borderlessValue, setActive: setBorderlessValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectBoxGroupExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Group", placeholder: "Group...", active: value, setActive: setValue },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default()), { label: "Group A" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "A-1" }, "Option A-1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "A-2" }, "Option A-2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "A-3" }, "Option A-3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default()), { label: "Group B" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "B-1" }, "Option B-1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "B-2" }, "Option B-2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "B-3" }, "Option B-3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_OptionGroup__WEBPACK_IMPORTED_MODULE_5___default()), { label: "Group C" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "C-1" }, "Option C-1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "C-2" }, "Option C-2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "C-3" }, "Option C-3"))));
};
const SelectBoxDisabledExample = () => {
    const [disabledSelectValue, setDisabledSelectValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('1');
    const [disabledOptionValue, setDisabledOptionValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { isDisabled: true, label: "Disabled Select", active: disabledSelectValue, setActive: setDisabledSelectValue },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Disabled Option", placeholder: "Disabled Option...", active: disabledOptionValue, setActive: setDisabledOptionValue, marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1", isDisabled: true }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const SelectAddonExample = () => {
    const [selectValue, setSelectValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    const [selectBoxValue, setSelectBoxValue] = react__WEBPACK_IMPORTED_MODULE_6___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select__WEBPACK_IMPORTED_MODULE_1___default()), { active: selectValue, setActive: setSelectValue, label: "Email", leftAddon: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: false },
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }),
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))), rightAddon: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: false }, "@hotmail.com") },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_SelectBox__WEBPACK_IMPORTED_MODULE_3___default()), { active: selectBoxValue, setActive: setSelectBoxValue, label: "Search", placeholder: "Search...", marginTop: "$length.3", rightAddon: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24", fill: "$color.gray500" },
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))) },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "1" }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "2" }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_4___default()), { value: "3" }, "Option 3"))));
};
const Select = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_17__["default"])({ title: 'Select' });
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_16__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_15__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h1", { id: "select" }, "Select"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "Imitates embedded  ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element | JSX.Element[]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option-group" }, "Option Group"),
                                " elements."),
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            isRequired: true,
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Select label.',
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "required"),
                                " attribute."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            defaultValue: 'true',
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
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Select size, has responsive support.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets select as block element.',
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Select shape.',
                        },
                        {
                            name: 'hasBorder',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Adds border to the select.',
                        },
                        {
                            name: 'hasHover',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Enables hover effect on ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Options"),
                                "."),
                        },
                        {
                            name: 'hasWaveEffect',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Enables ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                "."),
                        },
                        {
                            name: 'waveEffectPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " palette item key."),
                        },
                        {
                            name: 'leftAddon',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Left addon element.',
                        },
                        {
                            name: 'rightAddon',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Right addon element.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Select provides ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Select provides ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "forwardRef"),
                    " to the ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return (
    <Select label="Single" active={value} setActive={setValue}>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
      <Option value="3">Option 3</Option>
    </Select>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectSingleExample, null),
                        title: 'Single',
                    }, second: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState<string[]>([])

  return (
    <Select label="Multiple" active={value} setActive={setValue}>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
      <Option value="3">Option 3</Option>
    </Select>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectMultipleExample, null),
                        title: 'Multiple',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <Select isOutline={false} label="Primary" active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="secondary" isOutline={false} label="Secondary" active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="success" isOutline={false} label="Success" active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="danger" isOutline={false} label="Danger" active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="warning" isOutline={false} label="Warning" active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="info" isOutline={false} label="Info" active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="light" isOutline={false} label="Light" active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="dark" isOutline={false} label="Dark" active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectPaletteExample, null),
                        title: 'Palette',
                    }, second: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <Select label="Primary" active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="secondary" label="Secondary" active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="success" label="Success" active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="danger" label="Danger" active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="warning" label="Warning" active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="info" label="Info" active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="light" label="Light" active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="dark" label="Dark" active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  ) 
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectOutlineExample, null),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <Select isOutline={false} isSoft label="Primary" active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="secondary" isOutline={false} isSoft label="Secondary" active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="success" isOutline={false} isSoft label="Success" active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="danger" isOutline={false} isSoft label="Danger" active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="warning" isOutline={false} isSoft label="Warning" active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="info" isOutline={false} isSoft label="Info" active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="light" isOutline={false} isSoft label="Light" active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="dark" isOutline={false} isSoft label="Dark" active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectSoftExample, null),
                        title: 'Soft',
                    }, second: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <Select isSoft label="Primary" active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="secondary" isSoft label="Secondary" active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="success" isSoft label="Success" active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="danger" isSoft label="Danger" active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="warning" isSoft label="Warning" active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="info" isSoft label="Info" active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="light" isSoft label="Light" active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select palette="dark" isSoft label="Dark" active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectSoftOutlineExample, null),
                        title: 'Soft Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [smallValue, setSmallValue] = React.useState('')
  const [mediumValue, setMediumValue] = React.useState('')
  const [largeValue, setLargeValue] = React.useState('')
  const [responsiveValue, setResponsiveValue] = React.useState('')

  return (
    <>
      <Select size="small" label="Small" active={smallValue} setActive={setSmallValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select label="Medium" active={mediumValue} setActive={setMediumValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select size="large" label="Large" active={largeValue} setActive={setLargeValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select size="small" sizeMd="medium" sizeLg="large" label="Responsive" active={responsiveValue} setActive={setResponsiveValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectSizeExample, null),
                        title: 'Size',
                    }, second: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [blockValue, setBlockValue] = React.useState('')
  const [inlineValue, setInlineValue] = React.useState('')

  return (
    <>
      <Select label="Block" active={blockValue} setActive={setBlockValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select isBlock={false} label="Inline" active={inlineValue} setActive={setInlineValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBlockExample, null),
                        title: 'Block',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [rectangleValue, setRectangleValue] = React.useState('')
  const [roundedValue, setRoundedValue] = React.useState('')

  return (
    <>
      <Select label="Rectangle" active={rectangleValue} setActive={setRectangleValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select shape="rounded" label="Rounded" active={roundedValue} setActive={setRoundedValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectShapeExample, null),
                        title: 'Shape',
                    }, second: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [borderedValue, setBorderedValue] = React.useState('')
  const [borderlessValue, setBorderlessValue] = React.useState('')

  return (
    <>
      <Select label="Bordered" active={borderedValue} setActive={setBorderedValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select hasBorder={false} label="Borderless" active={borderlessValue} setActive={setBorderlessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBorderExample, null),
                        title: 'Border',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import OptionGroup from '@smart-react-components/ui/Select/OptionGroup'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return (
    <Select label="Group" active={value} setActive={setValue}>
      <OptionGroup label="Group A">
        <Option value="A-1">Option A-1</Option>
        <Option value="A-2">Option A-2</Option>
        <Option value="A-3">Option A-3</Option>
      </OptionGroup>
      <OptionGroup label="Group B">
        <Option value="B-1">Option B-1</Option>
        <Option value="B-2">Option B-2</Option>
        <Option value="B-3">Option B-3</Option>
      </OptionGroup>
      <OptionGroup label="Group C">
        <Option value="C-1">Option C-1</Option>
        <Option value="C-2">Option C-2</Option>
        <Option value="C-3">Option C-3</Option>
      </OptionGroup>
    </Select>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectGroupExample, null),
                        title: 'Group',
                    }, second: {
                        code: `import Select from '@smart-react-components/ui/Select'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [disabledSelectValue, setDisabledSelectValue] = React.useState('1')
  const [disabledOptionValue, setDisabledOptionValue] = React.useState('')

  return (
    <>
      <Select isDisabled label="Disabled Select" active={disabledSelectValue} setActive={setDisabledSelectValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <Select label="Disabled Option" active={disabledOptionValue} setActive={setDisabledOptionValue} marginTop="$length.3">
        <Option value="1" isDisabled>Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectDisabledExample, null),
                        title: 'Disabled',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "select-box" }, "Select Box"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "Imitates embedded  ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                    " element with options in a dropdown."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element | JSX.Element[]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option-group" }, "Option Group"),
                                " elements."),
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            isRequired: true,
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Select label.',
                        },
                        {
                            name: 'placeholder',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Displayed in the toggle element when ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "active"),
                                " is empty."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "required"),
                                " attribute."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            defaultValue: 'true',
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
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Select size, has responsive support.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets select as block element.',
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Select shape.',
                        },
                        {
                            name: 'hasBorder',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Adds border to the select.',
                        },
                        {
                            name: 'hasHover',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Enables hover effect on ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Options"),
                                "."),
                        },
                        {
                            name: 'hasWaveEffect',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Enables ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                "."),
                        },
                        {
                            name: 'waveEffectPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'light',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " palette item key."),
                        },
                        {
                            name: 'leftAddon',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Left addon element.',
                        },
                        {
                            name: 'rightAddon',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Right addon element.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Select Box provides ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the toggle element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Select Box provides ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "forwardRef"),
                    " to the ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "select"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return (
    <SelectBox label="Single" placeholder="Single..." active={value} setActive={setValue}>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
      <Option value="3">Option 3</Option>
    </SelectBox>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxSingleExample, null),
                        title: 'Single',
                    }, second: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState<string[]>([])

  return (
    <SelectBox label="Multiple" placeholder="Multiple..." active={value} setActive={setValue}>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
      <Option value="3">Option 3</Option>
    </SelectBox>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxMultiExample, null),
                        title: 'Multiple',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <SelectBox isOutline={false} label="Primary" placeholder="Primary..." active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="secondary" isOutline={false} label="Secondary" placeholder="Secondary..." active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="success" isOutline={false} label="Success" placeholder="Success..." active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="danger" isOutline={false} label="Danger" placeholder="Danger..." active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="warning" isOutline={false} label="Warning" placeholder="Warning..." active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="info" isOutline={false} label="Info" placeholder="Info..." active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="light" isOutline={false} label="Light" placeholder="Light..." active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="dark" isOutline={false} label="Dark" placeholder="Dark..." active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxPaletteExample, null),
                        title: 'Palette',
                    }, second: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <SelectBox label="Primary" placeholder="Primary..." active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="secondary" label="Secondary" placeholder="Secondary..." active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="success" label="Success" placeholder="Success..." active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="danger" label="Danger" placeholder="Danger..." active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="warning" label="Warning" placeholder="Warning..." active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="info" label="Info" placeholder="Info..." active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="light" label="Light" placeholder="Light..." active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="dark" label="Dark" placeholder="Dark..." active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxOutlineExample, null),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <SelectBox isOutline={false} isSoft label="Primary" placeholder="Primary..." active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="secondary" isOutline={false} isSoft label="Secondary" placeholder="Secondary..." active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="success" isOutline={false} isSoft label="Success" placeholder="Success..." active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="danger" isOutline={false} isSoft label="Danger" placeholder="Danger..." active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="warning" isOutline={false} isSoft label="Warning" placeholder="Warning..." active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="info" isOutline={false} isSoft label="Info" placeholder="Info..." active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="light" isOutline={false} isSoft label="Light" placeholder="Light..." active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="dark" isOutline={false} isSoft label="Dark" placeholder="Dark..." active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxSoftExample, null),
                        title: 'Soft',
                    }, second: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [primaryValue, setPrimaryValue] = React.useState('')
  const [secondaryValue, setSecondaryValue] = React.useState('')
  const [successValue, setSuccessValue] = React.useState('')
  const [dangerValue, setDangerValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState('')
  const [infoValue, setInfoValue] = React.useState('')
  const [lightValue, setLightValue] = React.useState('')
  const [darkValue, setDarkValue] = React.useState('')

  return (
    <>
      <SelectBox isSoft label="Primary" placeholder="Primary..." active={primaryValue} setActive={setPrimaryValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="secondary" isSoft label="Secondary" placeholder="Secondary..." active={secondaryValue} setActive={setSecondaryValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="success" isSoft label="Success" placeholder="Success..." active={successValue} setActive={setSuccessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="danger" isSoft label="Danger" placeholder="Danger..." active={dangerValue} setActive={setDangerValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="warning"isSoft label="Warning" placeholder="Warning..." active={warningValue} setActive={setWarningValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="info" isSoft label="Info" placeholder="Info..." active={infoValue} setActive={setInfoValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="light" isSoft label="Light" placeholder="Light..." active={lightValue} setActive={setLightValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox palette="dark" isSoft label="Dark" placeholder="Dark..." active={darkValue} setActive={setDarkValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxSoftOutlineExample, null),
                        title: 'Soft Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [smallValue, setSmallValue] = React.useState('')
  const [mediumValue, setMediumValue] = React.useState('')
  const [largeValue, setLargeValue] = React.useState('')
  const [responsiveValue, setResponsiveValue] = React.useState('')

  return (
    <>
      <SelectBox size="small" label="Small" placeholder="Small..." active={smallValue} setActive={setSmallValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox label="Medium" placeholder="Medium..." active={mediumValue} setActive={setMediumValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox size="large" label="Large" placeholder="Large..." active={largeValue} setActive={setLargeValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox size="small" sizeMd="medium" sizeLg="large" label="Responsive" placeholder="Responsive..." active={responsiveValue} setActive={setResponsiveValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxSizeExample, null),
                        title: 'Size',
                    }, second: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [blockValue, setBlockValue] = React.useState('')
  const [inlineValue, setInlineValue] = React.useState('')

  return (
    <>
      <SelectBox label="Block" placeholder="Block..." active={blockValue} setActive={setBlockValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox isBlock={false} label="Inline" placeholder="Inline..." active={inlineValue} setActive={setInlineValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxBlockExample, null),
                        title: 'Block',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [rectangleValue, setRectangleValue] = React.useState('')
  const [roundedValue, setRoundedValue] = React.useState('')

  return (
    <>
      <SelectBox label="Rectangle" placeholder="Rectangle..." active={rectangleValue} setActive={setRectangleValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox shape="rounded" label="Rounded" placeholder="Rounded..." active={roundedValue} setActive={setRoundedValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxShapeExample, null),
                        title: 'Shape',
                    }, second: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [borderedValue, setBorderedValue] = React.useState('')
  const [borderlessValue, setBorderlessValue] = React.useState('')

  return (
    <>
      <SelectBox label="Bordered" placeholder="Bordered..." active={borderedValue} setActive={setBorderedValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox hasBorder={false} label="Borderless" placeholder="Borderless..." active={borderlessValue} setActive={setBorderlessValue} marginTop="$length.3">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxBorderExample, null),
                        title: 'Border',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_18__["default"], { first: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import OptionGroup from '@smart-react-components/ui/Select/OptionGroup'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return (
    <SelectBox label="Group" placeholder="Group..." active={value} setActive={setValue}>
      <OptionGroup label="Group A">
        <Option value="A-1">Option A-1</Option>
        <Option value="A-2">Option A-2</Option>
        <Option value="A-3">Option A-3</Option>
      </OptionGroup>
      <OptionGroup label="Group B">
        <Option value="B-1">Option B-1</Option>
        <Option value="B-2">Option B-2</Option>
        <Option value="B-3">Option B-3</Option>
      </OptionGroup>
      <OptionGroup label="Group C">
        <Option value="C-1">Option C-1</Option>
        <Option value="C-2">Option C-2</Option>
        <Option value="C-3">Option C-3</Option>
      </OptionGroup>
    </SelectBox>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxGroupExample, null),
                        title: 'Group',
                    }, second: {
                        code: `import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [disabledSelectValue, setDisabledSelectValue] = React.useState('1')
  const [disabledOptionValue, setDisabledOptionValue] = React.useState('')

  return (
    <>
      <SelectBox isDisabled label="Disabled Select" active={disabledSelectValue} setActive={setDisabledSelectValue}>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
      <SelectBox label="Disabled Option" placeholder="Disabled Option..." active={disabledOptionValue} setActive={setDisabledOptionValue} marginTop="$length.3">
        <Option value="1" isDisabled>Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectBoxDisabledExample, null),
                        title: 'Disabled',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "select-addon" }, "Select Addon"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "Select Addon is rendered under ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                    ". Each instance can have up to 2 addons as left and right."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Select Addon content.',
                        },
                        {
                            name: 'isSeparated',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets the addon as a seprate element from the select.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            description: 'Removes the background color.',
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            description: 'Uses the soft colors in the palette.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Select Addon provides ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/element-props#click-events" }, "Click Events"),
                    " for the addon element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_9__["default"], { code: `import Svg from '@smart-react-components/core/Element/Svg'
import Select from '@smart-react-components/ui/Select'
import SelectAddon from '@smart-react-components/ui/Select/SelectAddon'
import SelectBox from '@smart-react-components/ui/Select/SelectBox'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => (
  const [selectValue, setSelectValue] = React.useState('')
  const [selectBoxValue, setSelectBoxValue] = React.useState('')

  return (
    <>
      <Select
        active={selectValue}
        setActive={setSelectValue}
        label="Email"
        leftAddon={(
          <SelectAddon isOutline={false}>
            <Svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /><path d="M0 0h24v24H0z" fill="none" />
            </Svg>
          </SelectAddon>
        )}
        rightAddon={<SelectAddon isOutline={false}>@hotmail.com</SelectAddon>}
      >
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
      <SelectBox
        active={selectBoxValue}
        setActive={setSelectBoxValue}
        label="Search"
        placeholder="Search..."
        marginTop="$length.3"
        rightAddon={(
          <Svg viewBox="0 0 24 24" fill="$color.gray500">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" />
          </Svg>
        )}
      >
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </SelectBox>
    </>
)`, output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(SelectAddonExample, null) }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "option" }, "Option"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "option"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Option content.',
                        },
                        {
                            name: 'value',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#value" }, "Value"),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "option"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "value"),
                                " attribute."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "option"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "option-group" }, "Option Group"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "optroup"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element[]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " elements."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Group label.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_7__["default"], { attrs: [
                        {
                            name: 'cursor.inputAddonClickable',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-addon" }, "Select Addon"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "cursor"),
                                " value when it is separated and clickable."),
                        },
                        {
                            name: 'cursor.select',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'cursor.selectBox',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.dropdown',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.form',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.input',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontWeight.dropdownCategory',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option-group" }, "Option Group"),
                                " label ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-weight"),
                                " value."),
                        },
                        {
                            name: 'opacity.dropdownDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'opacity.formDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " toggle element ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'opacity.inputPlaceholder',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "placeholder"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "opacity"),
                                " value."),
                        },
                        {
                            name: 'radius.dropdown',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " dropdown ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                        {
                            name: 'radius.input',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_7__["default"], { attrs: [
                        {
                            name: 'form.blockLabel.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'form.blockLabel.margin',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'dropdown.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'dropdown.margin',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'dropdown.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#option" }, "Option"),
                                " in ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "padding"),
                                " value."),
                        },
                        {
                            name: 'input.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'input.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/select#select" }, "Select"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_13__["default"], { next: {
                    label: 'Switch',
                    to: '/ui-components/switch',
                }, prev: {
                    label: 'Radio',
                    to: '/ui-components/radio',
                } })),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], { list: [
                { label: 'Select', id: 'select' },
                { label: 'Select Box', id: 'select-box' },
                { label: 'Select Addon', id: 'select-addon' },
                { label: 'Option', id: 'option' },
                { label: 'Option Group', id: 'option-group' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ })

}]);
//# sourceMappingURL=d81c60879158a2b9cecc.js.map