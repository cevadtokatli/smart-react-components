"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Input_index_tsx"],{

/***/ "./src/containers/Input/Input.tsx":
/*!****************************************!*\
  !*** ./src/containers/Input/Input.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/B */ "./node_modules/@smart-react-components/core/Element/B.js");
/* harmony import */ var _smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/P */ "./node_modules/@smart-react-components/core/Element/P.js");
/* harmony import */ var _smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Input */ "./node_modules/@smart-react-components/ui/Input/index.js");
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/types */ "./node_modules/@smart-react-components/ui/types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");










const InputStatefulExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('');
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Stateful Input...", value: value, setValue: setValue }),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1___default()), { marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0___default()), { fontWeight: "$fontWeight.semibold" }, "Input :"),
            " ",
            value)));
};
const InputStatelessExample = () => {
    const spanEl = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
    const handleChange = e => spanEl.current.innerHTML = e.target.value;
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Stateless Input...", onChange: handleChange }),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_P__WEBPACK_IMPORTED_MODULE_1___default()), { marginTop: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_B__WEBPACK_IMPORTED_MODULE_0___default()), { fontWeight: "$fontWeight.semibold" }, "Input :"),
            " ",
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", { ref: spanEl }))));
};
const Input = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h1", { id: "input" }, "Input"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "Imitates ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
            {
                name: 'value',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "value"),
                    " attribute."),
            },
            {
                name: 'setValue',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-state" }, "SetState"),
                    "<string>"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "The method that sets ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "value"),
                    "."),
            },
            {
                name: 'defaultValue',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Default value of the input. It is useful for stateless components, ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "onChange"),
                    " is required when the input is stateless.")
            },
            {
                name: 'label',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Input label.',
            },
            {
                name: 'placeholder',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "placeholder"),
                    " attribute."),
            },
            {
                name: 'type',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#input-type" }, "InputType"),
                defaultValue: 'TEXT',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "type"),
                    " attribute."),
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "disabled"),
                    " attribute."),
            },
            {
                name: 'isReadOnly',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "readonly"),
                    " attribute."),
            },
            {
                name: 'isRequired',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "required"),
                    " attribute."),
            },
            {
                name: 'hasSpellCheck',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "spellcheck"),
                    " attribute."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Input size, has responsive support.',
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Input shape.',
            },
            {
                name: 'hasBorder',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Adds border to the input.',
            },
            {
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Sets the input as block element.',
            },
            {
                name: 'template',
                type: 'JSX.Element',
                description: 'Custom template for the input.',
            },
            {
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
            {
                name: 'containerProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Container element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
            {
                name: 'inputProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Input element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], null,
        "Input provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the container element; ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#change-events" }, "ChangeEvents"),
        ", ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#focus-events" }, "FocusEvents"),
        ", and ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#keyboard-events" }, "KeyboardEvents"),
        " for the ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], null,
        "Input provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "forwardRef"),
        " to the ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
            code: `import B from '@smart-react-components/core/Element/B'
import P from '@smart-react-components/core/Element/P'
import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <Input placeholder="Stateful Input..." value={value} setValue={setValue} />
      <P marginTop="$length.3"><B fontWeight="$fontWeight.semibold">Input :</B> {value}</P>
    </>
  )
}`,
            output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InputStatefulExample, null),
            title: 'Stateful Component',
        }, second: {
            code: `import B from '@smart-react-components/core/Element/B'
import P from '@smart-react-components/core/Element/P'
import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => {
  const spanEl = React.useRef<HTMLSpanElement>(null)

  const handleChange = e => spanEl.current.innerHTML = e.target.value

  return (
    <>
      <Input placeholder="Stateless Input..." onChange={handleChange} />
      <P marginTop="$length.3"><B fontWeight="$fontWeight.semibold">Input :</B> <span ref={spanEl} /></P>
    </>
  )
}`,
            output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InputStatelessExample, null),
            title: 'Stateless Component',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'
  
