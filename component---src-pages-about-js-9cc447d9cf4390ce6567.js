"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[432],{2794:function(e,a,t){t.d(a,{A:function(){return d}});var l=t(4194),n=t(6540);const s=[{name:"Facebook",icon:n.createElement("i",{class:"bi bi-facebook"}),cap:"Share posts on Facebook",url:""},{name:"Instagram",icon:n.createElement("i",{class:"bi bi-instagram"}),cap:"Follow on Instagram",url:""},{name:"LinkedIn",icon:n.createElement("i",{className:"bi bi-linkedin"}),cap:"Connect on LinkedIn",url:""},{name:"WhatsApp",icon:n.createElement("i",{class:"bi bi-whatsapp"}),cap:"Contact on WhatsApp",url:""}],r={site:[{name:"why me?",url:"/why-us"},{name:"About",url:"/about"},{name:"Testimonials",url:"/testimonials"},{name:"FAQ",url:"/faq"}],services:[{name:"Web Development",url:"/web-development"},{name:"App Development",url:"/mobile-app-development"},{name:"Digital solutions",url:"/digital-marketing"},{name:"UI - UX design",url:"/web-design"}],projects:[{name:"C.T College",url:"/projects/ctctsk"},{name:"AtomyKeson",url:"/projects/atomy-keson"},{name:"keson template",url:"/projects/keson-template-android"},{name:"indigain",url:"/projects/indigain"}],blogs:[{name:"Gatsby SSG",url:"/blog-1"},{name:"PHP UI",url:"/blog-2"},{name:"Static SPA",url:"/blog-3"},{name:"Flutter UI",url:"/blog-4"}]},c=()=>n.createElement("div",{className:"social-cards"},s.map(((e,a)=>n.createElement("div",{className:"card btn justify-content-center align-items-center",key:a},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"top justify-content-between align-items-center"},n.createElement("div",{className:"icon"},e.icon),n.createElement(l.Link,{className:"link",style:{width:"40px",height:"40px"}},n.createElement("i",{className:"bi bi-arrow-up-right"}))),n.createElement("div",{className:"details"},n.createElement("h5",{className:"title"},e.name),n.createElement("div",{className:"text"},e.cap))))))),i=()=>n.createElement("div",{className:"navigation"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body row justify-content-center"},n.createElement("div",{className:"col"},n.createElement("h5",{className:"card-title"},"Home"),n.createElement("ul",{className:"nav flex-column"},r.site.map(((e,a)=>n.createElement("li",{className:"nav-item",key:a},n.createElement(l.Link,{to:e.url,className:"nav-link"},e.name)))))),n.createElement("div",{className:"col"},n.createElement("h5",{className:"card-title"},"Services"),n.createElement("ul",{className:"nav flex-column"},r.services.map(((e,a)=>n.createElement("li",{className:"nav-item",key:a},n.createElement(l.Link,{to:e.url,className:"nav-link"},e.name)))))),n.createElement("div",{className:"col"},n.createElement("h5",{className:"card-title"},"Projects"),n.createElement("ul",{className:"nav flex-column"},r.projects.map(((e,a)=>n.createElement("li",{className:"nav-item",key:a},n.createElement(l.Link,{to:e.url,className:"nav-link"},e.name)))))),n.createElement("div",{className:"col"},n.createElement("h5",{className:"card-title"},"Blogs"),n.createElement("ul",{className:"nav flex-column"},r.blogs.map(((e,a)=>n.createElement("li",{className:"nav-item",key:a},n.createElement(l.Link,{to:e.url,className:"nav-link"},e.name))))))))),m=()=>n.createElement("div",{className:"newsletter"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body"},n.createElement("h5",{className:"lead",style:{color:"var(--g-80)"}},"Newsletter"),n.createElement("div",{className:"d-flex justify-content-between"},n.createElement("h4",{className:"text-uppercase",style:{fontFamily:"Avalon"}},"subscribe to my newsletters"),n.createElement("form",{className:"d-inline-flex"},n.createElement("input",{type:"email",placeholder:"Enter your email"}),n.createElement("button",{type:"submit",className:"btn rounded-circle link"},n.createElement("i",{className:"bi bi-arrow-up-right",style:{color:"var(--o-80)"}}))))))),o=e=>n.createElement("div",{className:"copyrights"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body"},n.createElement("p",{className:"left"},n.createElement("i",{className:"bi bi-c-circle"})," ",(new Date).getFullYear()," ",e.author," All rights reserved."),n.createElement("p",{className:"right"},n.createElement(l.Link,{to:"/tnc",className:"tnc"},"Terms & Conditions"),n.createElement("div",{className:"vr mx-2"}),n.createElement(l.Link,{to:"/privacy-policy",className:"tnc"},"Privacy Policy")))));function d(e){let{siteAuthor:a}=e;return n.createElement("footer",null,n.createElement("div",{className:"card",style:{padding:"24px",background:"var(--o-60)"}},n.createElement("div",{className:"card-body"},n.createElement("h2",{className:"text-uppercase",style:{color:"var(--d-06)",letterSpacing:"2px",fontFamily:"Mono Medium",fontSize:"3em"}},"ready to upgrade your business?"),n.createElement("p",{className:"lead fs-3 fw-normal",style:{fontFamily:"Monospace",color:"var(--d-06)"}},"Take the first step towards digital success with me."),n.createElement(l.Link,{to:"/contact/",className:"text-uppercase btn s-btn end-0 bottom-0 position-absolute",style:{background:"var(--d-06)",color:"var(--0-90)",marginRight:"calc(24px * 1.5)",marginBottom:"calc(24px * 1.5)"}},"Get in touch ",n.createElement("i",{class:"bi bi-arrow-up-right"})))),n.createElement("div",{className:"f1"},n.createElement(c,null),n.createElement(i,null),n.createElement("div",{className:"f2"},n.createElement(m,null),n.createElement(o,{author:a}))))}},4679:function(e,a,t){var l=t(6540),n=t(4194),s=t(7423),r=t(2794);a.A=e=>{var a,t;let{children:c}=e;const i=(0,n.useStaticQuery)("2326376460");return l.createElement(l.Fragment,null,l.createElement("div",{class:"preloader"}),l.createElement(s.A,{siteTitle:(null===(a=i.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),l.createElement("svg",null,l.createElement("defs",null,l.createElement("filter",{id:"gooeyness"},l.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.2",result:"blur"}),l.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",result:"gooeyness"}),l.createElement("feComposite",{in:"SourceGraphic",in2:"gooeyness",operator:"atop"})))),l.createElement("main",null,c),l.createElement(r.A,{siteAuthor:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.author)||"Saikia"}))}},7423:function(e,a,t){var l=t(6540),n=t(4194);const s=()=>{const{0:e,1:a}=(0,l.useState)(!1);return l.createElement("div",{className:"plate plate2 "+(e?"active":""),onClick:()=>{a((e=>!e))}},l.createElement("svg",{className:"burger",version:"1.1",height:"100",width:"100",viewBox:"0 0 100 100"},l.createElement("path",{className:"line line1",d:"M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"}),l.createElement("path",{className:"line line2",d:"M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"}),l.createElement("path",{className:"line line3",d:"M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"}),l.createElement("path",{className:"line line4",d:"M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"}),l.createElement("path",{className:"line line5",d:"M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"}),l.createElement("path",{className:"line line6",d:"M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"})),l.createElement("svg",{className:"x",version:"1.1",height:"100",width:"100",viewBox:"0 0 100 100"},l.createElement("path",{className:"line",d:"M 34,32 L 66,68"}),l.createElement("path",{className:"line",d:"M 66,32 L 34,68"})))},r=[{t:"home",u:"/"},{t:"about",u:"/about"},{t:"projects",u:"/projects"},{t:"careers",u:"/careers"},{t:"blogs",u:"/blogs"},{t:"contact me",u:"/contact"}];a.A=e=>{let{siteTitle:a}=e;return l.createElement("nav",{className:"navbar navbar-expand-lg",style:{margin:"none",padding:"0 0"}},l.createElement("div",{className:"container-fluid",style:{margin:"0px 0px",padding:"12px"}},l.createElement("div",{className:"navbar-brand"},a),l.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar_t","aria-controls":"navbar_t","aria-expanded":"false","aria-label":"Toggle navigation"},l.createElement(s,null)),l.createElement("div",{className:"collapse navbar-collapse ",id:"navbar_t"},l.createElement("form",{className:"d-flex align-items-center justify-content-center ms-lg-auto me-lg-0 visually-hidden",style:{marginRight:"30px"},id:"search-home",role:"search"},l.createElement("i",{className:"fa fa-search"}),l.createElement("input",{type:"search","aria-label":"Search",id:"searchInput",className:"form-control rounded-pill",placeholder:"Search",maxlength:"20"})),l.createElement("ul",{className:"navbar-nav ms-lg-auto mb-2 mb-lg-0"},r.map(((e,a)=>l.createElement("li",{className:"nav-item"},l.createElement(n.Link,{className:"nav-link text-capitalize",activeClassName:"active",to:e.u},e.t))))))))}},5583:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var l=t(6540),n=t(4679),s="about-page-module--container--f4905",r="about-page-module--description--37aef",c="about-page-module--itemHeading1--9f3dc",i="about-page-module--p2--9d5e2",m="about-page-module--pageTitle--39345",o="about-page-module--skillItem--5cf44",d="about-page-module--skillItemList--892dc",u="about-page-module--skills--35cae";const p=["PHP","Python","Java","Web Design & Development","Android App Development","Flutter","UI/UX Design","Frontend & Backend Development","Graphic Representation","Database Management & Firebase"];function v(){return l.createElement(n.A,null,l.createElement("div",{className:"container-fluid text-light",style:{paddingTop:"12px",marginBottom:"12px"}},l.createElement("h1",{className:m},"About Me"),l.createElement("div",{className:`${s}`},l.createElement("div",{className:`card ${r}`},l.createElement("div",{className:"card-body"},l.createElement("p",null,"Hello! I’m Ankit Saikia, a passionate and dedicated developer with a focus on frontend technologies. I completed my Bachelor of Computer Applications (BCA) in 2023 and have since been honing my skills in various areas of software development."))),l.createElement("div",{className:`card ${u}`},l.createElement("div",{className:`card-body ${i}`},l.createElement("h2",{className:c},"My Skills"),l.createElement("p",{className:"lead",style:{color:"var(--g-50)"}},"Throughout my journey, I’ve gained expertise in a range of programming languages and technologies:"),l.createElement("div",{className:`${d}`},p.map((e=>l.createElement("div",{key:e,className:o},l.createElement("span",null,e)))))))),l.createElement("h2",null,"What I Do"),l.createElement("p",null,"I mainly focus on frontend development, designing clean, user-friendly interfaces with a strong emphasis on responsiveness and performance. I enjoy creating visually appealing layouts that provide seamless user experiences. While I specialize in frontend, I also have a solid understanding of backend development and enjoy working on full-stack projects."),l.createElement("h2",null,"My Approach"),l.createElement("p",null,"Along with coding daily and working on personal projects, I make sure to stay updated with the latest trends in technology. I also have a keen interest in graphic design and enjoy visual storytelling through UI/UX design. I believe in continuously improving my skills and solving real-world problems through code."),l.createElement("h2",null,"Other Interests"),l.createElement("p",null,"Apart from coding, I have a variety of hobbies. I love working with electronics and exploring electrical systems. I also have a good range of computer skills, though I’m not into video editing or photoshopping. These diverse interests help me stay creative and expand my knowledge beyond just software development."),l.createElement("h2",null,"About My Hometown"),l.createElement("p",null,"I’m from Chapakhowa, Lakhimpur, Assam (Pin: 786157), a place that has always inspired me. The scenic beauty and tranquility of the area foster my creative thinking and problem-solving skills, which are reflected in my work.")))}}}]);
//# sourceMappingURL=component---src-pages-about-js-9cc447d9cf4390ce6567.js.map