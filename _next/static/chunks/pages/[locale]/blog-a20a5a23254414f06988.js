(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{6305:function(e,t,a){"use strict";a.d(t,{Z:function(){return q}});var l=a(4404),r=a(2809),n=a(219),s=a(7294),c=a(1664),i=a(1163),o=a(5893),h=["children","skipLocaleHandling"];function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){var t=e.children,a=e.skipLocaleHandling,l=(0,n.Z)(e,h),r=(0,i.useRouter)(),s=l.locale||r.query.locale||"",d=l.href||r.asPath;return 0===d.indexOf("http")&&(a=!0),s&&!a&&(d=d?"/".concat(s).concat(d):r.pathname.replace("[locale]",s)),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c.default,{href:d,children:(0,o.jsx)("a",u(u({},l),{},{children:t}))})})},m=function(){var e=(0,l.$G)("common").t,t=(0,i.useRouter)(),a=t.locale,r="px-3 py-2 font-bold text-gray-600 cursor-pointer hover:text-gray-900 hover:outline-2 hover:outline-white hover:scale-150 text-md md:font-medium",n="underline underline-slate-500";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{href:"/",locale:a,className:"/[locale]"!==t.pathname?r:r+" "+n,children:e("index")}),(0,o.jsx)(x,{href:"/geschichte",locale:a,className:"/[locale]/geschichte"!==t.pathname?r:r+" "+n,children:e("geschichte")}),(0,o.jsx)(x,{href:"/errinerung",locale:a,className:"/[locale]/errinerung"!==t.pathname?r:r+" "+n,children:e("errinerung")}),(0,o.jsx)(x,{href:"/natur",locale:a,className:"/[locale]/natur"!==t.pathname?r:r+" "+n,children:e("natur")}),(0,o.jsx)(x,{href:"/blog",locale:a,className:"/[locale]/blog"!==t.pathname?r:r+" "+n,children:e("blog")}),(0,o.jsx)(x,{href:"/miete",locale:a,className:"/[locale]/miete"!==t.pathname?r:r+" "+n,children:e("miete")}),(0,o.jsx)(x,{href:"/unterkunft",locale:a,className:"/[locale]/unterkunft"!==t.pathname?r:r+" "+n,children:e("unterkunft")}),(0,o.jsx)(x,{href:"/tourismous",locale:a,className:"/[locale]/tourismous"!==t.pathname?r:r+" "+n,children:e("tourismous")})]})},f=function(){var e=(0,l.$G)("common").t;return(0,o.jsxs)("footer",{className:"hidden px-16 pt-4 mx-4 bg-gray-100 lg:block",children:[(0,o.jsxs)("div",{className:"container flex flex-row items-center justify-between",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-2 basis-1/4",children:[(0,o.jsx)("img",{style:{width:"60px",height:"30px"},src:"/logo.jpg",alt:e("applicationTitle")}),(0,o.jsx)("div",{className:"font-bold text-gray-800 text-md",children:e("applicationTitle")})]}),(0,o.jsx)("nav",{className:"flex flex-row flex-wrap basis-3/4 place-items-center",children:(0,o.jsx)(m,{})})]}),(0,o.jsx)("div",{className:"container py-6 text-sm text-gray-800 bg-gray-100",children:(0,o.jsx)("div",{className:"text-lg font-bold",children:"RfG"})})]})},p=a(9008),g=a(5628),j=["locale"],b=function(e){var t=e.locale,a=(0,n.Z)(e,j),l=(0,i.useRouter)(),r=a.href||l.asPath,s=l.pathname;return Object.keys(l.query).forEach((function(e){s="locale"!==e?s.replace("[".concat(e,"]"),l.query[e]):s.replace("[".concat(e,"]"),t)})),t&&(r=a.href?"/".concat(t).concat(a.href):s),(0,o.jsx)(c.default,{href:r,onClick:function(){return g.Z.cache(t)},children:(0,o.jsx)("button",{className:"text-sm text-gray-600",children:t})})},v=a(2147),y=a.n(v),N=a(4184),w=a.n(N),k=function(){var e=(0,i.useRouter)(),t=y().i18n.locales.length,a=e.query.locale||y().i18n.defaultLocale;return(0,o.jsxs)("div",{className:"flex flex-row items-center bg-gray-100 w-2432",children:[(0,o.jsx)("span",{className:"mx-1",children:"["}),y().i18n.locales.map((function(e,l){var r;return r=e===a?w()("block block px-4 py-2 text-md text-gray-400 hover:bg-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"):w()("block block px-4 py-2 text-md text-black hover:bg-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"),(0,o.jsxs)("div",{children:[(0,o.jsx)(b,{locale:e,className:r}),l===t-1?null:(0,o.jsx)("span",{className:"mx-2",children:"|"})]},e)})),(0,o.jsx)("span",{className:"mx-1",children:"]"})]})},O=function(){var e=(0,l.$G)("common").t,t=(0,s.useState)(!1),a=(t[0],t[1],(0,s.useState)(!1)),r=a[0],n=a[1],c=(0,i.useRouter)(),h=c.locale,d=c.locales;null===d||void 0===d||d.filter((function(e){return e!==h}));return(0,o.jsxs)("div",{children:[(0,o.jsxs)(p.default,{children:[(0,o.jsx)("title",{children:e("applicationTitle")}),(0,o.jsx)("meta",{name:"description",content:e("beschreibung")}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("nav",{className:"px-2 mx-auto bg-gray-100 shadow",children:[(0,o.jsxs)("div",{className:"container flex flex-row items-center justify-between h-16 max-w-full",children:[(0,o.jsxs)(x,{className:"basis-1/4 lg:flex lg:flex-row lg:space-x-2",href:"/",children:[(0,o.jsx)("img",{style:{width:"60px",height:"30px"},src:"/logo.jpg",alt:e("applicationTitle")}),(0,o.jsx)("div",{className:"hidden lg:flex lg:flex-row lg:items-center md:basis-1/2",children:(0,o.jsx)("span",{className:"font-bold text-gray-600 text-md",children:e("applicationTitle")})})]}),(0,o.jsx)("div",{className:"hidden basis-2/4 md:block md:ml-2",children:(0,o.jsx)(m,{})}),(0,o.jsx)("div",{className:"ml-4 basis-1/4 md:ml-6",children:(0,o.jsx)(k,{})}),(0,o.jsx)("div",{className:"flex -mr-2 md:hidden",children:(0,o.jsx)("button",{onClick:function(){return n(!r)},className:"inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none",children:(0,o.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"w-8 h-8",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"})})})})]}),r?(0,o.jsx)("div",{className:"md:hidden",children:(0,o.jsx)("div",{className:"flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3",children:(0,o.jsx)(m,{})})}):null]})]})};function q(e){var t=e.children;e.title;return(0,o.jsxs)("div",{className:"flex flex-col justify-between min-h-screen mx-auto",children:[(0,o.jsx)(O,{}),(0,o.jsx)("div",{className:"mx-4",children:t}),(0,o.jsx)(f,{})]})}},8293:function(e,t){"use strict";t.Z=function(e){var t=e.src,a=e.width,l=e.quality,r=void 0===l?80:l;"/"===t[0]&&(t=t.slice(1));var n=["w-".concat(a)];r&&n.push("q-".concat(r));var s=n.join(","),c="https://ik.imagekit.io/a7wyqzzblcfh";return"/"===c[c.length-1]&&(c=c.substring(0,c.length-1)),"".concat(t,"?tr=").concat(s)}},5628:function(e,t,a){"use strict";var l=a(1722),r=a(2147),n=a.n(r);t.Z=(0,l.Z)({supportedLngs:n().i18n.locales,fallbackLng:n().i18n.defaultLocale})},2147:function(e){e.exports={i18n:{defaultLocale:"el",locales:["el","en","de"]}}},4110:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return i}});var l=a(5675),r=a(2903),n=a(6305),s=a(8293),c=a(5893),i=!0;t.default=function(e){var t=e.posts;return(0,c.jsx)(n.Z,{title:"",children:(0,c.jsx)("div",{className:"flex flex-col mx-auto",children:t.map((function(e){return(0,c.jsxs)("div",{className:"py-2 my-5 bg-white border-b-2 border-gray-500 lg:grid lg:grid-cols-3 lg:gap-2 lg:items-start",children:[(0,c.jsx)("div",{className:"flex flex-col space-y-2",children:e.attributes.thumbnail.data?(0,c.jsx)(l.default,{loader:s.Z,layout:"responsive",objectFit:"contain",width:e.attributes.thumbnail.data.attributes.width,height:e.attributes.thumbnail.data.attributes.height,src:e.attributes.thumbnail.data.attributes.url,alt:e.attributes.thumbnail.data.attributes.alternativeText||""}):null}),(0,c.jsxs)("div",{className:"flex flex-col ml-3 space-y-2 lg:-mt-2 lg:col-span-2",children:[(0,c.jsx)("h3",{className:"text-base font-medium text-gray-800 md:text-xl",children:e.attributes.title}),(0,c.jsx)("p",{className:"text-base text-gray-600 md:text-lg",children:e.attributes.description}),(0,c.jsx)("div",{className:"container text-justify",children:(0,c.jsx)(r.D,{children:e.attributes.content})})]})]},"item.id")}))})})}},7520:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/blog",function(){return a(4110)}])}},function(e){e.O(0,[774,402,888,179],(function(){return t=7520,e(e.s=t);var t}));var t=e.O();_N_E=t}]);