export default () => (
  <>
    <Input placeholder="Primary..." isOutline={false} />
    <Input placeholder="Secondary..." palette="secondary" isOutline={false} marginTop="$length.3" />
    <Input placeholder="Success..." palette="success" isOutline={false} marginTop="$length.3" />
    <Input placeholder="Danger..." palette="danger" isOutline={false} marginTop="$length.3" />
    <Input placeholder="Warning..." palette="warning" isOutline={false} marginTop="$length.3" />
    <Input placeholder="Info..." palette="info" isOutline={false} marginTop="$length.3" />
    <Input placeholder="Light..." palette="light" isOutline={false} marginTop="$length.3" />
    <Input placeholder="Dark..." palette="dark" isOutline={false} marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Primary...", isOutline: false }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Secondary...", palette: "secondary", isOutline: false, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Success...", palette: "success", isOutline: false, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Danger...", palette: "danger", isOutline: false, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Warning...", palette: "warning", isOutline: false, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Info...", palette: "info", isOutline: false, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Light...", palette: "light", isOutline: false, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Dark...", palette: "dark", isOutline: false, marginTop: "$length.3" }))),
            title: 'Palette',
        }, second: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => (
  <>
    <Input placeholder="Primary..." />
    <Input placeholder="Secondary..." palette="secondary" marginTop="$length.3" />
    <Input placeholder="Success..." palette="success" marginTop="$length.3" />
    <Input placeholder="Danger..." palette="danger" marginTop="$length.3" />
    <Input placeholder="Warning..." palette="warning" marginTop="$length.3" />
    <Input placeholder="Info..." palette="info" marginTop="$length.3" />
    <Input placeholder="Light..." palette="light" marginTop="$length.3" />
    <Input placeholder="Dark..." palette="dark" marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Primary..." }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Secondary...", palette: "secondary", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Success...", palette: "success", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Danger...", palette: "danger", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Warning...", palette: "warning", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Info...", palette: "info", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Light...", palette: "light", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Dark...", palette: "dark", marginTop: "$length.3" }))),
            title: 'Outline',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'
  
export default () => (
  <>
    <Input placeholder="Primary..." isOutline={false} isSoft />
    <Input placeholder="Secondary..." palette="secondary" isOutline={false} isSoft marginTop="$length.3" />
    <Input placeholder="Success..." palette="success" isOutline={false} isSoft marginTop="$length.3" />
    <Input placeholder="Danger..." palette="danger" isOutline={false} isSoft marginTop="$length.3" />
    <Input placeholder="Warning..." palette="warning" isOutline={false} isSoft marginTop="$length.3" />
    <Input placeholder="Info..." palette="info" isOutline={false} isSoft marginTop="$length.3" />
    <Input placeholder="Light..." palette="light" isOutline={false} isSoft marginTop="$length.3" />
    <Input placeholder="Dark..." palette="dark" isOutline={false} isSoft marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Primary...", isOutline: false, isSoft: true }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Secondary...", palette: "secondary", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Success...", palette: "success", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Danger...", palette: "danger", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Warning...", palette: "warning", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Info...", palette: "info", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Light...", palette: "light", isOutline: false, isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Dark...", palette: "dark", isOutline: false, isSoft: true, marginTop: "$length.3" }))),
            title: 'Soft',
        }, second: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => (
  <>
    <Input placeholder="Primary..." isSoft />
    <Input placeholder="Secondary..." palette="secondary" isSoft marginTop="$length.3" />
    <Input placeholder="Success..." palette="success" isSoft marginTop="$length.3" />
    <Input placeholder="Danger..." palette="danger" isSoft marginTop="$length.3" />
    <Input placeholder="Warning..." palette="warning" isSoft marginTop="$length.3" />
    <Input placeholder="Info..." palette="info" isSoft marginTop="$length.3" />
    <Input placeholder="Light..." palette="light" isSoft marginTop="$length.3" />
    <Input placeholder="Dark..." palette="dark" isSoft marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Primary...", isSoft: true }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Secondary...", palette: "secondary", isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Success...", palette: "success", isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Danger...", palette: "danger", isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Warning...", palette: "warning", isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Info...", palette: "info", isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Light...", palette: "light", isSoft: true, marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Dark...", palette: "dark", isSoft: true, marginTop: "$length.3" }))),
            title: 'Soft Outline',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => (
  <>
    <Input placeholder="Small..." size="small" />
    <Input placeholder="Medium..." marginTop="$length.3" />
    <Input placeholder="Large..." size="large" marginTop="$length.3" />
    <Input placeholder="Responsive..." size="small" sizeMd="medium" sizeLg="large" marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Small...", size: "small" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Medium...", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Large...", size: "large", marginTop: "$length.3" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Responsive...", size: "small", sizeMd: "medium", sizeLg: "large", marginTop: "$length.3" }))),
            title: 'Size',
        }, second: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => (
  <>
    <Input placeholder="Block..." label="Block" />
    <Input placeholder="Inline..." label="Inline" isBlock={false} marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Block...", label: "Block" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Inline...", label: "Inline", isBlock: false, marginTop: "$length.3" }))),
            title: 'Block',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => (
  <>
    <Input placeholder="Rectangle..." />
    <Input placeholder="Rounded..." shape="rounded" marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Rectangle..." }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Rounded...", shape: "rounded", marginTop: "$length.3" }))),
            title: 'Shape',
        }, second: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => (
  <>
    <Input placeholder="Bordered..." />
    <Input placeholder="Borderless..." hasBorder={false} marginTop="$length.3" />
  </>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Bordered..." }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Borderless...", hasBorder: false, marginTop: "$length.3" }))),
            title: 'Border',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
            code: `import Input from '@smart-react-components/ui/Input'
import { InputType } from '@smart-react-components/ui/types'
import React from 'react'

export default () => <Input placeholder="Password..." type={InputType.PASSWORD} />`,
            output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Password...", type: _smart_react_components_ui_types__WEBPACK_IMPORTED_MODULE_3__.InputType.PASSWORD }),
            title: 'Type',
        }, second: {
            code: `import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => <Input  placeholder="Disabled..." isDisabled />`,
            output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { placeholder: "Disabled...", isDisabled: true }),
            title: 'Disabled',
        } })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/containers/Input/InputAddon.tsx":
