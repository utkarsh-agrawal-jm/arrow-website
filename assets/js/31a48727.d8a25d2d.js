"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[3545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=i,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||r;return t?o.createElement(d,a(a({ref:n},u),{},{components:t})):o.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const r={sidebar_position:3,description:"Avoiding duplicate work for pure functions"},a="Memoization",c={unversionedId:"learn/collections-functions/memoize",id:"learn/collections-functions/memoize",title:"Memoization",description:"Avoiding duplicate work for pure functions",source:"@site/content/docs/learn/collections-functions/memoize.md",sourceDirName:"learn/collections-functions",slug:"/learn/collections-functions/memoize",permalink:"/learn/collections-functions/memoize",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/collections-functions/memoize.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Avoiding duplicate work for pure functions"},sidebar:"learnSidebar",previous:{title:"Recursive functions",permalink:"/learn/collections-functions/recursive"},next:{title:"Utilities for functions",permalink:"/learn/collections-functions/utils"}},l={},s=[{value:"Simple memoization",id:"simple-memoization",level:2},{value:"Recursion",id:"recursion",level:2}],u={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"memoization"},"Memoization"),(0,i.kt)("p",null,"Say that your function is pure, that is, given the same inputs it always\nproduces the same outputs and it doesn't produce any other effects like printing\nto the screen. Then, once you execute the function for a given input, you could\nsave (or cache) the result, so the next time you need you don't to compute it\nagain. The general technique of saving outputs to avoid double computation of\npure functions is known as ",(0,i.kt)("em",{parentName:"p"},"memoization"),"."),(0,i.kt)("h2",{id:"simple-memoization"},"Simple memoization"),(0,i.kt)("p",null,"Arrow Core contains a small utility called\n",(0,i.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/memoize.html"},(0,i.kt)("inlineCode",{parentName:"a"},"memoize")),"\nwhich transforms any function into one that keep a cache of computed results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"import arrow.core.memoize\n\nfun expensive(x: Int): Int {\n  // fake it by sleeping the thread\n  Thread.sleep(x * 100L)\n  return x\n}\n\nval memoizedExpensive = ::expensive.memoize()\n")),(0,i.kt)("p",null,"The first time you call ",(0,i.kt)("inlineCode",{parentName:"p"},"memoizeExpensive"),", it needs to compute the value.\nFrom that moment on, the call returns immediately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun example() {\n  val result1 = memoizedExpensive(3)\n  val result2 = memoizedExpensive(3)\n  result1 shouldBe result2\n}\n")),(0,i.kt)("admonition",{title:"Memoization takes memory",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you define the memoized version of your function as a ",(0,i.kt)("inlineCode",{parentName:"p"},"val"),", as we've done\nabove, the cache is shared among ",(0,i.kt)("strong",{parentName:"p"},"all")," calls to your function. In the worst\ncase, this may result in memory which cannot be reclaimed throughout the whole\nexecution, so you should apply this technique carefully."),(0,i.kt)("p",{parentName:"admonition"},"There's some literature about ",(0,i.kt)("a",{parentName:"p",href:"https://otee.dev/2021/08/18/cache-replacement-policy.html"},"eviction policies for memoization"),",\nbut at the moment of writing memoize doesn't offer any type of control over the\ncached values. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sksamuel/aedile"},"Aedile")," is a Kotlin-first\ncaching library which you can use to manually tweak your memoization.")),(0,i.kt)("h2",{id:"recursion"},"Recursion"),(0,i.kt)("p",null,"The technique outline above can be applied to any function, regardless of its\nprovenance. However, one needs to be aware of the limitations of ",(0,i.kt)("inlineCode",{parentName:"p"},"memoize")," with\nrespect to recursive functions."),(0,i.kt)("p",null,"Let's say we define a recursive Fibonacci function, and call ",(0,i.kt)("inlineCode",{parentName:"p"},"memoize")," with the\nintention of avoiding computing the same values over and over."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun fibonacciWorker(n: Int): Int = when (n) {\n  0 -> 0\n  1 -> 1\n  else -> fibonacciWorker(n - 1) + fibonacciWorker(n - 2)\n}\n\nval fibonacci = ::fibonacciWorker.memoize()\n")),(0,i.kt)("p",null,"This solution falls short, though, because recursion goes through\n",(0,i.kt)("inlineCode",{parentName:"p"},"fibonacciWorker"),", which is ",(0,i.kt)("strong",{parentName:"p"},"not")," memoized."),(0,i.kt)("p",null,"One way to avoid this problem is making ",(0,i.kt)("inlineCode",{parentName:"p"},"fibonacciWorker")," call ",(0,i.kt)("inlineCode",{parentName:"p"},"fibonacci"),"\ninstead. Our recommendation, however, is to use\n",(0,i.kt)("a",{parentName:"p",href:"../recursive/#memoized-recursive-functions"},(0,i.kt)("inlineCode",{parentName:"a"},"MemoizedDeepRecursiveFunction")),",\nwhich avoids the weird mutually-recursive definition, and has the additional\nbenefit of avoiding stack overflows."))}p.isMDXComponent=!0}}]);