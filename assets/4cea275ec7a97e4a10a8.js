"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Transition_index_tsx"],{

/***/ "./src/containers/Transition/CSSTransition.tsx":
/*!*****************************************************!*\
  !*** ./src/containers/Transition/CSSTransition.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/CSSTransition */ "./node_modules/@smart-react-components/transition/CSSTransition/index.js");
/* harmony import */ var _smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Table */ "./node_modules/@smart-react-components/ui/Table/index.js");
/* harmony import */ var _smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Table/Tbody */ "./node_modules/@smart-react-components/ui/Table/Tbody.js");
/* harmony import */ var _smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Table/Td */ "./node_modules/@smart-react-components/ui/Table/Td.js");
/* harmony import */ var _smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smart-react-components/ui/Table/Th */ "./node_modules/@smart-react-components/ui/Table/Th.js");
/* harmony import */ var _smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smart-react-components/ui/Table/Thead */ "./node_modules/@smart-react-components/ui/Table/Thead.js");
/* harmony import */ var _smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smart-react-components/ui/Table/Tr */ "./node_modules/@smart-react-components/ui/Table/Tr.js");
/* harmony import */ var _smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");















const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__.createGlobalStyle) `
  .fade-show {
    opacity: 0;
  }

  .fade-show-active {
    opacity: 1;
    transition: opacity 400ms ease-in-out;
  }

  .fade-hide {
    opacity: 1;
  }

  .fade-hide-active {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }

  .fade2-show-active {
    animation: fade 450ms 0s 1 normal ease-in-out;
  }

  .fade2-hide-active {
    animation: fade 450ms 0s 1 reverse ease-in-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
const CSSTransitionExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_9___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement(GlobalStyle, null),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setStatus(!status) }, "Toggle"),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default()), { className: "fade", duration: 400, status: status },
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", background: "!success", borderRadius: 4, color: "!success.font", display: "flex", height: 200, justifyContent: "center", marginTop: "$length.3", width: 200 }, "Box Element"))));
};
const CSSTransitionAnimationExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_9___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement(GlobalStyle, null),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setStatus(!status) }, "Toggle"),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default()), { className: "fade2", duration: 400, status: status },
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", background: "!danger", borderRadius: 4, color: "!danger.font", display: "flex", height: 200, justifyContent: "center", marginTop: "$length.3", width: 200 }, "Box Element"))));
};
const CSSTransition = () => (react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h2", { id: "css-transition" }, "CSS Transition"),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null, "CSS Transition uses CSS classes to display transitions."),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_13__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element',
                isRequired: true,
                description: 'Component to be animated.',
            },
            {
                name: 'status',
                type: 'boolean',
                isRequired: true,
                description: 'Component display status.',
            },
            {
                name: 'className',
                type: 'string',
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                    "CSS transition ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    " prefix."),
            },
            {
                name: 'duration',
                type: 'number',
                isRequired: true,
                description: 'CSS transition duration in milliseconds.',
            },
            {
                name: 'isPreserved',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Doesn\'t unmount the component and keep it in DOM.',
            },
            {
                name: 'hasShowAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                    "When ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "false"),
                    ", skips the show animation."),
            },
            {
                name: 'hasHideAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                    "When ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "false"),
                    ", skips the hide animation."),
            },
            {
                name: 'beforeShow',
                type: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
            },
            {
                name: 'beforeHide',
                type: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: 'Called before the hide transition is started.',
            },
            {
                name: 'afterShow',
                type: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: 'Called after the show transition is completed.',
            },
            {
                name: 'afterHide',
                type: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h3", null, "CSS Classes"),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3___default()), { marginBottom: 16 },
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7___default()), null,
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), { palette: "dynamic", isEven: true },
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "Name"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "Description"))),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    "-show"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    "It is assigned to the element when ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "status"),
                    " becomes ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "true"),
                    ".")),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    "-show-active"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    "It is assigned to the element after ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    "-show is assigned. Transition references should take place in this class.")),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    "-hide"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    "It is assigned to the element when ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "status"),
                    " becomes ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "false"),
                    ".")),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    "-hide-active"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null,
                    "It is assigned to the element after ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "className"),
                    "-hide is assigned. Transition references should take place in this class.")))),
    react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
            code: `import Div from '@smart-react-components/core/Element/Div'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import Button from '@smart-react-components/ui/Button'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  .fade-show {
    opacity: 0;
  }

  .fade-show-active {
    opacity: 1;
    transition: opacity 400ms ease-in-out;
  }

  .fade-hide {
    opacity: 1;
  }

  .fade-hide-active {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
\`

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <GlobalStyle />
      <Button onClick={() => setStatus(!status)}>Toggle</Button>
      <CSSTransition
        className="fade"
        duration={400}
        status={status}
      >
        <Div
          alignItems="center"
          background="!success"
          borderRadius={4}
          color="!success.font"
          display="flex"
          height={200}
          justifyContent="center"
          marginTop="$length.3"
          width={200}
        >
          Box Element
        </Div>
      </CSSTransition>
    </>
  )
}`,
            output: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(CSSTransitionExample, null),
            title: 'Custom Transition',
        }, second: {
            code: `import Div from '@smart-react-components/core/Element/Div'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import Button from '@smart-react-components/ui/Button'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  .fade-show-active {
    animation: fade 450ms 0s 1 normal ease-in-out;
  }

  .fade-hide-active {
    animation: fade 450ms 0s 1 reverse ease-in-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
\`

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <GlobalStyle />
      <Button onClick={() => setStatus(!status)}>Toggle</Button>
      <CSSTransition
        className="fade"
        duration={400}
        status={status}
      >
        <Div
          alignItems="center"
          background="!danger"
          borderRadius={4}
          color="!danger.font"
          display="flex"
          height={200}
          justifyContent="center"
          marginTop="$length.3"
          width={200}
        >
          Box Element
        </Div>
      </CSSTransition>
    </>
  )
}`,
            output: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(CSSTransitionAnimationExample, null),
            title: 'Custom Animation',
        } })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSTransition);


