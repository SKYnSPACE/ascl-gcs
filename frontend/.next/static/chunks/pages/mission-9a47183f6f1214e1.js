(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{4939:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mission",function(){return r(3489)}])},442:function(e,t,r){"use strict";var n=r(5893),s=r(7294),l=r(9583);t.Z=function(){let[e,t]=(0,s.useState)(!1);return(0,n.jsx)("button",{className:"flex justify-center items-center w-7 h-7 border border-gray-400 text-gray-400 bg-white rounded hover:bg-gray-400 hover:text-white hover:border-gray-300",onClick:()=>{document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),t(!1)):(document.documentElement.requestFullscreen(),t(!0))},children:e?(0,n.jsx)(l.Y7H,{className:"h-4 w-4"}):(0,n.jsx)(l.a1O,{className:"h-4 w-4"})})}},3489:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893);r(5675);var s=r(9704),l=r(7294),a=r(4475),i=r(7950),o=r(8193),d=r(3750),c=r(2533),m=r(442),x=r(39);let u=[{name:"l5",icon:d.URD,href:"#",current:!1},{name:"l1",icon:d.pjk,href:"#",current:!1},{name:"r1",icon:d.fmn,href:"#",current:!1},{name:"r5",icon:d.ZC5,href:"#",current:!1}],h=[{name:"u5",icon:d.CvE,href:"#",current:!1},{name:"u1",icon:d.E0f,href:"#",current:!1},{name:"d1",icon:d.IAR,href:"#",current:!1},{name:"d5",icon:d.t3p,href:"#",current:!1}];function f(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function b(){var e,t;(0,l.useContext)(x.ZP);let[r,b]=(0,l.useState)({heading:0,headingRef:0}),{width:p,height:g}=function(){let[e,t]=(0,l.useState)(window.innerWidth),[r,n]=(0,l.useState)(window.innerHeight);return(0,l.useEffect)(()=>{function e(){t(window.innerWidth),n(window.innerHeight)}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),{width:e,height:r}}(),[y,v]=(0,l.useState)(null),[w,j]=(0,l.useState)(!1),[N,E]=(0,l.useState)({x:0,y:0}),M=()=>{let e=(null==y?void 0:y.left)/p||0,t=(null==y?void 0:y.top)/g||0,r=((null==y?void 0:y.left)+(null==y?void 0:y.width))/p||0,n=((null==y?void 0:y.top)+(null==y?void 0:y.height))/g||0,s={command:2005,param1:e,param2:t,param3:r,param4:n};console.log(s),c.W.emit("COMMAND_LONG",s)},k=e=>{j(!0),E(e),v(t=>({...t,left:e.x,top:e.y,width:0,height:0}))},O=e=>{if(!w)return;let t={left:e.x>N.x?N.x:e.x,top:e.y>N.y?N.y:e.y,width:Math.abs(e.x-N.x),height:Math.abs(e.y-N.y)};v(t)},C=()=>{j(!1),M()},[z,S]=(0,l.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"fixed top-0 bottom-0 left-0 right-0 cursor-crosshair",onMouseDown:e=>k({x:e.clientX,y:e.clientY}),onMouseMove:e=>O({x:e.clientX,y:e.clientY}),onMouseUp:C,onMouseLeave:()=>{j(!1)},onTouchStart:e=>k({x:e.touches[0].clientX,y:e.touches[0].clientY}),onTouchMove:e=>O({x:e.touches[0].clientX,y:e.touches[0].clientY}),onTouchEnd:C,children:[(0,n.jsx)("img",{style:{width:"100vw",height:"100vh",position:"relative"},src:"http://127.0.0.1:5000/stream?src=0"}),w&&(0,n.jsx)("div",{className:"absolute border-4 border-dashed border-red-600",style:{left:y.left,top:y.top,width:y.width,height:y.height}})]}),!w&&!y&&(0,n.jsxs)("div",{className:"fixed bottom-16 left-1/2 transform -translate-x-1/2",children:[(0,n.jsxs)("div",{className:"sm:hidden",children:[(0,n.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),(0,n.jsx)("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:null===(e=u.find(e=>e.current))||void 0===e?void 0:e.name,children:u.map(e=>(0,n.jsx)("option",{children:e.name},e.name))})]}),(0,n.jsx)("div",{className:"hidden sm:block",children:(0,n.jsx)("nav",{className:"isolate flex rounded-lg shadow","aria-label":"Tabs",children:u.map((e,t)=>(0,n.jsxs)("div",{className:f("relative",0===t?"rounded-l-lg":"",t===u.length-1?"rounded-r-lg":"","min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10"),children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black opacity-50 hover:bg-gray-50"}),(0,n.jsx)("a",{href:e.href,className:f(e.current?"text-gray-900":"text-white","relative z-10"),"aria-current":e.current?"page":void 0,children:(0,n.jsx)(e.icon,{className:"mx-6 my-2 h-6 w-6","aria-hidden":"true"})}),t!==u.length-1&&(0,n.jsx)("div",{className:"absolute right-0 top-[12.5%] h-3/4 w-[1px] bg-gray-500"})]},e.name))})})]}),!w&&!y&&(0,n.jsxs)("div",{className:"fixed right-8 top-1/2 transform -translate-y-1/2",children:[(0,n.jsxs)("div",{className:"sm:hidden",children:[(0,n.jsx)("label",{htmlFor:"tiltControls",className:"sr-only",children:"Select a tab"}),(0,n.jsx)("select",{id:"tiltControls",name:"tiltControls",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:null===(t=h.find(e=>e.current))||void 0===t?void 0:t.name,children:h.map(e=>(0,n.jsx)("option",{children:e.name},e.name))})]}),(0,n.jsx)("div",{className:"hidden sm:block",children:(0,n.jsx)("nav",{className:"isolate flex flex-col rounded-lg shadow","aria-label":"TiltControls",children:h.map((e,t)=>(0,n.jsxs)("div",{className:f("relative",0===t?"rounded-t-lg":"",t===h.length-1?"rounded-b-lg":"","min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10"),children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black opacity-50 hover:bg-gray-50"}),(0,n.jsx)("a",{href:e.href,className:f(e.current?"text-gray-900":"text-white","relative z-10"),"aria-current":e.current?"page":void 0,children:(0,n.jsx)(e.icon,{className:"mx-6 my-2 h-6 w-6","aria-hidden":"true"})}),t!==h.length-1&&(0,n.jsx)("div",{className:"absolute bottom-0 left-[12.5%] w-3/4 h-[1px] bg-gray-500"})]},e.name))})})]}),!w&&y?(0,n.jsx)("div",{className:"fixed bottom-16 left-1/2 transform -translate-x-1/2",onMouseDown:()=>S(!0),onMouseUp:()=>S(!1),onMouseLeave:()=>S(!1),onClick:()=>v(null),children:(0,n.jsx)("div",{className:f("p-6 rounded-full bg-black  text-white hover:text-gray-500",z?"opacity-70":"hover:bg-gray-50 opacity-50"),children:(0,n.jsx)(o.oHP,{className:"h-8 w-8"})})}):(0,n.jsx)(n.Fragment,{children:"NOBOX"}),!w&&(0,n.jsx)("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 user-select-none pointer-events-none",children:(0,n.jsx)(s.lr,{size:1e3,states:{heading:110,headingRef:150}})}),(0,n.jsxs)("div",{className:"absolute top-4 left-4 flex flex-col",children:[(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-16 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(d.bEv,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"BOX"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-20 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"ml-1",children:"88.8 / 88.8"}),(0,n.jsx)("span",{className:"ml-1",children:"88.8 / 88.8"})]})})]}),(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-16 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(a.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"LLH"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-20 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"ml-1",children:"88.888888\xb0"}),(0,n.jsx)("span",{className:"ml-1",children:"888.88888\xb0"}),(0,n.jsx)("span",{className:"ml-1",children:"8.8 m"})]})})]}),(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(i.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"MGRS"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"ml-1",children:"88Z ZZ"}),(0,n.jsx)("span",{className:"ml-1",children:"88888"}),(0,n.jsx)("span",{className:"ml-1",children:"88888"})]})})]})]}),(0,n.jsxs)("div",{className:"absolute top-4 right-4 flex flex-col",children:[(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(d.Dgg,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"MODE (CMD)"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"ml-1",children:"MANUAL"}),(0,n.jsx)("span",{className:"ml-1",children:"(AUTO)"})]})})]}),(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(d.Dgg,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"PAN (CMD)"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"ml-1",children:"888.8\xb0"}),(0,n.jsx)("span",{className:"ml-1",children:"(888.8\xb0)"})]})})]}),(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(d.KJO,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"TILT (CMD)"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"ml-1",children:"888.8\xb0"}),(0,n.jsx)("span",{className:"ml-1",children:"(888.8\xb0)"})]})})]}),(0,n.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,n.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,n.jsx)(d.ehW,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"RANGE"]}),(0,n.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("span",{className:"ml-1",children:"8888.8m"})})})]})]}),(0,n.jsx)("div",{className:"absolute bottom-8 right-4",children:(0,n.jsx)(m.Z,{className:"relative inline-flex"})})]})}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var n=r(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function o(e){return function(t){return n.createElement(d,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function d(e){var t=function(t){var r,s=e.attr,l=e.size,o=e.title,d=i(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(s)}},7950:function(e,t,r){"use strict";var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"}))});t.Z=s},4475:function(e,t,r){"use strict";var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"}))});t.Z=s}},function(e){e.O(0,[445,764,13,617,675,774,888,179],function(){return e(e.s=4939)}),_N_E=e.O()}]);