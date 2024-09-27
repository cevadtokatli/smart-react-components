"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_WaveEffect_tsx"],{

/***/ "./src/containers/WaveEffect.tsx":
/*!***************************************!*\
  !*** ./src/containers/WaveEffect.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/WaveEffect */ "./node_modules/@smart-react-components/ui/WaveEffect/index.js");
/* harmony import */ var _smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");















const Button = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()) `
  border-radius: .25rem;
  cursor: default;
  font-size: .875rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: .45rem .9rem;
  transition: 300ms ease-in-out;
`;
const WaveEffect = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_12__["default"])({ title: 'Wave Effect' });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_11__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", { id: "wave-effect" }, "Wave Effect"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    "Wave Effect doesn't render any visible UI element. It animates the wave/ripple effect when ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "children"),
                    " is clicked on."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "children"),
                    " element should either be extended from SRC Element components or provide ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "onMouseDown"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "onTouchStart"),
                    " props and attach them to the trigger DOM element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element',
                            isRequired: true,
                            description: 'The effected trigger element.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'light',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'duration',
                            type: 'number',
                            defaultValue: 'transition.waveEffectDuration',
                            description: 'Effect duration in milliseconds.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    "Wave Effect provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "forwardRef"),
                    " to ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "children"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_13__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import WaveEffect from '@smart-react-components/ui/WaveEffect'
import React from 'react'
import styled from 'styled-components'

const Button = styled(Div)\`
  border-radius: .25rem;
  cursor: default;
  font-size: .875rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: .45rem .9rem;
  transition: 300ms ease-in-out;
\`

export default () => (
  <Div display="flex" flexWrap="wrap" margin="0 -1rem -1rem 0">
    <WaveEffect>
      <Button background="!primary" color="!primary.font" hover={{ background: '!primary.dark' }}>Light</Button>
    </WaveEffect>
    <WaveEffect palette="dark">
      <Button background="!light" color="!light.font" hover={{ background: '!light.dark' }}>Dark</Button>
    </WaveEffect>
    <WaveEffect palette="primary">
      <Button>Primary</Button>
    </WaveEffect>
    <WaveEffect palette="secondary">
      <Button>Secondary</Button>
    </WaveEffect>
    <WaveEffect palette="success">
      <Button>Success</Button>
    </WaveEffect>
    <WaveEffect palette="danger">
      <Button>Danger</Button>
    </WaveEffect>
    <WaveEffect palette="warning">
      <Button>Warning</Button>
    </WaveEffect>
    <WaveEffect palette="info">
      <Button>Info</Button>
    </WaveEffect>
  </Div>
)`, output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", flexWrap: "wrap", margin: "0 -1rem -1rem 0" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, { background: "!primary", color: "!primary.font", hover: { background: '!primary.dark' } }, "Light")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, { background: "!light", color: "!light.font", hover: { background: '!light.dark' } }, "Dark")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "primary" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "Primary")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "Secondary")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "Success")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "Danger")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "Warning")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_WaveEffect__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "Info"))) }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'transition.waveEffectDuration',
                            type: 'number',
                            description: 'Effect duration in milliseconds.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "palette-attributes" }, "Palette Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'waveEffect',
                            type: 'string',
                            description: 'Effect color',
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_8__["default"], { next: {
                    label: 'Transition',
                    to: '/transition',
                }, prev: {
                    label: 'Tooltip',
                    to: '/ui-components/tooltip',
                } })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], { list: [
                { label: 'Wave Effect', id: 'wave-effect' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Palette Attributes', id: 'palette-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WaveEffect);


/***/ })

}]);
//# sourceMappingURL=555bbc3a4f99e3dff3cf.js.map