/***/ }),

/***/ "./src/containers/Transition/CSSTransitionGroup.tsx":
/*!**********************************************************!*\
  !*** ./src/containers/Transition/CSSTransitionGroup.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_transition_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/CSSTransitionGroup */ "./node_modules/@smart-react-components/transition/CSSTransitionGroup/index.js");
/* harmony import */ var _smart_react_components_transition_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Input */ "./node_modules/@smart-react-components/ui/Input/index.js");
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const CSSTransitionGroupExample = () => {
    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('');
    const addItem = () => {
        if (value.trim() && !list.includes(value)) {
            setList([...list, value]);
            setValue('');
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Name", setValue: setValue, value: value }),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { isBlock: true, marginTop: "$length.3", onClick: addItem }, "Add"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_transition_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default()), { className: "fade", duration: 400 }, list.map(item => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", background: "!warning", borderRadius: 4, color: "!warning.font", display: "flex", key: item, justifyContent: "space-between", marginTop: "$length.3", padding: "{length.2} {length.3}" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, item),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { cursor: "default", onClick: () => setList(list.filter(i => i !== item)) }, "\u274C")))))));
};
const CSSTransitionGroup = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "css-transition-group" }, "CSS Transition Group"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "CSS Transition Group uses CSS classes to handle animations asynchronously for its children components. It's similar to ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/transition#transition-group" }, "Transition Group"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: 'Components to be animated.',
            },
            {
                name: 'className',
                type: 'string',
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "CSS transition ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "className"),
                    " prefix."),
            },
            {
                name: 'duration',
                type: 'number',
                isRequired: true,
                description: 'CSS transition duration in milliseconds.',
            },
            {
                name: 'hasShowAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "When ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "false"),
                    ", skips the show animation."),
            },
            {
                name: 'hasHideAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "When ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "false"),
                    ", skips the hide animation."),
            },
            {
                name: 'beforeShow',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
            },
            {
                name: 'beforeHide',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: 'Called before the hide transition is started.',
            },
            {
                name: 'afterShow',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: 'Called after the show transition is completed.',
            },
            {
                name: 'afterHide',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import CSSTransitionGroup from '@smart-react-components/transition/CSSTransitionGroup'
import Button from '@smart-react-components/ui/Button'
import Input from '@smart-react-components/ui/Input'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  .fade-show {
    opacity: 0;
  }

  .fade-show-active {
    opacity: 1;
    transition: opacity 400ms ease-in-out;
  }

  .fade-hide {
    opacity: 1;
  }

  .fade-hide-active {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
\`

export default () => {
  const [list, setList] = React.useState<string[]>([])
  const [value, setValue] = React.useState('')

  const addItem = () => {
    if (value.trim() && !list.includes(value)) {
      setList([...list, value])
      setValue('')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Input placeholder="Name" setValue={setValue} value={value} />
      <Button isBlock marginTop="$length.3" onClick={addItem}>Add</Button>
      <CSSTransitionGroup className="fade" duration={400}>
        {list.map(item => (
          <Div
            alignItems="center"
            background="!warning"
            borderRadius={4}
            color="!warning.font"
            display="flex"
            key={item}
            justifyContent="space-between"
            marginTop="$length.3"
            padding="{length.2} {length.3}"
          >
            <span>{ item }</span>
            <Div
              cursor="default"
              onClick={() => setList(list.filter(i => i !== item))}
            >
              ❌
            </Div>
          </Div>
        ))}
      </CSSTransitionGroup>
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(CSSTransitionGroupExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSTransitionGroup);


/***/ }),

/***/ "./src/containers/Transition/CSSTransitionSwitch.tsx":
/*!***********************************************************!*\
  !*** ./src/containers/Transition/CSSTransitionSwitch.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_transition_CSSTransitionSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/CSSTransitionSwitch */ "./node_modules/@smart-react-components/transition/CSSTransitionSwitch/index.js");
/* harmony import */ var _smart_react_components_transition_CSSTransitionSwitch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_CSSTransitionSwitch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const Box = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()) `
  border-radius: .25rem;
  height: 200px;
  width: 200px;
`;
const CSSTransitionSwitchExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('primary');
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", marginBottom: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setActive('primary') }, "Primary"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setActive('success'), marginLeft: "$length.3", palette: "success" }, "Success"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setActive('danger'), marginLeft: "$length.3", palette: "danger" }, "Danger")),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_transition_CSSTransitionSwitch__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, className: "fade", duration: 400 },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Box, { backgroundColor: "!primary", key: "primary" }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Box, { backgroundColor: "!success", key: "success" }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Box, { backgroundColor: "!danger", key: "danger" }))));
};
const CSSTransitionSwitch = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "css-transition-switch" }, "CSS Transition Switch"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
        "CSS Transition Switch works like ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/transition#transition-switch" }, "Transition Switch"),
        " but uses the CSS classes to operate animations just like ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/transition#css-transition" }, "CSS Transition"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: 'Components to be animated.',
            },
            {
                name: 'active',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#value" }, "Value"),
                isRequired: true,
                description: 'The active component key.',
            },
            {
                name: 'className',
                type: 'string',
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "CSS transition ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "className"),
                    " prefix."),
            },
            {
                name: 'duration',
                type: 'number',
                isRequired: true,
                description: 'CSS transition duration in milliseconds.',
            },
            {
                name: 'isPreserved',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Doesn\'t unmount the component and keep it in DOM.',
            },
            {
                name: 'hasShowAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "When ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "false"),
                    ", skips the show animation."),
            },
            {
                name: 'hasHideAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "When ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "false"),
                    ", skips the hide animation."),
            },
            {
                name: 'beforeShow',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
            },
            {
                name: 'beforeHide',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: 'Called before the hide transition is started.',
            },
            {
                name: 'afterShow',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: 'Called after the show transition is completed.',
            },
            {
                name: 'afterHide',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_7__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import CSSTransitionSwitch from '@smart-react-components/transition/CSSTransitionSwitch'
import Button from '@smart-react-components/ui/Button'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  .fade-show {
    opacity: 0;
  }

  .fade-show-active {
    opacity: 1;
    transition: opacity 400ms ease-in-out;
  }

  .fade-hide {
    opacity: 1;
  }

  .fade-hide-active {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
\`

const Box = styled(Div)\`
  border-radius: .25rem;
  height: 200px;
  width: 200px;
\`

export default () => {
  const [active, setActive] = React.useState('primary')

  return (
    <>
      <Div display="flex" marginBottom="$length.3">
        <Button onClick={() => setActive('primary')}>Primary</Button>
        <Button onClick={() => setActive('success')} marginLeft="$length.3" palette="success">Success</Button>
        <Button onClick={() => setActive('danger')} marginLeft="$length.3" palette="danger">Danger</Button>
      </Div>
      <CSSTransitionSwitch active={active} className="fade" duration={400}>
        <Box backgroundColor="!primary" key="primary" />
        <Box backgroundColor="!success" key="success" />
        <Box backgroundColor="!danger" key="danger" />
      </CSSTransitionSwitch>
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(CSSTransitionSwitchExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSTransitionSwitch);


/***/ }),

/***/ "./src/containers/Transition/Transition.tsx":
/*!**************************************************!*\
  !*** ./src/containers/Transition/Transition.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/transition/Transition */ "./node_modules/@smart-react-components/transition/Transition/index.js");
/* harmony import */ var _smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");








const TransitionExample = ({ isPreserved }) => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const show = el => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            el.style.opacity = '0';
            let ignored = el.offsetWidth;
            el.style.transition = 'opacity 300ms 0s ease-in-out';
            el.style.opacity = '1';
            setTimeout(resolve, 300);
        });
    });
    const hide = el => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            el.style.opacity = '1';
            let ignored = el.offsetWidth;
            el.style.transition = 'opacity 300ms 0s ease-in-out';
            el.style.opacity = '0';
            setTimeout(resolve, 300);
        });
    });
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { onClick: () => setStatus(!status) }, "Toggle"),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_2___default()), { isPreserved: isPreserved, status: status, show: show, hide: hide },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { marginTop: "$length.3" },
                "This element is ",
                isPreserved ? 'not' : '',
                " removed from the DOM after the animation."))));
};
const Transition = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", null, "Transition"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
        "Transition provides callbacks that return ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "Promise"),
        " to display custom transitions."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element',
                isRequired: true,
                description: 'Component to be animated.',
            },
            {
                name: 'status',
                type: 'boolean',
                isRequired: true,
                description: 'Component display status.',
            },
            {
                name: 'isPreserved',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Doesn\'t unmount the component and keep it in DOM.',
            },
            {
                name: 'beforShow',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called before ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "show"),
                    " method is called; right after the component is mounted and element is rendered in the DOM.")
            },
            {
                name: 'beforeHide',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called before ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "hide"),
                    " method is called."),
            },
            {
                name: 'show',
                type: '(el: HTMLElement) => Promise<void>',
                description: 'The method where the show animation is occured.',
            },
            {
                name: 'hide',
                type: '(el: HTMLElement) => Promise<void>',
                description: 'The method where the hide animation is occured.',
            },
            {
                name: 'afterShow',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called after ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "show"),
                    " method is resolved."),
            },
            {
                name: 'afterHide',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called after ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "hide"),
                    " method is resolved; the component is unmounted and element is removed from the DOM."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
            code: `import Div from '@smart-react-components/core/Element/Div'
import Transition from '@smart-react-components/transition/Transition'
import Button from '@smart-react-components/ui/Button'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  const show = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '0'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '1'
      setTimeout(resolve, 300)
    })
  })

  const hide = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '1'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '0'
      setTimeout(resolve, 300)
    })
  })

  return (
    <>
      <Button onClick={() => setStatus(!status)}>Toggle</Button>
      <Transition status={status} show={show} hide={hide}>
        <Div marginTop="$length.3">This element is removed from the DOM after the animation.</Div>
      </Transition>
    </>
  )
}`,
            output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(TransitionExample, { isPreserved: false }),
        }, second: {
            code: `import Div from '@smart-react-components/core/Element/Div'
