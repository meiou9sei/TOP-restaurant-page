(()=>{"use strict";var n={150:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"body {\r\n    background-color: #c9192c;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    text-align: center;\r\n    gap: 24px;\r\n    width: 95vw;\r\n}\r\n\r\nmain {\r\n    max-width: 540px;\r\n    width: 100%;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 16px;\r\n}\r\n\r\n\r\n.logo-image-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.logo-image {\r\n    /* max-width: 100%;\r\n    max-height: 100%; */\r\n    width: 90vw;\r\n    height: 20vw;\r\n    object-fit: cover;\r\n    border-radius: 10px;\r\n}\r\n\r\n.page-switcher {\r\n    width: 75%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.page-switcher button {\r\n    flex: 1;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"045b61790365bd90ada0.jpg";function e(){const n=document.createElement("div");return n.innerHTML='\n    <main>\n      <div class=\'hero\'>\n        <h1>Noodles and Co</h1>\n        <p>I only order the wisconsin mac and cheese here</p>\n      </div>\n\n      <section class=\'description\'>\n        <h2>About Noodles</h2>\n        <p>Noodles has the best macaroni and cheese. I\'ve never ordered anything else from them so I don\'t even know what their other stuff is like. Yes, I understand they make a huge profit on the wisconsin mac and cheeses and I\'m getting ripped off buying them when I could probably just make my own. But goddamnit do I love them mac and cheeses.</p>\n      </section>\n\n      <section class="hours">\n        <h2>Hours</h2>\n        <p class="dayTimes">Sunday: 8am - 8pm</p>\n        <p class="dayTimes">Monday: 6am - 6pm</p>\n        <p class="dayTimes">Tuesday: 6am - 6pm</p>\n        <p class="dayTimes">Wednesday: 6am - 6pm</p>\n        <p class="dayTimes">Thursday: 6am - 10pm</p>\n        <p class="dayTimes">Friday: 6am - 10pm</p>\n        <p class="dayTimes">Saturday: 8am - 10pm</p>\n      </section>\n\n      <section class="location">\n        <h2>Location</h2>\n        <p>Near my house, about 5 minutes, kinda a long walk :/</p>\n      </section>\n    </main>\n  ',n.classList.add("home"),n}const r=["home","menu","contact"];function a(n){const t=document.createElement("button");return t.innerText=`\n        ${n}\n    `,t.addEventListener("click",(()=>function(n){const t=document.querySelector("#content");switch(t.removeChild(t.lastChild),console.log("requestedPage is"+n),n){case"home":const n=e();t.appendChild(n);break;case"contact":const r=function(){const n=document.createElement("div");return n.innerHTML="\n    <main>\n      <div class='hero'>\n        <h1>Contact Us</h1>\n        <p>We can make more mac & cheese if you'd like</p>\n      </div>\n\n      <section class='contact'>\n        <div class=\"contact-person\">\n          <h2>my friend Jake</h2>\n          <p>he's chill</p>\n          <p>777-777-7777</p>\n          <p>google@gmail.com</p>\n          </div>\n          <div class=\"contact-person\">\n          <h2>my friend Richard</h2>\n          <p>he's ok</p>\n          <p>555-555-5555</p>\n          <p>yahoo@gmail.com</p>\n          </div>\n          <div class=\"contact-person\">\n          <h2>my crush Emilia</h2>\n          <p>she's cute sometimes</p>\n          <p>444-444-4444</p>\n          <p>aperture@gmail.com</p>\n        </div>\n      </section>\n    </main>\n  ",n.classList.add("contact"),n}();t.appendChild(r);break;case"menu":const a=function(){const n=document.createElement("div");return n.innerHTML="\n    <main>\n      <div class='hero'>\n        <h1>Menu</h1>\n        <p>Really the only thing I can talk about is their mac and cheese</p>\n      </div>\n\n      <section class='drinks'>\n        <h2>Drinks</h2>\n        <div class=\"menu-item\">\n          <h3>Water in Paper cup</h3>\n          <p>I never get a drink, always ask for a cup for water</p>\n        </div>\n      </section>\n\n      <section class='sides'>\n        <h2>Sides</h2>\n        <div class=\"menu-item\">\n          <h3>10 Korean BBQ Meatballs</h3>\n          <p>Good for keeping the palette fresh between mac and cheese. Would probably get sick otherwise.</p>\n        </div>\n      </section>\n\n      <section class='main-dishes'>\n        <h2>Main Dishes</h2>\n        <div class=\"menu-item\">\n          <h3>Wisconsin Mac & Cheese</h3>\n          <p>Does the job.</p>\n        </div>\n        <div class=\"menu-item\">\n          <h3>BBQ Chicken Mac</h3>\n          <p>I've ordered this a couple times years ago. Got tired of it quick</p>\n        </div>\n      </section>\n    </main>\n  ",n.classList.add("menu"),n}();t.appendChild(a)}}(n))),console.log(t),t}var o=t(379),i=t.n(o),s=t(795),c=t.n(s),d=t(569),l=t.n(d),p=t(565),u=t.n(p),h=t(216),m=t.n(h),f=t(589),v=t.n(f),y=t(150),g={};g.styleTagTransform=v(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),i()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals,document.body.appendChild(function(){const t=document.querySelector("#content"),o=function(){const e=document.createElement("div");e.classList.add("logo-image-container");const t=new Image;return t.src=n,e.appendChild(t),t.classList.add("logo-image"),e}();t.appendChild(o);const i=function(){const n=document.createElement("nav");n.classList.add("page-switcher");for(let e=0;e<r.length;e++){const t=a(r[e]);n.appendChild(t)}return n}();t.appendChild(i);const s=e();return t.appendChild(s),t}())})()})();