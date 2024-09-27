"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Overlay_tsx"],{

/***/ "./src/containers/Overlay.tsx":
/*!************************************!*\
  !*** ./src/containers/Overlay.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/H1 */ "./node_modules/@smart-react-components/core/Element/H1.js");
/* harmony import */ var _smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/transition/CSSTransition */ "./node_modules/@smart-react-components/transition/CSSTransition/index.js");
/* harmony import */ var _smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Overlay */ "./node_modules/@smart-react-components/ui/Overlay/index.js");
/* harmony import */ var _smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");


















const StandardOverlayExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3___default()), { onClick: () => setStatus(true) }, "Standard Overlay"),
        status && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignSelf: "flex-start", background: "$color.dynamic.background", borderRadius: "0.4rem", boxShadow: "0 0 15px 0 rgba(0, 0, 0, .2)", color: "$color.dynamic.bodyFont", display: "flex", fill: "$color.black", flex: "1 1 auto", justifyContent: "space-between", maxWidth: 500, padding: "1rem" },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1___default()), { marginBottom: 0 }, "Standard Overlay"))))));
};
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__.createGlobalStyle) `
  .fade-overlay-show {
    opacity: 0;
  }

  .fade-overlay-show-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-overlay-hide {
    opacity: 1;
  }

  .fade-overlay-hide-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`;
const FadeOverlayExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(GlobalStyle, null),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3___default()), { onClick: () => setStatus(true) }, "Fade Overlay"),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_2___default()), { className: "fade-overlay", duration: 300, status: status },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignSelf: "flex-start", background: "$color.dynamic.background", borderRadius: "0.4rem", boxShadow: "0 0 15px 0 rgba(0, 0, 0, .2)", color: "$color.dynamic.bodyFont", display: "flex", fill: "$color.black", flex: "1 1 auto", justifyContent: "space-between", maxWidth: 500, padding: "1rem" },
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1___default()), { marginBottom: 0 }, "Fade Overlay"))))));
};
const TransparentOverlayExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3___default()), { onClick: () => setStatus(true) }, "Transparent Overlay"),
        status && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4___default()), { hasBackground: false, onClick: () => setStatus(false) },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignSelf: "flex-start", background: "$color.dynamic.background", borderRadius: "0.4rem", boxShadow: "0 0 15px 0 rgba(0, 0, 0, .2)", color: "$color.dynamic.bodyFont", display: "flex", fill: "$color.black", flex: "1 1 auto", justifyContent: "space-between", maxWidth: 500, padding: "1rem" },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1___default()), { marginBottom: 0 }, "Transparent Overlay"))))));
};
const BlurOverlayExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_3___default()), { onClick: () => setStatus(true) }, "Blur Overlay"),
        status && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Overlay__WEBPACK_IMPORTED_MODULE_4___default()), { hasBlurEffect: true, hasBackground: false, onClick: () => setStatus(false) },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignSelf: "flex-start", background: "$color.dynamic.background", borderRadius: "0.4rem", boxShadow: "0 0 15px 0 rgba(0, 0, 0, .2)", color: "$color.dynamic.bodyFont", display: "flex", fill: "$color.black", flex: "1 1 auto", justifyContent: "space-between", maxWidth: 500, padding: "1rem" },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_1___default()), { marginBottom: 0 }, "Blur Overlay"))))));
};
const Overlay = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_16__["default"])({ title: 'Overlay' });
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_15__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_14__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", { id: "overlay" }, "Overlay"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    "Overlay effect which prevents ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "window"),
                    " from scrolling."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_11__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element',
                            isRequired: true,
                            description: 'Overlay content.',
                        },
                        {
                            name: 'hasBackground',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Sets background to ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "color.overlay.background"),
                                "."),
                        },
                        {
                            name: 'hasBlurEffect',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Applies blur effect to other elements in ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "body"),
                                " to emphasize the overlay element and its children. ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "isInBody"),
                                " automatically is set to ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "true"),
                                " when ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "hasBlurEffect"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'isInBody',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Overlay is rendered in ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "body"),
                                " instead of the component tree.")
                        },
                        {
                            name: 'breakpoint',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#breakpoint" }, "Breakpoint"),
                            description: 'When given, displays the overlay when only the window\'s width is equal or smaller than the given breakpoint width.',
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                "Overlay element ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                    "Overlay provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/element-props#click-events" }, "Click Events"),
                    " for the overlay element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                    "Overlay provides ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "forwardRef"),
                    " to the overlay element."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_9__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import H1 from '@smart-react-components/core/Element/H1'