import Button from '@smart-react-components/ui/Button'
import Transition from '@smart-react-components/transition/Transition'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  const show = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '0'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '1'
      setTimeout(resolve, 300)
    })
  c})

  const hide = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '1'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '0'
      setTimeout(resolve, 300)
    })
  })

  return (
    <>
      <Button onClick={() => setStatus(!status)}>Toggle</Button>
      <Transition isPreserved status={status} show={show} hide={hide}>
        <Div marginTop="$length.3">This element is not removed from the DOM after the animation.</Div>
      </Transition>
    </>
  )
}`,
            title: 'Is Preserved',
            output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(TransitionExample, { isPreserved: true }),
        } })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);


/***/ }),

/***/ "./src/containers/Transition/TransitionGroup.tsx":
/*!*******************************************************!*\
  !*** ./src/containers/Transition/TransitionGroup.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_transition_TransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/TransitionGroup */ "./node_modules/@smart-react-components/transition/TransitionGroup/index.js");
/* harmony import */ var _smart_react_components_transition_TransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_TransitionGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Input */ "./node_modules/@smart-react-components/ui/Input/index.js");
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const TransitionGroupExample = () => {
    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('');
    const show = el => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            el.style.opacity = '0';
            let ignored = el.offsetWidth;
            el.style.transition = 'opacity 300ms 0s ease-in-out';
            el.style.opacity = '1';
            setTimeout(resolve, 300);
        });
    });
    const hide = el => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            el.style.opacity = '1';
            let ignored = el.offsetWidth;
            el.style.transition = 'opacity 300ms 0s ease-in-out';
            el.style.opacity = '0';
            setTimeout(resolve, 300);
        });
    });
    const addItem = () => {
        if (value.trim() && !list.includes(value)) {
            setList([...list, value]);
            setValue('');
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_3___default()), { placeholder: "Name", setValue: setValue, value: value }),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { isBlock: true, marginTop: "$length.3", onClick: addItem }, "Add"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_transition_TransitionGroup__WEBPACK_IMPORTED_MODULE_1___default()), { hide: hide, show: show }, list.map(item => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", background: "!warning", borderRadius: 4, color: "!warning.font", display: "flex", key: item, justifyContent: "space-between", marginTop: "$length.3", padding: "{length.2} {length.3}" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, item),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { cursor: "default", onClick: () => setList(list.filter(i => i !== item)) }, "\u274C")))))));
};
const TransitionGroup = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "transition-group" }, "Transition Group"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Transition Group handles animations asynchronously for its children components."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: 'Components to be animated.',
            },
            {
                name: 'beforShow',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Called before ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "show"),
                    " method is called; right after the component is mounted and element is rendered in the DOM.")
            },
            {
                name: 'beforeHide',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Called before ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hide"),
                    " method is called."),
            },
            {
                name: 'show',
                type: '(el: HTMLElement) => Promise<void>',
                description: 'The method where the show animation is occured.',
            },
            {
                name: 'hide',
                type: '(el: HTMLElement) => Promise<void>',
                description: 'The method where the hide animation is occured.',
            },
            {
                name: 'afterShow',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Called after ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "show"),
                    " method is resolved."),
            },
            {
                name: 'afterHide',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Called after ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hide"),
                    " method is resolved; the component is unmounted and element is removed from the DOM."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import TransitionGroup from '@smart-react-components/transition/TransitionGroup'
import Button from '@smart-react-components/ui/Button'
import Input from '@smart-react-components/ui/Input'
import React from 'react'

export default () => {
  const [list, setList] = React.useState<string[]>([])
  const [value, setValue] = React.useState('')

  const show = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '0'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '1'
      setTimeout(resolve, 300)
    })
  })

  const hide = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '1'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '0'
      setTimeout(resolve, 300)
    })
  })

  const addItem = () => {
    if (value.trim() && !list.includes(value)) {
      setList([...list, value])
      setValue('')
    }
  }

  return (
    <>
      <Input placeholder="Name" setValue={setValue} value={value} />
      <Button isBlock marginTop="$length.3" onClick={addItem}>Add</Button>
      <TransitionGroup hide={hide} show={show}>
        {list.map(item => (
          <Div
            alignItems="center"
            background="!warning"
            borderRadius={4}
            color="!warning.font"
            display="flex"
            key={item}
            justifyContent="space-between"
            marginTop="$length.3"
            padding="{length.2} {length.3}"
          >
            <span>{ item }</span>
            <Div
              cursor="default"
              onClick={() => setList(list.filter(i => i !== item))}
            >
              ❌
            </Div>
          </Div>
        ))}
      </TransitionGroup>
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(TransitionGroupExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionGroup);


/***/ }),

/***/ "./src/containers/Transition/TransitionSwitch.tsx":
/*!********************************************************!*\
  !*** ./src/containers/Transition/TransitionSwitch.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_transition_TransitionSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/TransitionSwitch */ "./node_modules/@smart-react-components/transition/TransitionSwitch/index.js");
/* harmony import */ var _smart_react_components_transition_TransitionSwitch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_TransitionSwitch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const Box = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()) `
  border-radius: .25rem;
  height: 200px;
  width: 200px;
