"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_ElementProps_tsx"],{

/***/ "./src/containers/ElementProps.tsx":
/*!*****************************************!*\
  !*** ./src/containers/ElementProps.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _elements_Ul__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/Ul */ "./src/elements/Ul.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");









const ElementProps = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_8__["default"])({ title: 'Element Props' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { id: "element-props" }, "Element Props"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                    "Most of the SRC components are React components however it still renders one core Styled component. Element props are shortcuts that allow users to give ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_1__["default"], { to: "/styled-props" }, "Styled Props"),
                    ", HTML attributes, and events directly to the core Styled component."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "change-events" }, "Change Events"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onChange:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.ChangeEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onInput:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.ChangeEvent<HTMLElement>) => void"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "click-events" }, "Click Events"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                    "Click Events is the combination of ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_1__["default"], { to: "/element-props#mouse-click-events" }, "Mouse Click Events"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_1__["default"], { to: "/element-props#touch-click-events" }, "Touch Click Events"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "focus-events" }, "Focus Events"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onBlur:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.FocusEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onFocus:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.FocusEvent<HTMLElement>) => void"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                    "Intrinsic Styled Props is the combination of ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_1__["default"], { to: "/element-props#intrinsic-styled-flex-props" }, "Intrinsic Styled Flex Props"),
                    ", ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_1__["default"], { to: "/element-props#intrinsic-styled-margin-props" }, "Intrinsic Styled Margin Props"),
                    ", and ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_1__["default"], { to: "/element-props#intrinsic-styled-size-props" }, "Intrinsic Styled Size Props"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "intrinsic-styled-flex-props" }, "Intrinsic Styled Flex Props"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "alignSelf:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.AlignSelf")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "flex:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Flex")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "flexBasis:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.FlexBasis")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "flexGrow:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.FlexGrow")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "flexShrink:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.FlexShrink")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "order:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Order"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "intrinsic-styled-margin-props" }, "Intrinsic Styled Margin Props"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "margin:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginBlock:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginBlockEnd:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginBlockStart:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginBottom:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginHorizontal:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginInline:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginInlineEnd:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginInlineStart:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginLeft:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginRight:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginTop:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "marginVertical:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Margin"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "intrinsic-styled-position-props" }, "Intrinsic Styled Position Props"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "bottom:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Bottom")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "left:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Left")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "position:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Position")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "right:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Right")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "top:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Top"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "intrinsic-styled-size-props" }, "Intrinsic Styled Size Props"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "height:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Size")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "maxHeight:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Size")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "maxWidth:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Size")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "minHeight:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Size")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "minWidth:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Size")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "width:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "StyledProps.Size"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "keyboard-events" }, "Keyboard Events"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onKeyDown:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.KeyboardEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onKeyUp:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.KeyboardEvent<HTMLElement>) => void"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "mouse-click-events" }, "Mouse Click Events"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onClick:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.MouseEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onContextMenu:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.MouseEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onDblClick:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.MouseEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onMouseDown:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.MouseEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onMouseUp:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.MouseEvent<HTMLElement>) => void"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "touch-click-events" }, "Touch Click Events"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onTouchEnd:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.TouchEvent<HTMLElement>) => void")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "onTouchStart:"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "(e: React.TouchEvent<HTMLElement>) => void")))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_3__["default"], { next: {
                    label: 'Alert',
                    to: '/ui-components/alert',
                }, prev: {
                    label: 'Element',
                    to: '/element',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], { list: [
                { label: 'Element Props', id: 'element-props' },
                { label: 'Change Events', id: 'change-events' },
                { label: 'Click Events', id: 'click-events' },
                { label: 'Focus Events', id: 'focus-events' },
                { label: 'Intrinsic Styled Core Props', id: 'intrinsic-styled-core-props' },
                { label: 'Intrinsic Styled Flex Props', id: 'intrinsic-styled-flex-props' },
                { label: 'Intrinsic Styled Margin Props', id: 'intrinsic-styled-margin-props' },
                { label: 'Intrinsic Styled Position Props', id: 'intrinsic-styled-position-props' },
                { label: 'Intrinsic Styled Size Props', id: 'intrinsic-styled-size-props' },
                { label: 'Keyboard Events', id: 'keyboard-events' },
                { label: 'Mouse Click Events', id: 'mouse-click-events' },
                { label: 'Touch Click Events', id: 'touch-click-events' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementProps);


/***/ })

}]);
//# sourceMappingURL=058366ce8257c9421562.js.map