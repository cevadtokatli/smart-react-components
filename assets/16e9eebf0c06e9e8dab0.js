"use strict";(self.webpackChunksmart_react_components_page=self.webpackChunksmart_react_components_page||[]).push([[250],{92250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(61033),l=n.n(a),o=n(55564),r=n.n(o),i=n(79894),s=n.n(i),m=n(21342),c=n.n(m),p=n(67294),u=n(6847),d=n(44583),f=n(94086),E=n(40074),h=n(16127),b=n(23235),y=n(69229),g=n(666),C=n(7762);const k=()=>{const[e,t]=p.useState(!1);return p.createElement(p.Fragment,null,p.createElement(l(),{onClick:()=>t(!0)},"Open Alert"),p.createElement(r(),{message:"Alert Message...",setStatus:t,status:e,title:"Title"}))},Z=()=>{const[e,t]=p.useState(!1);return p.createElement(p.Fragment,null,p.createElement(l(),{onClick:()=>t(!0)},"Open Confirm"),p.createElement(s(),{message:"Confirm Message...",setStatus:t,status:e,title:"Title"}))},v=()=>{const[e,t]=p.useState(!1);return p.createElement(p.Fragment,null,p.createElement(l(),{onClick:()=>t(!0)},"Open Prompt"),p.createElement(c(),{defaultValue:"Value",message:"Prompt Message...",placeholder:"Placeholder...",setStatus:t,status:e,title:"Title"}))},B=()=>((0,g.Z)({title:"Pop-up"}),p.createElement(y.Z,null,p.createElement(b.Z,null,p.createElement("div",null,p.createElement("h1",{id:"pop-up"},"Pop-up"),p.createElement("p",null,"Pop-up uses ",p.createElement(d.Z,{to:"/ui-components/modal"},"Modal")," to build JavaScript dialog methods."),p.createElement("h2",{id:"alert"},"Alert"),p.createElement(u.Z,null),p.createElement("p",null,"Imitates ",p.createElement("code",null,"alert")," method."),p.createElement(E.Z,{props:[{name:"message",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#content-element"},"ContentElement")," | ",p.createElement(d.Z,{to:"/api#content-element"},"ContentElement"),"[]"),isRequired:!0,description:"Modal content."},{name:"status",type:"boolean",defaultValue:"true",description:"Modal display status."},{name:"setStatus",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#set-status"},"SetStatus"),"<boolean>"),description:p.createElement(p.Fragment,null,"The method that sets ",p.createElement("code",null,"status"),".")},{name:"title",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#content-element"},"ContentElement")," | ",p.createElement(d.Z,{to:"/api#content-element"},"ContentElement"),"[]"),description:"Modal title."},{name:"buttonLabel",type:"string",defaultValue:"i18n.ok",description:"Button label."},{name:"buttonPalette",type:p.createElement(d.Z,{to:"/api#palette-prop"},"PaletteProp"),defaultValue:"primary",description:"Button palette item key."},{name:"action",type:"() => void | Promise<void>",description:"Called when clicked on the save button."},{name:"hasOverlayBackground",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/ui-components/overlay#overlay"},"Overlay")," ",p.createElement("code",null,"hasBackground")," prop.")},{name:"hasOverlayBlurEffect",type:"boolean",defaultValue:"false",description:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/ui-components/overlay#overlay"},"Overlay")," ",p.createElement("code",null,"hasBlurEffect")," prop.")},{name:"transitionClassName",type:"string",description:p.createElement(p.Fragment,null,"Transition ",p.createElement("code",null,"className")," prefix.")},{name:"transitionDuration",type:"number",description:"Transition duration in milliseconds."},{name:"hasShowAnimation",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,"When ",p.createElement("code",null,"false"),", skips the show animation.")},{name:"hasHideAnimation",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,"When ",p.createElement("code",null,"false"),", skips the hide animation.")},{name:"beforeShow",type:p.createElement(d.Z,{to:"/api#transition-before-callback"},"TransitionBeforeCallback"),description:"Called before the show transition is started; right after the component is mounted and element is rendered in the DOM."},{name:"beforeHide",type:p.createElement(d.Z,{to:"/api#transition-before-callback"},"TransitionBeforeCallback"),description:"Called before the hide transition is started."},{name:"afterShow",type:p.createElement(d.Z,{to:"/api#transition-after-callback"},"TransitionAfterCallback"),description:"Called after the show transition is completed."},{name:"afterHide",type:p.createElement(d.Z,{to:"/api#transition-after-callback"},"TransitionAfterCallback"),description:"Called after the hide transition is completed; the component is unmounted and element is removed from the DOM."}]}),p.createElement(C.Z,{code:"import Button from '@smart-react-components/ui/Button'\nimport Alert from '@smart-react-components/ui/PopUp/Alert'\nimport React from 'react'\n\nexport default () => {\n  const [status, setStatus] = React.useState(false)\n\n  return (\n    <>  \n      <Button onClick={() => setStatus(true)}>Open Alert</Button>\n      <Alert\n        message=\"Alert Message...\"\n        setStatus={setStatus}\n        status={status}\n        title=\"Title\"\n      />\n    </>\n  )\n}",output:p.createElement(k,null)}),p.createElement("h2",{id:"confirm"},"Confirm"),p.createElement(u.Z,null),p.createElement("p",null,"Imitates ",p.createElement("code",null,"confirm")," method."),p.createElement("h3",null,"Props"),p.createElement(E.Z,{props:[{name:"message",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#content-element"},"ContentElement")," | ",p.createElement(d.Z,{to:"/api#content-element"},"ContentElement"),"[]"),isRequired:!0,description:"Modal content."},{name:"status",type:"boolean",defaultValue:"true",description:"Modal display status."},{name:"setStatus",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#set-status"},"SetStatus"),"<boolean>"),description:p.createElement(p.Fragment,null,"The method that sets ",p.createElement("code",null,"status"),".")},{name:"title",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#content-element"},"ContentElement")," | ",p.createElement(d.Z,{to:"/api#content-element"},"ContentElement"),"[]"),description:"Modal title."},{name:"cancelButtonLabel",type:"string",defaultValue:"i18n.cancel",description:"Cancel button label."},{name:"confirmButtonLabel",type:"string",defaultValue:"i18n.ok",description:"Confirm button label."},{name:"cancelButtonPalette",type:p.createElement(d.Z,{to:"/api#palette-prop"},"PaletteProp"),defaultValue:"primary",description:"Cancel button palette item key."},{name:"confirmButtonPalette",type:p.createElement(d.Z,{to:"/api#palette-prop"},"PaletteProp"),defaultValue:"primary",description:"Confirm button palette item key."},{name:"action",type:"(isConfirmed: boolean) => void | Promise<void>",description:"Called when clicked on the save or cancel buttons."},{name:"hasOverlayBackground",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/ui-components/overlay#overlay"},"Overlay")," ",p.createElement("code",null,"hasBackground")," prop.")},{name:"hasOverlayBlurEffect",type:"boolean",defaultValue:"false",description:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/ui-components/overlay#overlay"},"Overlay")," ",p.createElement("code",null,"hasBlurEffect")," prop.")},{name:"transitionClassName",type:"string",description:p.createElement(p.Fragment,null,"Transition ",p.createElement("code",null,"className")," prefix.")},{name:"transitionDuration",type:"number",description:"Transition duration in milliseconds."},{name:"hasShowAnimation",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,"When ",p.createElement("code",null,"false"),", skips the show animation.")},{name:"hasHideAnimation",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,"When ",p.createElement("code",null,"false"),", skips the hide animation.")},{name:"beforeShow",type:p.createElement(d.Z,{to:"/api#transition-before-callback"},"TransitionBeforeCallback"),description:"Called before the show transition is started; right after the component is mounted and element is rendered in the DOM."},{name:"beforeHide",type:p.createElement(d.Z,{to:"/api#transition-before-callback"},"TransitionBeforeCallback"),description:"Called before the hide transition is started."},{name:"afterShow",type:p.createElement(d.Z,{to:"/api#transition-after-callback"},"TransitionAfterCallback"),description:"Called after the show transition is completed."},{name:"afterHide",type:p.createElement(d.Z,{to:"/api#transition-after-callback"},"TransitionAfterCallback"),description:"Called after the hide transition is completed; the component is unmounted and element is removed from the DOM."}]}),p.createElement(C.Z,{code:"import Button from '@smart-react-components/ui/Button'\nimport Confirm from '@smart-react-components/ui/PopUp/Confirm'\nimport React from 'react'\n\nexport default () => {\n  const [status, setStatus] = React.useState(false)\n\n  return (\n    <>  \n      <Button onClick={() => setStatus(true)}>Open Confirm</Button>\n      <Confirm\n        message=\"Confirm Message...\"\n        setStatus={setStatus}\n        status={status}\n        title=\"Title\"\n      />\n    </>\n  )\n}",output:p.createElement(Z,null)}),p.createElement("h2",{id:"prompt"},"Prompt"),p.createElement(u.Z,null),p.createElement("p",null,"Imitates ",p.createElement("code",null,"prompt")," method."),p.createElement("h3",null,"Props"),p.createElement(E.Z,{props:[{name:"message",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#content-element"},"ContentElement")," | ",p.createElement(d.Z,{to:"/api#content-element"},"ContentElement"),"[]"),isRequired:!0,description:"Modal content."},{name:"status",type:"boolean",defaultValue:"true",description:"Modal display status."},{name:"setStatus",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#set-status"},"SetStatus"),"<boolean>"),description:p.createElement(p.Fragment,null,"The method that sets ",p.createElement("code",null,"status"),".")},{name:"title",type:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/api#content-element"},"ContentElement")," | ",p.createElement(d.Z,{to:"/api#content-element"},"ContentElement"),"[]"),description:"Modal title."},{name:"defaultValue",type:"string",description:"Input initial value."},{name:"placeholder",type:"string",description:"Input placeholder."},{name:"cancelButtonLabel",type:"string",defaultValue:"i18n.cancel",description:"Cancel button label."},{name:"confirmButtonLabel",type:"string",defaultValue:"i18n.ok",description:"Confirm button label."},{name:"cancelButtonPalette",type:p.createElement(d.Z,{to:"/api#palette-prop"},"PaletteProp"),defaultValue:"primary",description:"Cancel button palette item key."},{name:"confirmButtonPalette",type:p.createElement(d.Z,{to:"/api#palette-prop"},"PaletteProp"),defaultValue:"primary",description:"Confirm button palette item key."},{name:"action",type:"(text: string, isConfirmed: boolean) => void | Promise<void>",description:"Called when clicked on the save or cancel buttons."},{name:"hasOverlayBackground",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/ui-components/overlay#overlay"},"Overlay")," ",p.createElement("code",null,"hasBackground")," prop.")},{name:"hasOverlayBlurEffect",type:"boolean",defaultValue:"false",description:p.createElement(p.Fragment,null,p.createElement(d.Z,{to:"/ui-components/overlay#overlay"},"Overlay")," ",p.createElement("code",null,"hasBlurEffect")," prop.")},{name:"transitionClassName",type:"string",description:p.createElement(p.Fragment,null,"Transition ",p.createElement("code",null,"className")," prefix.")},{name:"transitionDuration",type:"number",description:"Transition duration in milliseconds."},{name:"hasShowAnimation",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,"When ",p.createElement("code",null,"false"),", skips the show animation.")},{name:"hasHideAnimation",type:"boolean",defaultValue:"true",description:p.createElement(p.Fragment,null,"When ",p.createElement("code",null,"false"),", skips the hide animation.")},{name:"beforeShow",type:p.createElement(d.Z,{to:"/api#transition-before-callback"},"TransitionBeforeCallback"),description:"Called before the show transition is started; right after the component is mounted and element is rendered in the DOM."},{name:"beforeHide",type:p.createElement(d.Z,{to:"/api#transition-before-callback"},"TransitionBeforeCallback"),description:"Called before the hide transition is started."},{name:"afterShow",type:p.createElement(d.Z,{to:"/api#transition-after-callback"},"TransitionAfterCallback"),description:"Called after the show transition is completed."},{name:"afterHide",type:p.createElement(d.Z,{to:"/api#transition-after-callback"},"TransitionAfterCallback"),description:"Called after the hide transition is completed; the component is unmounted and element is removed from the DOM."}]}),p.createElement(C.Z,{code:'import Button from \'@smart-react-components/ui/Button\'\nimport Prompt from \'@smart-react-components/ui/PopUp/Prompt\'\nimport React from \'react\'\n\nexport default () => {\n  const [status, setStatus] = React.useState(false)\n\n  return (\n    <>  \n      <Button onClick={() => setStatus(true)}>Open Prompt</Button>\n      <Prompt\n        defaultValue="Value"\n        message="Prompt Message..."\n        placeholder="Placeholder..."\n        setStatus={setStatus}\n        status={status}\n        title="Title"\n      />\n    </>\n  )\n}',output:p.createElement(v,null)})),p.createElement(h.Z,{next:{label:"Popover",to:"/ui-components/popover"},prev:{label:"Pagination",to:"/ui-components/pagination"}})),p.createElement(f.Z,{list:[{label:"Pop-up",id:"pop-up"},{label:"Alert",id:"alert"},{label:"Confirm",id:"confirm"},{label:"Prompt",id:"prompt"}]})))}}]);