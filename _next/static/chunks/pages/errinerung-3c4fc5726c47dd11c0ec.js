(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{5628:function(e,t,o){"use strict";var n=o(1722),r=o(2147),i=o.n(r);t.Z=(0,n.Z)({supportedLngs:i().i18n.locales,fallbackLng:i().i18n.defaultLocale})},5232:function(e,t,o){"use strict";o.d(t,{l_:function(){return s}});var n=o(7294),r=o(1163),i=o(5628),a=o(5893),u=function(e){var t=(0,r.useRouter)();return e=e||t.asPath,(0,n.useEffect)((function(){var o=i.Z.detect();e.startsWith("/"+o)&&"/404"===t.route?t.replace("/"+o+t.route):(i.Z.cache(o),t.replace("/"+o+e))})),(0,a.jsx)(a.Fragment,{})},s=function(){return u(),(0,a.jsx)(a.Fragment,{})}},2147:function(e){e.exports={i18n:{defaultLocale:"el",locales:["el","en","de"]}}},9427:function(e,t,o){"use strict";o.r(t);var n=o(5232);t.default=n.l_},3250:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/errinerung",function(){return o(9427)}])},1163:function(e,t,o){e.exports=o(4651)},1722:function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}o.d(t,{Z:function(){return _}});var i=o(5671),a=o(3144),u=[],s=u.forEach,c=u.slice;function l(e){return s.call(c.call(arguments,1),(function(t){if(t)for(var o in t)void 0===e[o]&&(e[o]=t[o])})),e}var f=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,p=function(e,t,o){var n=o||{};n.path=n.path||"/";var r=e+"="+encodeURIComponent(t);if(n.maxAge>0){var i=n.maxAge-0;if(isNaN(i))throw new Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(i)}if(n.domain){if(!f.test(n.domain))throw new TypeError("option domain is invalid");r+="; Domain="+n.domain}if(n.path){if(!f.test(n.path))throw new TypeError("option path is invalid");r+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},g=function(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*o*1e3)),n&&(r.domain=n),document.cookie=p(e,encodeURIComponent(t),r)},d=function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var r=o[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},h={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!==typeof document){var o=d(e.lookupCookie);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!==typeof document&&g(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},v={name:"querystring",lookup:function(e){var t;if("undefined"!==typeof window)for(var o=window.location.search.substring(1).split("&"),n=0;n<o.length;n++){var r=o[n].indexOf("=");if(r>0)o[n].substring(0,r)===e.lookupQuerystring&&(t=o[n].substring(r+1))}return t}},m=null,w=function(){if(null!==m)return m;try{m="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){m=!1}return m},k={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&w()){var o=window.localStorage.getItem(e.lookupLocalStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&w()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},S=null,y=function(){if(null!==S)return S;try{S="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){S=!1}return S},b={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&y()){var o=window.sessionStorage.getItem(e.lookupSessionStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&y()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},x={name:"navigator",lookup:function(e){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)t.push(navigator.languages[o]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},O={name:"htmlTag",lookup:function(e){var t,o=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return o&&"function"===typeof o.getAttribute&&(t=o.getAttribute("lang")),t}},L={name:"path",lookup:function(e){var t;if("undefined"!==typeof window){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof o[e.lookupFromPathIndex])return;t=o[e.lookupFromPathIndex].replace("/","")}else t=o[0].replace("/","")}return t}},C={name:"subdomain",lookup:function(e){var t;if("undefined"!==typeof window){var o=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);o instanceof Array&&(t="number"===typeof e.lookupFromSubdomainIndex?o[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):o[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var E=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,i.Z)(this,e),this.type="languageDetector",this.detectors={},this.init(t,o)}return(0,a.Z)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=l(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(h),this.addDetector(v),this.addDetector(k),this.addDetector(b),this.addDetector(x),this.addDetector(O),this.addDetector(L),this.addDetector(C)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var o=[];return e.forEach((function(e){if(t.detectors[e]){var n=t.detectors[e].lookup(t.options);n&&"string"===typeof n&&(n=[n]),n&&(o=o.concat(n))}})),this.services.languageUtils.getBestMatchFromCodes?o:o.length>0?o[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var o=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){o.detectors[t]&&o.detectors[t].cacheUserLanguage(e,o.options)})))}}]),e}();E.type="languageDetector";var j=E,I=["supportedLngs","fallbackLng","order"];function P(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?P(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var U=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},F=function(e){if("string"===typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],o=e.split("-");return 2===o.length?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=U(o[1].toLowerCase()))):3===o.length&&(o[0]=o[0].toLowerCase(),2===o[1].length&&(o[1]=o[1].toUpperCase()),"sgn"!==o[0]&&2===o[2].length&&(o[2]=o[2].toUpperCase()),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=U(o[1].toLowerCase())),t.indexOf(o[2].toLowerCase())>-1&&(o[2]=U(o[2].toLowerCase()))),o.join("-")}return e},T=function(e){var t=e.supportedLngs,o=e.fallbackLng;return function(e){if(!e)return null;var n,r=function(e){return!t||!t.length||t.indexOf(e)>-1};return e.forEach((function(e){if(!n){var o=F(e);t&&!r(o)||(n=o)}})),!n&&t&&e.forEach((function(e){if(!n){var o=function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return F(t[0])}(e);n=r(o)?o:t.find((function(e){if(0===e.indexOf(o))return e}))}})),n||(n=o),n}};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.supportedLngs,o=e.fallbackLng,n=e.order,i=void 0===n?["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"]:n,a=r(e,I),u=T({supportedLngs:t,fallbackLng:o}),s=new j({languageUtils:{getBestMatchFromCodes:u}},D({order:i},a));return{detect:function(e){var t=s.detect(e);return u(t)},cache:function(e,t){return s.cacheUserLanguage(e,t)}}}}},function(e){e.O(0,[774,888,179],(function(){return t=3250,e(e.s=t);var t}));var t=e.O();_N_E=t}]);