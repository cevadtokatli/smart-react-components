"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Textarea_tsx"],{

/***/ "./src/containers/Textarea.tsx":
/*!*************************************!*\
  !*** ./src/containers/Textarea.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/B */ "./node_modules/@smart-react-components/core/Element/B.js");
/* harmony import */ var _smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/P */ "./node_modules/@smart-react-components/core/Element/P.js");
/* harmony import */ var _smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Textarea */ "./node_modules/@smart-react-components/ui/Textarea/index.js");
/* harmony import */ var _smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Textarea_TextareaAddon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Textarea/TextareaAddon */ "./node_modules/@smart-react-components/ui/Textarea/TextareaAddon.js");
/* harmony import */ var _smart_react_components_ui_Textarea_TextareaAddon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Textarea_TextareaAddon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");

















const TextareaStatefulExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_5___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Stateful Textarea...", value: value, setValue: setValue }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1___default()), { marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0___default()), { fontWeight: "$fontWeight.semibold" }, "Textarea :"),
            " ",
            value)));
};
const TextareaStatelessExample = () => {
    const spanEl = react__WEBPACK_IMPORTED_MODULE_5___default().useRef(null);
    const handleChange = e => spanEl.current.innerHTML = e.target.value;
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Stateless Textarea...", onChange: handleChange }),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1___default()), { marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0___default()), { fontWeight: "$fontWeight.semibold" }, "Textarea :"),
            " ",
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", { ref: spanEl }))));
};
const Textarea = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_15__["default"])({ title: 'Textarea' });
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_14__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", { id: "textarea" }, "Textarea"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
                        {
                            name: 'value',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "value"),
                                " attribute."),
                        },
                        {
                            name: 'setValue',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#set-state" }, "SetState"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "value"),
                                "."),
                        },
                        {
                            name: 'defaultValue',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Default value. It is useful for stateless components, ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "onChange"),
                                " is required when the textarea is stateless.")
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Textarea label.',
                        },
                        {
                            name: 'placeholder',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "placeholder"),
                                " attribute."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "disabled"),
                                " attribute."),
                        },
                        {
                            name: 'isReadOnly',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "readonly"),
                                " attribute."),
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "required"),
                                " attribute."),
                        },
                        {
                            name: 'resize',
                            type: 'StyledProps.Resize',
                            defaultValue: 'none',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "resize"),
                                " attribute."),
                        },
                        {
                            name: 'areaMaxHeight',
                            type: 'number',
                            defaultValue: '350',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea resizes the element accoding to ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "value"),
                                ". This prop indicates the max height value it can hold."),
                        },
                        {
                            name: 'areaMinHeight',
                            type: 'number',
                            defaultValue: '150',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea resizes the element accoding to ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "value"),
                                ". This prop indicates the min height value it can hold."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Textarea size, has responsive support.',
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Textarea shape.',
                        },
                        {
                            name: 'hasBorder',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Adds border to the textarea.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Sets the textarea as block element.',
                        },
                        {
                            name: 'leftAddon',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Left addon element.',
                        },
                        {
                            name: 'rightAddon',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                            description: 'Right addon element.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                    "Textarea provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the container element; ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#change-events" }, "ChangeEvents"),
                    ", ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#focus-events" }, "FocusEvents"),
                    ", and ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#keyboard-events" }, "KeyboardEvents"),
                    " for the ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                    "Textarea provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "forwardRef"),
                    " to the ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "textarea"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "textarea-addon" }, "Textarea Addon"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    "Textarea Addon is rendered only under ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/textarea#textarea" }, "Textarea"),
                    ". Each textarea can have up to 2 addons as left and right."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Textarea Addon content.',
                        },
                        {
                            name: 'isSeparated',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets the addon as a seprate element from the textarea.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                    "Textarea Addon provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#click-events" }, "Click Events"),
                    " for the addon element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import B from '@smart-react-components/core/Element/B'
