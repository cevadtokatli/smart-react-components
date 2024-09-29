"use strict";(self.webpackChunksmart_react_components_page=self.webpackChunksmart_react_components_page||[]).push([[3129],{33129:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(87840)),s=n(17989),u=l(n(67294)),d=n(12788),f=a(n(94893));t.default=({displayValue:e,elementProps:t={},hasStripedAnimation:n=!0,isFilled:i,isNested:r,isStriped:a,palette:l="primary",prefix:c,separator:p,suffix:g,transitionDuration:h=450,transitionTimingFunction:$="linear",totalValue:m,value:b})=>{const _=u.default.useContext(d.ThemeContext),v=()=>e?400:1500,y=()=>t.height?"string"==typeof t.height?t.height:`${t.height}px`:r?"100%":e?"16px":"4px",x=()=>{const e=null!=c?c:_.$.i18n.progressBar.prefix,t=null!=p?p:_.$.i18n.progressBar.separator,n=null!=g?g:_.$.i18n.progressBar.suffix;return m?{label:`${e}${b}${n} ${t} ${e}${m}${n}`,value:Math.round(b/m*100)}:{value:b,label:`${e}${b}${n}`}},[k,w]=u.default.useState((()=>v())),[S,O]=u.default.useState((()=>y())),[B,P]=u.default.useState((()=>-1)),[j,D]=u.default.useState((()=>x())),M=u.default.useRef(null),E=u.default.useRef(null),F=()=>P(M.current.offsetWidth/2-E.current.offsetWidth/2);(0,o.default)((()=>{w(v())}),[k]),(0,o.default)((()=>{O(y())}),[t.height,e]),(0,o.default)((()=>{D(x())}),[b,m,c,p,g]),u.default.useEffect((()=>{if(e)return(0,s.addEventListener)(window,["resize"],F),()=>{(0,s.removeEventListener)(window,["resize"],F)}}),[e]),u.default.useEffect((()=>{e&&F()}),[j]);const A=e&&u.default.createElement(f.Percentage,{ref:E,style:{left:`${B}px`,visibility:B>-1?"visible":"hidden"}},j.label);return u.default.createElement(f.default,Object.assign({},t,{hasStripedAnimation:n,height:S,isFilled:i,isNested:r,isStriped:a,palette:l,ref:M,stripedAnimationDuration:k,transitionDuration:h,transitionTimingFunction:$}),A,u.default.createElement(f.Bar,{style:{width:`${j.value}%`}},!r&&A))}},94893:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Percentage=t.Bar=void 0;const r=i(n(92851)),a=n(89946),l=i(n(12788));t.Bar=l.default.div`
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
`,t.Percentage=l.default.div`
  flex: 0 0 auto;
  position: relative;
`,t.default=(0,l.default)(r.default)((({theme:e,hasStripedAnimation:n,height:i,isFilled:r,isNested:l,isStriped:o,palette:s,stripedAnimationDuration:u,transitionDuration:d,transitionTimingFunction:f})=>`\n  align-items: center;\n  color: ${e.$.palette[s].main};\n  display: flex;\n  fill: ${e.$.palette[s].main};\n  overflow: hidden;\n  position: relative;\n\n  ${t.Bar} {\n    background: ${e.$.palette[s].main};\n    color: ${e.$.palette[s].font};\n    fill: ${e.$.palette[s].font};\n    transition: width ${d}ms 0s ${f};\n\n    ${l?`\n        background: ${(0,a.getColor)(e.$.color.light.background).alpha(.3).rgb().toString()};\n      `:"\n        border-radius: .125rem;\n      "}\n  }\n\n  ${r?`\n      background: ${e.$.color.dynamic.gray};\n    `:""}\n\n  ${l?"\n      flex: 1 1 auto;\n    ":"\n      border-radius: .125rem;\n    "}\n\n  ${o?`\n      &,\n      ${t.Bar} {\n        background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n        background-size: ${i} ${i};\n      }\n\n      ${n?`\n          &,\n          ${t.Bar} {\n            animation: src-progress-bar-stripes ${u}ms 0s ${f} infinite;\n          }\n\n          @keyframes src-progress-bar-stripes {\n            from {\n              background-position: ${i} 0;\n            }\n              \n            to {\n              background-position: 0 0;\n            }\n          }\n        `:""}\n    `:""}\n`))}}]);