/*!*********************************************!*\
  !*** ./src/containers/Input/InputAddon.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Input */ "./node_modules/@smart-react-components/ui/Input/index.js");
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputAddon */ "./node_modules/@smart-react-components/ui/Input/InputAddon.js");
/* harmony import */ var _smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");









const InputAddon = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "input-addon" }, "Input Addon"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
        "Input Addon is rendered only under ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/input#input" }, "Input"),
        ". Each input can have up to 2 addons as left and right."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                isRequired: true,
                description: 'Input Addon content.',
            },
            {
                name: 'isSeparated',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Sets the addon as a seprate element from the input.',
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Input Addon provides ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#click-events" }, "Click Events"),
        " for the addon element."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Svg from '@smart-react-components/core/Element/Svg'
import Input from '@smart-react-components/ui/Input'
import InputAddon from '@smart-react-components/ui/Input/InputAddon'
import React from 'react'

export default () => (
  <>
    <Input
      placeholder="Email..."
      leftAddon={(
        <InputAddon isOutline={false}>
          <Svg viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /><path d="M0 0h24v24H0z" fill="none" />
          </Svg>
        </InputAddon>
      )}
      rightAddon={<InputAddon isOutline={false}>@hotmail.com</InputAddon>}
    />
    <Input
      placeholder="Search..."
      marginTop="$length.3"
      rightAddon={(
        <Svg viewBox="0 0 24 24" fill="$color.gray500">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" />
        </Svg>
      )}
    />
  </>
)`, output: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_1___default()), { placeholder: "Email...", leftAddon: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: false },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))), rightAddon: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: false }, "@hotmail.com") }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_1___default()), { placeholder: "Search...", marginTop: "$length.3", rightAddon: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24", fill: "$color.gray500" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))) }))) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputAddon);


/***/ }),

/***/ "./src/containers/Input/InputColorPicker.tsx":
/*!***************************************************!*\
  !*** ./src/containers/Input/InputColorPicker.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Input_InputColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputColorPicker */ "./node_modules/@smart-react-components/ui/Input/InputColorPicker.js");
/* harmony import */ var _smart_react_components_ui_Input_InputColorPicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputColorPicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputAddon */ "./node_modules/@smart-react-components/ui/Input/InputAddon.js");
/* harmony import */ var _smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");









const InputColorPickerExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('#0F9AEF');
    const [value2, setValue2] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('#0665D0');
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: value, setValue: setValue }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputColorPicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: value2, setValue: setValue2, rightAddon: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: false },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" })))), marginTop: "$length.3" })));
};
const InputColorPicker = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "input-color-picker" }, "Input Color Picker"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
        " element with a color picker in a dropdown."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'value',
                type: 'string',
                isRequired: true,
                description: 'Picker color value.',
            },
            {
                name: 'setValue',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-state" }, "SetState"),
                    "<string>"),
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "The method that sets ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                    "."),
            },
            {
                name: 'label',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Input label.',
            },
            {
                name: 'placeholder',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "placeholder"),
                    " attribute."),
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "disabled"),
                    " attribute."),
            },
            {
                name: 'isRequired',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "required"),
                    " attribute."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Input size, has responsive support.',
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Input shape.',
            },
            {
                name: 'hasBorder',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Adds border to the input.',
            },
            {
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Sets the input as block element.',
            },
            {
                name: 'format',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#color-picker-format" }, "ColorPickerFormat"),
                defaultValue: 'HEX',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
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
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-state" }, "SetState"),
                    "<string[]>"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "The method that sets ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "paletteColors"),
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
            {
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Input Color Picker provides ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the container element; ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#change-events" }, "ChangeEvents"),
        ", ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#focus-events" }, "FocusEvents"),
        ", and ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#keyboard-events" }, "KeyboardEvents"),
        " for the ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Input Color Picker provides ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "forwardRef"),
        " to the ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Svg from '@smart-react-components/core/Element/Svg'
import InputColorPicker from '@smart-react-components/ui/Input/InputColorPicker'
import InputAddon from '@smart-react-components/ui/Input/InputAddon'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState('#0F9AEF')
  const [value2, setValue2] = React.useState('#0665D0')

  return (
    <>
      <InputColorPicker value={value} setValue={setValue} />
      <InputColorPicker
        value={value2}
        setValue={setValue2}
        rightAddon={(
          <InputAddon isOutline={false}>
            <Svg viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </Svg>
          </InputAddon>
        )}
        marginTop="$length.3"
      />
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(InputColorPickerExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputColorPicker);


/***/ }),

/***/ "./src/containers/Input/InputDatePicker.tsx":
/*!**************************************************!*\
  !*** ./src/containers/Input/InputDatePicker.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Input_InputDatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputDatePicker */ "./node_modules/@smart-react-components/ui/Input/InputDatePicker.js");
/* harmony import */ var _smart_react_components_ui_Input_InputDatePicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputDatePicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputAddon */ "./node_modules/@smart-react-components/ui/Input/InputAddon.js");
/* harmony import */ var _smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");









const InputDatePickerExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(new Date());
    const [value2, setValue2] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(new Date());
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputDatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: value, setValue: setValue }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputDatePicker__WEBPACK_IMPORTED_MODULE_1___default()), { value: value2, setValue: setValue2, rightAddon: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Input_InputAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: false },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" })))), marginTop: "$length.3" })));
};
const InputDatePicker = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "input-date-picker" }, "Input Date Picker"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
        " element with a date picker in a dropdown."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'value',
                type: 'Date',
                isRequired: true,
                description: 'Picker date/time value.',
            },
            {
                name: 'setValue',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-state" }, "SetState"),
                    "<Date>"),
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "The method that sets ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "value"),
                    "."),
            },
            {
                name: 'label',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Input label.',
            },
            {
                name: 'placeholder',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "placeholder"),
                    " attribute."),
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "disabled"),
                    " attribute."),
            },
            {
                name: 'isReadOnly',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "readonly"),
                    " attribute."),
            },
            {
                name: 'isRequired',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "required"),
                    " attribute."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Input size, has responsive support.',
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Input shape.',
            },
            {
                name: 'hasBorder',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Adds border to the input.',
            },
            {
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Sets the input as block element.',
            },
            {
                name: 'pickerType',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#date-picker-type" }, "DatePickerType"),
                defaultValue: 'DATE_TIME',
                description: 'Picker type.',
            },
            {
                name: 'timeType',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#date-picker-time-type" }, "DatePickerTimeType"),
                defaultValue: 'T12',
                description: 'Picker time type.',
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
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Input container element ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Input Date Picker provides ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the container element; ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#change-events" }, "ChangeEvents"),
        ", ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#focus-events" }, "FocusEvents"),
        ", and ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#keyboard-events" }, "KeyboardEvents"),
        " for the ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Input Date Picker provides ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "forwardRef"),
        " to the ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_5__["default"], { code: `import Svg from '@smart-react-components/core/Element/Svg'
import InputDatePicker from '@smart-react-components/ui/Input/InputDatePicker'
import InputAddon from '@smart-react-components/ui/Input/InputAddon'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState(new Date())
  const [value2, setValue2] = React.useState(new Date())

  return (
    <>
      <InputDatePicker value={value} setValue={setValue} />
      <InputDatePicker
        value={value2}
        setValue={setValue2}
        rightAddon={(
          <InputAddon isOutline={false}>
            <Svg viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
            </Svg>
          </InputAddon>
        )}
        marginTop="$length.3"
      />
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(InputDatePickerExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputDatePicker);


/***/ }),

