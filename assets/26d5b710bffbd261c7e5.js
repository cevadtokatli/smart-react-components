"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Switch_tsx"],{

/***/ "./src/containers/Switch.tsx":
/*!***********************************!*\
  !*** ./src/containers/Switch.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Switch */ "./node_modules/@smart-react-components/ui/Switch/index.js");
/* harmony import */ var _smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Switch/SwitchGroup */ "./node_modules/@smart-react-components/ui/Switch/SwitchGroup.js");
/* harmony import */ var _smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");














const SwitchPaletteExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Dark", palette: "dark", value: "dark" })));
};
const SwitchOutlineExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, label: "Dark", palette: "dark", value: "dark" })));
};
const SwitchSoftExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, label: "Dark", palette: "dark", value: "dark" })));
};
const SwitchSoftOutlineExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, isOutline: true, label: "Dark", palette: "dark", value: "dark" })));
};
const SwitchSizeExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { size: "small", label: "Small", value: "small" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Medium", value: "medium" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { size: "large", label: "Large", value: "large" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { size: "small", sizeMd: "medium", sizeLg: "large", label: "Responsive", value: "responsive" })));
};
const SwitchBlockExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: true, active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Switch-1", value: "1" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Switch-2", value: "2" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Switch-3", value: "3" })));
};
const SwitchDisabledExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(['success', 'danger']);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isDisabled: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isDisabled: true, isOutline: true, label: "Secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isDisabled: true, palette: "success", label: "Success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { isDisabled: true, palette: "danger", isOutline: true, label: "Danger", value: "danger" })));
};
const SwitchPositionExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch_SwitchGroup__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { position: _smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0__.Position.LEFT, label: "Left", value: "left" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Switch__WEBPACK_IMPORTED_MODULE_0___default()), { label: "Right", value: "right" })));
};
const Switch = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_12__["default"])({ title: 'Switch' });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_11__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", { id: "switch" }, "Switch"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                    " with ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "type=\"Switch\"")),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
                        {
                            name: 'value',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "value"),
                                " attribute.")
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'isChecked',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "checked"),
                                " attribute."),
                        },
                        {
                            name: 'setChecked',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#set-state" }, "SetState"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isChecked"),
                                "."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Switch label.',
                        },
                        {
                            name: 'name',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "name"),
                                " attribute."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "required"),
                                " attribute."),
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
                            description: 'Switch size, has responsive support.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets switch as block element.',
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#order-position" }, "OrderPosition"),
                            defaultValue: 'RIGHT',
                            description: 'Label position on the switch.',
                        },
                        {
                            name: 'template',
                            type: 'JSX.Element',
                            description: 'Custom template for the switch.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    "Switch provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the container element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    "Switch provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "forwardRef"),
                    " to the ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "input"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "switch-group" }, "Switch Group"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    "Takes ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switches"),
                    " as children."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element[]',
                            isRequired: true,
                            description: 'Switch elements.',
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'name',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "name"),
                                " prop."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isRequired"),
                                " prop."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "palette"),
                                " prop."),
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isOutline"),
                                " prop."),
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isSoft"),
                                " prop."),
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "size"),
                                " prop."),
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isBlock"),
                                " prop."),
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#order-position" }, "OrderPosition"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "position"),
                                " prop."),
                        },
                        {
                            name: 'template',
                            type: 'JSX.Element',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/switch#switch" }, "Switch"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "template"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    "Switch Group provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the group element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_13__["default"], { first: {
                        code: `import Switch from '@smart-react-components/ui/Switch'
import SwitchGroup from '@smart-react-components/ui/Switch/SwitchGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch label="Primary" value="primary" />
      <Switch label="Secondary" palette="secondary" value="secondary" />
      <Switch label="Success" palette="success" value="success" />
      <Switch label="Danger" palette="danger" value="danger" />
      <Switch label="Warning" palette="warning" value="warning" />
      <Switch label="Info" palette="info" value="info" />
      <Switch label="Light" palette="light" value="light" />
      <Switch label="Dark" palette="dark" value="dark" />
    </SwitchGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SwitchPaletteExample, null),
                        title: 'Palette',
                    }, second: {
                        code: `import Switch from '@smart-react-components/ui/Switch'
import SwitchGroup from '@smart-react-components/ui/Switch/SwitchGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch isOutline label="Primary" value="primary" />
      <Switch isOutline label="Secondary" palette="secondary" value="secondary" />
      <Switch isOutline label="Success" palette="success" value="success" />
      <Switch isOutline label="Danger" palette="danger" value="danger" />
      <Switch isOutline label="Warning" palette="warning" value="warning" />
      <Switch isOutline label="Info" palette="info" value="info" />
      <Switch isOutline label="Light" palette="light" value="light" />
      <Switch isOutline label="Dark" palette="dark" value="dark" />
    </SwitchGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SwitchOutlineExample, null),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_13__["default"], { first: {
                        code: `import Switch from '@smart-react-components/ui/Switch'
import SwitchGroup from '@smart-react-components/ui/Switch/SwitchGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch size="small" label="Small" value="small" />
      <Switch label="Medium" value="medium" />
      <Switch size="large" label="Large" value="large" />
      <Switch size="small" sizeMd="medium" sizeLg="large" label="Responsive" value="responsive" />
    </SwitchGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SwitchSizeExample, null),
                        title: 'Size',
                    }, second: {
                        code: `import Switch from '@smart-react-components/ui/Switch'
import SwitchGroup from '@smart-react-components/ui/Switch/SwitchGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <SwitchGroup isBlock active={active} setActive={setActive}>
      <Switch label="Switch-1" value="1" />
      <Switch label="Switch-2" value="2" />
      <Switch label="Switch-3" value="3" />
    </SwitchGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SwitchBlockExample, null),
                        title: 'Block',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_13__["default"], { first: {
                        code: `import Switch from '@smart-react-components/ui/Switch'
import SwitchGroup from '@smart-react-components/ui/Switch/SwitchGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState(['success', 'danger'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <SwitchComponent isDisabled label="Primary" value="primary" />
      <SwitchComponent isDisabled isOutline label="Secondary" value="secondary" />
      <SwitchComponent isDisabled palette="success" label="Success" value="success" />
      <SwitchComponent isDisabled palette="danger" isOutline label="Danger" value="danger" />
    </SwitchGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SwitchDisabledExample, null),
                        title: 'Disabled',
                    }, second: {
                        code: `import Switch, { Position } from '@smart-react-components/ui/Switch'
import SwitchGroup from '@smart-react-components/ui/Switch/SwitchGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch position={Position.LEFT} label="Left" value="left" />
      <Switch label="Right" value="right" />
    </SwitchGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SwitchPositionExample, null),
                        title: 'Position',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'cursor.formInlineLabel',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.form',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'opacity.formDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "true"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'form.inlineLabel.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'form.inlineLabel.margin',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'switch.height',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Switch ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                                " value."),
                        },
                        {
                            name: 'switch.width',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Switch ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_8__["default"], { next: {
                    label: 'Table',
                    to: '/ui-components/table',
                }, prev: {
                    label: 'Select',
                    to: '/ui-components/select',
                } })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], { list: [
                { label: 'Switch', id: 'switch' },
                { label: 'Switch Group', id: 'switch-group' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);


/***/ })

}]);
//# sourceMappingURL=26d5b710bffbd261c7e5.js.map