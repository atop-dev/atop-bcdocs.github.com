(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8888],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8684:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},s={unversionedId:"getting_started/install",id:"getting_started/install",isDocsHomePage:!1,title:"Install",description:"Welcome to the official ATOP repository.",source:"@site/docs/getting_started/install.md",sourceDirName:"getting_started",slug:"/getting_started/install",permalink:"/kr/docs/getting_started/install",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validator Overview",permalink:"/kr/docs/getting_started/validator"},next:{title:"Deploy",permalink:"/kr/docs/getting_started/deploy"}},u=[{value:"Building from sources",id:"building-from-sources",children:[]},{value:"Supported Systems",id:"supported-systems",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Build Tags",id:"build-tags",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the official ATOP repository."),(0,i.kt)("h2",{id:"building-from-sources"},"Building from sources"),(0,i.kt)("h2",{id:"supported-systems"},"Supported Systems"),(0,i.kt)("p",null,"We currently supports the operating systems from the list below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ubuntu 18.04 or later"),(0,i.kt)("li",{parentName:"ul"},"MacOS 10.14 or later")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Make sure you have the following utilities installed before building sources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Golang")," >= 1.15"),(0,i.kt)("li",{parentName:"ul"},"make")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"git clone this repository and change directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/cloudndigital/bc_mainnet.git\ncd bc_mainnet\n")),(0,i.kt)("p",null,"Simply make it!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")),(0,i.kt)("p",null,"The binaries assembled (",(0,i.kt)("em",{parentName:"p"},"atopnode and atopcli"),") are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"$GOBIN")," directory (",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," by default).\nMake sure you have added ",(0,i.kt)("inlineCode",{parentName:"p"},"$GOBIN")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," before you attempt to start ATOP."),(0,i.kt)("p",null,"That will install the atopcli and atopnode binaries. Verify that everything is working fine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"atopcli version --long\n")),(0,i.kt)("p",null,"atop-cli should output something similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'name: AceTop\nserver_name: atopnode\nclient_name: atopcli\nversion: ""\ncommit: 3a1f81c0f5290f54a91096a9ebaebba4dcbf519d\nbuild_tags: netgo,ledger\ngo: go version go1.15.6 darwin/amd64\n')),(0,i.kt)("h2",{id:"build-tags"},"Build Tags"),(0,i.kt)("p",null,"Build tags indicate special features that have been enabled in the binary."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"netgo")," Name resolution will use pure Go code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ledger")," Ledger devices are supported (hardware wallets)")),(0,i.kt)("h1",{id:""}))}p.isMDXComponent=!0}}]);