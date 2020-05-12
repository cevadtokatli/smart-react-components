(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(t,e,n){"use strict";var o=n(0),i=n.n(o),c=n(15),s=n(34);e.a=({title:t})=>{const e=Object(c.useSelector)(Object(s.a)(({router:t})=>t,t=>t)),n=i.a.useRef(!1),o=t=>{if(window.location.hash)try{const e=document.querySelector(window.location.hash);if(e){return void setTimeout(()=>window.scrollTo(0,e.offsetTop-84),t?100:0)}}catch(t){}t&&window.scrollTo(0,0)};i.a.useEffect(()=>{n.current?o(!1):(n.current=!0,document.title=`SRC · ${t}`,o(!0))},[e.url])}},135:function(t,e,n){"use strict";var o=n(1);e.a=o.default.div(({theme:t})=>`\n    flex: 1;\n    display: flex;\n    padding: 1.5rem ${t.src.length.init};\n`)},136:function(t,e,n){"use strict";var o=n(1);e.a=o.default.section`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 1px;
    max-width: 100%;
`}}]);
//# sourceMappingURL=54c8d9c68c46f09cb5cd.js.map