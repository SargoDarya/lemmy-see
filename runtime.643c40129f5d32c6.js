(()=>{"use strict";var e,b={},v={};function r(e){var i=v[e];if(void 0!==i)return i.exports;var t=v[e]={exports:{}};return b[e].call(t.exports,t,t.exports,r),t.exports}r.m=b,e=[],r.O=(i,t,l,o)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,l,o]=e[n],s=!0,u=0;u<t.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every(m=>r.O[m](t[u]))?t.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(n--,1);var d=l();void 0!==d&&(i=d)}}return i}o=o||0;for(var n=e.length;n>0&&e[n-1][2]>o;n--)e[n]=e[n-1];e[n]=[t,l,o]},r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((i,t)=>(r.f[t](e,i),i),[])),r.u=e=>e+".0540985b1a365a7a.js",r.miniCssF=e=>{},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={},i="lemmy-gallery:";r.l=(t,l,o,n)=>{if(e[t])e[t].push(l);else{var a,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==i+o){a=f;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",i+o),a.src=r.tu(t)),e[t]=[l];var c=(g,m)=>{a.onerror=a.onload=null,clearTimeout(p);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(h=>h(m)),g)return g(m)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:i=>i},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(l,o)=>{var n=r.o(e,l)?e[l]:void 0;if(0!==n)if(n)o.push(n[2]);else if(666!=l){var a=new Promise((f,c)=>n=e[l]=[f,c]);o.push(n[2]=a);var s=r.p+r.u(l),u=new Error;r.l(s,f=>{if(r.o(e,l)&&(0!==(n=e[l])&&(e[l]=void 0),n)){var c=f&&("load"===f.type?"missing":f.type),p=f&&f.target&&f.target.src;u.message="Loading chunk "+l+" failed.\n("+c+": "+p+")",u.name="ChunkLoadError",u.type=c,u.request=p,n[1](u)}},"chunk-"+l,l)}else e[l]=0},r.O.j=l=>0===e[l];var i=(l,o)=>{var u,d,[n,a,s]=o,f=0;if(n.some(p=>0!==e[p])){for(u in a)r.o(a,u)&&(r.m[u]=a[u]);if(s)var c=s(r)}for(l&&l(o);f<n.length;f++)r.o(e,d=n[f])&&e[d]&&e[d][0](),e[d]=0;return r.O(c)},t=self.webpackChunklemmy_gallery=self.webpackChunklemmy_gallery||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})()})();