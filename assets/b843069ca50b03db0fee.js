"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Dropdown_tsx"],{

/***/ "./src/containers/Dropdown.tsx":
/*!*************************************!*\
  !*** ./src/containers/Dropdown.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Dropdown */ "./node_modules/@smart-react-components/ui/Dropdown/index.js");
/* harmony import */ var _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Dropdown/DropdownArrowIcon */ "./node_modules/@smart-react-components/ui/Dropdown/DropdownArrowIcon.js");
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Dropdown/DropdownCategory */ "./node_modules/@smart-react-components/ui/Dropdown/DropdownCategory.js");
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Dropdown/DropdownItem */ "./node_modules/@smart-react-components/ui/Dropdown/DropdownItem.js");
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Dropdown/DropdownList */ "./node_modules/@smart-react-components/ui/Dropdown/DropdownList.js");
/* harmony import */ var _smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");

















const Dropdown = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_14__["default"])({ title: 'Dropdown' });
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_13__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h1", { id: "dropdown" }, "Dropdown"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "Core container component which uses ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/fixed-box" }, "Fixed Box"),
                    " takes trigger element and ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown-list" }, "Dropdown List"),
                    " as children."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_15__["default"], { props: [
                        {
                            name: 'children',
                            type: '[JSX.Element, JSX.Element]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The first element for the toggle element, and the second element for ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown-list" }, "Dropdown List"),
                                "."),
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown-list" }, "Dropdown List"),
                                " display status."),
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#set-state" }, "SetState"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#position" }, "Position"),
                            defaultValue: 'BOTTOM',
                            description: 'Position of the box element by the toggle element. If the box element gets overflown in the given position, it is rendered at another available position.',
                        },
                        {
                            name: 'minWidth',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The box element ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "min-width"),
                                " value."),
                        },
                        {
                            name: 'maxWidth',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The box element ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "max-width"),
                                " value."),
                        },
                        {
                            name: 'space',
                            type: 'number',
                            defaultValue: '0',
                            description: 'Space between the toggle and the box element.',
                        },
                        {
                            name: 'triggerInteraction',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#trigger-interaction" }, "TriggerInteraction"),
                            defaultValue: 'CLICK',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Calls ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "setStatus"),
                                " with ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "true"),
                                " param when the toggle element is interracted with the given interaction."),
                        },
                        {
                            name: 'isDismissible',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "The ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "window"),
                                " click calls ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "setStatus"),
                                " with ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "false"),
                                " param."),
                        },
                        {
                            name: 'breakpoint',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#breakpoint" }, "Breakpoint"),
                            defaultValue: 'medium',
                            description: 'When given, displays the box inside an overlay when only the window\'s width is equal or smaller than the given breakpoint width.',
                        },
                        {
                            name: 'transitionClassName',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Transition ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "className"),
                                " prefix."),
                        },
                        {
                            name: 'transitionDuration',
                            type: 'number',
                            description: 'Transition duration in milliseconds.',
                        },
                        {
                            name: 'hasShowAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "false"),
                                ", skips the show animation."),
                        },
                        {
                            name: 'hasHideAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "false"),
                                ", skips the hide animation."),
                        },
                        {
                            name: 'beforeShow',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/fixed-box" }, "Fixed Box"),
                                " element ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "dropdown-list" }, "Dropdown List"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
                    "The list element of ",
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown" }, "Dropdown"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_15__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element | JSX.Element[]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, "The list items."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Dropdown size, has responsive support.',
                        },
                        {
                            name: 'hasHover',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Enables hover effect on ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown-item" }, "Dropdown Items"),
                                "."),
                        },
                        {
                            name: 'hasWaveEffect',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Enables ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " on ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown-item" }, "Dropdown Items"),
                                "."),
                        },
                        {
                            name: 'waveEffectPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " palette item key."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "dropdown-item" }, "Dropdown Item"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, "Single dropdown item in the list."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_15__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Item content.',
                        },
                        {
                            name: 'onClick',
                            type: '(e: React.MouseEvent<HTMLElement>) => void | Promise<void>',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                "Invoked when the item is clicked on if ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "false"),
                                ". If event is not prevented, closes the dropdown afterwards."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Disables the item.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "dropdown-category" }, "Dropdown Category"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, "Single category item in the list."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_15__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element | JSX.Element[]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/ui-components/dropdown#dropdown-item" }, "Dropdown Item"),
                                " elements."),
                        },
                        {
                            name: 'label',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Category label.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "dropdown-arrow-icon" }, "Dropdown Arrow Icon"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_8__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, "Icon element for the toggle element."),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_16__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Primary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Secondary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="secondary" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Success
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="success" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Danger
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="danger" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Warning
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="warning" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Info
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="info" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Light
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="light" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Dark
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="dark" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Primary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Secondary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "secondary", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Success",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "success", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Danger",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "danger", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Warning",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "warning", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Info",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "info", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Light",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "light", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Dark",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "dark", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))))),
                        title: 'Palette',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Primary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Secondary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="secondary">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Success
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="success">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Danger
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="danger">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Warning
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="warning">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Info
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="info">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Light
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="light">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Dark
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList palette="dark">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Primary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Secondary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "secondary" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Success",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "success" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Danger",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "danger" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Warning",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "warning" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Info",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "info" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Light",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "light" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Dark",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "dark" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))))),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_16__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Primary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Secondary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="secondary" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Success
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="success" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Danger
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="danger" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Warning
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="warning" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Info
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="info" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Light
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="light" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Dark
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="dark" isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Primary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Secondary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "secondary", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Success",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "success", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Danger",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "danger", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Warning",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "warning", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Info",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "info", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Light",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "light", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Dark",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "dark", isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))))),
                        title: 'Soft',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Primary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Secondary
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="secondary">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Success
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="success">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Danger
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="danger">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Warning
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="warning">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Info
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="info">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Light
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="light">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Dark
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft palette="dark">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Primary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Secondary",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "secondary" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Success",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "success" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Danger",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "danger" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Warning",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "warning" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Info",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "info" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Light",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "light" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Dark",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true, palette: "dark" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))))),
                        title: 'Soft Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_16__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Small
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList size="small">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Medium
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Large
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList size="large">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Responsive
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList size="small" sizeMd="medium" sizeLg="large">
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Small",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { size: "small" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Medium",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Large",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { size: "large" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Responsive",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { size: "small", sizeMd: "medium", sizeLg: "large" },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))))),
                        title: 'Size',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Label
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft>
        <DropdownCategory label="Category A">
          <DropdownItem isDisabled>Item A-1</DropdownItem>
          <DropdownItem isDisabled>Item A-2</DropdownItem>
          <DropdownItem isDisabled>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem isDisabled>Item B-1</DropdownItem>
          <DropdownItem isDisabled>Item B-2</DropdownItem>
          <DropdownItem isDisabled>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Label
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isOutline={false}>
        <DropdownCategory label="Category A">
          <DropdownItem isDisabled>Item A-1</DropdownItem>
          <DropdownItem isDisabled>Item A-2</DropdownItem>
          <DropdownItem isDisabled>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem isDisabled>Item B-1</DropdownItem>
          <DropdownItem isDisabled>Item B-2</DropdownItem>
          <DropdownItem isDisabled>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Label",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Label",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isOutline: false },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-3")))))),
                        title: 'Disabled',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_16__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown, { Position } from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown>
      <Div alignItems="center" display="flex" margin={10}>
        Bottom
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown position={Position.TOP}>
      <Div alignItems="center" display="flex" margin={10}>
        Top
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown position={Position.LEFT}>
      <Div alignItems="center" display="flex" margin={10}>
        Left
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown position={Position.RIGHT}>
      <Div alignItems="center" display="flex" margin={10}>
        Right
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem>Item A-1</DropdownItem>
          <DropdownItem>Item A-2</DropdownItem>
          <DropdownItem>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem>Item B-1</DropdownItem>
          <DropdownItem>Item B-2</DropdownItem>
          <DropdownItem>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Bottom",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), { position: _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Position.TOP },
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Top",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), { position: _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Position.LEFT },
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Left",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), { position: _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Position.RIGHT },
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Right",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), null, "Item B-3")))))),
                        title: 'Position',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Dropdown, { TriggerInteraction } from '@smart-react-components/ui/Dropdown'
