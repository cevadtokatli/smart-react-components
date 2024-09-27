"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Checkbox_tsx"],{

/***/ "./src/containers/Checkbox.tsx":
/*!*************************************!*\
  !*** ./src/containers/Checkbox.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Checkbox */ "./node_modules/@smart-react-components/ui/Checkbox/index.js");
/* harmony import */ var _smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Checkbox_CheckboxAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Checkbox/CheckboxAll */ "./node_modules/@smart-react-components/ui/Checkbox/CheckboxAll.js");
/* harmony import */ var _smart_react_components_ui_Checkbox_CheckboxAll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Checkbox_CheckboxAll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Checkbox/CheckboxGroup */ "./node_modules/@smart-react-components/ui/Checkbox/CheckboxGroup.js");
/* harmony import */ var _smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");



















const CheckboxPaletteExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Dark", palette: "dark", value: "dark" })));
};
const CheckboxOutlineExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, label: "Dark", palette: "dark", value: "dark" })));
};
const CheckboxSoftExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, label: "Dark", palette: "dark", value: "dark" })));
};
const CheckboxSoftOutlineExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Secondary", palette: "secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Success", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Warning", palette: "warning", value: "warning" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Info", palette: "info", value: "info" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Light", palette: "light", value: "light" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, isOutline: true, label: "Dark", palette: "dark", value: "dark" })));
};
const CheckboxSizeExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small", label: "Small", value: "small" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Medium", value: "medium" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { size: "large", label: "Large", value: "large" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small", sizeMd: "medium", sizeLg: "large", label: "Responsive", value: "responsive" })));
};
const CheckboxBlockExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { isBlock: true, active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Checkbox-1", value: "1" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Checkbox-2", value: "2" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Checkbox-3", value: "3" })));
};
const CheckboxShapeExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Rectangle", value: "rectangle" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { shape: "rounded", label: "Rounded", value: "rounded" })));
};
const CheckboxDisabledExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(['success', 'danger']);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isDisabled: true, label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isDisabled: true, isOutline: true, label: "Secondary", value: "secondary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isDisabled: true, palette: "success", label: "Success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { isDisabled: true, palette: "danger", isOutline: true, label: "Danger", value: "danger" })));
};
const CheckboxPositionExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { position: _smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2__.Position.LEFT, label: "Left", value: "left" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Right", value: "right" })));
};
const CheckboxIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__["default"])(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()).attrs(({ isChecked, palette }) => ({
    children: react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }),
    fill: isChecked ? `!${palette}` : '$color.dynamic.accent',
    transform: `rotate(${isChecked ? 0 : -90}deg)`,
    transition: '.2s ease-in-out',
    viewBox: '0 0 24 24',
    width: 20,
})) ``;
const CheckboxTemplate = ({ children, isChecked, palette }) => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex" },
    children,
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxIcon, { isChecked: isChecked, palette: palette })));
const CheckboxTemplateExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { template: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxTemplate, null), label: "Primary", value: "primary" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { template: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxTemplate, null), label: "Sucess", palette: "success", value: "success" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { template: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxTemplate, null), label: "Danger", palette: "danger", value: "danger" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { template: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxTemplate, null), label: "Warning", palette: "warning", value: "warning" })));
};
const CheckboxAllExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4___default()), { isBlock: true, active: active, setActive: setActive },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox_CheckboxAll__WEBPACK_IMPORTED_MODULE_3___default()), { label: "All", items: ['1', '2', '3', '4', '5'], active: active, setActive: setActive }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Item-1", value: "1" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Item-2", value: "2" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Item-3", value: "3" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Item-4", value: "4" }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Checkbox__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Item-5", value: "5" })));
};
const Checkbox = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_17__["default"])({ title: 'Checkbox' });
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_16__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_15__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", { id: "Checkbox" }, "Checkbox"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                    " with ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "type=\"checkbox\"")),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'value',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "value"),
                                " attribute.")
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'isChecked',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "checked"),
                                " attribute."),
                        },
                        {
                            name: 'setChecked',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#set-state" }, "SetState"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isChecked"),
                                "."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Checkbox label.',
                        },
                        {
                            name: 'name',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "name"),
                                " attribute."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "required"),
                                " attribute."),
                        },
                        {
                            name: 'isIndeterminate',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets the checkbox as indeterminate.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Checkbox size, has responsive support.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets checkbox as block element.',
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Checkbox shape.',
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#order-position" }, "OrderPosition"),
                            defaultValue: 'RIGHT',
                            description: 'Label position on the checkbox.',
                        },
                        {
                            name: 'template',
                            type: 'JSX.Element',
                            description: 'Custom template for the checkbox.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Checkbox provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the container element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Checkbox provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "forwardRef"),
                    " to the ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "checkbox-all" }, "Checkbox All"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    "Checkbox All acts like a parent to a group of ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkboxes"),
                    ". It checks all children ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkboxes"),
                    " or unchecks them when clicked on according to its status."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                    " provides two different status; checked and unchecked. On the other hand, Checkbox All provides an additional status as indeterminate to indicate that some of items are checked."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'items',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            isRequired: true,
                            description: 'Children values.',
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Checkbox label.',
                        },
                        {
                            name: 'name',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "name"),
                                " attribute."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Checkbox size, has responsive support.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets checkbox as block element.',
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Checkbox shape.',
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#order-position" }, "OrderPosition"),
                            defaultValue: 'RIGHT',
                            description: 'Label position on the checkbox.',
                        },
                        {
                            name: 'template',
                            type: 'JSX.Element',
                            description: 'Custom template for the checkbox.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Checkbox All provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the container element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Checkbox All provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "forwardRef"),
                    " to the ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "input"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "checkbox-group" }, "Checkbox Group"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    "Takes ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkboxes"),
                    " as children."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element[]',
                            isRequired: true,
                            description: 'Checkbox elements.',
                        },
                        {
                            name: 'active',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]"),
                            description: 'Active values.',
                        },
                        {
                            name: 'setActive',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#set-state" }, "SetState"),
                                "<",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#form-value" }, "FormValue"),
                                "[]>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "active"),
                                "."),
                        },
                        {
                            name: 'name',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "name"),
                                " prop."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isRequired"),
                                " prop."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "palette"),
                                " prop."),
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isOutline"),
                                " prop."),
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isSoft"),
                                " prop."),
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "size"),
                                " prop."),
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isBlock"),
                                " prop."),
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#order-position" }, "OrderPosition"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "position"),
                                " prop."),
                        },
                        {
                            name: 'template',
                            type: 'JSX.Element',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/checkbox#checkbox" }, "Checkbox"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "template"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                    "Checkbox Group provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the group element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_10__["default"], { first: {
                        code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox label="Primary" value="primary" />
      <Checkbox label="Secondary" palette="secondary" value="secondary" />
      <Checkbox label="Success" palette="success" value="success" />
      <Checkbox label="Danger" palette="danger" value="danger" />
      <Checkbox label="Warning" palette="warning" value="warning" />
      <Checkbox label="Info" palette="info" value="info" />
      <Checkbox label="Light" palette="light" value="light" />
      <Checkbox label="Dark" palette="dark" value="dark" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxPaletteExample, null),
                        title: 'Palette',
                    }, second: {
                        code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox isOutline label="Primary" value="primary" />
      <Checkbox isOutline label="Secondary" palette="secondary" value="secondary" />
      <Checkbox isOutline label="Success" palette="success" value="success" />
      <Checkbox isOutline label="Danger" palette="danger" value="danger" />
      <Checkbox isOutline label="Warning" palette="warning" value="warning" />
      <Checkbox isOutline label="Info" palette="info" value="info" />
      <Checkbox isOutline label="Light" palette="light" value="light" />
      <Checkbox isOutline label="Dark" palette="dark" value="dark" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxOutlineExample, null),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_10__["default"], { first: {
                        code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox size="small" label="Small" value="small" />
      <Checkbox label="Medium" value="medium" />
      <Checkbox size="large" label="Large" value="large" />
      <Checkbox size="small" sizeMd="medium" sizeLg="large" label="Responsive" value="responsive" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxSizeExample, null),
                        title: 'Size',
                    }, second: {
                        code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup isBlock active={active} setActive={setActive}>
      <Checkbox label="Checkbox-1" value="1" />
      <Checkbox label="Checkbox-2" value="2" />
      <Checkbox label="Checkbox-3" value="3" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxBlockExample, null),
                        title: 'Block',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_10__["default"], { first: {
                        code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox label="Rectangle" value="rectangle" />
      <Checkbox shape="rounded" label="Rounded" value="rounded" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxShapeExample, null),
                        title: 'Shape',
                    }, second: {
                        code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState(['success', 'danger'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <CheckboxComponent isDisabled label="Primary" value="primary" />
      <CheckboxComponent isDisabled isOutline label="Secondary" value="secondary" />
      <CheckboxComponent isDisabled palette="success" label="Success" value="success" />
      <CheckboxComponent isDisabled palette="danger" isOutline label="Danger" value="danger" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxDisabledExample, null),
                        title: 'Disabled',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_10__["default"], { first: {
                        code: `import Checkbox, { Position } from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox position={Position.LEFT} label="Left" value="left" />
      <Checkbox label="Right" value="right" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxPositionExample, null),
                        title: 'Position',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Svg from '@smart-react-components/core/Element/Svg'
import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

const CheckboxIcon = styled(Svg).attrs(({ isChecked, palette }) => ({
  children: <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />,
  fill: isChecked ? \`!\${palette}\` : '$color.dynamic.accent',
  transform: \`rotate(\${isChecked ? 0 : -90}deg)\`,
  transition: '.2s ease-in-out',
  viewBox: '0 0 24 24',
  width: 20,
}))\`\`

const CheckboxTemplate: React.FC<any> = ({ children, isChecked, palette }) => (
  <Div display="flex"> 
    { children }
    <CheckboxIcon isChecked={isChecked} palette={palette} />
  </Div>
)

const CheckboxTemplateExample = () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox template={<CheckboxTemplate />} label="Primary" value="primary" />
      <Checkbox template={<CheckboxTemplate />} label="Sucess" palette="success" value="success" />
      <Checkbox template={<CheckboxTemplate />} label="Danger" palette="danger" value="danger" />
      <Checkbox template={<CheckboxTemplate />} label="Warning" palette="warning" value="warning" />
    </CheckboxGroup>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxTemplateExample, null),
                        title: 'Template',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import Checkbox from '@smart-react-components/ui/Checkbox'
import CheckboxAll from '@smart-react-components/ui/Checkbox/CheckboxAll'
import CheckboxGroup from '@smart-react-components/ui/Checkbox/CheckboxGroup'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string[]>([])

  return (
    <CheckboxGroup isBlock active={active} setActive={setActive}>
      <CheckboxAll label="All" items={['1', '2', '3', '4', '5']} active={active} setActive={setActive} />
      <Checkbox label="Item-1" value="1" />
      <Checkbox label="Item-2" value="2" />
      <Checkbox label="Item-3" value="3" />
      <Checkbox label="Item-4" value="4" />
      <Checkbox label="Item-5" value="5" />
    </CheckboxGroup>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(CheckboxAllExample, null), title: "All" }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_6__["default"], { attrs: [
                        {
                            name: 'cursor.formInlineLabel',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.form',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'opacity.formDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'radius.checkbox',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_6__["default"], { attrs: [
                        {
                            name: 'form.inlineLabel.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'form.inlineLabel.margin',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'checkbox',
                            type: 'string',
                            description: 'Checkbox size.',
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_13__["default"], { next: {
                    label: 'Color Picker',
                    to: '/ui-components/color-picker',
                }, prev: {
                    label: 'Button',
                    to: '/ui-components/button',
                } })),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], { list: [
                { label: 'Checkbox', id: 'checkbox' },
                { label: 'Checkbox All', id: 'checkbox-all' },
                { label: 'Checkbox Group', id: 'checkbox-group' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ })

}]);
//# sourceMappingURL=7db06d42f608340a395f.js.map