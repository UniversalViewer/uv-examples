(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[85],{132:function(n,t,r){"use strict";r.r(t),r.d(t,"ion_badge",(function(){return i}));var o=r(21),e=r(22),i=function(){function n(n){Object(o.o)(this,n)}return n.prototype.render=function(){var n,t=Object(o.g)(this);return Object(o.i)(o.a,{class:Object.assign(Object.assign({},Object(e.a)(this.color)),(n={},n[t]=!0,n))},Object(o.i)("slot",null))},Object.defineProperty(n,"style",{get:function(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}"},enumerable:!0,configurable:!0}),n}()},22:function(n,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return d}));var o=function(n,t,r,o){return new(r||(r=Promise))((function(e,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function u(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){n.done?e(n.value):new r((function(t){t(n.value)})).then(a,u)}c((o=o.apply(n,t||[])).next())}))},e=function(n,t){var r,o,e,i,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(e=2&i[0]?o.return:i[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,i[1])).done)return e;switch(o=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(e=a.trys,(e=e.length>0&&e[e.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){a.label=i[1];break}if(6===i[0]&&a.label<e[1]){a.label=e[1],e=i;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(i);break}e[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],o=0}finally{r=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=function(n,t){return null!==t.closest(n)},a=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},u=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,d=function(n,t,r){return o(void 0,void 0,void 0,(function(){var o;return e(this,(function(e){return null!=n&&"#"!==n[0]&&!c.test(n)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(n,r)]):[2,!1]}))}))}}}]);