/***/ "./src/containers/Input/InputFile.tsx":
/*!********************************************!*\
  !*** ./src/containers/Input/InputFile.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Input_InputFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputFile */ "./node_modules/@smart-react-components/ui/Input/InputFile.js");
/* harmony import */ var _smart_react_components_ui_Input_InputFile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputFile__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");







const InpuFileSingleExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Input_InputFile__WEBPACK_IMPORTED_MODULE_0___default()), { placeholder: "Input File...", value: value, setValue: setValue });
};
const InpuFileMultipleExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Input_InputFile__WEBPACK_IMPORTED_MODULE_0___default()), { placeholder: "Input File...", value: value, setValue: setValue });
};
const InputFile = () => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { id: "input-file" }, "Input File"),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_2__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
        "Imitates ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
        " with ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "type"),
        " ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "file"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_5__["default"], { props: [
            {
                name: 'value',
                type: 'File | File[]',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "value"),
                    " attribute."),
            },
            {
                name: 'setValue',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#set-state" }, "SetState"),
                    "<File | File[]>"),
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    "The method that sets ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "value"),
                    "."),
            },
            {
                name: 'label',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Input label.',
            },
            {
                name: 'placeholder',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "placeholder"),
                    " attribute."),
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "disabled"),
                    " attribute."),
            },
            {
                name: 'isRequired',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "required"),
                    " attribute."),
            },
            {
                name: 'accept',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "accept"),
                    " attribute."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Input size, has responsive support.',
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Input shape.',
            },
            {
                name: 'hasBorder',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Adds border to the input.',
            },
            {
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Sets the input as block element.',
            },
            {
                name: 'template',
                type: 'JSX.Element',
                description: 'Custom template for the input.',
            },
            {
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        "Input File provides ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the container element."),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        "Input File provides ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "forwardRef"),
        " to the ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_4__["default"], { first: {
            code: `import InputFile from '@smart-react-components/ui/Input/InputFile'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState<File>(null)
  
  return <InputFile placeholder="Input File..." value={value} setValue={setValue} />
}`,
            output: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(InpuFileSingleExample, null),
            title: 'Single',
        }, second: {
            code: `import InputFile from '@smart-react-components/ui/Input/InputFile'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState<File[]>([])

  return <InputFile placeholder="Input File..." value={value} setValue={setValue} />
}`,
            output: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(InpuFileMultipleExample, null),
            title: 'Multiple',
        } })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFile);


