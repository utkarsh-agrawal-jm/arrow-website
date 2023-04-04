"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[7603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"learn/immutable-data/intro",id:"learn/immutable-data/intro",title:"Introduction",description:"Data classes, sealed hierarchies, and above all, immutable data is",source:"@site/content/docs/learn/immutable-data/intro.md",sourceDirName:"learn/immutable-data",slug:"/learn/immutable-data/intro",permalink:"/learn/immutable-data/intro",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/immutable-data/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Immutable Data",permalink:"/learn/immutable-data/"},next:{title:"Lenses",permalink:"/learn/immutable-data/lens"}},l={},p=[{value:"Meet optics",id:"meet-optics",level:2},{value:"Many optics to rule them all",id:"many-optics-to-rule-them-all",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Data classes, sealed hierarchies, and above all, ",(0,r.kt)("strong",{parentName:"p"},"immutable data")," is\nan excellent recipe for ",(0,r.kt)("a",{parentName:"p",href:"../../design/domain-modeling/"},"domain modeling"),". If we want\nto model a domain sharply, we often end up with a large amount of (nested)\nclasses, each of them representing a particular kind of object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Person(val name: String, val age: Int, val address: Address)\ndata class Address(val street: Street, val city: City)\ndata class Street(val name: String, val number: Int?)\ndata class City(val name: String, val country: String)\n")),(0,r.kt)("p",null,"Alas, Kotlin doesn't provide great tooling out of the box to transform those\nvalues. Data classes have a built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"copy")," method, but we need to repeat the\nname of the fields and perform iterated copies even if we only want to touch\none single field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Person.capitalizeCountry(): Person =\n  this.copy(\n    address = address.copy(\n      city = address.city.copy(\n        country = address.city.country.capitalize()\n      )\n    )\n  )\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We often use the word ",(0,r.kt)("em",{parentName:"p"},"transform")," even though we are talking about immutable\ndata. In most cases, we refer to creating a ",(0,r.kt)("em",{parentName:"p"},"copy")," of the value where some of\nthe fields are ",(0,r.kt)("em",{parentName:"p"},"modified"),".")),(0,r.kt)("h2",{id:"meet-optics"},"Meet optics"),(0,r.kt)("p",null,"Arrow provides a solution to this problem in the form of ",(0,r.kt)("strong",{parentName:"p"},"optics"),". Optics\nare values that represent access to a value (or values) inside a larger\nvalue. For example, we may have an optic focusing (that's the term we use)\non the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," field of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Person"),". By combining different optics, we can\nconcentrate on nested elements, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," field within the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," field\nwithin a ",(0,r.kt)("inlineCode",{parentName:"p"},"Person"),". But code speaks louder than words, so let's see how the\nexample above improves using optics."),(0,r.kt)("p",null,"The easiest way to start with Arrow Optics is through its compiler\nplug-in. After ",(0,r.kt)("a",{parentName:"p",href:"../../quickstart/#additional-setup-for-plug-ins"},"adding it to your build"),"\nyou just need to mark each class for which you want optics generated\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"@optics")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import arrow.optics.*\n\n@optics data class Person(val name: String, val age: Int, val address: Address) {\n  companion object\n}\n@optics data class Address(val street: Street, val city: City) {\n  companion object\n}\n@optics data class Street(val name: String, val number: Int?) {\n  companion object\n}\n@optics data class City(val name: String, val country: String) {\n  companion object\n}\n")),(0,r.kt)("admonition",{title:"Annoying companion object",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You need to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"companion object")," declaration in each class, even if it's empty.\nThis is due to limitations in ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-quickstart.html"},"KSP"),",\nthe compiler plug-in framework used to implement the Arrow Optics plug-in.")),(0,r.kt)("p",null,"The plug-in generates optics for each field, available under the class name.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Person.address")," is the optic focusing on the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," field.\nFurthermore, you can create optics that focus on nested fields using the\nsame dot notation you're used to. In this case,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Person.address.city.country")," represents the optic focusing precisely on\nthe field we want to transform. By using it, we can reimplement ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalizeCountry"),"\nin two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optic-first"),": the ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," operation of an optic takes an entire value\n(",(0,r.kt)("inlineCode",{parentName:"p"},"this")," in the example) and the transformation to apply to the focused element."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Person.capitalizeCountryModify(): Person =\n  Person.address.city.country.modify(this) { it.capitalize() }\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Copy builder"),": Arrow Optics provides an overload of ",(0,r.kt)("inlineCode",{parentName:"p"},"copy")," that, instead\nof named arguments, takes a block. Inside that block, you can use the syntax\n",(0,r.kt)("inlineCode",{parentName:"p"},"optic transform operation")," to modify a focused element."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Person.capitalizeCountryCopy(): Person =\n  this.copy {\n    Person.address.city.country transform { it.capitalize() }\n  }\n")))),(0,r.kt)("h2",{id:"many-optics-to-rule-them-all"},"Many optics to rule them all"),(0,r.kt)("p",null,"You may have noticed that we speak about optic",(0,r.kt)("em",{parentName:"p"},"s"),". In fact, there are a few\nimportant kinds that differ in the ",(0,r.kt)("em",{parentName:"p"},"amount")," of elements they\ncan potentially focus on. All the optics in the example above are ",(0,r.kt)("strong",{parentName:"p"},"lenses"),",\nwhich have precisely one focus. At the other end of the spectrum, we have\n",(0,r.kt)("a",{parentName:"p",href:"../traversal"},(0,r.kt)("strong",{parentName:"a"},"traversals")),", which focus on any amount of elements; they can be used to\nuniformly modify all the elements in a list, among other operations.\nOptics form a hierarchy that we can summarize in the diagram below."),(0,r.kt)("center",null,(0,r.kt)("mermaid",{value:"graph TD;\n  traversal{{\"<a href='../traversal/'><b>Traversal</b></a> (0 .. \u221e)<br /><tt>getAll</tt> (return a list)<br /><tt>modify</tt> and <tt>set</tt>\"}};\n  optional{{\"<a href='../optional/'><b>Optional</b></a> (0 .. 1)<br /><tt>getOrNull</tt> (return a nullable)\"}};\n  lens{{\"<a href='../lens/'><b>Lens</b></a> (exactly 1)<br /><tt>get</tt>\"}};\n  prism{{\"<a href='../prism-iso/'><b>Prism<b></a><br /><tt>reverseGet</tt>\"}};\n  iso{{\"<a href='../prism-iso/#isomorphisms'><b>Iso<b></a>\"}}\n  traversal--\x3eoptional;\n  optional--\x3elens;\n  optional--\x3eprism;\n  lens--\x3eiso;\n  prism--\x3eiso;"})),(0,r.kt)("p",null,'The "main line" of optics is ',(0,r.kt)("inlineCode",{parentName:"p"},"Traversal")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Lens"),", which differ\nonly in the number of elements they focus on. ",(0,r.kt)("a",{parentName:"p",href:"../prism-iso"},(0,r.kt)("inlineCode",{parentName:"a"},"Prism")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"Iso"))," add a slight\ntwist: they allow not only modifying, but also ",(0,r.kt)("em",{parentName:"p"},"creating")," new values and\nmatching over them."),(0,r.kt)("admonition",{title:"Even more optics",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Arrow 1.x features a larger hierarchy of optics because the operations of\n"getting" values and "modifying" them live in different interfaces.\nArrow 2.x simplifies the hierarchy to the five optics described in this section.'),(0,r.kt)("mermaid",{parentName:"admonition",value:'graph TD;\n  subgraph <h4>only access</h4>\n    fold{{"<b>Fold</b> (0 .. \u221e)<br /><tt>getAll</tt>"}};\n    optionalFold{{"<b>OptionalFold</b> (0 .. 1)<br /><tt>getOrNull</tt>"}};\n    getter{{"<b>Getter</b> (exactly 1)<br /><tt>get</tt>"}};\n  end\n  setter{{"<b>Setter</b><br /><tt>modify</tt> and <tt>set</tt>"}};\n  subgraph <h4>Arrow 2.x</h4>\n    traversal{{"<b>Traversal</b>"}};\n    optional{{"<b>Optional</b>"}};\n    lens{{"<b>Lens</b>"}};\n    prism{{"<b>Prism<b><br /><tt>reverseGet</tt>"}};\n    iso{{"<b>Iso<b>"}}\n  end\n  fold--\x3etraversal;\n  setter--\x3etraversal;\n  fold--\x3eoptionalFold;\n  optionalFold--\x3egetter;\n  optionalFold--\x3eoptional;\n  traversal--\x3eoptional;\n  getter--\x3elens;\n  optional--\x3elens;\n  optional--\x3eprism;\n  lens--\x3eiso;\n  prism--\x3eiso;'})))}d.isMDXComponent=!0}}]);