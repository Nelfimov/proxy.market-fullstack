import{r as R,j as m,c as ut,p as zt,u as dt,a as Z,F as hs,b as Xa,R as en,d as Ya,C as Ja,N as Za,B as tc}from"./index-7f57edd0.js";import{C as rt}from"./Col-adb3b05e.js";import{C as ze,P as gt}from"./Placeholder-c713a216.js";function ec(e,t){return R.Children.toArray(e).some(n=>R.isValidElement(n)&&n.type===t)}const nc={type:zt.string,tooltip:zt.bool,as:zt.elementType},qs=R.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:s=!1,...r},i)=>m(e,{...r,ref:i,className:ut(t,`${n}-${s?"tooltip":"feedback"}`)}));qs.displayName="Feedback";qs.propTypes=nc;const Ri=qs,sc=R.createContext({}),yt=sc,xi=R.forwardRef(({id:e,bsPrefix:t,className:n,type:s="checkbox",isValid:r=!1,isInvalid:i=!1,as:o="input",...a},c)=>{const{controlId:u}=R.useContext(yt);return t=dt(t,"form-check-input"),m(o,{...a,ref:c,type:s,id:e||u,className:ut(n,t,r&&"is-valid",i&&"is-invalid")})});xi.displayName="FormCheckInput";const Li=xi,Oi=R.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...s},r)=>{const{controlId:i}=R.useContext(yt);return e=dt(e,"form-check-label"),m("label",{...s,ref:r,htmlFor:n||i,className:ut(t,e)})});Oi.displayName="FormCheckLabel";const ls=Oi,Fi=R.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:s=!1,reverse:r=!1,disabled:i=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:c=!1,feedback:u,feedbackType:h,className:d,style:p,title:g="",type:S="checkbox",label:b,children:x,as:ot="input",...at},ct)=>{t=dt(t,"form-check"),n=dt(n,"form-switch");const{controlId:Tt}=R.useContext(yt),_t=R.useMemo(()=>({controlId:e||Tt}),[Tt,e]),de=!x&&b!=null&&b!==!1||ec(x,ls),Gn=m(Li,{...at,type:S==="switch"?"checkbox":S,ref:ct,isValid:o,isInvalid:a,disabled:i,as:ot});return m(yt.Provider,{value:_t,children:m("div",{style:p,className:ut(d,de&&t,s&&`${t}-inline`,r&&`${t}-reverse`,S==="switch"&&n),children:x||Z(hs,{children:[Gn,de&&m(ls,{title:g,children:b}),u&&m(Ri,{type:h,tooltip:c,children:u})]})})})});Fi.displayName="FormCheck";const on=Object.assign(Fi,{Input:Li,Label:ls}),Mi=R.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:s,id:r,className:i,isValid:o=!1,isInvalid:a=!1,plaintext:c,readOnly:u,as:h="input",...d},p)=>{const{controlId:g}=R.useContext(yt);e=dt(e,"form-control");let S;return c?S={[`${e}-plaintext`]:!0}:S={[e]:!0,[`${e}-${n}`]:n},m(h,{...d,type:t,size:s,ref:p,readOnly:u,id:r||g,className:ut(i,S,o&&"is-valid",a&&"is-invalid",t==="color"&&`${e}-color`)})});Mi.displayName="FormControl";const rc=Object.assign(Mi,{Feedback:Ri}),ic=Xa("form-floating"),Pi=R.forwardRef(({controlId:e,as:t="div",...n},s)=>{const r=R.useMemo(()=>({controlId:e}),[e]);return m(yt.Provider,{value:r,children:m(t,{...n,ref:s})})});Pi.displayName="FormGroup";const Vi=Pi,oc={column:!1,visuallyHidden:!1},Ks=R.forwardRef(({as:e="label",bsPrefix:t,column:n,visuallyHidden:s,className:r,htmlFor:i,...o},a)=>{const{controlId:c}=R.useContext(yt);t=dt(t,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const h=ut(r,t,s&&"visually-hidden",n&&u);return i=i||c,n?m(rt,{ref:a,as:"label",className:h,htmlFor:i,...o}):m(e,{ref:a,className:h,htmlFor:i,...o})});Ks.displayName="FormLabel";Ks.defaultProps=oc;const ac=Ks,$i=R.forwardRef(({bsPrefix:e,className:t,id:n,...s},r)=>{const{controlId:i}=R.useContext(yt);return e=dt(e,"form-range"),m("input",{...s,type:"range",ref:r,className:ut(t,e),id:n||i})});$i.displayName="FormRange";const cc=$i,Ui=R.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:s,isValid:r=!1,isInvalid:i=!1,id:o,...a},c)=>{const{controlId:u}=R.useContext(yt);return e=dt(e,"form-select"),m("select",{...a,size:n,ref:c,className:ut(s,e,t&&`${e}-${t}`,r&&"is-valid",i&&"is-invalid"),id:o||u})});Ui.displayName="FormSelect";const uc=Ui,Bi=R.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:s,...r},i)=>(e=dt(e,"form-text"),m(n,{...r,ref:i,className:ut(t,e,s&&"text-muted")})));Bi.displayName="FormText";const hc=Bi,ji=R.forwardRef((e,t)=>m(on,{...e,ref:t,type:"switch"}));ji.displayName="Switch";const lc=Object.assign(ji,{Input:on.Input,Label:on.Label}),qi=R.forwardRef(({bsPrefix:e,className:t,children:n,controlId:s,label:r,...i},o)=>(e=dt(e,"form-floating"),Z(Vi,{ref:o,className:ut(t,e),controlId:s,...i,children:[n,m("label",{htmlFor:s,children:r})]})));qi.displayName="FloatingLabel";const dc=qi,fc={_ref:zt.any,validated:zt.bool,as:zt.elementType},Hs=R.forwardRef(({className:e,validated:t,as:n="form",...s},r)=>m(n,{...s,ref:r,className:ut(e,t&&"was-validated")}));Hs.displayName="Form";Hs.propTypes=fc;const st=Object.assign(Hs,{Group:Vi,Control:rc,Floating:ic,Check:on,Switch:lc,Label:ac,Text:hc,Range:cc,Select:uc,FloatingLabel:dc});function pc(e){return m(st,{children:Z(en,{children:[m(rt,{md:!0,children:Z(st.Group,{className:"mb-3",controlId:"type",children:[m(st.Label,{children:"Тип прокси:"}),Z(st.Select,{defaultValue:e.state.type||"",required:!0,onChange:t=>e.action({type:"SET_TYPE",payload:t.currentTarget.value,priceList:e.priceList}),children:[m("option",{value:"",disabled:!0,hidden:!0,children:"Выберите тип прокси"}),m("option",{value:"s4i",children:"Серверные IPv4 индивидуальные"}),m("option",{value:"s4s",children:"Серверные IPv4 shared"}),m("option",{value:"s6i",children:"Серверные IPv6 индивидуальные"})]}),m(st.Control.Feedback,{type:"invalid",children:"Необходимо выбрать тип"})]})}),m(rt,{md:!0,children:Z(st.Group,{className:"mb-3",controlId:"country",children:[m(st.Label,{children:"Страна"}),Z(st.Select,{defaultValue:e.state.country||"",required:!0,onChange:t=>e.action({type:"SET_COUNTRY",payload:t.currentTarget.value,priceList:e.priceList}),disabled:e.state.type==="",children:[m("option",{value:"",disabled:!0,children:"Выберите страну"}),m("option",{value:"AU",children:"Австралия"}),m("option",{value:"AT",children:"Австрия"})]}),m(st.Control.Feedback,{type:"invalid",children:"Необходимо выбрать страну"})]})}),m(rt,{md:!0,children:Z(st.Group,{className:"mb-3",controlId:"time",children:[m(st.Label,{children:"Срок аренды:"}),Z(st.Select,{defaultValue:e.state.time||"",required:!0,onChange:t=>e.action({type:"SET_TIME",payload:t.currentTarget.value,priceList:e.priceList}),disabled:e.state.country==="",children:[m("option",{value:"",disabled:!0,children:"Выберите срок"}),m("option",{value:"1d",children:"1 день"}),m("option",{value:"7d",children:"7 дней"}),m("option",{value:"1m",children:"1 месяц"})]}),m(st.Control.Feedback,{type:"invalid",children:"Необходимо выбрать срок"})]})})]})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},gc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(n[h],n[d],n[p],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ki(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new mc;const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const S=u<<6&192|d;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yc=function(e){const t=Ki(e);return Hi.encodeByteArray(t,!0)},an=function(e){return yc(e).replace(/\./g,"")},vc=function(e){try{return Hi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=()=>wc().__FIREBASE_DEFAULTS__,Tc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ic=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vc(e[1]);return t&&JSON.parse(t)},zi=()=>{try{return Ec()||Tc()||Ic()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cc=e=>{var t,n;return(n=(t=zi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Sc=e=>{const t=Cc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},bc=()=>{var e;return(e=zi())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[an(JSON.stringify(n)),an(JSON.stringify(o)),a].join(".")}function Nc(){try{return typeof indexedDB=="object"}catch{return!1}}function kc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="FirebaseError";class ie extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=_c,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Rc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ie(r,a,s)}}function Rc(e,t){return e.replace(xc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const xc=/\{\$([^}]+)}/g;function ds(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Lr(i)&&Lr(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Lr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e){return e&&e._delegate?e._delegate:e}let Ie=class{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ac;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mc(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(e){return e===Rt?void 0:e}function Mc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Oc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const Vc={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},$c=k.INFO,Uc={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Bc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Uc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qi{constructor(t){this.name=t,this._logLevel=$c,this._logHandler=Bc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const jc=(e,t)=>t.some(n=>e instanceof n);let Or,Fr;function qc(){return Or||(Or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kc(){return Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wi=new WeakMap,fs=new WeakMap,Xi=new WeakMap,Qn=new WeakMap,zs=new WeakMap;function Hc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ct(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wi.set(n,e)}).catch(()=>{}),zs.set(t,e),t}function zc(e){if(fs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});fs.set(e,t)}let ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gc(e){ps=e(ps)}function Qc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Wn(this),t,...n);return Xi.set(s,t.sort?t.sort():[t]),Ct(s)}:Kc().includes(e)?function(...t){return e.apply(Wn(this),t),Ct(Wi.get(this))}:function(...t){return Ct(e.apply(Wn(this),t))}}function Wc(e){return typeof e=="function"?Qc(e):(e instanceof IDBTransaction&&zc(e),jc(e,qc())?new Proxy(e,ps):e)}function Ct(e){if(e instanceof IDBRequest)return Hc(e);if(Qn.has(e))return Qn.get(e);const t=Wc(e);return t!==e&&(Qn.set(e,t),zs.set(t,e)),t}const Wn=e=>zs.get(e);function Xc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Ct(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Yc=["get","getKey","getAll","getAllKeys","count"],Jc=["put","add","delete","clear"],Xn=new Map;function Mr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xn.get(t))return Xn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Jc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yc.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Xn.set(t,i),i}Gc(e=>({...e,get:(t,n,s)=>Mr(t,n)||e.get(t,n,s),has:(t,n)=>!!Mr(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gs="@firebase/app",Pr="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Qi("@firebase/app"),eu="@firebase/app-compat",nu="@firebase/analytics-compat",su="@firebase/analytics",ru="@firebase/app-check-compat",iu="@firebase/app-check",ou="@firebase/auth",au="@firebase/auth-compat",cu="@firebase/database",uu="@firebase/database-compat",hu="@firebase/functions",lu="@firebase/functions-compat",du="@firebase/installations",fu="@firebase/installations-compat",pu="@firebase/messaging",gu="@firebase/messaging-compat",mu="@firebase/performance",yu="@firebase/performance-compat",vu="@firebase/remote-config",wu="@firebase/remote-config-compat",Eu="@firebase/storage",Tu="@firebase/storage-compat",Iu="@firebase/firestore",Cu="@firebase/firestore-compat",Su="firebase",bu="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]",Au={[gs]:"fire-core",[eu]:"fire-core-compat",[su]:"fire-analytics",[nu]:"fire-analytics-compat",[iu]:"fire-app-check",[ru]:"fire-app-check-compat",[ou]:"fire-auth",[au]:"fire-auth-compat",[cu]:"fire-rtdb",[uu]:"fire-rtdb-compat",[hu]:"fire-fn",[lu]:"fire-fn-compat",[du]:"fire-iid",[fu]:"fire-iid-compat",[pu]:"fire-fcm",[gu]:"fire-fcm-compat",[mu]:"fire-perf",[yu]:"fire-perf-compat",[vu]:"fire-rc",[wu]:"fire-rc-compat",[Eu]:"fire-gcs",[Tu]:"fire-gcs-compat",[Iu]:"fire-fst",[Cu]:"fire-fst-compat","fire-js":"fire-js",[Su]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Map,ys=new Map;function Du(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function un(e){const t=e.name;if(ys.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;ys.set(t,e);for(const n of cn.values())Du(n,e);return!0}function Nu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new Gi("app","Firebase",ku);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=bu;function Yi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ms,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw St.create("bad-app-name",{appName:String(r)});if(n||(n=bc()),!n)throw St.create("no-options");const i=cn.get(r);if(i){if(ds(n,i.options)&&ds(s,i.config))return i;throw St.create("duplicate-app",{appName:r})}const o=new Pc(r);for(const c of ys.values())o.addComponent(c);const a=new _u(n,s,o);return cn.set(r,a),a}function xu(e=ms){const t=cn.get(e);if(!t&&e===ms)return Yi();if(!t)throw St.create("no-app",{appName:e});return t}function Gt(e,t,n){var s;let r=(s=Au[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}un(new Ie(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="firebase-heartbeat-database",Ou=1,Ce="firebase-heartbeat-store";let Yn=null;function Ji(){return Yn||(Yn=Xc(Lu,Ou,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch(e=>{throw St.create("idb-open",{originalErrorMessage:e.message})})),Yn}async function Fu(e){try{return(await Ji()).transaction(Ce).objectStore(Ce).get(Zi(e))}catch(t){if(t instanceof ie)$t.warn(t.message);else{const n=St.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function Vr(e,t){try{const s=(await Ji()).transaction(Ce,"readwrite");return await s.objectStore(Ce).put(t,Zi(e)),s.done}catch(n){if(n instanceof ie)$t.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(s.message)}}}function Zi(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=1024,Pu=30*24*60*60*1e3;class Vu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$r();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Pu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$r(),{heartbeatsToSend:n,unsentEntries:s}=$u(this._heartbeatsCache.heartbeats),r=an(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $r(){return new Date().toISOString().substring(0,10)}function $u(e,t=Mu){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ur(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ur(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Uu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nc()?kc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ur(e){return an(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e){un(new Ie("platform-logger",t=>new Zc(t),"PRIVATE")),un(new Ie("heartbeat",t=>new Vu(t),"PRIVATE")),Gt(gs,Pr,e),Gt(gs,Pr,"esm2017"),Gt("fire-js","")}Bu("");var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Gs=Gs||{},T=ju||self;function hn(){}function In(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Le(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function qu(e){return Object.prototype.hasOwnProperty.call(e,Jn)&&e[Jn]||(e[Jn]=++Ku)}var Jn="closure_uid_"+(1e9*Math.random()>>>0),Ku=0;function Hu(e,t,n){return e.call.apply(e.bind,arguments)}function zu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Hu:X=zu,X.apply(null,arguments)}function Ge(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Nt(){this.s=this.s,this.o=this.o}var Gu=0;Nt.prototype.s=!1;Nt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Gu!=0)&&qu(this)};Nt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const to=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Qs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Br(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(In(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Qu=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",hn,t),T.removeEventListener("test",hn,t)}catch{}return e}();function ln(e){return/^[\s\xa0]*$/.test(e)}var jr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Zn(e,t){return e<t?-1:e>t?1:0}function Cn(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function ht(e){return Cn().indexOf(e)!=-1}function Ws(e){return Ws[" "](e),e}Ws[" "]=hn;function Wu(e){var t=Ju;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Xu=ht("Opera"),Jt=ht("Trident")||ht("MSIE"),eo=ht("Edge"),vs=eo||Jt,no=ht("Gecko")&&!(Cn().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),Yu=Cn().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function so(){var e=T.document;return e?e.documentMode:void 0}var dn;t:{var ts="",es=function(){var e=Cn();if(no)return/rv:([^\);]+)(\)|;)/.exec(e);if(eo)return/Edge\/([\d\.]+)/.exec(e);if(Jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Yu)return/WebKit\/(\S+)/.exec(e);if(Xu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(es&&(ts=es?es[1]:""),Jt){var ns=so();if(ns!=null&&ns>parseFloat(ts)){dn=String(ns);break t}}dn=ts}var Ju={};function Zu(){return Wu(function(){let e=0;const t=jr(String(dn)).split("."),n=jr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Zn(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Zn(r[2].length==0,i[2].length==0)||Zn(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var ws;if(T.document&&Jt){var qr=so();ws=qr||parseInt(dn,10)||void 0}else ws=void 0;var th=ws;function Se(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(no){t:{try{Ws(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:eh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Se.X.h.call(this)}}z(Se,Y);var eh={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),nh=0;function sh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++nh,this.ba=this.ea=!1}function Sn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Xs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ro(e){const t={};for(const n in e)t[n]=e[n];return t}const Kr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function io(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Kr.length;i++)n=Kr[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function bn(e){this.src=e,this.g={},this.h=0}bn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ts(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new sh(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Es(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=to(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Sn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ts(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Ys="closure_lm_"+(1e6*Math.random()|0),ss={};function oo(e,t,n,s,r){if(s&&s.once)return co(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)oo(e,t[i],n,s,r);return null}return n=tr(n),e&&e[Oe]?e.N(t,n,Le(s)?!!s.capture:!!s,r):ao(e,t,n,!1,s,r)}function ao(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Le(r)?!!r.capture:!!r,a=Zs(e);if(a||(e[Ys]=a=new bn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=rh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Qu||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(ho(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rh(){function e(n){return t.call(e.src,e.listener,n)}const t=ih;return e}function co(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)co(e,t[i],n,s,r);return null}return n=tr(n),e&&e[Oe]?e.O(t,n,Le(s)?!!s.capture:!!s,r):ao(e,t,n,!0,s,r)}function uo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)uo(e,t[i],n,s,r);else s=Le(s)?!!s.capture:!!s,n=tr(n),e&&e[Oe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ts(i,n,s,r),-1<n&&(Sn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ts(t,n,s,r)),(n=-1<e?t[e]:null)&&Js(n))}function Js(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Oe])Es(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ho(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Zs(t))?(Es(n,e),n.h==0&&(n.src=null,t[Ys]=null)):Sn(e)}}}function ho(e){return e in ss?ss[e]:ss[e]="on"+e}function ih(e,t){if(e.ba)e=!0;else{t=new Se(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Js(e),e=n.call(s,t)}return e}function Zs(e){return e=e[Ys],e instanceof bn?e:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function tr(e){return typeof e=="function"?e:(e[rs]||(e[rs]=function(t){return e.handleEvent(t)}),e[rs])}function j(){Nt.call(this),this.i=new bn(this),this.P=this,this.I=null}z(j,Nt);j.prototype[Oe]=!0;j.prototype.removeEventListener=function(e,t,n,s){uo(this,e,t,n,s)};function K(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var r=t;t=new Y(s,e),io(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Qe(o,s,!0,t)&&r}if(o=t.g=e,r=Qe(o,s,!0,t)&&r,r=Qe(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Qe(o,s,!1,t)&&r}j.prototype.M=function(){if(j.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Sn(n[s]);delete e.g[t],e.h--}}this.I=null};j.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Qe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Es(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var er=T.JSON.stringify;function oh(){var e=po;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ah{constructor(){this.h=this.g=null}add(t,n){const s=lo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ch,e=>e.reset());class ch{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uh(e){T.setTimeout(()=>{throw e},0)}function fo(e,t){Is||hh(),Cs||(Is(),Cs=!0),po.add(e,t)}var Is;function hh(){var e=T.Promise.resolve(void 0);Is=function(){e.then(lh)}}var Cs=!1,po=new ah;function lh(){for(var e;e=oh();){try{e.h.call(e.g)}catch(n){uh(n)}var t=lo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Cs=!1}function An(e,t){j.call(this),this.h=e||1,this.g=t||T,this.j=X(this.lb,this),this.l=Date.now()}z(An,j);y=An.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),K(this,"tick"),this.ca&&(nr(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nr(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){An.X.M.call(this),nr(this),delete this.g};function sr(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function go(e){e.g=sr(()=>{e.g=null,e.i&&(e.i=!1,go(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dh extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:go(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function be(e){Nt.call(this),this.h=e,this.g={}}z(be,Nt);var Hr=[];function mo(e,t,n,s){Array.isArray(n)||(n&&(Hr[0]=n.toString()),n=Hr);for(var r=0;r<n.length;r++){var i=oo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function yo(e){Xs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Js(t)},e),e.g={}}be.prototype.M=function(){be.X.M.call(this),yo(this)};be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dn(){this.g=!0}Dn.prototype.Aa=function(){this.g=!1};function fh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function ph(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Ht(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+mh(e,n)+(s?" "+s:"")})}function gh(e,t){e.info(function(){return"TIMEOUT: "+t})}Dn.prototype.info=function(){};function mh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return er(n)}catch{return t}}var jt={},zr=null;function Nn(){return zr=zr||new j}jt.Pa="serverreachability";function vo(e){Y.call(this,jt.Pa,e)}z(vo,Y);function Ae(e){const t=Nn();K(t,new vo(t))}jt.STAT_EVENT="statevent";function wo(e,t){Y.call(this,jt.STAT_EVENT,e),this.stat=t}z(wo,Y);function tt(e){const t=Nn();K(t,new wo(t,e))}jt.Qa="timingevent";function Eo(e,t){Y.call(this,jt.Qa,e),this.size=t}z(Eo,Y);function Fe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var kn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},To={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function rr(){}rr.prototype.h=null;function Gr(e){return e.h||(e.h=e.i())}function Io(){}var Me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ir(){Y.call(this,"d")}z(ir,Y);function or(){Y.call(this,"c")}z(or,Y);var Ss;function _n(){}z(_n,rr);_n.prototype.g=function(){return new XMLHttpRequest};_n.prototype.i=function(){return{}};Ss=new _n;function Pe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new be(this),this.O=yh,e=vs?125:void 0,this.T=new An(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Co}function Co(){this.i=null,this.g="",this.h=!1}var yh=45e3,bs={},fn={};y=Pe.prototype;y.setTimeout=function(e){this.O=e};function As(e,t,n){e.K=1,e.v=xn(vt(t)),e.s=n,e.P=!0,So(e,null)}function So(e,t){e.F=Date.now(),Ve(e),e.A=vt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),xo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Co,e.g=Zo(e.l,n?t:null,!e.s),0<e.N&&(e.L=new dh(X(e.La,e,e.g),e.N)),mo(e.S,e.g,"readystatechange",e.ib),t=e.H?ro(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ae(),fh(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&mt(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const h=mt(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(h!=3||vs||this.g&&(this.h.h||this.g.fa()||Yr(this.g)))){this.I||h!=4||t==7||(t==8||0>=d?Ae(3):Ae(2)),Rn(this);var n=this.g.aa();this.Y=n;e:if(bo(this)){var s=Yr(this.g);e="";var r=s.length,i=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),ye(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ph(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ln(a)){var u=a;break e}}u=null}if(n=u)Ht(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ds(this,n);else{this.i=!1,this.o=3,tt(12),xt(this),ye(this);break t}}this.P?(Ao(this,h,o),vs&&this.i&&h==3&&(mo(this.S,this.T,"tick",this.hb),this.T.start())):(Ht(this.j,this.m,o,null),Ds(this,o)),h==4&&xt(this),this.i&&!this.I&&(h==4?Wo(this.l,this):(this.i=!1,Ve(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),xt(this),ye(this)}}}catch{}finally{}};function bo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Ao(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=vh(e,n),r==fn){t==4&&(e.o=4,tt(14),s=!1),Ht(e.j,e.m,null,"[Incomplete Response]");break}else if(r==bs){e.o=4,tt(15),Ht(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ht(e.j,e.m,r,null),Ds(e,r);bo(e)&&r!=fn&&r!=bs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fr(t),t.K=!0,tt(11))):(Ht(e.j,e.m,n,"[Invalid Chunked Response]"),xt(e),ye(e))}y.hb=function(){if(this.g){var e=mt(this.g),t=this.g.fa();this.C<t.length&&(Rn(this),Ao(this,e,t),this.i&&e!=4&&Ve(this))}};function vh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?fn:(n=Number(t.substring(n,s)),isNaN(n)?bs:(s+=1,s+n>t.length?fn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,xt(this)};function Ve(e){e.V=Date.now()+e.O,Do(e,e.O)}function Do(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Fe(X(e.gb,e),t)}function Rn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(gh(this.j,this.A),this.K!=2&&(Ae(),tt(17)),xt(this),this.o=2,ye(this)):Do(this,this.V-e)};function ye(e){e.l.G==0||e.I||Wo(e.l,e)}function xt(e){Rn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,nr(e.T),yo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ds(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ns(n.h,e))){if(!e.J&&Ns(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)mn(n),Fn(n);else break t;dr(n),tt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fe(X(n.cb,n),6e3));if(1>=Fo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Lt(n,11)}else if((e.J||n.g==e)&&mn(n),!ln(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const S=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var i=s.h;i.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ar(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,L(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Jo(s,s.H?s.ka:null,s.V),o.J){Mo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Rn(a),Ve(a)),s.g=o}else Go(s);0<n.i.length&&Mn(n)}else u[0]!="stop"&&u[0]!="close"||Lt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Lt(n,7):lr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ae(4)}catch{}}function wh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(In(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Eh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(In(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function No(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(In(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Eh(e),s=wh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Th(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=t!==void 0?t:e.h,pn(this,e.j),this.s=e.s,this.g=e.g,gn(this,e.m),this.l=e.l,t=e.i;var n=new De;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Qr(this,n),this.o=e.o}else e&&(n=String(e).match(ko))?(this.h=!!t,pn(this,n[1]||"",!0),this.s=pe(n[2]||""),this.g=pe(n[3]||"",!0),gn(this,n[4]),this.l=pe(n[5]||"",!0),Qr(this,n[6]||"",!0),this.o=pe(n[7]||"")):(this.h=!!t,this.i=new De(null,this.h))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ge(t,Wr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ge(t,Wr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ge(n,n.charAt(0)=="/"?Sh:Ch,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ge(n,Ah)),e.join("")};function vt(e){return new Ft(e)}function pn(e,t,n){e.j=n?pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qr(e,t,n){t instanceof De?(e.i=t,Dh(e.i,e.h)):(n||(t=ge(t,bh)),e.i=new De(t,e.h))}function L(e,t,n){e.i.set(t,n)}function xn(e){return L(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ge(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ih),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ih(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Wr=/[#\/\?@]/g,Ch=/[#\?:]/g,Sh=/[#\?]/g,bh=/[#\?@]/g,Ah=/#/g;function De(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Th(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=De.prototype;y.add=function(e,t){kt(this),this.i=null,e=oe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function _o(e,t){kt(e),t=oe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ro(e,t){return kt(e),t=oe(e,t),e.g.has(t)}y.forEach=function(e,t){kt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};y.oa=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};y.W=function(e){kt(this);let t=[];if(typeof e=="string")Ro(this,e)&&(t=t.concat(this.g.get(oe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return kt(this),this.i=null,e=oe(this,e),Ro(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function xo(e,t,n){_o(e,t),0<n.length&&(e.i=null,e.g.set(oe(e,t),Qs(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function oe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Dh(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(_o(this,s),xo(this,r,n))},e)),e.j=t}var Nh=class{constructor(t,n){this.h=t,this.g=n}};function Lo(e){this.l=e||kh,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kh=10;function Oo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fo(e){return e.h?1:e.g?e.g.size:0}function Ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ar(e,t){e.g?e.g.add(t):e.h=t}function Mo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Lo.prototype.cancel=function(){if(this.i=Po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Po(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Qs(e.i)}function cr(){}cr.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};cr.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function _h(){this.g=new cr}function Rh(e,t,n){const s=n||"";try{No(e,function(r,i){let o=r;Le(r)&&(o=er(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function xh(e,t){const n=new Dn;if(T.Image){const s=new Image;s.onload=Ge(We,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ge(We,n,s,"TestLoadImage: error",!1,t),s.onabort=Ge(We,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ge(We,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function We(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function $e(e){this.l=e.ac||null,this.j=e.jb||!1}z($e,rr);$e.prototype.g=function(){return new Ln(this.l,this.j)};$e.prototype.i=function(e){return function(){return e}}({});function Ln(e,t){j.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ur,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Ln,j);var ur=0;y=Ln.prototype;y.open=function(e,t){if(this.readyState!=ur)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ne(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=ur};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Vo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ue(this):Ne(this),this.readyState==3&&Vo(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,Ue(this))};y.Ua=function(e){this.g&&(this.response=e,Ue(this))};y.ga=function(){this.g&&Ue(this)};function Ue(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ne(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ne(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Lh=T.JSON.parse;function F(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$o,this.K=this.L=!1}z(F,j);var $o="",Oh=/^https?$/i,Fh=["POST","PUT"];y=F.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ss.g(),this.C=this.u?Gr(this.u):Gr(Ss),this.g.onreadystatechange=X(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Xr(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=T.FormData&&e instanceof T.FormData,!(0<=to(Fh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jo(this),0<this.B&&((this.K=Mh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.qa,this)):this.A=sr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Xr(this,i)}};function Mh(e){return Jt&&Zu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof Gs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Xr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Uo(e),On(e)}function Uo(e){e.D||(e.D=!0,K(e,"complete"),K(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),On(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),F.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?Bo(this):this.fb())};y.fb=function(){Bo(this)};function Bo(e){if(e.h&&typeof Gs<"u"&&(!e.C[1]||mt(e)!=4||e.aa()!=2)){if(e.v&&mt(e)==4)sr(e.Ha,0,e);else if(K(e,"readystatechange"),mt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(ko)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!Oh.test(r?r.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var o=2<mt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Uo(e)}}finally{On(e)}}}}function On(e,t){if(e.g){jo(e);const n=e.g,s=e.C[0]?hn:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function jo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function mt(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Lh(t)}};function Yr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $o:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qo(e){let t="";return Xs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function hr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=qo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):L(e,t,n))}function fe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ko(e){this.Ca=0,this.i=[],this.j=new Dn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=fe("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=fe("baseRetryDelayMs",5e3,e),this.bb=fe("retryDelaySeedMs",1e4,e),this.$a=fe("forwardChannelMaxRetries",2,e),this.ta=fe("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Lo(e&&e.concurrentRequestLimit),this.Fa=new _h,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Ko.prototype;y.ma=8;y.G=1;function lr(e){if(Ho(e),e.G==3){var t=e.U++,n=vt(e.F);L(n,"SID",e.I),L(n,"RID",t),L(n,"TYPE","terminate"),Be(e,n),t=new Pe(e,e.j,t,void 0),t.K=2,t.v=xn(vt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Zo(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ve(t)}Yo(e)}function Fn(e){e.g&&(fr(e),e.g.cancel(),e.g=null)}function Ho(e){Fn(e),e.u&&(T.clearTimeout(e.u),e.u=null),mn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Mn(e){Oo(e.h)||e.m||(e.m=!0,fo(e.Ja,e),e.C=0)}function Ph(e,t){return Fo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Fe(X(e.Ja,e,t),Xo(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Pe(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=ro(i),io(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=zo(this,r,t),n=vt(this.F),L(n,"RID",e),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),Be(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(qo(i)))+"&"+t:this.o&&hr(n,this.o,i)),ar(this.h,r),this.Ya&&L(n,"TYPE","init"),this.O?(L(n,"$req",t),L(n,"SID","null"),r.Z=!0,As(r,n,null)):As(r,n,t),this.G=2}}else this.G==3&&(e?Jr(this,e):this.i.length==0||Oo(this.h)||Jr(this))};function Jr(e,t){var n;t?n=t.m:n=e.U++;const s=vt(e.F);L(s,"SID",e.I),L(s,"RID",n),L(s,"AID",e.T),Be(e,s),e.o&&e.s&&hr(s,e.o,e.s),n=new Pe(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=zo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ar(e.h,n),As(n,s,t)}function Be(e,t){e.ia&&Xs(e.ia,function(n,s){L(t,s,n)}),e.l&&No({},function(n,s){L(t,s,n)})}function zo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?X(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Rh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Go(e){e.g||e.u||(e.Z=1,fo(e.Ia,e),e.A=0)}function dr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Fe(X(e.Ia,e),Xo(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,Qo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Fe(X(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),Fn(this),Qo(this))};function fr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Qo(e){e.g=new Pe(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=vt(e.sa);L(t,"RID","rpc"),L(t,"SID",e.I),L(t,"CI",e.L?"0":"1"),L(t,"AID",e.T),L(t,"TYPE","xmlhttp"),Be(e,t),e.o&&e.s&&hr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=xn(vt(t)),n.s=null,n.P=!0,So(n,e)}y.cb=function(){this.v!=null&&(this.v=null,Fn(this),dr(this),tt(19))};function mn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Wo(e,t){var n=null;if(e.g==t){mn(e),fr(e),e.g=null;var s=2}else if(Ns(e.h,t))n=t.D,Mo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Nn(),K(s,new Eo(s,n)),Mn(e)}else Go(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Ph(e,t)||s==2&&dr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Lt(e,5);break;case 4:Lt(e,10);break;case 3:Lt(e,6);break;default:Lt(e,2)}}}function Xo(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Lt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=X(e.kb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||pn(n,"https"),xn(n)),xh(n.toString(),s)}else tt(2);e.G=0,e.l&&e.l.va(t),Yo(e),Ho(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Yo(e){if(e.G=0,e.la=[],e.l){const t=Po(e.h);(t.length!=0||e.i.length!=0)&&(Br(e.la,t),Br(e.la,e.i),e.h.i.length=0,Qs(e.i),e.i.length=0),e.l.ua()}}function Jo(e,t,n){var s=n instanceof Ft?vt(n):new Ft(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),gn(s,s.m);else{var r=T.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Ft(null,void 0);s&&pn(i,s),t&&(i.g=t),r&&gn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&L(s,n,t),L(s,"VER",e.ma),Be(e,s),s}function Zo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new F(new $e({jb:!0})):new F(e.ra),t.Ka(e.H),t}function ta(){}y=ta.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function yn(){if(Jt&&!(10<=Number(th)))throw Error("Environmental error: no available transport.")}yn.prototype.g=function(e,t){return new it(e,t)};function it(e,t){j.call(this),this.g=new Ko(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ln(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ln(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ae(this)}z(it,j);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Jo(e,null,e.V),Mn(e)};it.prototype.close=function(){lr(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=er(e),e=n);t.i.push(new Nh(t.ab++,e)),t.G==3&&Mn(t)};it.prototype.M=function(){this.g.l=null,delete this.j,lr(this.g),delete this.g,it.X.M.call(this)};function ea(e){ir.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(ea,ir);function na(){or.call(this),this.status=1}z(na,or);function ae(e){this.g=e}z(ae,ta);ae.prototype.xa=function(){K(this.g,"a")};ae.prototype.wa=function(e){K(this.g,new ea(e))};ae.prototype.va=function(e){K(this.g,new na)};ae.prototype.ua=function(){K(this.g,"b")};yn.prototype.createWebChannel=yn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;kn.NO_ERROR=0;kn.TIMEOUT=8;kn.HTTP_ERROR=6;To.COMPLETE="complete";Io.EventType=Me;Me.OPEN="a";Me.CLOSE="b";Me.ERROR="c";Me.MESSAGE="d";j.prototype.listen=j.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.Oa;F.prototype.getLastErrorCode=F.prototype.Ea;F.prototype.getStatus=F.prototype.aa;F.prototype.getResponseJson=F.prototype.Sa;F.prototype.getResponseText=F.prototype.fa;F.prototype.send=F.prototype.da;F.prototype.setWithCredentials=F.prototype.Ka;var Vh=function(){return new yn},$h=function(){return Nn()},is=kn,Uh=To,Bh=jt,Zr={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},jh=$e,Xe=Io,qh=F;const ti="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ce="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Qi("@firebase/firestore");function ei(){return Ut.logLevel}function v(e,...t){if(Ut.logLevel<=k.DEBUG){const n=t.map(pr);Ut.debug(`Firestore (${ce}): ${e}`,...n)}}function wt(e,...t){if(Ut.logLevel<=k.ERROR){const n=t.map(pr);Ut.error(`Firestore (${ce}): ${e}`,...n)}}function ks(e,...t){if(Ut.logLevel<=k.WARN){const n=t.map(pr);Ut.warn(`Firestore (${ce}): ${e}`,...n)}}function pr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e="Unexpected state"){const t=`FIRESTORE (${ce}) INTERNAL ASSERTION FAILED: `+e;throw wt(t),new Error(t)}function V(e,t){e||C()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ie{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class Hh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zh{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new sa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new Q(t)}}class Gh{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Qh{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Gh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.A=n.token,new Wh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Yh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function Zt(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new nt(0,0))}static max(){return new I(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n,s){n===void 0?n=0:n>t.length&&C(),s===void 0?s=t.length-n:s>t.length-n&&C(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ke.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ke?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends ke{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ke{construct(t,n,s){return new et(t,n,s)}static isValidIdentifier(t){return Zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(O.fromString(t))}static fromName(t){return new w(O.fromString(t).popFirst(5))}static empty(){return new w(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new O(t.slice()))}}function tl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=I.fromTimestamp(s===1e9?new nt(n+1,0):new nt(n,s));return new bt(r,w.empty(),t)}function el(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new bt(I.min(),w.empty(),-1)}static max(){return new bt(I.max(),w.empty(),-1)}}function nl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:_(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==sl)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new l((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof l?n:l.resolve(n)}catch(n){return l.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):l.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):l.reject(n)}static resolve(t){return new l((n,s)=>{n(t)})}static reject(t){return new l((n,s)=>{s(t)})}static waitFor(t){return new l((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=l.resolve(!1);for(const s of t)n=n.next(r=>r?l.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new l((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new l((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function je(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}mr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _e{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new _e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _e&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Pn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ol(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){return e==null}function _s(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new al("Invalid base64 string: "+r):r}}(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const cl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(e){if(V(!!e),typeof e=="string"){let t=0;const n=cl.exec(e);if(V(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:P(e.seconds),nanos:P(e.nanos)}}function P(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function te(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ia(e){const t=e.mapValue.fields.__previous_value__;return ra(t)?ia(t):t}function Re(e){const t=At(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ra(e)?4:ul(e)?9007199254740991:10:C()}function ft(e,t){if(e===t)return!0;const n=Bt(e);if(n!==Bt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Re(e).isEqual(Re(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=At(s.timestampValue),o=At(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return te(s.bytesValue).isEqual(te(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return P(s.geoPointValue.latitude)===P(r.geoPointValue.latitude)&&P(s.geoPointValue.longitude)===P(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return P(s.integerValue)===P(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=P(s.doubleValue),o=P(r.doubleValue);return i===o?_s(i)===_s(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Zt(e.arrayValue.values||[],t.arrayValue.values||[],ft);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ni(i)!==ni(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ft(i[a],o[a])))return!1;return!0}(e,t);default:return C()}}function xe(e,t){return(e.values||[]).find(n=>ft(n,t))!==void 0}function ee(e,t){if(e===t)return 0;const n=Bt(e),s=Bt(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=P(r.integerValue||r.doubleValue),a=P(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return si(e.timestampValue,t.timestampValue);case 4:return si(Re(e),Re(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(r,i){const o=te(r),a=te(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=_(o[c],a[c]);if(u!==0)return u}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=_(P(r.latitude),P(i.latitude));return o!==0?o:_(P(r.longitude),P(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ee(o[c],a[c]);if(u)return u}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Ye.mapValue&&i===Ye.mapValue)return 0;if(r===Ye.mapValue)return 1;if(i===Ye.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=_(a[h],u[h]);if(d!==0)return d;const p=ee(o[a[h]],c[u[h]]);if(p!==0)return p}return _(a.length,u.length)}(e.mapValue,t.mapValue);default:throw C()}}function si(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=At(e),s=At(t),r=_(n.seconds,s.seconds);return r!==0?r:_(n.nanos,s.nanos)}function ne(e){return Rs(e)}function Rs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=At(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?te(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Rs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Rs(s.fields[a])}`;return i+"}"}(e.mapValue):C();var t,n}function xs(e){return!!e&&"integerValue"in e}function yr(e){return!!e&&"arrayValue"in e}function ri(e){return!!e&&"nullValue"in e}function ii(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function os(e){return!!e&&"mapValue"in e}function ve(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Pn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ve(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ve(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ul(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n){this.position=t,this.inclusive=n}}function oi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=ee(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ai(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ft(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{}class $ extends oa{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new ll(t,n,s):n==="array-contains"?new pl(t,s):n==="in"?new gl(t,s):n==="not-in"?new ml(t,s):n==="array-contains-any"?new yl(t,s):new $(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new dl(t,s):new fl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ee(n,this.value)):n!==null&&Bt(this.value)===Bt(n)&&this.matchesComparison(ee(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pt extends oa{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new pt(t,n)}matches(t){return aa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function aa(e){return e.op==="and"}function ca(e){return hl(e)&&aa(e)}function hl(e){for(const t of e.filters)if(t instanceof pt)return!1;return!0}function Ls(e){if(e instanceof $)return e.field.canonicalString()+e.op.toString()+ne(e.value);if(ca(e))return e.filters.map(t=>Ls(t)).join(",");{const t=e.filters.map(n=>Ls(n)).join(",");return`${e.op}(${t})`}}function ua(e,t){return e instanceof $?function(n,s){return s instanceof $&&n.op===s.op&&n.field.isEqual(s.field)&&ft(n.value,s.value)}(e,t):e instanceof pt?function(n,s){return s instanceof pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ua(i,s.filters[o]),!0):!1}(e,t):void C()}function ha(e){return e instanceof $?function(t){return`${t.field.canonicalString()} ${t.op} ${ne(t.value)}`}(e):e instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(ha).join(" ,")+"}"}(e):"Filter"}class ll extends ${constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class dl extends ${constructor(t,n){super(t,"in",n),this.keys=la("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class fl extends ${constructor(t,n){super(t,"not-in",n),this.keys=la("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function la(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class pl extends ${constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return yr(n)&&xe(n.arrayValue,this.value)}}class gl extends ${constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xe(this.value.arrayValue,n)}}class ml extends ${constructor(t,n){super(t,"not-in",n)}matches(t){if(xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xe(this.value.arrayValue,n)}}class yl extends ${constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!yr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xe(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n="asc"){this.field=t,this.dir=n}}function vl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new H(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new H(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Je(this.root,t,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Je(this.root,t,this.comparator,!0)}}class Je{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??q.RED,this.left=r??q.EMPTY,this.right=i??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new q(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return q.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,s,r){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.comparator=t,this.data=new H(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ci(this.data.getIterator())}getIteratorFrom(t){return new ci(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new U(this.comparator);return n.data=t,n}}class ci{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(et.comparator)}static empty(){return new It([])}unionWith(t){let n=new U(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new It(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Zt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!os(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ve(n)}setAll(t){let n=et.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ve(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());os(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ft(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];os(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Pn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new lt(ve(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new W(t,0,I.min(),I.min(),I.min(),lt.empty(),0)}static newFoundDocument(t,n,s,r){return new W(t,1,n,I.min(),s,r,0)}static newNoDocument(t,n){return new W(t,2,n,I.min(),I.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new W(t,3,n,I.min(),I.min(),lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof W&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function ui(e,t=null,n=[],s=[],r=null,i=null,o=null){return new wl(e,t,n,s,r,i,o)}function vr(e){const t=N(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ls(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ne(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ne(s)).join(",")),t._t=n}return t._t}function wr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ua(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ai(e.startAt,t.startAt)&&ai(e.endAt,t.endAt)}function Os(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function El(e,t,n,s,r,i,o,a){return new $n(e,t,n,s,r,i,o,a)}function da(e){return new $n(e)}function hi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Tl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Il(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Cl(e){return e.collectionGroup!==null}function Qt(e){const t=N(e);if(t.wt===null){t.wt=[];const n=Il(t),s=Tl(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new we(n)),t.wt.push(new we(et.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new we(et.keyField(),i))}}}return t.wt}function Et(e){const t=N(e);if(!t.gt)if(t.limitType==="F")t.gt=ui(t.path,t.collectionGroup,Qt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Qt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new we(i.field,o))}const s=t.endAt?new vn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vn(t.startAt.position,t.startAt.inclusive):null;t.gt=ui(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.gt}function Fs(e,t,n){return new $n(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Un(e,t){return wr(Et(e),Et(t))&&e.limitType===t.limitType}function fa(e){return`${vr(Et(e))}|lt:${e.limitType}`}function Ms(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ha(s)).join(", ")}]`),Vn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ne(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ne(s)).join(",")),`Target(${n})`}(Et(e))}; limitType=${e.limitType})`}function Bn(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Qt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=oi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Qt(n),s)||n.endAt&&!function(r,i,o){const a=oi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Qt(n),s))}(e,t)}function Sl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function pa(e){return(t,n)=>{let s=!1;for(const r of Qt(e)){const i=bl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function bl(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ee(a,c):C()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(t)?"-0":t}}function Dl(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this._=void 0}}function Nl(e,t,n){return e instanceof Ps?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof wn?ga(e,t):e instanceof En?ma(e,t):function(s,r){const i=_l(s,r),o=li(i)+li(s.It);return xs(i)&&xs(s.It)?Dl(o):Al(s.Tt,o)}(e,t)}function kl(e,t,n){return e instanceof wn?ga(e,t):e instanceof En?ma(e,t):n}function _l(e,t){return e instanceof Vs?xs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ps extends jn{}class wn extends jn{constructor(t){super(),this.elements=t}}function ga(e,t){const n=ya(t);for(const s of e.elements)n.some(r=>ft(r,s))||n.push(s);return{arrayValue:{values:n}}}class En extends jn{constructor(t){super(),this.elements=t}}function ma(e,t){let n=ya(t);for(const s of e.elements)n=n.filter(r=>!ft(r,s));return{arrayValue:{values:n}}}class Vs extends jn{constructor(t,n){super(),this.Tt=t,this.It=n}}function li(e){return P(e.integerValue||e.doubleValue)}function ya(e){return yr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Rl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof wn&&s instanceof wn||n instanceof En&&s instanceof En?Zt(n.elements,s.elements,ft):n instanceof Vs&&s instanceof Vs?ft(n.It,s.It):n instanceof Ps&&s instanceof Ps}(e.transform,t.transform)}class Pt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Er{}function va(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ll(e.key,Pt.none()):new Tr(e.key,e.data,Pt.none());{const n=e.data,s=lt.empty();let r=new U(et.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new qn(e.key,s,new It(r.toArray()),Pt.none())}}function xl(e,t,n){e instanceof Tr?function(s,r,i){const o=s.value.clone(),a=fi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof qn?function(s,r,i){if(!nn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=fi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(wa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ee(e,t,n,s){return e instanceof Tr?function(r,i,o,a){if(!nn(r.precondition,i))return o;const c=r.value.clone(),u=pi(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof qn?function(r,i,o,a){if(!nn(r.precondition,i))return o;const c=pi(r.fieldTransforms,a,i),u=i.data;return u.setAll(wa(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return nn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function di(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Zt(n,s,(r,i)=>Rl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Tr extends Er{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qn extends Er{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function fi(e,t,n){const s=new Map;V(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,kl(o,a,n[r]))}return s}function pi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Nl(i,o,t))}return s}class Ll extends Er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,A;function Ea(e){if(e===void 0)return wt("GRPC error has no .code"),f.UNKNOWN;switch(e){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return C()}}(A=M||(M={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Pn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new H(w.comparator);function Dt(){return Fl}const Ta=new H(w.comparator);function me(...e){let t=Ta;for(const n of e)t=t.insert(n.key,n);return t}function Ml(e){let t=Ta;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ot(){return Te()}function Ia(){return Te()}function Te(){return new ue(e=>e.toString(),(e,t)=>e.isEqual(t))}const Pl=new U(w.comparator);function D(...e){let t=Pl;for(const n of e)t=t.add(n);return t}const Vl=new U(_);function Ca(){return Vl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,qe.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Kn(I.min(),r,Ca(),Dt(),D())}}class qe{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new qe(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,n,s,r){this.Et=t,this.removedTargetIds=n,this.key=s,this.At=r}}class Sa{constructor(t,n){this.targetId=t,this.Rt=n}}class ba{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gi{constructor(){this.Pt=0,this.vt=yi(),this.bt=J.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.bt=t)}Nt(){let t=D(),n=D(),s=D();return this.vt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:C()}}),new qe(this.bt,this.Vt,t,n,s)}kt(){this.St=!1,this.vt=yi()}$t(t,n){this.St=!0,this.vt=this.vt.insert(t,n)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class $l{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=Dt(),this.Kt=mi(),this.Gt=new U(_)}Qt(t){for(const n of t.Et)t.At&&t.At.isFoundDocument()?this.jt(n,t.At):this.zt(n,t.key,t.At);for(const n of t.removedTargetIds)this.zt(n,t.key,t.At)}Wt(t){this.forEachTarget(t,n=>{const s=this.Ht(n);switch(t.state){case 0:this.Jt(n)&&s.xt(t.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(t.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(t.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(t.resumeToken));break;default:C()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(t){const n=t.targetId,s=t.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Os(i))if(s===0){const o=new w(i.path);this.zt(n,o,W.newNoDocument(o,I.min()))}else V(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(t){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Os(a.target)){const c=new w(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,W.newNoDocument(c,t))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=D();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new Kn(t,n,this.Gt,this.Ut,s);return this.Ut=Dt(),this.Kt=mi(),this.Gt=new U(_),r}jt(t,n){if(!this.Jt(t))return;const s=this.ne(t,n.key)?2:0;this.Ht(t).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(t))}zt(t,n,s){if(!this.Jt(t))return;const r=this.Ht(t);this.ne(t,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.qt.delete(t)}te(t){const n=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Ht(t).Ot()}Ht(t){let n=this.qt.get(t);return n||(n=new gi,this.qt.set(t,n)),n}se(t){let n=this.Kt.get(t);return n||(n=new U(_),this.Kt=this.Kt.insert(t,n)),n}Jt(t){const n=this.Xt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.qt.get(t);return n&&n.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new gi),this.Lt.getRemoteKeysForTarget(t).forEach(n=>{this.zt(t,n,null)})}ne(t,n){return this.Lt.getRemoteKeysForTarget(t).has(n)}}function mi(){return new H(w.comparator)}function yi(){return new H(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jl=(()=>({and:"AND",or:"OR"}))();class ql{constructor(t,n){this.databaseId=t,this.yt=n}}function Kl(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hl(e,t){return e.yt?t.toBase64():t.toUint8Array()}function Wt(e){return V(!!e),I.fromTimestamp(function(t){const n=At(t);return new nt(n.seconds,n.nanos)}(e))}function zl(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Aa(e){const t=O.fromString(e);return V(_a(t)),t}function as(e,t){const n=Aa(t);if(n.get(1)!==e.databaseId.projectId)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Da(n))}function $s(e,t){return zl(e.databaseId,t)}function Gl(e){const t=Aa(e);return t.length===4?O.emptyPath():Da(t)}function vi(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Da(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ql(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.yt?(V(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(V(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Ea(c.code);return new E(u,c.message||"")}(o);n=new ba(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=as(e,s.document.name),i=Wt(s.document.updateTime),o=s.document.createTime?Wt(s.document.createTime):I.min(),a=new lt({mapValue:{fields:s.document.fields}}),c=W.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new sn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=as(e,s.document),i=s.readTime?Wt(s.readTime):I.min(),o=W.newNoDocument(r,i),a=s.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=as(e,s.document),i=s.removedTargetIds||[];n=new sn([],i,r,null)}else{if(!("filter"in t))return C();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Ol(r),o=s.targetId;n=new Sa(o,i)}}return n}function Wl(e,t){return{documents:[$s(e,t.path)]}}function Xl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=$s(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=$s(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ka(pt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:qt(h.field),direction:Zl(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||Vn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Yl(e){let t=Gl(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){V(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const d=Na(h);return d instanceof pt&&ca(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new we(Kt(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vn(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new vn(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new vn(p,d)}(n.endAt)),El(t,r,o,i,a,"F",c,u)}function Jl(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Na(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Kt(t.unaryFilter.field);return $.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Kt(t.unaryFilter.field);return $.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kt(t.unaryFilter.field);return $.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kt(t.unaryFilter.field);return $.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(e):e.fieldFilter!==void 0?function(t){return $.create(Kt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(n=>Na(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op))}(e):C()}function Zl(e){return Ul[e]}function td(e){return Bl[e]}function ed(e){return jl[e]}function qt(e){return{fieldPath:e.canonicalString()}}function Kt(e){return et.fromServerFormat(e.fieldPath)}function ka(e){return e instanceof $?function(t){if(t.op==="=="){if(ii(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NAN"}};if(ri(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ii(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NOT_NAN"}};if(ri(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qt(t.field),op:td(t.op),value:t.value}}}(e):e instanceof pt?function(t){const n=t.getFilters().map(s=>ka(s));return n.length===1?n[0]:{compositeFilter:{op:ed(t.op),filters:n}}}(e):C()}function _a(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&xl(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ee(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ee(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Ia();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=va(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&Zt(this.mutations,t.mutations,(n,s)=>di(n,s))&&Zt(this.baseMutations,t.baseMutations,(n,s)=>di(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n,s,r,i=I.min(),o=I.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.oe=t}}function id(e){const t=Yl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.Ze=new ad}addToCollectionParentIndex(t,n){return this.Ze.add(n),l.resolve()}getCollectionParents(t,n){return l.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return l.resolve()}deleteFieldIndex(t,n){return l.resolve()}getDocumentsMatchingTarget(t,n){return l.resolve(null)}getIndexType(t,n){return l.resolve(0)}getFieldIndexes(t,n){return l.resolve([])}getNextCollectionGroupToUpdate(t){return l.resolve(null)}getMinOffset(t,n){return l.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return l.resolve(bt.min())}updateCollectionGroup(t,n,s){return l.resolve()}updateIndexEntries(t,n){return l.resolve()}}class ad{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new U(O.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new U(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Vn(){return new se(0)}static Sn(){return new se(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.changes=new ue(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,W.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?l.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Ee(s.mutation,r,It.empty(),nt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const r=Ot();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=me();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ot();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Dt();const o=Te(),a=Te();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof qn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ee(h.mutation,u,h.mutation.getFieldMask(),nt.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new ud(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Te();let r=new H((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||It.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(r.get(a.batchId)||D()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=Ia();h.forEach(p=>{if(!i.has(p)){const g=va(n.get(p),s.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return l.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Cl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):l.resolve(Ot());let a=-1,c=i;return o.next(u=>l.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?l.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,D())).next(h=>({batchId:a,changes:Ml(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=me();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=me();return this.indexManager.getCollectionParents(t,r).next(o=>l.forEach(o,a=>{const c=function(u,h){return new $n(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,d)=>{i=i.insert(h,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,W.newInvalidDocument(u)))});let o=me();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Ee(u.mutation,c,It.empty(),nt.now()),Bn(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return l.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Wt(s.createTime)}),l.resolve()}getNamedQuery(t,n){return l.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:id(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),l.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.overlays=new H(w.comparator),this.ss=new Map}getOverlay(t,n){return l.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ot();return l.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ce(t,n,i)}),l.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),l.resolve()}getOverlaysForCollection(t,n,s){const r=Ot(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return l.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new H((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Ot(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ot(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return l.resolve(a)}ce(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sd(n,s));let i=this.ss.get(n);i===void 0&&(i=D(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.rs=new U(B.os),this.us=new U(B.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new B(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new B(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new w(new O([])),s=new B(n,t),r=new B(n,t+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new w(new O([])),s=new B(n,t),r=new B(n,t+1);let i=D();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new B(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this.gs=n}static os(t,n){return w.comparator(t.key,n.key)||_(t.gs,n.gs)}static cs(t,n){return _(t.gs,n.gs)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new U(B.os)}checkEmpty(t){return l.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new B(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return l.resolve(o)}lookupMutationBatch(t,n){return l.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return l.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return l.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return l.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),r=new B(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),l.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new U(_);return n.forEach(r=>{const i=new B(r,0),o=new B(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),l.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new B(new w(i),0);let a=new U(_);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),l.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){V(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return l.forEach(n.mutations,r=>{const i=new B(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ps=s})}Pn(t){}containsKey(t,n){const s=new B(n,0),r=this.ps.firstAfterOrEqual(s);return l.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,l.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.Rs=t,this.docs=new H(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return l.resolve(s?s.document.mutableCopy():W.newInvalidDocument(n))}getEntries(t,n){let s=Dt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():W.newInvalidDocument(r))}),l.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Dt();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nl(el(h),s)<=0||(r.has(h.key)||Bn(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return l.resolve(i)}getAllFromCollectionGroup(t,n,s,r){C()}Ps(t,n){return l.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new gd(this)}getSize(t){return l.resolve(this.size)}}class gd extends cd{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(t,r)):this.Xn.removeEntry(s)}),l.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){this.persistence=t,this.vs=new ue(n=>vr(n),wr),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Ir,this.targetCount=0,this.Ss=se.Vn()}forEachTarget(t,n){return this.vs.forEach((s,r)=>n(r)),l.resolve()}getLastRemoteSnapshotVersion(t){return l.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return l.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),l.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),l.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new se(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,l.resolve()}updateTargetData(t,n){return this.xn(n),l.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,l.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),l.waitFor(i).next(()=>r)}getTargetCount(t){return l.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return l.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),l.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),l.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),l.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return l.resolve(s)}containsKey(t,n){return l.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new mr(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new md(this),this.indexManager=new od,this.remoteDocumentCache=function(s){return new pd(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new rd(n),this.$s=new ld(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new fd(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new vd(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(t,n){return l.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class vd extends rl{constructor(t){super(),this.currentSequenceNumber=t}}class Cr{constructor(t){this.persistence=t,this.Bs=new Ir,this.Ls=null}static qs(t){return new Cr(t)}get Us(){if(this.Ls)return this.Ls;throw C()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),l.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),l.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),l.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return l.forEach(this.Us,s=>{const r=w.fromPath(s);return this.Ks(t,r).next(i=>{i||n.removeEntry(r,I.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return l.or([()=>l.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Fs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(t,n){let s=D(),r=D();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Mi(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Fi(t,n))}Mi(t,n){if(hi(n))return l.resolve(null);let s=Et(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fs(n,null,"F"),s=Et(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=D(...i);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(t,Fs(n,null,"F")):this.qi(t,u,n,c)}))})))}Oi(t,n,s,r){return hi(n)||r.isEqual(I.min())?this.Fi(t,n):this.$i.getDocuments(t,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(t,n):(ei()<=k.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ms(n)),this.qi(t,o,n,tl(r,-1)))})}Bi(t,n){let s=new U(pa(t));return n.forEach((r,i)=>{Bn(t,i)&&(s=s.add(i))}),s}Li(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(t,n){return ei()<=k.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.$i.getDocumentsMatchingQuery(t,n,bt.min())}qi(t,n,s,r){return this.$i.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n,s,r){this.persistence=t,this.Ui=n,this.Tt=r,this.Ki=new H(_),this.Gi=new ue(i=>vr(i),wr),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.$s=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hd(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function Td(e,t,n,s){return new Ed(e,t,n,s)}async function Ra(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=D();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function xa(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function Id(e,t){const n=N(e),s=t.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];t.targetChanges.forEach((h,d)=>{const p=r.get(d);if(!p)return;a.push(n.Ns.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(d)?g=g.withResumeToken(J.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),function(S,b,x){return S.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Ns.updateTargetData(i,g))});let c=Dt(),u=D();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Cd(i,o,t.documentUpdates).next(h=>{c=h.Hi,u=h.Ji})),!s.isEqual(I.min())){const h=n.Ns.getLastRemoteSnapshotVersion(i).next(d=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return l.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function Cd(e,t,n){let s=D(),r=D();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Dt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(I.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Sd(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,t).next(i=>i?(r=i,l.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Vt(t,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(t,s.targetId)),s})}async function Us(e,t,n){const s=N(e),r=s.Ki.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!je(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ki=s.Ki.remove(t),s.Gi.delete(r.target)}function wi(e,t,n){const s=N(e);let r=I.min(),i=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=N(a),d=h.Gi.get(u);return d!==void 0?l.resolve(h.Ki.get(d)):h.Ns.getTargetData(c,u)}(s,o,Et(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,t,n?r:I.min(),n?i:D())).next(a=>(bd(s,Sl(t),a),{documents:a,Yi:i})))}function bd(e,t,n){let s=e.Qi.get(t)||I.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Qi.set(t,s)}class Ei{constructor(){this.activeTargetIds=Ca()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ad{constructor(){this.Ur=new Ei,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Ei,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{Gr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze=null;function cs(){return Ze===null?Ze=268435456+Math.round(2147483648*Math.random()):Ze++,"0x"+Ze.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="WebChannelConnection";class _d extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,r,i){const o=cs(),a=this.fo(t,n);v("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(t,a,c,s).then(u=>(v("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw ks("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}mo(t,n,s,r,i,o){return this.lo(t,n,s,r,i)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ce,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}fo(t,n){const s=Nd[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,r){const i=cs();return new Promise((o,a)=>{const c=new qh;c.setWithCredentials(!0),c.listenOnce(Uh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case is.NO_ERROR:const h=c.getResponseJson();v(G,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case is.TIMEOUT:v(G,`RPC '${t}' ${i} timed out`),a(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const d=c.getStatus();if(v(G,`RPC '${t}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const S=function(b){const x=b.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(x)>=0?x:f.UNKNOWN}(g.status);a(new E(S,g.message))}else a(new E(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(f.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{v(G,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);v(G,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}yo(t,n,s){const r=cs(),i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Vh(),a=$h(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new jh({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");v(G,`Creating RPC '${t}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const g=new kd({Yr:b=>{p?v(G,`Not sending because RPC '${t}' stream ${r} is closed:`,b):(d||(v(G,`Opening RPC '${t}' stream ${r} transport.`),h.open(),d=!0),v(G,`RPC '${t}' stream ${r} sending:`,b),h.send(b))},Zr:()=>h.close()}),S=(b,x,ot)=>{b.listen(x,at=>{try{ot(at)}catch(ct){setTimeout(()=>{throw ct},0)}})};return S(h,Xe.EventType.OPEN,()=>{p||v(G,`RPC '${t}' stream ${r} transport opened.`)}),S(h,Xe.EventType.CLOSE,()=>{p||(p=!0,v(G,`RPC '${t}' stream ${r} transport closed`),g.oo())}),S(h,Xe.EventType.ERROR,b=>{p||(p=!0,ks(G,`RPC '${t}' stream ${r} transport errored:`,b),g.oo(new E(f.UNAVAILABLE,"The operation could not be completed")))}),S(h,Xe.EventType.MESSAGE,b=>{var x;if(!p){const ot=b.data[0];V(!!ot);const at=ot,ct=at.error||((x=at[0])===null||x===void 0?void 0:x.error);if(ct){v(G,`RPC '${t}' stream ${r} received error:`,ct);const Tt=ct.status;let _t=function(Gn){const xr=M[Gn];if(xr!==void 0)return Ea(xr)}(Tt),de=ct.message;_t===void 0&&(_t=f.INTERNAL,de="Unknown error status: "+Tt+" with message "+ct.message),p=!0,g.oo(new E(_t,de)),h.close()}else v(G,`RPC '${t}' stream ${r} received:`,ot),g.uo(ot)}}),S(a,Bh.STAT_EVENT,b=>{b.stat===Zr.PROXY?v(G,`RPC '${t}' stream ${r} detected buffering proxy`):b.stat===Zr.NOPROXY&&v(G,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.ro()},0),g}}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){return new ql(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n,s,r,i,o,a,c){this.Ys=t,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Oa(t,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{t(()=>{const r=new E(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xd extends Rd{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.ko.reset();const n=Ql(this.Tt,t),s=function(r){if(!("targetChange"in r))return I.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?I.min():i.readTime?Wt(i.readTime):I.min()}(t);return this.listener.Ho(n,s)}Jo(t){const n={};n.database=vi(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Os(a)?{documents:Wl(r,a)}:{query:Xl(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Hl(r,i.resumeToken):i.snapshotVersion.compareTo(I.min())>0&&(o.readTime=Kl(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,t);const s=Jl(this.Tt,t);s&&(n.labels=s),this.qo(n)}Yo(t){const n={};n.database=vi(this.Tt),n.removeTarget=t,this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(f.UNKNOWN,r.toString())})}mo(t,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class Od{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(wt(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{He(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.mu.add(4),await Ke(c),c.pu.set("Unknown"),c.mu.delete(4),await Hn(c)}(this))})}),this.pu=new Od(s,r)}}async function Hn(e){if(He(e))for(const t of e.gu)await t(!0)}async function Ke(e){for(const t of e.gu)await t(!1)}function Fa(e,t){const n=N(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),Dr(n)?Ar(n):he(n).Mo()&&br(n,t))}function Ma(e,t){const n=N(e),s=he(n);n.wu.delete(t),s.Mo()&&Pa(n,t),n.wu.size===0&&(s.Mo()?s.Bo():He(n)&&n.pu.set("Unknown"))}function br(e,t){e.Iu.Ot(t.targetId),he(e).Jo(t)}function Pa(e,t){e.Iu.Ot(t),he(e).Yo(t)}function Ar(e){e.Iu=new $l({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),he(e).start(),e.pu.au()}function Dr(e){return He(e)&&!he(e).$o()&&e.wu.size>0}function He(e){return N(e).mu.size===0}function Va(e){e.Iu=void 0}async function Md(e){e.wu.forEach((t,n)=>{br(e,t)})}async function Pd(e,t){Va(e),Dr(e)?(e.pu.fu(t),Ar(e)):e.pu.set("Unknown")}async function Vd(e,t,n){if(e.pu.set("Online"),t instanceof ba&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ii(e,s)}else if(t instanceof sn?e.Iu.Qt(t):t instanceof Sa?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(I.min()))try{const s=await xa(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),Pa(r,a);const u=new Vt(c.target,a,1,c.sequenceNumber);br(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Ii(e,s)}}async function Ii(e,t,n){if(!je(t))throw t;e.mu.add(1),await Ke(e),e.pu.set("Offline"),n||(n=()=>xa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await Hn(e)})}async function Ci(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=He(n);n.mu.add(3),await Ke(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await Hn(n)}async function $d(e,t){const n=N(e);t?(n.mu.delete(2),await Hn(n)):t||(n.mu.add(2),await Ke(n),n.pu.set("Unknown"))}function he(e){return e.Tu||(e.Tu=function(t,n,s){const r=N(t);return r.ru(),new xd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(e.datastore,e.asyncQueue,{Xr:Md.bind(null,e),no:Pd.bind(null,e),Ho:Vd.bind(null,e)}),e.gu.push(async t=>{t?(e.Tu.Fo(),Dr(e)?Ar(e):e.pu.set("Unknown")):(await e.Tu.stop(),Va(e))})),e.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Nr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(e,t){if(wt("AsyncQueue",`${t}: ${e}`),je(e))return new E(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=me(),this.sortedSet=new H(this.comparator)}static emptySet(t){return new Xt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Xt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.Au=new H(w.comparator)}track(t){const n=t.doc.key,s=this.Au.get(n);s?t.type!==0&&s.type===3?this.Au=this.Au.insert(n,t):t.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Au=this.Au.remove(n):t.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):C():this.Au=this.Au.insert(n,t)}Ru(){const t=[];return this.Au.inorderTraversal((n,s)=>{t.push(s)}),t}}class re{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new re(t,n,Xt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Un(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.Pu=void 0,this.listeners=[]}}class Bd{constructor(){this.queries=new ue(t=>fa(t),Un),this.onlineState="Unknown",this.vu=new Set}}async function jd(e,t){const n=N(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Ud),r)try{i.Pu=await n.onListen(s)}catch(o){const a=$a(o,`Initialization of query '${Ms(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Pu&&t.Vu(i.Pu)&&kr(n)}async function qd(e,t){const n=N(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Kd(e,t){const n=N(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&kr(n)}function Hd(e,t,n){const s=N(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function kr(e){e.vu.forEach(t=>{t.next()})}class zd{constructor(t,n,s){this.query=t,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new re(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Du?this.xu(t)&&(this.Su.next(t),n=!0):this.Nu(t,this.onlineState)&&(this.ku(t),n=!0),this.Cu=t,n}onError(t){this.Su.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),n=!0),n}Nu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}xu(t){if(t.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(t){t=re.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class Gd{constructor(t,n){this.query=t,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=D(),this.mutatedKeys=D(),this.ju=pa(t),this.zu=new Xt(this.ju)}get Wu(){return this.Ku}Hu(t,n){const s=n?n.Ju:new Si,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,d)=>{const p=r.get(h),g=Bn(this.query,d)?d:null,S=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?S!==b&&(s.track({type:3,doc:g}),x=!0):this.Yu(p,g)||(s.track({type:2,doc:g}),x=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),x=!0):p&&!g&&(s.track({type:1,doc:p}),x=!0,(c||u)&&(a=!0)),x&&(g?(o=o.add(g),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const i=t.Ju.Ru();i.sort((u,h)=>function(d,p){const g=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return g(d)-g(p)}(u.type,h.type)||this.ju(u.doc,h.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new re(this.query,t.zu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Si,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=D(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return t.forEach(s=>{this.Qu.has(s)||n.push(new Ba(s))}),this.Qu.forEach(s=>{t.has(s)||n.push(new Ua(s))}),n}nc(t){this.Ku=t.Yi,this.Qu=D();const n=this.Hu(t.documents);return this.applyChanges(n,!0)}sc(){return re.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Qd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Wd{constructor(t){this.key=t,this.ic=!1}}class Xd{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ue(a=>fa(a),Un),this.uc=new Map,this.cc=new Set,this.ac=new H(w.comparator),this.hc=new Map,this.lc=new Ir,this.fc={},this.dc=new Map,this._c=se.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Yd(e,t){const n=rf(e);let s,r;const i=n.oc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Sd(n.localStore,Et(t));n.isPrimaryClient&&Fa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Jd(n,t,s,a==="current",o.resumeToken)}return r}async function Jd(e,t,n,s,r){e.mc=(d,p,g)=>async function(S,b,x,ot){let at=b.view.Hu(x);at.Li&&(at=await wi(S.localStore,b.query,!1).then(({documents:_t})=>b.view.Hu(_t,at)));const ct=ot&&ot.targetChanges.get(b.targetId),Tt=b.view.applyChanges(at,S.isPrimaryClient,ct);return Ai(S,b.targetId,Tt.tc),Tt.snapshot}(e,d,p,g);const i=await wi(e.localStore,t,!0),o=new Gd(t,i.Yi),a=o.Hu(i.documents),c=qe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Ai(e,n,u.tc);const h=new Qd(t,n,o);return e.oc.set(t,h),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function Zd(e,t){const n=N(e),s=n.oc.get(t),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Un(i,t))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Us(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ma(n.remoteStore,s.targetId),Bs(n,s.targetId)}).catch(gr)):(Bs(n,s.targetId),await Us(n.localStore,s.targetId,!0))}async function ja(e,t){const n=N(e);try{const s=await Id(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(V(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?V(o.ic):r.removedDocuments.size>0&&(V(o.ic),o.ic=!1))}),await Ka(n,s,t)}catch(s){await gr(s)}}function bi(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=N(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.bu(o)&&(c=!0)}),c&&kr(a)}(s.eventManager,t),r.length&&s.rc.Ho(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function tf(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.hc.get(t),i=r&&r.key;if(i){let o=new H(w.comparator);o=o.insert(i,W.newNoDocument(i,I.min()));const a=D().add(i),c=new Kn(I.min(),new Map,new U(_),o,a);await ja(s,c),s.ac=s.ac.remove(i),s.hc.delete(t),_r(s)}else await Us(s.localStore,t,!1).then(()=>Bs(s,t,n)).catch(gr)}function Bs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.uc.get(t))e.oc.delete(s),n&&e.rc.gc(s,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(s=>{e.lc.containsKey(s)||qa(e,s)})}function qa(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);n!==null&&(Ma(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),_r(e))}function Ai(e,t,n){for(const s of n)s instanceof Ua?(e.lc.addReference(s.key,t),ef(e,s)):s instanceof Ba?(v("SyncEngine","Document no longer in limbo: "+s.key),e.lc.removeReference(s.key,t),e.lc.containsKey(s.key)||qa(e,s.key)):C()}function ef(e,t){const n=t.key,s=n.path.canonicalString();e.ac.get(n)||e.cc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.cc.add(s),_r(e))}function _r(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new w(O.fromString(t)),s=e._c.next();e.hc.set(s,new Wd(n)),e.ac=e.ac.insert(n,s),Fa(e.remoteStore,new Vt(Et(da(n.path)),s,2,mr.at))}}async function Ka(e,t,n){const s=N(e),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Sr.Ni(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>l.forEach(c,d=>l.forEach(d.Ci,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>l.forEach(d.xi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!je(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.Ki.get(d),g=p.snapshotVersion,S=p.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(d,S)}}}(s.localStore,i))}async function nf(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await Ra(n.localStore,t);n.currentUser=t,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new E(f.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ka(n,s.Wi)}}function sf(e,t){const n=N(e),s=n.hc.get(t);if(s&&s.ic)return D().add(s.key);{let r=D();const i=n.uc.get(t);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function rf(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ja.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tf.bind(null,t),t.rc.Ho=Kd.bind(null,t.eventManager),t.rc.gc=Hd.bind(null,t.eventManager),t}class of{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=La(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return Td(this.persistence,new wd,t.initialUser,this.Tt)}Tc(t){return new yd(Cr.qs,this.Tt)}Ic(t){return new Ad}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class af{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nf.bind(null,this.syncEngine),await $d(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bd}createDatastore(t){const n=La(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new _d(r));var r;return function(i,o,a,c){return new Ld(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>bi(this.syncEngine,a,0),o=Ti.C()?new Ti:new Dd,new Fd(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new Xd(s,r,i,o,a,c);return u&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ke(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):wt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Q.UNAUTHENTICATED,this.clientId=Jh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=$a(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function hf(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ra(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function lf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await df(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Ci(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Ci(t.remoteStore,i)),e.onlineComponents=t}async function df(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await hf(e,new of)),e.offlineComponents}async function ff(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await lf(e,new af)),e.onlineComponents}async function pf(e){const t=await ff(e),n=t.eventManager;return n.onListen=Yd.bind(null,t.syncEngine),n.onUnlisten=Zd.bind(null,t.syncEngine),n}function gf(e,t,n={}){const s=new Mt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new cf({next:d=>{i.enqueueAndForget(()=>qd(r,h)),d.fromCache&&a.source==="server"?c.reject(new E(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new zd(o,u,{includeMetadataChanges:!0,$u:!0});return jd(r,h)}(await pf(e),e.asyncQueue,t,n,s)),s.promise}const Di=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(e,t,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yf(e,t,n,s){if(t===!0&&s===!0)throw new E(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ni(e){if(w.isDocumentKey(e))throw new E(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":C()}function js(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(e);throw new E(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,yf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ki({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ki(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kh;switch(n.type){case"gapi":const s=n.client;return new Qh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Di.get(t);n&&(v("ComponentProvider","Removing Datastore"),Di.delete(t),n.terminate())}(this),Promise.resolve()}}function wf(e,t,n,s={}){var r;const i=(e=js(e,Rr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&ks("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Q.MOCK_USER;else{o=Dc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new E(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Q(c)}e._authCredentials=new Hh(new sa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new le(this.firestore,t,this._key)}}class zn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class Yt extends zn{constructor(t,n,s){super(t,n,da(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new le(this.firestore,null,new w(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function Ef(e,t,...n){if(e=Lc(e),mf("collection","path",t),e instanceof Rr){const s=O.fromString(t,...n);return Ni(s),new Yt(e,null,s)}{if(!(e instanceof le||e instanceof Yt))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Ni(s),new Yt(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Oa(this,"async_queue_retry"),this.Hc=()=>{const n=us();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Mt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!je(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const r=Nr.createAndSchedule(this,t,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&C()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class Ha extends Rr{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Tf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||za(this),this._firestoreClient.terminate()}}function If(e,t){const n=typeof e=="object"?e:xu(),s=typeof e=="string"?e:t||"(default)",r=Nu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Sc("firestore");i&&wf(r,...i)}return r}function Cf(e){return e._firestoreClient||za(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function za(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new il(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new uf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tn(J.fromBase64String(t))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Tn(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}const bf=new RegExp("[~\\*/\\[\\]]");function Af(e,t,n){if(t.search(bf)>=0)throw _i(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ga(...t.split("."))._internalPath}catch{throw _i(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _i(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new E(f.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Df(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Wa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Df extends Qa{data(){return super.data()}}function Wa(e,t){return typeof t=="string"?Af(e,t):t instanceof Ga?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new E(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{convertValue(t,n="none"){switch(Bt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return P(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw C()}}convertObject(t,n){const s={};return Pn(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Sf(P(t.latitude),P(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ia(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Re(t));default:return null}}convertTimestamp(t){const n=At(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);V(_a(s));const r=new _e(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _f extends Qa{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new rn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Wa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class rn extends _f{data(t={}){return super.data(t)}}class Rf{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new tn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new rn(this._firestore,this._userDataWriter,s.key,s,new tn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new rn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new rn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:xf(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}class Lf extends kf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new le(this.firestore,null,n)}}function Of(e){e=js(e,zn);const t=js(e.firestore,Ha),n=Cf(t),s=new Lf(t);return Nf(e._query),gf(n,e._query).then(r=>new Rf(t,s,e,r))}(function(e,t=!0){(function(n){ce=n})(Ru),un(new Ie("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ha(new zh(n.getProvider("auth-internal")),new Xh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _e(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Gt(ti,"3.9.0",e),Gt(ti,"3.9.0","esm2017")})();var Ff="firebase",Mf="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(Ff,Mf,"app");const Pf={apiKey:"AIzaSyCYn_w6wgnbkFFFIHsNBXd_35SWbwkNbFM",authDomain:"proxymarket-backend.firebaseapp.com",projectId:"proxymarket-backend",storageBucket:"proxymarket-backend.appspot.com",messagingSenderId:"528006668831",appId:"1:528006668831:web:a235498cfd0ecd60d5eb2a"},Vf=Yi(Pf),$f=If(Vf);function Uf(){const{cartState:e,cartDispatch:t,priceListState:n,priceListDispatch:s}=Ya(),[r,i]=R.useState(!0);return R.useEffect(()=>{Of(Ef($f,"priceList")).then(o=>{s({type:"INIT",payload:o}),i(!1)}).catch(o=>console.error(o))},[]),Z(hs,{children:[m("h1",{children:"Купить прокси:"}),Z(ze,{children:[m(ze.Header,{children:m("h3",{children:"Онлайн калькулятор"})}),m(ze.Body,{children:r?Z(hs,{children:[Z(gt,{as:en,animation:"wave",children:[m(gt,{as:rt,className:"m-3",xs:2}),m(gt,{as:rt,className:"m-3"}),m(gt,{as:rt,className:"m-3"})]}),Z(gt,{as:en,animation:"wave",style:{height:"50px"},children:[m(gt,{as:rt,className:"m-3"}),m(gt,{as:rt,className:"m-3"}),m(gt,{as:rt,className:"m-3"})]})]}):m(pc,{action:t,state:e,priceList:n})}),m(Ja,{in:e.total>0,children:m(ze.Footer,{children:Z(en,{className:"align-items-center",children:[m(rt,{children:m("h3",{children:"Сумма к оплате:"})}),m(rt,{children:m("h3",{className:"text-end",children:Intl.NumberFormat(navigator.language,{style:"currency",currency:"RUB"}).format(e.total)})}),m(rt,{children:r?m(gt.Button,{xs:12,animation:"wave",style:{height:"35px"}}):m(Za,{to:e.time===""?"javascript:void(0)":"/cart",children:m(tc,{size:"lg",style:{width:"100%"},disabled:e.time==="",children:"Оформить заказ:"})})})]})})})]})]})}Uf.displayName="Product";export{Uf as Component};