import Button from '@smart-react-components/ui/Button'
import Overlay from '@smart-react-components/ui/Overlay'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Standard Overlay</Button>
      { status && (
        <Overlay onClick={() => setStatus(false)}>
          <Div
            alignSelf="flex-start"
            background="$color.dynamic.background"
            borderRadius="0.4rem"
            boxShadow="0 0 15px 0 rgba(0, 0, 0, .2)"
            color="$color.dynamic.bodyFont"
            display="flex"
            fill="$color.black"
            flex="1 1 auto"
            justifyContent="space-between"
            maxWidth={500}
            padding="1rem"
          >
            <H1 marginBottom={0}>Standard Overlay</H1>
          </Div>
        </Overlay>
      ) }
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(StandardOverlayExample, null),
                        title: 'Standard Overlay',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import H1 from '@smart-react-components/core/Element/H1'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import Button from '@smart-react-components/ui/Button'
import Overlay from '@smart-react-components/ui/Overlay'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  .fade-overlay-show {
    opacity: 0;
  }

  .fade-overlay-show-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-overlay-hide {
    opacity: 1;
  }

  .fade-overlay-hide-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
\`

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <GlobalStyle />
      <Button onClick={() => setStatus(true)}>Fade Overlay</Button>
      <CSSTransition
        className="fade-overlay"
        duration={300}
        status={status}
      >
        <Overlay onClick={() => setStatus(false)}>
          <Div
            alignSelf="flex-start"
            background="$color.dynamic.background"
            borderRadius="0.4rem"
            boxShadow="0 0 15px 0 rgba(0, 0, 0, .2)"
            color="$color.dynamic.bodyFont"
            display="flex"
            fill="$color.black"
            flex="1 1 auto"
            justifyContent="space-between"
            maxWidth={500}
            padding="1rem"
          >
            <H1 marginBottom={0}>Fade Overlay</H1>
          </Div>
        </Overlay>
      </CSSTransition>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(FadeOverlayExample, null),
                        title: 'Fade Overlay'
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_9__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import H1 from '@smart-react-components/core/Element/H1'
import Button from '@smart-react-components/ui/Button'
import Overlay from '@smart-react-components/ui/Overlay'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Transparent Overlay</Button>
      { status && (
        <Overlay hasBackground={false} onClick={() => setStatus(false)}>
          <Div
            alignSelf="flex-start"
            background="$color.dynamic.background"
            borderRadius="0.4rem"
            boxShadow="0 0 15px 0 rgba(0, 0, 0, .2)"
            color="$color.dynamic.bodyFont"
            display="flex"
            fill="$color.black"
            flex="1 1 auto"
            justifyContent="space-between"
            maxWidth={500}
            padding="1rem"
          >
            <H1 marginBottom={0}>Transparent Overlay</H1>
          </Div>
        </Overlay>
      ) }
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(TransparentOverlayExample, null),
                        title: 'Transparent Overlay',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import H1 from '@smart-react-components/core/Element/H1'
import Button from '@smart-react-components/ui/Button'
import Overlay from '@smart-react-components/ui/Overlay'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Blur Overlay</Button>
      { status && (
        <Overlay hasBlurEffect hasBackground={false} onClick={() => setStatus(false)}>
          <Div
            alignSelf="flex-start"
            background="$color.dynamic.background"
            borderRadius="0.4rem"
            boxShadow="0 0 15px 0 rgba(0, 0, 0, .2)"
            color="$color.dynamic.bodyFont"
            display="flex"
            fill="$color.black"
            flex="1 1 auto"
            justifyContent="space-between"
            maxWidth={500}
            padding="1rem"
          >
            <H1 marginBottom={0}>Blur Overlay</H1>
          </Div>
        </Overlay>
      ) }
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(BlurOverlayExample, null),
                        title: 'Blur Overlay',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_6__["default"], { attrs: [
                        {
                            name: 'color.overlay.background',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "background"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "hasBackground"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'length.overlay.space',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "padding"),
                                " value.")
                        },
                        {
                            name: 'zIndex.overlay',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "z-index"),
                                " value.")
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_12__["default"], { next: {
                    label: 'Pagination',
                    to: '/ui-components/pagination',
                }, prev: {
                    label: 'Modal',
                    to: '/ui-components/modal',
                } })),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], { list: [
                { label: 'Overlay', id: 'overlay' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);


/***/ })

}]);
//# sourceMappingURL=5c3156f916358fc7aa85.js.map