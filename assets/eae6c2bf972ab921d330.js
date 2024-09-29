"use strict";(self.webpackChunksmart_react_components_page=self.webpackChunksmart_react_components_page||[]).push([[1887],{5248:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Position=void 0;const a=i(n(52730)),s=i(n(60291)),o=i(n(67294)),l=i(n(31365));var r=n(18);Object.defineProperty(t,"Position",{enumerable:!0,get:function(){return r.OrderPosition}}),t.default=e=>o.default.createElement(l.default,Object.assign({isBlock:e.isBlock},(0,a.default)(e,[s.default])),e.children.map(((t,n)=>{var i;return o.default.cloneElement(t,Object.assign({key:null!==(i=t.key)&&void 0!==i?i:n,active:e.active,isBlock:e.isBlock,isOutline:e.isOutline,isRequired:e.isRequired,isSoft:e.isSoft,name:e.name,palette:e.palette,position:e.position,setActive:e.setActive,shape:e.shape,template:e.template},t.props))})))},3053:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Position=void 0;const a=i(n(52730)),s=i(n(60291)),o=i(n(67294)),l=i(n(92212)),r=i(n(83530)),c=n(18),d=i(n(14492));var u=n(18);Object.defineProperty(t,"Position",{enumerable:!0,get:function(){return u.OrderPosition}});const f=o.default.forwardRef(((e,t)=>{const n=o.default.useMemo((()=>e.setChecked?e.isChecked:!!e.setActive&&void 0!==e.active.find((t=>t===e.value))),[e.active,e.isChecked]),i=o.default.createElement(r.default,Object.assign({checked:n,onChange:()=>{e.isDisabled||(e.setChecked?e.setChecked(!e.isChecked):e.setActive&&(e.active.includes(e.value)?e.setActive(e.active.filter((t=>t!==e.value))):e.setActive([...e.active,e.value])))},ref:t,type:"checkbox"},e.isDisabled&&{disabled:!0},e.isRequired&&{required:!0},e.name&&{name:e.name}));return o.default.createElement(l.default,Object.assign({formSize:e.size,formSizeSm:e.sizeSm,formSizeMd:e.sizeMd,formSizeLg:e.sizeLg,formSizeXl:e.sizeXl,isBlock:e.isBlock,isDisabled:e.isDisabled,labelPosition:e.position},(0,a.default)(e,[s.default])),o.default.cloneElement(e.template,{checkboxSize:e.size,checkboxSizeSm:e.sizeSm,checkboxSizeMd:e.sizeMd,checkboxSizeLg:e.sizeLg,checkboxSizeXl:e.sizeXl,children:o.default.createElement(o.default.Fragment,null,i,e.template.props.children),isChecked:n,isDisabled:e.isDisabled,isIndeterminate:e.isIndeterminate,isOutline:e.isOutline,isSoft:e.isSoft,palette:e.palette,shape:e.shape}),e.label&&o.default.createElement("span",null,e.label))}));f.defaultProps={palette:"primary",position:c.OrderPosition.RIGHT,shape:"rectangle",size:"medium",template:o.default.createElement(d.default,null)},t.default=f},14492:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(n(92851)),s=i(n(67294)),o=i(n(12788)),l=o.default.div.attrs({className:"src-checkbox-container"})((({theme:e})=>`\n  border: solid 2px ${e.$.color.dynamic.accent};\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: relative;\n`)),r=o.default.div.attrs({className:"src-checkbox-rectangle"})`
  position: absolute;
  left: -2px;
  height: calc(100% + 4px);
  top: -2px;
  transition: background 200ms 0s ease-in-out;
  width: calc(100% + 4px);
`,c=o.default.svg.attrs({children:s.default.createElement("path",{d:"M3.5,17.2l7.6,7.6L28.5,7.3"}),className:"src-checkbox-svg",viewBox:"0 0 32 32"})((({theme:e})=>`\n  flex: 0 0 auto;\n  position: relative;\n\n  > path {\n    fill: transparent;\n    stroke: ${e.$.color.white};\n    stroke-width: 4px;\n    stroke-dasharray: 36px;\n    stroke-dashoffset: 36px;\n    transition: stroke-dashoffset 200ms 0s ease-in-out;\n  }\n`)),d=o.default.div.attrs({className:"src-checkbox-indeterminate-mark"})((({theme:e})=>`\n  background: ${e.$.color.white};\n  height: 2px;\n  margin-top: -1px;\n  opacity: 0;\n  position: absolute;\n  trasnform: scaleX(0) rotate(45deg);\n  transition-duration: 200ms;\n  transition-property: opacity, transform;\n  transition-timing-function: ease-in-out;\n  top: 50%;\n  width: 100%;\n`));t.default=(0,o.default)(a.default).attrs((({children:e,isIndeterminate:t})=>({children:s.default.createElement(s.default.Fragment,null,e&&e,s.default.createElement(l,null,s.default.createElement(r,null),s.default.createElement(c,null),void 0!==t&&s.default.createElement(d,null))),getCheckboxSize:(e,t)=>`\n    height: ${t.$.size.checkbox[e]};\n    width: ${t.$.size.checkbox[e]};\n  `})))((({theme:e,isChecked:t,isIndeterminate:n,isOutline:i,isSoft:a,palette:s,shape:o})=>`\n  position: relative;\n\n  .src-checkbox-container {\n    border-radius: ${e.$.radius.checkbox[o]};\n    transition: border-color 200ms 0s ease-in-out;\n\n    ${i?"":`\n        background: ${e.$.color.dynamic.accent};\n      `}\n  }\n\n  .src-checkbox-rectangle {\n    border-radius: ${e.$.radius.checkbox[o]};\n  }\n\n  ${t?`\n      .src-checkbox-container {\n        border-color: ${a?e.$.palette[s].soft:e.$.palette[s].main};\n\n        .src-checkbox-rectangle {\n          background: ${a?e.$.palette[s].soft:e.$.palette[s].main};\n        }\n\n        ${n?"\n            .src-checkbox-indeterminate-mark {\n              opacity: 1;\n              transform: scaleX(1);\n            }\n          ":"\n            .src-checkbox-svg > path {\n              stroke-dashoffset: 0;\n            }\n          "}\n      }\n    `:""}\n`))}}]);