`;
const TransitionSwitchExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('primary');
    const show = el => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            el.style.opacity = '0';
            let ignored = el.offsetWidth;
            el.style.transition = 'opacity 300ms 0s ease-in-out';
            el.style.opacity = '1';
            setTimeout(resolve, 300);
        });
    });
    const hide = el => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            el.style.opacity = '1';
            let ignored = el.offsetWidth;
            el.style.transition = 'opacity 300ms 0s ease-in-out';
            el.style.opacity = '0';
            setTimeout(resolve, 300);
        });
    });
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", marginBottom: "$length.3" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setActive('primary') }, "Primary"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setActive('success'), marginLeft: "$length.3", palette: "success" }, "Success"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), { onClick: () => setActive('danger'), marginLeft: "$length.3", palette: "danger" }, "Danger")),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_transition_TransitionSwitch__WEBPACK_IMPORTED_MODULE_1___default()), { active: active, hide: hide, show: show },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Box, { backgroundColor: "!primary", key: "primary" }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Box, { backgroundColor: "!success", key: "success" }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Box, { backgroundColor: "!danger", key: "danger" }))));
};
const TransitionSwitch = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "transition-switch" }, "Transition Switch"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Transition Switch takes components as its children and renders the active component. When the active component is changed, it firsts triggers the hide animation for the current component, then triggers the show animation for the new active component in a row."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Each child element should have a key for the switch component to use in checking the component activeness status."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: 'Components to be animated.',
            },
            {
                name: 'active',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#value" }, "Value"),
                isRequired: true,
                description: 'The active component key.',
            },
            {
                name: 'isPreserved',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Doesn\'t unmount the component and keep it in DOM.',
            },
            {
                name: 'beforShow',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called before ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "show"),
                    " method is called; right after the component is mounted and element is rendered in the DOM.")
            },
            {
                name: 'beforeHide',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called before ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "hide"),
                    " method is called."),
            },
            {
                name: 'show',
                type: '(el: HTMLElement) => Promise<void>',
                description: 'The method where the show animation is occured.',
            },
            {
                name: 'hide',
                type: '(el: HTMLElement) => Promise<void>',
                description: 'The method where the hide animation is occured.',
            },
            {
                name: 'afterShow',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called after ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "show"),
                    " method is resolved."),
            },
            {
                name: 'afterHide',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Called after ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "hide"),
                    " method is resolved; the component is unmounted and element is removed from the DOM."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_7__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import TransitionSwitch from '@smart-react-components/transition/TransitionSwitch'
import Button from '@smart-react-components/ui/Button'
import React from 'react'
import styled from 'styled-components'

const Box = styled(Div)\`
  border-radius: .25rem;
  height: 200px;
  width: 200px;
\`

export default () => {
  const [active, setActive] = React.useState('primary')

  const show = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '0'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '1'
      setTimeout(resolve, 300)
    })
  })

  const hide = el => new Promise<void>(resolve => {
    window.requestAnimationFrame(() => {
      el.style.opacity = '1'
      let ignored = el.offsetWidth
      el.style.transition = 'opacity 300ms 0s ease-in-out'
      el.style.opacity = '0'
      setTimeout(resolve, 300)
    })
  })

  return (
    <>
      <Div display="flex" marginBottom="$length.3">
        <Button onClick={() => setActive('primary')}>Primary</Button>
        <Button onClick={() => setActive('success')} marginLeft="$length.3" palette="success">Success</Button>
        <Button onClick={() => setActive('danger')} marginLeft="$length.3" palette="danger">Danger</Button>
      </Div>
      <TransitionSwitch active={active} hide={hide} show={show}>
        <Box backgroundColor="!primary" key="primary" />
        <Box backgroundColor="!success" key="success" />
        <Box backgroundColor="!danger" key="danger" />
      </TransitionSwitch>
    </>
  )
}
`, output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(TransitionSwitchExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionSwitch);


