(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[68],{207:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder_group",(function(){return l}));var n=r(21),o=r(42),i=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{a(n.next(t))}catch(t){i(t)}}function l(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new r((function(e){e(t.value)})).then(s,l)}a((n=n.apply(t,e||[])).next())}))},s=function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},l=function(){function t(t){Object(n.o)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(n.d)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.connectedCallback=function(){return i(this,void 0,void 0,(function(){var t,e,n,o=this;return s(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):[3,2];case 1:e.scrollEl=i.sent(),i.label=2;case 2:return n=this,[4,r.e(1).then(r.bind(null,28))];case 3:return n.gesture=i.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return o.canStart(t)},onStart:function(t){return o.onStart(t)},onMove:function(t){return o.onMove(t)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=c(e,this.el);return!!r&&(t.data=r,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,i=n.children;if(i&&0!==i.length){for(var s=0,l=0;l<i.length;l++){var c=i[l];s+=c.offsetHeight,r.push(s),c.$ionIndex=l}var h=n.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+u,this.scrollElBottom=f.bottom-u}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),Object(o.a)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,i=this.containerBottom-r,s=Math.max(n,Math.min(t.currentY,i)),l=r+s-t.startY,c=s-n,u=this.itemIndexForTop(c);if(u!==this.lastToIndex){var h=a(e);this.lastToIndex=u,Object(o.b)(),this.reorderMove(h,u)}e.style.transform="translateY("+l+"px)"}},t.prototype.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=a(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(o.c)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=a(e);if(o!==i&&(!t||!0===t)){var s=i<o?r[o+1]:r[o];this.el.insertBefore(e,s)}Array.isArray(t)&&(t=f(t,i,o));for(var l=0;l<n;l++)r[l].style.transform="";e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>t&&o<=e?i="translateY("+-r+"px)":o<t&&o>=e&&(i="translateY("+r+"px)"),n[o].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.render=function(){var t,e=Object(n.g)(this);return Object(n.i)(n.a,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}(),a=function(t){return t.$ionIndex},c=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},u=60,h=10,d="reorder-selected",f=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()}},42:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return n}));var n=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);