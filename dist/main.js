(()=>{"use strict";var n={};n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();const e=n.p+"045b61790365bd90ada0.jpg";function t(){const n=document.createElement("div");n.innerHTML='\n    <main>\n      <div class=\'hero\'>\n        <h1>Noodles and Co</h1>\n        <p>I only order the wisconsin mac and cheese here</p>\n      </div>\n\n      <section class=\'description\'>\n        <h2>About Noodles</h2>\n        <p>Noodles has the best macaroni and cheese. I\'ve never ordered anything else from them so I don\'t even know what their other stuff is like. Yes, I understand they make a huge profit on the wisconsin mac and cheeses and I\'m getting ripped off buying them when I could probably just make my own. But goddamnit do I love them mac and cheeses.</p>\n      </section>\n\n      <section class="hours">\n        <h2>Hours</h2>\n        <p class="dayTimes">Sunday: 8am - 8pm</p>\n        <p class="dayTimes">Monday: 6am - 6pm</p>\n        <p class="dayTimes">Tuesday: 6am - 6pm</p>\n        <p class="dayTimes">Wednesday: 6am - 6pm</p>\n        <p class="dayTimes">Thursday: 6am - 10pm</p>\n        <p class="dayTimes">Friday: 6am - 10pm</p>\n        <p class="dayTimes">Saturday: 8am - 10pm</p>\n      </section>\n\n      <section class="location">\n        <h2>Location</h2>\n        <p>Near my house, about 5 minutes, kinda a long walk :/</p>\n      </section>\n    </main>\n  ',n.classList.add("home");const t=new Image;return t.src=e,n.appendChild(t),n}const o=["home","menu","contact"];function s(n){const e=document.createElement("button");return e.innerText=`\n        ${n}\n    `,e.addEventListener("click",(()=>function(n){const e=document.querySelector("#content");switch(e.removeChild(e.lastChild),console.log("requestedPage is"+n),n){case"home":const n=t();e.appendChild(n);break;case"contact":const o=function(){const n=document.createElement("div");return n.innerHTML="\n    <main>\n        <p>contact test</p>\n    </main>\n  ",n.classList.add("contact"),n}();e.appendChild(o);break;case"menu":const s=function(){const n=document.createElement("div");return n.innerHTML="\n    <main>\n        <p>menu test</p>\n    </main>\n  ",n.classList.add("menu"),n}();e.appendChild(s)}}(n))),console.log(e),e}document.body.appendChild(function(){const n=document.querySelector("#content"),e=t();n.appendChild(e);const a=function(){const n=document.createElement("nav");n.classList.add("pageSwitcher");for(let e=0;e<o.length;e++){const t=s(o[e]);n.appendChild(t),console.log("forloop",e,"   ",t)}return n}();return n.prepend(a),n}())})();