/***/ }),

/***/ "./src/containers/Transition/index.tsx":
/*!*********************************************!*\
  !*** ./src/containers/Transition/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSTransition */ "./src/containers/Transition/CSSTransition.tsx");
/* harmony import */ var _CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSTransitionGroup */ "./src/containers/Transition/CSSTransitionGroup.tsx");
/* harmony import */ var _CSSTransitionSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSTransitionSwitch */ "./src/containers/Transition/CSSTransitionSwitch.tsx");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Transition */ "./src/containers/Transition/Transition.tsx");
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransitionGroup */ "./src/containers/Transition/TransitionGroup.tsx");
/* harmony import */ var _TransitionSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TransitionSwitch */ "./src/containers/Transition/TransitionSwitch.tsx");












const Transition = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_5__["default"])({ title: 'Transition' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_4__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { id: "transition" }, "Transition"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The transition module includes transiton components to animate React and Styled components on mount and unmount."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_9__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CSSTransition__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TransitionSwitch__WEBPACK_IMPORTED_MODULE_11__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CSSTransitionSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_7__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_2__["default"], { next: {
                    label: 'Router',
                    to: '/router',
                }, prev: {
                    label: 'Wave Effect',
                    to: '/ui-components/wave-effect',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], { list: [
                { label: 'Transition', id: 'transition' },
                { label: 'CSS Transition', id: 'css-transition' },
                { label: 'Transition Switch', id: 'transition-switch' },
                { label: 'CSS Transition Switch', id: 'css-transition-switch' },
                { label: 'Transition Group', id: 'transition-group' },
                { label: 'CSS Transition Group', id: 'css-transition-group' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);


/***/ })

}]);
//# sourceMappingURL=4cea275ec7a97e4a10a8.js.map