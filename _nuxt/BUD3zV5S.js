import{v as N,x,r as O,y as T,z as j,A as K,B as V,f as $,C as L,D as q,u as A,l as I,E as J,G as W,H as G,I as Q,J as B}from"./CgSJc8iP.js";const M=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function X(r,n){n?n={...M,...n}:n=M;const s=E(n);return s.dispatch(r),s.toString()}const Y=Object.freeze(["prototype","__proto__","constructor"]);function E(r){let n="",s=new Map;const t=e=>{n+=e};return{toString(){return n},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let i="";const h=a.length;h<10?i="unknown:["+a+"]":i=a.slice(8,h-1),i=i.toLowerCase();let u=null;if((u=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):r.ignoreUnknown||this.unkown(e,i);else{let f=Object.keys(e);r.unorderedObjects&&(f=f.sort());let y=[];r.respectType!==!1&&!U(e)&&(y=Y),r.excludeKeys&&(f=f.filter(c=>!r.excludeKeys(c)),y=y.filter(c=>!r.excludeKeys(c))),t("object:"+(f.length+y.length)+":");const o=c=>{this.dispatch(c),t(":"),r.excludeValues||this.dispatch(e[c]),t(",")};for(const c of f)o(c);for(const c of y)o(c)}},array(e,a){if(a=a===void 0?r.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const u of e)this.dispatch(u);return}const i=new Map,h=e.map(u=>{const f=E(r);f.dispatch(u);for(const[y,o]of f.getContext())i.set(y,o);return f.toString()});return s=i,h.sort(),this.array(h,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),U(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,r.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const H="[native code] }",Z=H.length;function U(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Z)===H}var ee=Object.defineProperty,te=(r,n,s)=>n in r?ee(r,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[n]=s,P=(r,n,s)=>(te(r,typeof n!="symbol"?n+"":n,s),s);class _{constructor(n,s){P(this,"words"),P(this,"sigBytes"),n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||re).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const re={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;n.push((t>>>4).toString(16),(t&15).toString(16))}return n.join("")}},se={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,a=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,h=e<<16|a<<8|i;for(let u=0;u<4&&t*8+u*6<r.sigBytes*8;u++)s.push(n.charAt(h>>>6*(3-u)&63))}return s.join("")}},ne={parse(r){const n=r.length,s=[];for(let t=0;t<n;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new _(s,n)}},ae={parse(r){return ne.parse(unescape(encodeURIComponent(r)))}};class ie{constructor(){P(this,"_data",new _),P(this,"_nDataBytes",0),P(this,"_minBufferSize",0),P(this,"blockSize",512/32)}reset(){this._data=new _,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=ae.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,e),this._data.sigBytes-=a}return new _(s,a)}}class oe extends ie{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}var ce=Object.defineProperty,ue=(r,n,s)=>n in r?ce(r,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[n]=s,le=(r,n,s)=>(ue(r,n+"",s),s);const k=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],fe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],D=[];class de extends oe{constructor(){super(...arguments),le(this,"_hash",new _([...k]))}reset(){super.reset(),this._hash=new _([...k])}_doProcessBlock(n,s){const t=this._hash.words;let e=t[0],a=t[1],i=t[2],h=t[3],u=t[4],f=t[5],y=t[6],o=t[7];for(let c=0;c<64;c++){if(c<16)D[c]=n[s+c]|0;else{const l=D[c-15],b=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,g=D[c-2],z=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;D[c]=b+D[c-7]+z+D[c-16]}const w=u&f^~u&y,v=e&a^e&i^a&i,S=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),d=(u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25),m=o+d+w+fe[c]+D[c],p=S+v;o=y,y=f,f=u,u=h+m|0,h=i,i=a,a=e,e=m+p|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+i|0,t[3]=t[3]+h|0,t[4]=t[4]+u|0,t[5]=t[5]+f|0,t[6]=t[6]+y|0,t[7]=t[7]+o|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function he(r){return new de().finalize(r).toString(se)}function ye(r,n={}){const s=typeof r=="string"?r:X(r,n);return he(s).slice(0,10)}const Be=""+new URL("Dynamic_wave_inkscape.aLst1BLL.png",import.meta.url).href,pe=r=>r==="defer"||r===!1;function ge(...r){var S;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=N(),i=t,h=()=>x.value,u=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];e.server=e.server??!0,e.default=e.default??h,e.getCachedData=e.getCachedData??u,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??x.deep,e.dedupe=e.dedupe??"cancel";const f=e.getCachedData(s,a),y=f!=null;if(!a._asyncData[s]||!e.immediate){(S=a.payload._errors)[s]??(S[s]=x.errorValue);const d=e.deep?O:T;a._asyncData[s]={data:d(y?f:e.default()),pending:O(!y),error:j(a.payload._errors,s),status:O("idle"),_default:e.default}}const o={...a._asyncData[s]};delete o._default,o.refresh=o.execute=(d={})=>{if(a._asyncDataPromises[s]){if(pe(d.dedupe??e.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(d._initial||a.isHydrating&&d._initial!==!1){const p=d._initial?f:e.getCachedData(s,a);if(p!=null)return Promise.resolve(p)}o.pending.value=!0,o.status.value="pending";const m=new Promise((p,l)=>{try{p(i(a))}catch(b){l(b)}}).then(async p=>{if(m.cancelled)return a._asyncDataPromises[s];let l=p;e.transform&&(l=await e.transform(p)),e.pick&&(l=_e(l,e.pick)),a.payload.data[s]=l,o.data.value=l,o.error.value=x.errorValue,o.status.value="success"}).catch(p=>{if(m.cancelled)return a._asyncDataPromises[s];o.error.value=q(p),o.data.value=A(e.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=m,a._asyncDataPromises[s]},o.clear=()=>me(a,s);const c=()=>o.refresh({_initial:!0}),w=e.server!==!1&&a.payload.serverRendered;{const d=I();if(d&&w&&e.immediate&&!d.sp&&(d.sp=[]),d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const l=d._nuxtOnBeforeMountCbs;K(()=>{l.forEach(b=>{b()}),l.splice(0,l.length)}),V(()=>l.splice(0,l.length))}w&&a.isHydrating&&(o.error.value||f!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):d&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?d._nuxtOnBeforeMountCbs.push(c):e.immediate&&c();const m=J();if(e.watch){const l=$(e.watch,()=>o.refresh());m&&L(l)}const p=a.hook("app:data:refresh",async l=>{(!l||l.includes(s))&&await o.refresh()});m&&L(p)}const v=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(v,o),v}function me(r,n){n in r.payload.data&&(r.payload.data[n]=void 0),n in r.payload._errors&&(r.payload._errors[n]=x.errorValue),r._asyncData[n]&&(r._asyncData[n].data.value=void 0,r._asyncData[n].error.value=x.errorValue,r._asyncData[n].pending.value=!1,r._asyncData[n].status.value="idle"),n in r._asyncDataPromises&&(r._asyncDataPromises[n]&&(r._asyncDataPromises[n].cancelled=!0),r._asyncDataPromises[n]=void 0)}function _e(r,n){const s={};for(const t of n)s[t]=r[t];return s}function ve(r,n,s){const[t={},e]=typeof n=="string"?[{},n]:[n,s],a=W(()=>B(r)),i=t.key||ye([e,typeof a.value=="string"?a.value:"",...we(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const h=i===e?"$f"+i:i;if(!t.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:u,lazy:f,default:y,transform:o,pick:c,watch:w,immediate:v,getCachedData:S,deep:d,dedupe:m,...p}=t,l=G({...Q,...p,cache:typeof t.cache=="boolean"?void 0:t.cache}),b={server:u,lazy:f,default:y,transform:o,pick:c,immediate:v,getCachedData:S,deep:d,dedupe:m,watch:w===!1?[]:[l,a,...w||[]]};let g;return ge(h,()=>{var R;(R=g==null?void 0:g.abort)==null||R.call(g,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),g=typeof AbortController<"u"?new AbortController:{};const F=B(t.timeout);let C;return F&&(C=setTimeout(()=>g.abort(new DOMException("Request aborted due to timeout.","AbortError")),F),g.signal.onabort=()=>clearTimeout(C)),(t.$fetch||globalThis.$fetch)(a.value,{signal:g.signal,...l}).finally(()=>{clearTimeout(C)})},b)}function we(r){var s;const n=[((s=B(r.method))==null?void 0:s.toUpperCase())||"GET",B(r.baseURL)];for(const t of[r.params||r.query]){const e=B(t);if(!e)continue;const a={};for(const[i,h]of Object.entries(e))a[B(i)]=B(h);n.push(a)}return n}export{Be as _,ve as u};
