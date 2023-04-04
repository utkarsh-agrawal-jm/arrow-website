"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=c,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:c,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66569:(e,t,r)=>{r.d(t,{k:()=>s});var n=r(67294),c=r(39960),i=r(44996);const a={linkCard:"linkCard_uxt7",icon:"icon_lqTJ",cardHeader:"cardHeader_NaDd",cardBody:"cardBody_svEQ",paragraph:"paragraph_UbEf"};function o(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:a.linkCard},r)}function l(e){let{title:t,icon:r,body:c}=e;return n.createElement("div",{className:"card"},n.createElement("div",{className:`card__header ${a.cardHeader}`},n.createElement("img",{className:a.icon,src:(0,i.Z)(`/img/${r}`),alt:`${t} category`,title:`${t} category`,width:"48px",height:"48px"}),n.createElement("h2",{title:t,className:"text--truncate"},t)),n.createElement("div",{className:`card__body ${a.cardBody}`},n.createElement("p",{className:`${a.paragraph}`},c)))}const s=e=>n.createElement(o,{href:e.href},n.createElement(l,e))},97048:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),c=r(53438),i=r(66569);const a="icon-tutorial.svg";function o(e){let{item:t}=e;const r=function(){try{return(0,c.jA)()}catch{return}}()?.customProps?.icon,o={title:t.label,icon:t.customProps?.icon||r||a,href:t.href,body:t.customProps?.description??("link"===t.type&&(0,c.xz)(t.docId??void 0)).description??void 0};return n.createElement(i.k,o)}const l={container:"container_Mg1N"};function s(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(u,{items:r.items,className:t})}function u(e){const{items:t,className:r}=e;if(!t)return n.createElement(s,e);const i=(0,c.MN)(t);return n.createElement("section",{className:`${l.container} ${r}`},i.map(((e,t)=>n.createElement("article",{key:t},n.createElement(o,{item:e})))))}},59857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),c=(r(67294),r(3905)),i=r(53438),a=r(97048);const o={title:"Resilience"},l="<decorated-text icon={useCurrentSidebarCategory().customProps.icon} title={frontMatter.title} />",s={unversionedId:"learn/resilience/index",id:"learn/resilience/index",title:"Resilience",description:"{useCurrentSidebarCategory().customProps.description}",source:"@site/content/docs/learn/resilience/index.md",sourceDirName:"learn/resilience",slug:"/learn/resilience/",permalink:"/learn/resilience/",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/resilience/index.md",tags:[],version:"current",frontMatter:{title:"Resilience"},sidebar:"learnSidebar",previous:{title:"Concurrency primitives",permalink:"/learn/coroutines/concurrency-primitives"},next:{title:"Introduction",permalink:"/learn/resilience/intro"}},u={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"decorated-text-iconusecurrentsidebarcategorycustompropsicon-titlefrontmattertitle-"},(0,c.kt)("decorated-text",{icon:(0,i.jA)().customProps.icon,title:o.title})),(0,c.kt)("p",null,(0,i.jA)().customProps.description),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);