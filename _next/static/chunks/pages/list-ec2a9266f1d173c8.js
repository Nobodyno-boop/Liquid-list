(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{7833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list",function(){return n(7587)}])},7587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var s=n(5893),l=n(7294);let r=e=>{let{value:t="",placeHolder:n,onUpdate:r,size:i="sm"}=e,[o,u]=(0,l.useState)(t),[a,c]=(0,l.useState)(!1),d=(0,l.useRef)(),v=(0,l.useRef)(),f=()=>{c(!0)};(0,l.useEffect)(()=>{a&&v.current.focus()},[a]);let h=()=>{console.log("Focus")},x=()=>{u(v.current.value),c(!1),r&&r(v.current.value)},m=e=>{("Enter"===e.code||"Enter"===e.key)&&x()};return(0,s.jsx)("div",{children:a?(0,s.jsx)("div",{children:(0,s.jsx)("input",{className:"input input-".concat(i," input-ghost w-full max-w-xs"),ref:v,type:"text",placeholder:n,defaultValue:o,onBlur:x,onKeyUp:m})}):(0,s.jsx)("div",{ref:d,onDoubleClick:f,onFocus:h,children:o.length>0?o:(0,s.jsx)("span",{className:"text-base-300/20",children:n})})})},i=[],o=0,u=(e,t)=>{let n;let s=[],l={lc:0,l:t||0,value:e,set(e){l.value=e,l.notify()},get:()=>(l.lc||l.listen(()=>{})(),l.value),notify(e){n=s;let t=!i.length;for(let t=0;t<n.length;t+=2)i.push(n[t],l.value,e,n[t+1]);if(t){o++;for(let e=0;e<i.length;e+=4){let t=!1;for(let n=e+7;n<i.length;n+=4)if(i[n]<i[e+3]){t=!0;break}t?i.push(i[e],i[e+1],i[e+2],i[e+3]):i[e](i[e+1],i[e+2])}i.length=0}},listen:(e,t)=>(s===n&&(s=s.slice()),l.lc=s.push(e,t||l.l)/2,()=>{s===n&&(s=s.slice());let t=s.indexOf(e);~t&&(s.splice(t,2),l.lc--,l.lc||l.off())}),subscribe(e,t){let n=l.listen(e,t);return e(l.value),n},off(){}};return l},a=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),""),c=(e,t,n,s)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=s(t=>{e.events[n].reduceRight((e,t)=>(t(e),e),{shared:{},...t})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let s=e.events[n],l=s.indexOf(t);s.splice(l,1),s.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),d=(e,t)=>{let n=n=>{let s=t(n);s&&e.events[6].push(s)};return c(e,n,5,t=>{let n=e.listen;e.listen=(...s)=>(e.lc||e.active||(e.active=!0,t()),n(...s));let s=e.off;return e.events[6]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){for(let t of(e.active=!1,e.events[6]))t();e.events[6]=[]}},1e3)},()=>{e.listen=n,e.off=s}})},v=e=>e,f={},h={addEventListener(){},removeEventListener(){}};(function(){try{return"undefined"!=typeof localStorage}catch{return!1}})()&&(f=localStorage),"undefined"!=typeof window&&(h={addEventListener(e,t){window.addEventListener("storage",t)},removeEventListener(e,t){window.removeEventListener("storage",t)}});let x=function(e,t,n={}){let s=n.encode||v,l=n.decode||v,r=u(t),i=r.set;function o(t){t.key===e?null===t.newValue?i(void 0):i(l(t.newValue)):f[e]||i(void 0)}return r.set=t=>{void 0===t?delete f[e]:f[e]=s(t),i(t)},d(r,()=>{if(r.set(f[e]?l(f[e]):t),!1!==n.listen)return h.addEventListener(e,o),()=>{h.removeEventListener(e,o)}}),r}("cards",[],{encode:e=>JSON.stringify(e),decode(e){try{return JSON.parse(e)}catch(t){return e}}}),m=()=>{x.set(x.get())},p=e=>x.get().find(t=>t._id===e),g=e=>{var t;return null===(t=p(e))||void 0===t?void 0:t.todos},w=(e,t)=>{let n=p(e);n&&(n.name=t),m()},T=()=>(x.set([...x.get(),{name:"",categories:[],todos:[]}]),x.get());u([]);let q=(e,t,n)=>{let s=g(e);if(s){let e=s.find(e=>e._id===t);(null==n?void 0:n.name)&&(e.name=n.name),(null==n?void 0:n.done)&&(e.done=n.done),m();return}},j=e=>{let t=g(e),n={done:!1,name:"",_id:a(6)};return t?(t.push(n),m(),n):null},y=e=>{let{todos:t,cardId:n}=e,l=(e,t)=>{console.log("update",e,t),q(n,e,{name:t})},i=(e,t)=>{q(n,e,{done:t})};return(0,s.jsx)("ul",{className:"text-base-100 flex flex-col gap-y-3",children:t.map((e,t)=>(0,s.jsxs)("li",{className:"inline-flex gap-x-3",children:[(0,s.jsx)("input",{type:"checkbox",defaultChecked:e.done,onChange:t=>i(e._id,t.target.checked),className:"checkbox"}),(0,s.jsx)("h3",{children:(0,s.jsx)(r,{placeHolder:"todo",value:e.name,size:"xs",onUpdate:t=>l(e._id,t)})})]},t))})},b=e=>{let{state:t}=e,[n,i]=(0,l.useState)(t.todos),[o,u]=(0,l.useState)(t.name),a=()=>{let e=j(t._id);if(e){let e=g(t._id);i([...e])}};return(0,s.jsx)("div",{className:"card w-96 bg-primary shadow-xl text-neutral",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h2",{className:"card-title",children:(0,s.jsx)(r,{placeHolder:"title",value:o,onUpdate:e=>w(t._id,e)})}),n.length>0?(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)("button",{className:"btn btn-square btn-outline w-full mb-4",onClick:a,children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"})}),(0,s.jsx)("span",{children:"ajouter une todo"})]}),(0,s.jsx)(y,{todos:n,cardId:t._id})]}):(0,s.jsx)("div",{className:"h-full",onClick:a,children:(0,s.jsx)("button",{className:"btn btn-outline max-w-3xl",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"})})})})]})})};var E=n(1688);function S(){let[e,t]=(0,l.useState)([]),n=function(e,t={}){let n=(0,l.useCallback)(n=>{var s;let l;return t.keys?(s=t.keys,l=new Set([...s,void 0]),e.listen((e,t)=>{l.has(t)&&n(e,t)})):e.listen(n)},[t.keys,e]),s=e.get.bind(e);return(0,E.useSyncExternalStore)(n,s,s)}(x);return(0,l.useEffect)(()=>{t(n)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsx)("button",{onClick:()=>{let e=T();t(e)},children:"add"})}),e.map((e,t)=>(0,s.jsx)(b,{state:e},t))]})}},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(7294),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=s.useState,i=s.useEffect,o=s.useLayoutEffect,u=s.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!l(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),s=r({inst:{value:n,getSnapshot:t}}),l=s[0].inst,c=s[1];return o(function(){l.value=n,l.getSnapshot=t,a(l)&&c({inst:l})},[e,n,t]),i(function(){return a(l)&&c({inst:l}),e(function(){a(l)&&c({inst:l})})},[e]),u(n),n};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:c},1688:function(e,t,n){"use strict";e.exports=n(3250)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7833)}),_N_E=e.O()}]);