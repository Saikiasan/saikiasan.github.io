"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[306],{8907:function(e,t){t.Y=function(e,t){return c(e).some((function(e){var a=e.inverse,r="all"===e.type||t.type===e.type;if(r&&a||!r&&!a)return!1;var n=e.expressions.every((function(e){var a=e.feature,r=e.modifier,n=e.value,l=t[a];if(!l)return!1;switch(a){case"orientation":case"scan":return l.toLowerCase()===n.toLowerCase();case"width":case"height":case"device-width":case"device-height":n=m(n),l=m(l);break;case"resolution":n=i(n),l=i(l);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":n=s(n),l=s(l);break;case"grid":case"color":case"color-index":case"monochrome":n=parseInt(n,10)||1,l=parseInt(l,10)||0}switch(r){case"min":return l>=n;case"max":return l<=n;default:return l===n}}));return n&&!a||!n&&a}))};var a=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function c(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(a),l=t[1],o=t[2],c=t[3]||"",s={};return s.inverse=!!l&&"not"===l.toLowerCase(),s.type=o?o.toLowerCase():"all",c=c.match(/\([^\)]+\)/g)||[],s.expressions=c.map((function(e){var t=e.match(r),a=t[1].toLowerCase().match(n);return{modifier:a[1],feature:a[2],value:t[2]}})),s}))}function s(e){var t,a=Number(e);return a||(a=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),a}function i(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function m(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},1138:function(e,t,a){a.d(t,{A:function(){return S}});var r=a(6540),n=a(4194),l=a(6231);const o=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("div",{className:"plate plate2 "+(e?"active":""),onClick:()=>{t((e=>!e))}},r.createElement("svg",{className:"burger",version:"1.1",height:"100",width:"100",viewBox:"0 0 100 100"},r.createElement("path",{className:"line line1",d:"M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"}),r.createElement("path",{className:"line line2",d:"M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"}),r.createElement("path",{className:"line line3",d:"M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"}),r.createElement("path",{className:"line line4",d:"M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"}),r.createElement("path",{className:"line line5",d:"M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"}),r.createElement("path",{className:"line line6",d:"M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"})),r.createElement("svg",{className:"x",version:"1.1",height:"100",width:"100",viewBox:"0 0 100 100"},r.createElement("path",{className:"line",d:"M 34,32 L 66,68"}),r.createElement("path",{className:"line",d:"M 66,32 L 34,68"})))},c=[{t:"home",u:"/"},{t:"about",u:"/about"},{t:"projects",u:"/projects"},{t:"careers",u:"/careers"},{t:"blogs",u:"/blogs"},{t:"contact",u:"/contact"}];var s=e=>{let{siteTitle:t}=e;const a=(0,l.Ub)({maxWidth:768});return r.createElement("nav",{className:"navbar navbar-expand-lg",style:{margin:"none",padding:"0 0",display:a?"none":""}},r.createElement("div",{className:"container-fluid",style:{margin:"0px 0px",padding:"12px"}},r.createElement("div",{className:"navbar-brand"},t),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar_t","aria-controls":"navbar_t","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement(o,null)),r.createElement("div",{className:"collapse navbar-collapse ",id:"navbar_t"},a?r.createElement("ul",{className:"navbar-nav ms-lg-auto mb-2 mb-lg-0 gap-3 mt-5"},c.map(((e,t)=>r.createElement("li",{className:"nav-item px-4"},r.createElement(n.Link,{className:"nav-link text-capitalize",activeClassName:"active",to:e.u},e.t))))):r.createElement("ul",{className:"navbar-nav ms-lg-auto mb-2 mb-lg-0"},c.map(((e,t)=>r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{className:"nav-link text-capitalize",activeClassName:"active",to:e.u},e.t))))))))},i="footer-module--arrowIcon--f0b44",m="footer-module--customBtn_12px--14180",u="footer-module--footer--33bb1",d="footer-module--grid_1--9cce6",p="footer-module--grid_2--5c63c",v="footer-module--navigationColumn--b92cb",f="footer-module--navigationLink--db9d0",b="footer-module--navigationListTitle--9e2fa",h="footer-module--promoCardText--1c32d",E="footer-module--promoCardTitle--b0cc9",g="footer-module--socialCardIcon--53828",y="footer-module--transitionAll500ms--146cf",N=a(1735),w=a(6973);const k=[{name:"Facebook",icon:r.createElement(N.I1X,{className:g}),cap:"Share posts on Facebook",url:"https://www.facebook.com/opseeker.saikia"},{name:"Instagram",icon:r.createElement(w.CRZ,{className:g}),cap:"Follow on Instagram",url:"https://www.instagram.com/saikia.code/"},{name:"LinkedIn",icon:r.createElement(w.Y5M,{className:g}),cap:"Connect on LinkedIn",url:"https://www.linkedin.com/in/ankit-saikia-17a48623b/"},{name:"WhatsApp",icon:r.createElement(w._QQ,{className:g}),cap:"Contact on WhatsApp",url:"https://wa.me/918257068226?text=Hello%0AI%20saw%20your%20site%20and%20wanted%20to%20know%20more"}],x={site:[{name:"why me?",url:"/why-us"},{name:"About",url:"/about"},{name:"Testimonials",url:"/testimonials"},{name:"FAQ",url:"/faq"}],services:[{name:"Web Development",url:"/web-development"},{name:"App Development",url:"/mobile-app-development"},{name:"Digital solutions",url:"/digital-marketing"},{name:"UI - UX design",url:"/web-design"}],projects:[{name:"C.T College",url:"/projects/ctctsk"},{name:"AtomyKeson",url:"/projects/atomy-keson"},{name:"keson template",url:"/projects/keson-templates-android"},{name:"indigain",url:"/projects/indigain"}],blogs:[{name:"Gatsby SSG",url:"/blog-1"},{name:"PHP UI",url:"/blog-2"},{name:"Static SPA",url:"/blog-3"},{name:"Flutter UI",url:"/blog-4"}]},C=()=>r.createElement("div",{className:"footer-module--socialCardContainer--20250"},k.map(((e,t)=>r.createElement("div",{className:`card btn justify-content-center align-items-center footer-module--socialCard--5a6a3 ${y}`,key:t},r.createElement("div",{className:"card-body footer-module--socialCardBody--bd2ba"},r.createElement("div",{className:"top justify-content-between align-items-center"},e.icon,r.createElement(n.Link,{to:e.url,target:"_blank",className:"footer-module--socialCardLink--35317",style:{width:"40px",height:"40px"}},r.createElement(w.QTF,{className:i}))),r.createElement("div",{className:"details"},r.createElement("h5",{className:"footer-module--socialCardTitle--f6047"},e.name),r.createElement("div",{className:"footer-module--socialCardText--b93e7"},e.cap))))))),j=()=>r.createElement("div",{className:"footer-module--navigationContainer--453f5"},r.createElement("div",{className:"card footer-module--navigationCard--8291b"},r.createElement("div",{className:"card-body row justify-content-center"},r.createElement("div",{className:`col ${v}`},r.createElement("h5",{className:`card-title ${b}`},"Home"),r.createElement("ul",{className:"nav flex-column"},x.site.map(((e,t)=>r.createElement("li",{className:"nav-item",key:t},r.createElement(n.Link,{to:e.url,className:`nav-link ${f}`},e.name)))))),r.createElement("div",{className:`col ${v}`},r.createElement("h5",{className:`card-title ${b}`},"Services"),r.createElement("ul",{className:"nav flex-column"},x.services.map(((e,t)=>r.createElement("li",{className:"nav-item",key:t},r.createElement(n.Link,{to:e.url,className:`nav-link ${f}`},e.name)))))),r.createElement("div",{className:`col ${v}`},r.createElement("h5",{className:`card-title ${b}`},"Projects"),r.createElement("ul",{className:"nav flex-column"},x.projects.map(((e,t)=>r.createElement("li",{className:"nav-item",key:t},r.createElement(n.Link,{to:e.url,className:`nav-link ${f}`},e.name)))))),r.createElement("div",{className:`col ${v}`},r.createElement("h5",{className:`card-title ${b}`},"Blogs"),r.createElement("ul",{className:"nav flex-column"},x.blogs.map(((e,t)=>r.createElement("li",{className:"nav-item",key:t},r.createElement(n.Link,{to:e.url,className:`nav-link ${f}`},e.name))))))))),O=()=>r.createElement("div",{className:"footer-module--newsLetterContainer--fcd44"},r.createElement("div",{className:"card footer-module--newsLetterCard--0357f"},r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"lead",style:{color:"var(--g-80)"}},"Newsletter"),r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("h4",{className:"text-uppercase",style:{fontFamily:"Avalon"}},"subscribe to my newsletters"),r.createElement("form",{className:"d-inline-flex"},r.createElement("input",{type:"email",placeholder:"Enter your email",className:"footer-module--newsLetterInput--e7140"}),r.createElement("button",{type:"submit",className:`btn rounded-circle footer-module--newsLetterLink--83be4 ${y}`},r.createElement(w.QTF,{className:i,style:{color:"var(--o-80)"}}))))))),L=e=>r.createElement("div",{className:"footer-module--copyright--43e5e"},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body footer-module--copyrightCardBody--046cd"},r.createElement("p",{className:"footer-module--left--5916e"},r.createElement("i",{className:"bi bi-c-circle"})," ",(new Date).getFullYear()," ",e.author," All rights reserved."),r.createElement("p",{className:"footer-module--right--f5abe"},r.createElement(n.Link,{to:"/tnc",className:"tnc"},"Terms & Conditions"),r.createElement("div",{className:"vr mx-2"}),r.createElement(n.Link,{to:"/privacy-policy",className:"tnc"},"Privacy Policy")))));function $(e){let{siteAuthor:t}=e;return(0,l.Ub)({maxWidth:768})?r.createElement(A,{siteAuthor:t}):r.createElement(P,{siteAuthor:t})}const A=e=>{let{siteAuthor:t}=e;return r.createElement("footer",{className:u,hidden:!0},r.createElement("div",{className:"card",style:{padding:"24px",background:"var(--o-60)"}},r.createElement("div",{className:"card-body"},r.createElement("h2",{className:E},"ready to upgrade your business?"),r.createElement("p",{className:`lead ${h}`},"Take the first step towards digital success with me."),r.createElement(n.Link,{to:"/contact/",className:`text-uppercase btn ${m} end-0 bottom-0 position-absolute ${y}`,style:{background:"var(--d-06)",color:"var(--0-90)",marginRight:"calc(24px * 1.5)",marginBottom:"calc(24px * 1.5)"}},"Get in touch   ",r.createElement(w.z5i,{className:i,style:{position:"relative"}})))),r.createElement("div",{className:d},r.createElement(C,null),r.createElement("div",{className:p},r.createElement(L,{author:t}))))},P=e=>{let{siteAuthor:t}=e;return r.createElement("footer",{className:u},r.createElement("div",{className:"card",style:{padding:"24px",background:"var(--o-60)"}},r.createElement("div",{className:"card-body"},r.createElement("h2",{className:E},"ready to upgrade your business?"),r.createElement("p",{className:`lead ${h}`},"Take the first step towards digital success with me."),r.createElement(n.Link,{to:"/contact/",className:`text-uppercase btn ${m} end-0 bottom-0 position-absolute ${y}`,style:{background:"var(--d-06)",color:"var(--0-90)",marginRight:"calc(24px * 1.5)",marginBottom:"calc(24px * 1.5)"}},"Get in touch   ",r.createElement(w.z5i,{className:i,style:{position:"relative"}})))),r.createElement("div",{className:d},r.createElement(C,null),r.createElement(j,null),r.createElement("div",{className:p},r.createElement(O,null),r.createElement(L,{author:t}))))};var S=e=>{var t,a;let{children:l}=e;const o=(0,n.useStaticQuery)("2326376460");return r.createElement(r.Fragment,null,r.createElement("div",{class:"preloader"}),r.createElement(s,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("svg",null,r.createElement("defs",null,r.createElement("filter",{id:"gooeyness"},r.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.2",result:"blur"}),r.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",result:"gooeyness"}),r.createElement("feComposite",{in:"SourceGraphic",in2:"gooeyness",operator:"atop"})))),r.createElement("main",null,l),r.createElement($,{siteAuthor:(null===(a=o.site.siteMetadata)||void 0===a?void 0:a.author)||"Saikia"}))}},7918:function(e,t,a){var r=a(8907).Y,n="undefined"!=typeof window?window.matchMedia:null;function l(e,t,a){var l,o=this;function c(e){o.matches=e.matches,o.media=e.media}n&&!a&&(l=n.call(window,e)),l?(this.matches=l.matches,this.media=l.media,l.addListener(c)):(this.matches=r(e,t),this.media=e),this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(c)}}e.exports=function(e,t,a){return new l(e,t,a)}},6231:function(e,t,a){a.d(t,{Ub:function(){return j}});var r=a(6540),n=a(7918),l=a.n(n),o=/[A-Z]/g,c=/^ms-/,s={};function i(e){return"-"+e.toLowerCase()}var m=function(e){if(s.hasOwnProperty(e))return s[e];var t=e.replace(o,i);return s[e]=c.test(t)?"-"+t:t};function u(e,t){if(e===t)return!0;if(!e||!t)return!1;const a=Object.keys(e),r=Object.keys(t),n=a.length;if(r.length!==n)return!1;for(let l=0;l<n;l++){const r=a[l];if(e[r]!==t[r]||!Object.prototype.hasOwnProperty.call(t,r))return!1}return!0}var d=a(5556),p=a.n(d);const v=p().oneOfType([p().string,p().number]),f={all:p().bool,grid:p().bool,aural:p().bool,braille:p().bool,handheld:p().bool,print:p().bool,projection:p().bool,screen:p().bool,tty:p().bool,tv:p().bool,embossed:p().bool},b={orientation:p().oneOf(["portrait","landscape"]),scan:p().oneOf(["progressive","interlace"]),aspectRatio:p().string,deviceAspectRatio:p().string,height:v,deviceHeight:v,width:v,deviceWidth:v,color:p().bool,colorIndex:p().bool,monochrome:p().bool,resolution:v,type:Object.keys(f)},{type:h,...E}=b,g={minAspectRatio:p().string,maxAspectRatio:p().string,minDeviceAspectRatio:p().string,maxDeviceAspectRatio:p().string,minHeight:v,maxHeight:v,minDeviceHeight:v,maxDeviceHeight:v,minWidth:v,maxWidth:v,minDeviceWidth:v,maxDeviceWidth:v,minColor:p().number,maxColor:p().number,minColorIndex:p().number,maxColorIndex:p().number,minMonochrome:p().number,maxMonochrome:p().number,minResolution:v,maxResolution:v,...E};var y={all:{...f,...g},types:f,matchers:b,features:g};const N=e=>{const t=[];return Object.keys(y.all).forEach((a=>{const r=e[a];null!=r&&t.push(((e,t)=>{const a=m(e);return"number"==typeof t&&(t=`${t}px`),!0===t?a:!1===t?`not ${a}`:`(${a}: ${t})`})(a,r))})),t.join(" and ")},w=(0,r.createContext)(void 0),k=e=>{if(!e)return;return Object.keys(e).reduce(((t,a)=>(t[m(a)]=e[a],t)),{})},x=()=>{const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{e.current=!0}),[]),e.current},C=e=>{const t=()=>(e=>e.query||N(e))(e),[a,n]=(0,r.useState)(t);return(0,r.useEffect)((()=>{const e=t();a!==e&&n(e)}),[e]),a},j=(e,t,a)=>{const n=(e=>{const t=(0,r.useContext)(w),a=()=>k(e)||k(t),[n,l]=(0,r.useState)(a);return(0,r.useEffect)((()=>{const e=a();u(n,e)||l(e)}),[e,t]),n})(t),o=C(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const c=((e,t)=>{const a=()=>l()(e,t||{},!!t),[n,o]=(0,r.useState)(a),c=x();return(0,r.useEffect)((()=>{if(c){const e=a();return o(e),()=>{e&&e.dispose()}}}),[e,t]),n})(o,n),s=(e=>{const[t,a]=(0,r.useState)(e.matches);return(0,r.useEffect)((()=>{const t=e=>{a(e.matches)};return e.addListener(t),a(e.matches),()=>{e.removeListener(t)}}),[e]),t})(c),i=x();return(0,r.useEffect)((()=>{i&&a&&a(s)}),[s]),(0,r.useEffect)((()=>()=>{c&&c.dispose()}),[]),s}},2225:function(e,t,a){a.d(t,{k5:function(){return p}});var r=a(6540),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),o=["attr","size","title"];function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e){return e&&e.map(((e,t)=>r.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function p(e){return t=>r.createElement(v,s({attr:m({},e.attr)},t),d(e.child))}function v(e){var t=t=>{var a,{attr:n,size:l,title:i}=e,u=c(e,o),d=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:a,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=1c9f092f6c2dbca7f11c986feaff78e8a3cde7bd-d390c4616ffd6a792664.js.map