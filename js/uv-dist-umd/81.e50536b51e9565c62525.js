(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[81],{124:function(n,t,r){"use strict";r.r(t),r.d(t,"ion_anchor",(function(){return i}));var e=r(21),o=r(22),i=function(){function n(n){var t=this;Object(e.o)(this,n),this.routerDirection="forward",this.onClick=function(n){Object(o.d)(t.href,n,t.routerDirection)}}return n.prototype.componentDidLoad=function(){console.warn("[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.")},n.prototype.render=function(){var n,t=Object(e.g)(this),r={href:this.href,rel:this.rel};return Object(e.i)(e.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(o.a)(this.color)),(n={},n[t]=!0,n["ion-activatable"]=!0,n))},Object(e.i)("a",Object.assign({},r),Object(e.i)("slot",null)))},Object.defineProperty(n,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),n}()},22:function(n,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l}));var e=function(n,t,r,e){return new(r||(r=Promise))((function(o,i){function c(n){try{a(e.next(n))}catch(n){i(n)}}function u(n){try{a(e.throw(n))}catch(n){i(n)}}function a(n){n.done?o(n.value):new r((function(t){t(n.value)})).then(c,u)}a((e=e.apply(n,t||[])).next())}))},o=function(n,t){var r,e,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,e=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(n,c)}catch(n){i=[6,n],e=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=function(n,t){return null!==t.closest(n)},c=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},u=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,l=function(n,t,r){return e(void 0,void 0,void 0,(function(){var e;return o(this,(function(o){return null!=n&&"#"!==n[0]&&!a.test(n)&&(e=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,e.push(n,r)]):[2,!1]}))}))}}}]);