/***/ }),

/***/ "./src/containers/Input/InputNumber.tsx":
/*!**********************************************!*\
  !*** ./src/containers/Input/InputNumber.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Input/InputNumber */ "./node_modules/@smart-react-components/ui/Input/InputNumber.js");
/* harmony import */ var _smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");







const InputNumberExample = () => {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Input_InputNumber__WEBPACK_IMPORTED_MODULE_0___default()), { value: value, setValue: setValue });
};
const InputNumber = () => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { id: "input-number" }, "Input Number"),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_2__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
        "Imitates ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
        " with ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "type"),
        " ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "number"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_4__["default"], { props: [
            {
                name: 'value',
                type: 'number',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "value"),
                    " attribute."),
            },
            {
                name: 'setValue',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#set-state" }, "SetState"),
                    "<number>"),
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    "The method that sets ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "value"),
                    "."),
            },
            {
                name: 'defaultValue',
                type: 'number',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    "Default value of the input. It is useful for stateless components, ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "onChange"),
                    " is required when the input is stateless.")
            },
            {
                name: 'label',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Input label.',
            },
            {
                name: 'placeholder',
                type: 'string',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "placeholder"),
                    " attribute."),
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "disabled"),
                    " attribute."),
            },
            {
                name: 'isReadOnly',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "readonly"),
                    " attribute."),
            },
            {
                name: 'isRequired',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "required"),
                    " attribute."),
            },
            {
                name: 'max',
                type: 'number',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "max"),
                    " attribute."),
            },
            {
                name: 'min',
                type: 'number',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "min"),
                    " attribute."),
            },
            {
                name: 'step',
                type: 'number',
                description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "step"),
                    " attribute."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Input size, has responsive support.',
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Input shape.',
            },
            {
                name: 'hasBorder',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Adds border to the input.',
            },
            {
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Sets the input as block element.',
            },
            {
                name: 'template',
                type: 'JSX.Element',
                description: 'Custom template for the input.',
            },
            {
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_5__["default"], null,
        "Input Number provides ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the container element; ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#change-events" }, "ChangeEvents"),
        ", ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#focus-events" }, "FocusEvents"),
        ", and ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#keyboard-events" }, "KeyboardEvents"),
        " for the ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_5__["default"], null,
        "Input Number provides ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "forwardRef"),
        " to the ",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, "input"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_6__["default"], { code: `import InputNumber from '@smart-react-components/ui/Input/InputNumber'
import React from 'react'

export default () => {
  const [value, setValue] = React.useState(0)

  return <InputNumber value={value} setValue={setValue} />
}`, output: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(InputNumberExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputNumber);


/***/ }),