import P from '@smart-react-components/core/Element/P'
import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <Textarea placeholder="Stateful Textarea..." value={value} setValue={setValue} />
      <P marginTop="$length.3"><B fontWeight="$fontWeight.semibold">Textarea :</B> {value}</P>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(TextareaStatefulExample, null),
                        title: 'Stateful Component',
                    }, second: {
                        code: `import B from '@smart-react-components/core/Element/B'
import P from '@smart-react-components/core/Element/P'
import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => {
  const spanEl = React.useRef<HTMLSpanElement>(null)

  const handleChange = e => spanEl.current.innerHTML = e.target.value

  return (
    <>
      <Textarea placeholder="Stateless Textarea..." onChange={handleChange} />
      <P marginTop="$length.3"><B fontWeight="$fontWeight.semibold">Textarea :</B> <span ref={spanEl} /></P>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(TextareaStatelessExample, null),
                        title: 'Stateless Component',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Primary..." isOutline={false} />
    <Textarea placeholder="Secondary..." palette="secondary" isOutline={false} marginTop="$length.3" />
    <Textarea placeholder="Success..." palette="success" isOutline={false} marginTop="$length.3" />
    <Textarea placeholder="Danger..." palette="danger" isOutline={false} marginTop="$length.3" />
    <Textarea placeholder="Warning..." palette="warning" isOutline={false} marginTop="$length.3" />
    <Textarea placeholder="Info..." palette="info" isOutline={false} marginTop="$length.3" />
    <Textarea placeholder="Light..." palette="light" isOutline={false} marginTop="$length.3" />
    <Textarea placeholder="Dark..." palette="dark" isOutline={false} marginTop="$length.3" />
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Primary...", isOutline: false }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Secondary...", palette: "secondary", isOutline: false, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Success...", palette: "success", isOutline: false, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Danger...", palette: "danger", isOutline: false, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Warning...", palette: "warning", isOutline: false, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Info...", palette: "info", isOutline: false, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Light...", palette: "light", isOutline: false, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Dark...", palette: "dark", isOutline: false, marginTop: "$length.3" }))),
                        title: 'Palette',
                    }, second: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Primary..." />
    <Textarea placeholder="Secondary..." palette="secondary" marginTop="$length.3" />
    <Textarea placeholder="Success..." palette="success" marginTop="$length.3" />
    <Textarea placeholder="Danger..." palette="danger" marginTop="$length.3" />
    <Textarea placeholder="Warning..." palette="warning" marginTop="$length.3" />
    <Textarea placeholder="Info..." palette="info" marginTop="$length.3" />
    <Textarea placeholder="Light..." palette="light" marginTop="$length.3" />
    <Textarea placeholder="Dark..." palette="dark" marginTop="$length.3" />      
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Primary..." }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Secondary...", palette: "secondary", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Success...", palette: "success", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Danger...", palette: "danger", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Warning...", palette: "warning", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Info...", palette: "info", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Light...", palette: "light", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Dark...", palette: "dark", marginTop: "$length.3" }))),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Primary..." isOutline={false} isSoft />
    <Textarea placeholder="Secondary..." palette="secondary" isOutline={false} isSoft marginTop="$length.3" />
    <Textarea placeholder="Success..." palette="success" isOutline={false} isSoft marginTop="$length.3" />
    <Textarea placeholder="Danger..." palette="danger" isOutline={false} isSoft marginTop="$length.3" />
    <Textarea placeholder="Warning..." palette="warning" isOutline={false} isSoft marginTop="$length.3" />
    <Textarea placeholder="Info..." palette="info" isOutline={false} isSoft marginTop="$length.3" />
    <Textarea placeholder="Light..." palette="light" isOutline={false} isSoft marginTop="$length.3" />
    <Textarea placeholder="Dark..." palette="dark" isOutline={false} isSoft marginTop="$length.3" />
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Primary...", isOutline: false, isSoft: true }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Secondary...", palette: "secondary", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Success...", palette: "success", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Danger...", palette: "danger", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Warning...", palette: "warning", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Info...", palette: "info", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Light...", palette: "light", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Dark...", palette: "dark", isOutline: false, isSoft: true, marginTop: "$length.3" }))),
                        title: 'Soft',
                    }, second: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Primary..." isSoft />
    <Textarea placeholder="Secondary..." palette="secondary" isSoft marginTop="$length.3" />
    <Textarea placeholder="Success..." palette="success" isSoft marginTop="$length.3" />
    <Textarea placeholder="Danger..." palette="danger" isSoft marginTop="$length.3" />
    <Textarea placeholder="Warning..." palette="warning" isSoft marginTop="$length.3" />
    <Textarea placeholder="Info..." palette="info" isSoft marginTop="$length.3" />
    <Textarea placeholder="Light..." palette="light" isSoft marginTop="$length.3" />
    <Textarea placeholder="Dark..." palette="dark" isSoft marginTop="$length.3" />      
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Primary...", isSoft: true }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Secondary...", palette: "secondary", isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Success...", palette: "success", isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Danger...", palette: "danger", isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Warning...", palette: "warning", isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Info...", palette: "info", isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Light...", palette: "light", isSoft: true, marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Dark...", palette: "dark", isSoft: true, marginTop: "$length.3" }))),
                        title: 'Soft Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Small..." size="small" />
    <Textarea placeholder="Medium..." marginTop="$length.3" />
    <Textarea placeholder="Large..." size="large" marginTop="$length.3" />
    <Textarea placeholder="Responsive..." size="small" sizeMd="medium" sizeLg="large" marginTop="$length.3" />
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Small...", size: "small" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Medium...", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Large...", size: "large", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Responsive...", size: "small", sizeMd: "medium", sizeLg: "large", marginTop: "$length.3" }))),
                        title: 'Size',
                    }, second: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Block..." label="Block" />
    <Textarea placeholder="Inline..." label="Inline" isBlock={false} marginTop="$length.3" />
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Block...", label: "Block" }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Inline...", label: "Inline", isBlock: false, marginTop: "$length.3" }))),
                        title: 'Block',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
<>
  <Textarea placeholder="Rectangle..." />
  <Textarea placeholder="Rounded..." shape="rounded" marginTop="$length.3" />
</>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Rectangle..." }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Rounded...", shape: "rounded", marginTop: "$length.3" }))),
                        title: 'Shape',
                    }, second: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => (
  <>
    <Textarea placeholder="Bordered..." />
    <Textarea placeholder="Borderless..." hasBorder={false} marginTop="$length.3" />
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Bordered..." }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Borderless...", hasBorder: false, marginTop: "$length.3" }))),
                        title: 'Border',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import Svg from '@smart-react-components/core/Element/Svg'
import Textarea from '@smart-react-components/ui/Textarea'
import TextareaAddon from '@smart-react-components/ui/Textarea/TextareaAddon'
import React from 'react'

export default () => (
  <>
    <Textarea
      placeholder="Email..."
      leftAddon={(
        <TextareaAddon isOutline={false}>
          <Svg viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /><path d="M0 0h24v24H0z" fill="none" />
          </Svg>
        </TextareaAddon>
      )}
      rightAddon={<TextareaAddon isOutline={false}>@hotmail.com</TextareaAddon>}
    />
    <Textarea
      placeholder="Search..."
      marginTop="$length.3"
      rightAddon={(
        <Svg viewBox="0 0 24 24" fill="$color.gray500">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" />
        </Svg>
      )}
    />
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Email...", leftAddon: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea_TextareaAddon__WEBPACK_IMPORTED_MODULE_4___default()), { isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_2___default()), { viewBox: "0 0 24 24" },
                                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }),
                                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))), rightAddon: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea_TextareaAddon__WEBPACK_IMPORTED_MODULE_4___default()), { isOutline: false }, "@hotmail.com") }),
                            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Search...", marginTop: "$length.3", rightAddon: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_2___default()), { viewBox: "0 0 24 24", fill: "$color.gray500" },
                                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))) }))),
                        title: 'Addon',
                    }, second: {
                        code: `import Textarea from '@smart-react-components/ui/Textarea'
import React from 'react'

export default () => <Textarea  placeholder="Disabled..." isDisabled />`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Disabled...", isDisabled: true }),
                        title: 'Disabled',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_16__["default"], { attrs: [
                        {
                            name: 'fontFamily.form',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.input',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea ",
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
                            name: 'opacity.inputPlaceholder',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea placeholder ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "opacity"),
                                " value."),
                        },
                        {
                            name: 'radius.input',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_16__["default"], { attrs: [
                        {
                            name: 'cursor.input',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'cursor.inputAddonClickable',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/textarea#textarea-addon" }, "Textarea Addon"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "cursor"),
                                " value when it is separated and clickable."),
                        },
                        {
                            name: 'form.blockLabel.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'form.blockLabel.margin',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'input.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'input.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Textarea ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__["default"], { next: {
                    label: 'Tooltip',
                    to: '/ui-components/tooltip',
                }, prev: {
                    label: 'Table',
                    to: '/ui-components/table',
                } })),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], { list: [
                { label: 'Textarea', id: 'textarea' },
                { label: 'Textarea Addon', id: 'textarea-addon' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ })

}]);
//# sourceMappingURL=2c59dd029464906cfdd6.js.map