import DropdownArrowIcon from '@smart-react-components/ui/Dropdown/DropdownArrowIcon'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import React from 'react'

export default () => (
  <Div alignItems="flex-start" display="flex" flexWrap="wrap" margin={-10}>
    <Dropdown triggerInteraction={TriggerInteraction.CLICK | TriggerInteraction.HOVER}>
      <Div alignItems="center" display="flex" margin={10}>
        Click + Hover
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList isSoft>
        <DropdownCategory label="Category A">
          <DropdownItem isDisabled>Item A-1</DropdownItem>
          <DropdownItem isDisabled>Item A-2</DropdownItem>
          <DropdownItem isDisabled>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem isDisabled>Item B-1</DropdownItem>
          <DropdownItem isDisabled>Item B-2</DropdownItem>
          <DropdownItem isDisabled>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
    <Dropdown triggerInteraction={TriggerInteraction.RIGHT_CLICK}>
      <Div alignItems="center" display="flex" margin={10}>
        Right Click
        <DropdownArrowIcon fill="$color.dynamic.bodyFont" iconSize="$size.icon.medium" marginLeft={5} />
      </Div>
      <DropdownList>
        <DropdownCategory label="Category A">
          <DropdownItem isDisabled>Item A-1</DropdownItem>
          <DropdownItem isDisabled>Item A-2</DropdownItem>
          <DropdownItem isDisabled>Item A-3</DropdownItem>
        </DropdownCategory>
        <DropdownCategory label="Category B">
          <DropdownItem isDisabled>Item B-1</DropdownItem>
          <DropdownItem isDisabled>Item B-2</DropdownItem>
          <DropdownItem isDisabled>Item B-3</DropdownItem>
        </DropdownCategory>
      </DropdownList>
    </Dropdown>
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "flex-start", display: "flex", flexWrap: "wrap", margin: -10 },
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), { triggerInteraction: _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__.TriggerInteraction.CLICK | _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__.TriggerInteraction.HOVER },
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Click + Hover",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), { isSoft: true },
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-3")))),
                            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()), { triggerInteraction: _smart_react_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_1__.TriggerInteraction.RIGHT_CLICK },
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", margin: 10 },
                                    "Right Click",
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownArrowIcon__WEBPACK_IMPORTED_MODULE_2___default()), { fill: "$color.dynamic.bodyFont", iconSize: "$size.icon.medium", marginLeft: 5 })),
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownList__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category A" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item A-3")),
                                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownCategory__WEBPACK_IMPORTED_MODULE_3___default()), { label: "Category B" },
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-1"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-2"),
                                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_4___default()), { isDisabled: true }, "Item B-3")))))),
                        title: 'Trigger Interaction',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_7__["default"], { attrs: [
                        {
                            name: 'cursor.dropdown',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.dropdown',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'opacity.dropdownDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'radius.dropdown',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "border-radius"),
                                " value."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_7__["default"], { attrs: [
                        {
                            name: 'dropdown.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'dropdown.margin',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'dropdown.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_9__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__["default"], { next: {
                    label: 'Fixed Box',
                    to: '/ui-components/fixed-box',
                }, prev: {
                    label: 'Date Picker',
                    to: '/ui-components/date-picker',
                } })),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], { list: [
                { label: 'Dropdown', id: 'dropdown' },
                { label: 'Dropdown List', id: 'dropdown-list' },
                { label: 'Dropdown Item', id: 'dropdown-item' },
                { label: 'Dropdown Category', id: 'dropdown-category' },
                { label: 'Dropdown Arrow Icon', id: 'dropdown-arrow-icon' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ })

}]);
//# sourceMappingURL=b843069ca50b03db0fee.js.map