(function(e){function t(t){for(var o,r,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({"home~songDetail":"home~songDetail",home:"home",songDetail:"songDetail",main:"main"}[e]||e)+"."+{"home~songDetail":"4d0f3fae",home:"8ff2e9e9",songDetail:"19308584",main:"a264a0f3"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={home:1,songDetail:1,main:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"home~songDetail":"home~songDetail",home:"home",songDetail:"songDetail",main:"main"}[e]||e)+"."+{"home~songDetail":"31d6cfe0",home:"612b3ce6",songDetail:"d18cad05",main:"56eee7d2"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3847:function(e,t,n){},afbc:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),r=[{path:"/",name:"layout",redirect:"home",component:function(){return n.e("main").then(n.bind(null,"f3ee"))},children:[{path:"/home",name:"home",component:function(){return Promise.all([n.e("home~songDetail"),n.e("home")]).then(n.bind(null,"6511"))}},{path:"/songDetail/:id",name:"song",component:function(){return Promise.all([n.e("home~songDetail"),n.e("songDetail")]).then(n.bind(null,"9386"))}}]}],a=Object(o["a"])({history:Object(o["b"])(),routes:r});t["a"]=a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(n)])}const a={};a.render=r;var i=a,c=n("afbc"),u=n("5502"),l=Object(u["a"])({state:function(){return{songID:"unresolved"}}}),s=(n("3847"),n("ecee")),f=n("ad3d"),d=n("c074");s["c"].add(d["a"]),Object(o["createApp"])(i).component("font-awesome-icon",f["a"]).use(l).use(c["a"]).mount("#app")}});
//# sourceMappingURL=app.bf2818e5.js.map