/***/ "./src/containers/Input/index.tsx":
/*!****************************************!*\
  !*** ./src/containers/Input/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./src/containers/Input/Input.tsx");
/* harmony import */ var _InputAddon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputAddon */ "./src/containers/Input/InputAddon.tsx");
/* harmony import */ var _InputColorPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InputColorPicker */ "./src/containers/Input/InputColorPicker.tsx");
/* harmony import */ var _InputDatePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InputDatePicker */ "./src/containers/Input/InputDatePicker.tsx");
/* harmony import */ var _InputFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InputFile */ "./src/containers/Input/InputFile.tsx");
/* harmony import */ var _InputNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InputNumber */ "./src/containers/Input/InputNumber.tsx");














const Input = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_7__["default"])({ title: 'Input' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputNumber__WEBPACK_IMPORTED_MODULE_13__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputFile__WEBPACK_IMPORTED_MODULE_12__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputColorPicker__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputDatePicker__WEBPACK_IMPORTED_MODULE_11__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputAddon__WEBPACK_IMPORTED_MODULE_9__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__["default"], { attrs: [
                        {
                            name: 'fontFamily.form',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.input',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Input ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'opacity.formDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'opacity.inputPlaceholder',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Input placeholder ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "opacity"),
                                " value."),
                        },
                        {
                            name: 'radius.input',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__["default"], { attrs: [
                        {
                            name: 'cursor.input',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'cursor.inputAddonClickable',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/ui-components/input#input-addon" }, "Input Addon"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value when it is separated and clickable."),
                        },
                        {
                            name: 'cursor.inputFile',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Label in ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/ui-components/input#input-file" }, "Input File"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'form.blockLabel.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'form.blockLabel.margin',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Label ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'input.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Input ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'input.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Input ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__["default"], { next: {
                    label: 'Loading',
                    to: '/ui-components/loading',
                }, prev: {
                    label: 'Grid',
                    to: '/ui-components/grid',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], { list: [
                { label: 'Input', id: 'input' },
                { label: 'Input Number', id: 'input-number' },
                { label: 'Input File', id: 'input-file' },
                { label: 'Input Color Picker', id: 'input-color-picker' },
                { label: 'Input Date Picker', id: 'input-date-picker' },
                { label: 'Input Addon', id: 'input-addon' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

}]);
//# sourceMappingURL=71797bc3542114940a98.js.map