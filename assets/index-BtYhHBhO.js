(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function x(){return[{n:1,t:"Badge",foil:!0},{n:2,t:"Player",foil:!1},{n:3,t:"Player",foil:!1},{n:4,t:"Player",foil:!1},{n:5,t:"Player",foil:!1},{n:6,t:"Player",foil:!1},{n:7,t:"Player",foil:!1},{n:8,t:"Player",foil:!1},{n:9,t:"Player",foil:!1},{n:10,t:"Player",foil:!1},{n:11,t:"Player",foil:!1},{n:12,t:"Player",foil:!1},{n:13,t:"Photo",foil:!1},{n:14,t:"Player",foil:!1},{n:15,t:"Player",foil:!1},{n:16,t:"Player",foil:!1},{n:17,t:"Player",foil:!1},{n:18,t:"Player",foil:!1},{n:19,t:"Player",foil:!1},{n:20,t:"Player",foil:!1}]}const jd=[{code:"INT",name:"Introduction",flag:"🏆",stickers:[{n:1,t:"Logo",foil:!0},{n:2,t:"Trophy",foil:!0,img:"https://upload.wikimedia.org/wikipedia/en/e/e3/2026_FIFA_World_Cup.png"},{n:3,t:"Mascot",foil:!0},{n:4,t:"Emblem",foil:!0},{n:5,t:"USA Host",foil:!1},{n:6,t:"Canada Host",foil:!1},{n:7,t:"Mexico Host",foil:!1},{n:8,t:"Intro",foil:!1},{n:9,t:"Intro",foil:!1}]},{code:"FWC",name:"World Cup History",flag:"🏆",stickers:Array.from({length:19},(n,e)=>({n:e+1,t:"History",foil:e<3}))},{code:"ALG",name:"Algeria",flag:"🇩🇿",stickers:x()},{code:"ARG",name:"Argentina",flag:"🇦🇷",stickers:x()},{code:"AUS",name:"Australia",flag:"🇦🇺",stickers:x()},{code:"AUT",name:"Austria",flag:"🇦🇹",stickers:x()},{code:"BEL",name:"Belgium",flag:"🇧🇪",stickers:x()},{code:"BIH",name:"Bosnia-Herzegovina",flag:"🇧🇦",stickers:x()},{code:"BRA",name:"Brazil",flag:"🇧🇷",stickers:x()},{code:"CAN",name:"Canada",flag:"🇨🇦",stickers:x()},{code:"CIV",name:"Côte d'Ivoire",flag:"🇨🇮",stickers:x()},{code:"COD",name:"DR Congo",flag:"🇨🇩",stickers:x()},{code:"COL",name:"Colombia",flag:"🇨🇴",stickers:x()},{code:"CPV",name:"Cape Verde",flag:"🇨🇻",stickers:x()},{code:"CRO",name:"Croatia",flag:"🇭🇷",stickers:x()},{code:"CUW",name:"Curaçao",flag:"🇨🇼",stickers:x()},{code:"CZE",name:"Czechia",flag:"🇨🇿",stickers:x()},{code:"ECU",name:"Ecuador",flag:"🇪🇨",stickers:x()},{code:"EGY",name:"Egypt",flag:"🇪🇬",stickers:x()},{code:"ENG",name:"England",flag:"�🇧",stickers:x()},{code:"ESP",name:"Spain",flag:"🇪🇸",stickers:x()},{code:"FRA",name:"France",flag:"🇫🇷",stickers:x()},{code:"GER",name:"Germany",flag:"🇩🇪",stickers:x()},{code:"GHA",name:"Ghana",flag:"🇬🇭",stickers:x()},{code:"HAI",name:"Haiti",flag:"🇭🇹",stickers:x()},{code:"IRN",name:"Iran",flag:"🇮🇷",stickers:x()},{code:"IRQ",name:"Iraq",flag:"🇮🇶",stickers:x()},{code:"JOR",name:"Jordan",flag:"🇯🇴",stickers:x()},{code:"JPN",name:"Japan",flag:"🇯🇵",stickers:x()},{code:"KOR",name:"South Korea",flag:"🇰🇷",stickers:x()},{code:"KSA",name:"Saudi Arabia",flag:"🇸🇦",stickers:x()},{code:"MAR",name:"Morocco",flag:"🇲🇦",stickers:x()},{code:"MEX",name:"Mexico",flag:"🇲🇽",stickers:x()},{code:"NED",name:"Netherlands",flag:"🇳🇱",stickers:x()},{code:"NOR",name:"Norway",flag:"🇳🇴",stickers:x()},{code:"NZL",name:"New Zealand",flag:"🇳🇿",stickers:x()},{code:"PAN",name:"Panama",flag:"🇵🇦",stickers:x()},{code:"PAR",name:"Paraguay",flag:"🇵🇾",stickers:x()},{code:"POR",name:"Portugal",flag:"🇵🇹",stickers:x()},{code:"QAT",name:"Qatar",flag:"🇶🇦",stickers:x()},{code:"RSA",name:"South Africa",flag:"🇿🇦",stickers:x()},{code:"SCO",name:"Scotland",flag:"�🇧",stickers:x()},{code:"SEN",name:"Senegal",flag:"🇸🇳",stickers:x()},{code:"SUI",name:"Switzerland",flag:"🇨🇭",stickers:x()},{code:"SWE",name:"Sweden",flag:"🇸🇪",stickers:x()},{code:"TUN",name:"Tunisia",flag:"🇹🇳",stickers:x()},{code:"TUR",name:"Turkey",flag:"🇹🇷",stickers:x()},{code:"URU",name:"Uruguay",flag:"🇺🇾",stickers:x()},{code:"USA",name:"United States",flag:"🇺🇸",stickers:x()},{code:"UZB",name:"Uzbekistan",flag:"🇺🇿",stickers:x()}],rs=980,Dl={Special:["INT","FWC"],A:["MEX","RSA","KOR","CZE"],B:["CAN","BIH","QAT","SUI"],C:["BRA","MAR","HAI","SCO"],D:["USA","PAR","AUS","TUR"],E:["GER","CUW","CIV","ECU"],F:["NED","JPN","SWE","TUN"],G:["BEL","EGY","IRN","NZL"],H:["ESP","CPV","KSA","URU"],I:["FRA","SEN","IRQ","NOR"],J:["ARG","ALG","AUT","JOR"],K:["POR","COD","UZB","COL"],L:["ENG","CRO","GHA","PAN"]},Ol="wc2026_stickers",Ll="wc2026_pro",Ml="wc2026_tutorials";function Gd(){try{const n=localStorage.getItem(Ol);return n?JSON.parse(n):{}}catch{return{}}}function er(n){try{localStorage.setItem(Ol,JSON.stringify(n))}catch{}}function Ut(n,e,t=null){return t?`${n}_${e}_${t}`:`${n}_${e}`}function zd(){try{const n=localStorage.getItem(Ml);return n?JSON.parse(n):{stickers:!1,schedule:!1,pro:!1}}catch{return{stickers:!1,schedule:!1,pro:!1}}}function to(n){try{localStorage.setItem(Ml,JSON.stringify(n))}catch{}}function Hd(){try{const n=localStorage.getItem(Ll);return n?JSON.parse(n):{purchased:!1,purchaseDate:null}}catch{return{purchased:!1,purchaseDate:null}}}function xl(n){try{localStorage.setItem(Ll,JSON.stringify(n))}catch{}}const Wd=[{date:"2026-06-11T19:00:00Z",home:"MEX",away:"RSA",stage:"Group A"},{date:"2026-06-12T02:00:00Z",home:"CZE",away:"KOR",stage:"Group A"},{date:"2026-06-12T19:00:00Z",home:"CAN",away:"BIH",stage:"Group B"},{date:"2026-06-13T01:00:00Z",home:"USA",away:"PAR",stage:"Group D"},{date:"2026-06-13T01:00:00Z",home:"HAI",away:"SCO",stage:"Group C"},{date:"2026-06-13T04:00:00Z",home:"AUS",away:"TUR",stage:"Group D"},{date:"2026-06-13T22:00:00Z",home:"BRA",away:"MAR",stage:"Group C"},{date:"2026-06-13T19:00:00Z",home:"QAT",away:"SUI",stage:"Group B"},{date:"2026-06-13T23:00:00Z",home:"CIV",away:"ECU",stage:"Group E"},{date:"2026-06-13T17:00:00Z",home:"GER",away:"CUW",stage:"Group E"},{date:"2026-06-13T20:00:00Z",home:"NED",away:"JPN",stage:"Group F"},{date:"2026-06-14T02:00:00Z",home:"SWE",away:"TUN",stage:"Group F"},{date:"2026-06-14T22:00:00Z",home:"KSA",away:"URU",stage:"Group H"},{date:"2026-06-14T16:00:00Z",home:"ESP",away:"CPV",stage:"Group H"},{date:"2026-06-15T01:00:00Z",home:"IRN",away:"NZL",stage:"Group G"},{date:"2026-06-14T19:00:00Z",home:"BEL",away:"EGY",stage:"Group G"},{date:"2026-06-16T19:00:00Z",home:"FRA",away:"SEN",stage:"Group I"},{date:"2026-06-16T22:00:00Z",home:"IRQ",away:"NOR",stage:"Group I"},{date:"2026-06-17T01:00:00Z",home:"ARG",away:"ALG",stage:"Group J"},{date:"2026-06-17T04:00:00Z",home:"AUT",away:"JOR",stage:"Group J"},{date:"2026-06-17T23:00:00Z",home:"GHA",away:"PAN",stage:"Group L"},{date:"2026-06-17T20:00:00Z",home:"ENG",away:"CRO",stage:"Group L"},{date:"2026-06-17T17:00:00Z",home:"POR",away:"COD",stage:"Group K"},{date:"2026-06-18T02:00:00Z",home:"UZB",away:"COL",stage:"Group K"},{date:"2026-06-19T16:00:00Z",home:"CZE",away:"RSA",stage:"Group A"},{date:"2026-06-19T19:00:00Z",home:"SUI",away:"BIH",stage:"Group B"},{date:"2026-06-20T22:00:00Z",home:"CAN",away:"QAT",stage:"Group B"},{date:"2026-06-21T01:00:00Z",home:"MEX",away:"KOR",stage:"Group A"},{date:"2026-06-22T00:30:00Z",home:"BRA",away:"HAI",stage:"Group C"},{date:"2026-06-22T22:00:00Z",home:"SCO",away:"MAR",stage:"Group C"},{date:"2026-06-23T03:00:00Z",home:"USA",away:"AUS",stage:"Group D"},{date:"2026-06-23T19:00:00Z",home:"PAR",away:"AUS",stage:"Group D"},{date:"2026-06-23T20:00:00Z",home:"GER",away:"CIV",stage:"Group E"},{date:"2026-06-24T00:00:00Z",home:"ECU",away:"CUW",stage:"Group E"},{date:"2026-06-24T17:00:00Z",home:"NED",away:"SWE",stage:"Group F"},{date:"2026-06-24T04:00:00Z",home:"TUN",away:"JPN",stage:"Group F"},{date:"2026-06-24T22:00:00Z",home:"ESP",away:"KSA",stage:"Group H"},{date:"2026-06-24T16:00:00Z",home:"ESP",away:"URU",stage:"Group H"},{date:"2026-06-24T19:00:00Z",home:"BEL",away:"NZL",stage:"Group G"},{date:"2026-06-25T01:00:00Z",home:"IRN",away:"EGY",stage:"Group G"},{date:"2026-06-25T21:00:00Z",home:"FRA",away:"NOR",stage:"Group I"},{date:"2026-06-25T20:00:00Z",home:"SEN",away:"IRQ",stage:"Group I"},{date:"2026-06-26T01:00:00Z",home:"ARG",away:"AUT",stage:"Group J"},{date:"2026-06-26T17:00:00Z",home:"JOR",away:"ALG",stage:"Group J"},{date:"2026-06-27T00:00:00Z",home:"PAN",away:"ENG",stage:"Group L"},{date:"2026-06-26T23:00:00Z",home:"CRO",away:"GHA",stage:"Group L"},{date:"2026-06-27T21:30:00Z",home:"COL",away:"POR",stage:"Group K"},{date:"2026-06-27T23:30:00Z",home:"UZB",away:"COD",stage:"Group K"},{date:"2026-06-28T23:00:00Z",home:"RSA",away:"MEX",stage:"Group A"},{date:"2026-06-28T23:00:00Z",home:"KOR",away:"CZE",stage:"Group A"},{date:"2026-06-29T23:00:00Z",home:"BIH",away:"CAN",stage:"Group B"},{date:"2026-06-29T23:00:00Z",home:"SUI",away:"QAT",stage:"Group B"},{date:"2026-06-29T23:00:00Z",home:"MAR",away:"BRA",stage:"Group C"},{date:"2026-06-29T23:00:00Z",home:"SCO",away:"HAI",stage:"Group C"},{date:"2026-06-30T23:00:00Z",home:"PAR",away:"USA",stage:"Group D"},{date:"2026-06-30T23:00:00Z",home:"TUR",away:"AUS",stage:"Group D"},{date:"2026-07-01T23:00:00Z",home:"CUW",away:"GER",stage:"Group E"},{date:"2026-07-01T23:00:00Z",home:"ECU",away:"CIV",stage:"Group E"},{date:"2026-07-02T23:00:00Z",home:"JPN",away:"NED",stage:"Group F"},{date:"2026-07-02T23:00:00Z",home:"TUN",away:"SWE",stage:"Group F"},{date:"2026-07-03T23:00:00Z",home:"EGY",away:"BEL",stage:"Group G"},{date:"2026-07-03T23:00:00Z",home:"NZL",away:"IRN",stage:"Group G"},{date:"2026-07-04T23:00:00Z",home:"CPV",away:"ESP",stage:"Group H"},{date:"2026-07-04T23:00:00Z",home:"URU",away:"KSA",stage:"Group H"},{date:"2026-07-05T23:00:00Z",home:"SEN",away:"FRA",stage:"Group I"},{date:"2026-07-05T23:00:00Z",home:"NOR",away:"IRQ",stage:"Group I"},{date:"2026-07-06T23:00:00Z",home:"ALG",away:"ARG",stage:"Group J"},{date:"2026-07-06T23:00:00Z",home:"JOR",away:"AUT",stage:"Group J"},{date:"2026-07-07T23:30:00Z",home:"COD",away:"POR",stage:"Group K"},{date:"2026-07-07T23:30:00Z",home:"COL",away:"UZB",stage:"Group K"},{date:"2026-07-08T23:00:00Z",home:"CRO",away:"ENG",stage:"Group L"},{date:"2026-07-08T23:00:00Z",home:"PAN",away:"GHA",stage:"Group L"}],tc={MEX:"Mexico",RSA:"South Africa",KOR:"South Korea",CZE:"Czechia",CAN:"Canada",BIH:"Bosnia-Herz.",QAT:"Qatar",SUI:"Switzerland",BRA:"Brazil",MAR:"Morocco",HAI:"Haiti",SCO:"Scotland",USA:"United States",PAR:"Paraguay",AUS:"Australia",TUR:"Turkey",GER:"Germany",CUW:"Curaçao",CIV:"Côte d'Ivoire",ECU:"Ecuador",NED:"Netherlands",JPN:"Japan",SWE:"Sweden",TUN:"Tunisia",BEL:"Belgium",EGY:"Egypt",IRN:"Iran",NZL:"New Zealand",ESP:"Spain",CPV:"Cape Verde",KSA:"Saudi Arabia",URU:"Uruguay",FRA:"France",SEN:"Senegal",IRQ:"Iraq",NOR:"Norway",ARG:"Argentina",ALG:"Algeria",AUT:"Austria",JOR:"Jordan",POR:"Portugal",COD:"DR Congo",UZB:"Uzbekistan",COL:"Colombia",ENG:"England",CRO:"Croatia",GHA:"Ghana",PAN:"Panama"},Kd={MEX:"mx",RSA:"za",KOR:"kr",CZE:"cz",CAN:"ca",BIH:"ba",QAT:"qa",SUI:"ch",BRA:"br",MAR:"ma",HAI:"ht",SCO:"gb-sct",USA:"us",PAR:"py",AUS:"au",TUR:"tr",GER:"de",CUW:"cw",CIV:"ci",ECU:"ec",NED:"nl",JPN:"jp",SWE:"se",TUN:"tn",BEL:"be",EGY:"eg",IRN:"ir",NZL:"nz",ESP:"es",CPV:"cv",KSA:"sa",URU:"uy",FRA:"fr",SEN:"sn",IRQ:"iq",NOR:"no",ARG:"ar",ALG:"dz",AUT:"at",JOR:"jo",POR:"pt",COD:"cd",UZB:"uz",COL:"co",ENG:"gb-eng",CRO:"hr",GHA:"gh",PAN:"pa"};function ss(n,e=40){const t=Kd[n];if(!t)return"";const r=e<=20?20:40,s=r*2;return`<img src="https://flagcdn.com/w${r}/${t}.png" srcset="https://flagcdn.com/w${s}/${t}.png 2x" width="${r}" alt="${n} flag" class="flag-img" loading="lazy" />`}const Qd=()=>{};var nc={};/**
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
 */const Ul=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,p=(o&3)<<4|l>>4;let I=(l&15)<<2|d>>6,R=d&63;h||(R=64,a||(I=64)),r.push(t[m],t[p],t[I],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ul(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||p==null)throw new Zd;const I=o<<2|l>>4;if(r.push(I),d!==64){const R=l<<4&240|d>>2;if(r.push(R),p!==64){const k=d<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xd=function(n){const e=Ul(n);return Fl.encodeByteArray(e,!0)},is=function(n){return Xd(n).replace(/\./g,"")},Bl=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ef=()=>Yd().__FIREBASE_DEFAULTS__,tf=()=>{if(typeof process>"u"||typeof nc>"u")return;const n=nc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bl(n[1]);return e&&JSON.parse(e)},Ps=()=>{try{return Qd()||ef()||tf()||nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>{var e,t;return(t=(e=Ps())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},rf=n=>{const e=ql(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},$l=()=>{var n;return(n=Ps())==null?void 0:n.config},jl=n=>{var e;return(e=Ps())==null?void 0:e[`_${n}`]};/**
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
 */class sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[is(JSON.stringify(t)),is(JSON.stringify(a)),""].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function cf(){var e;const n=(e=Ps())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function df(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ff(){return!cf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mf(){try{return typeof indexedDB=="object"}catch{return!1}}function pf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const gf="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?_f(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ot(s,l,r)}}function _f(n,e){return n.replace(yf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yf=/\{\$([^}]+)}/g;function Ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(rc(o)&&rc(a)){if(!zt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rc(n){return n!==null&&typeof n=="object"}/**
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
 */function dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vf(n,e){const t=new Tf(n,e);return t.subscribe.bind(t)}class Tf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");If(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function If(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yi(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gl(n){return(await fetch(n,{credentials:"include"})).ok}class Ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class wf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sf(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Af(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Af(n){return n===xt?void 0:n}function Sf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const bf={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Pf=z.INFO,Cf={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},kf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Cf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class no{constructor(e){this.name=e,this._logLevel=Pf,this._logHandler=kf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Vf=(n,e)=>e.some(t=>n instanceof t);let sc,ic;function Nf(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Df(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,Vi=new WeakMap,Hl=new WeakMap,Ei=new WeakMap,ro=new WeakMap;function Of(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&zl.set(t,n)}).catch(()=>{}),ro.set(e,n),e}function Lf(n){if(Vi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Vi.set(n,e)}let Ni={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Mf(n){Ni=n(Ni)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vi(this),e,...t);return Hl.set(r,e.sort?e.sort():[e]),yt(r)}:Df().includes(n)?function(...e){return n.apply(vi(this),e),yt(zl.get(this))}:function(...e){return yt(n.apply(vi(this),e))}}function Uf(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Lf(n),Vf(n,Nf())?new Proxy(n,Ni):n)}function yt(n){if(n instanceof IDBRequest)return Of(n);if(Ei.has(n))return Ei.get(n);const e=Uf(n);return e!==n&&(Ei.set(n,e),ro.set(e,n)),e}const vi=n=>ro.get(n);function Ff(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(yt(a.result),h.oldVersion,h.newVersion,yt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Bf=["get","getKey","getAll","getAllKeys","count"],qf=["put","add","delete","clear"],Ti=new Map;function oc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bf.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&h.done]))[0]};return Ti.set(e,o),o}Mf(n=>({...n,get:(e,t,r)=>oc(e,t)||n.get(e,t,r),has:(e,t)=>!!oc(e,t)||n.has(e,t)}));/**
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
 */class $f{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Di="@firebase/app",ac="0.14.13";/**
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
 */const nt=new no("@firebase/app"),Gf="@firebase/app-compat",zf="@firebase/analytics-compat",Hf="@firebase/analytics",Wf="@firebase/app-check-compat",Kf="@firebase/app-check",Qf="@firebase/auth",Jf="@firebase/auth-compat",Zf="@firebase/database",Xf="@firebase/data-connect",Yf="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",rm="@firebase/installations-compat",sm="@firebase/messaging",im="@firebase/messaging-compat",om="@firebase/performance",am="@firebase/performance-compat",cm="@firebase/remote-config",lm="@firebase/remote-config-compat",um="@firebase/storage",hm="@firebase/storage-compat",dm="@firebase/firestore",fm="@firebase/ai",mm="@firebase/firestore-compat",pm="firebase",gm="12.14.0";/**
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
 */const Oi="[DEFAULT]",_m={[Di]:"fire-core",[Gf]:"fire-core-compat",[Hf]:"fire-analytics",[zf]:"fire-analytics-compat",[Kf]:"fire-app-check",[Wf]:"fire-app-check-compat",[Qf]:"fire-auth",[Jf]:"fire-auth-compat",[Zf]:"fire-rtdb",[Xf]:"fire-data-connect",[Yf]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[rm]:"fire-iid-compat",[sm]:"fire-fcm",[im]:"fire-fcm-compat",[om]:"fire-perf",[am]:"fire-perf-compat",[cm]:"fire-rc",[lm]:"fire-rc-compat",[um]:"fire-gcs",[hm]:"fire-gcs-compat",[dm]:"fire-fst",[mm]:"fire-fst-compat",[fm]:"fire-vertex","fire-js":"fire-js",[pm]:"fire-js-all"};/**
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
 */const os=new Map,ym=new Map,Li=new Map;function cc(n,e){try{n.container.addComponent(e)}catch(t){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pn(n){const e=n.name;if(Li.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,n);for(const t of os.values())cc(t,n);for(const t of ym.values())cc(t,n);return!0}function so(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function De(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Em={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new hr("app","Firebase",Em);/**
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
 */class vm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=gm;function Wl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Oi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Et.create("bad-app-name",{appName:String(s)});if(t||(t=$l()),!t)throw Et.create("no-options");const o=os.get(s);if(o){if(zt(t,o.options)&&zt(r,o.config))return o;throw Et.create("duplicate-app",{appName:s})}const a=new Rf(s);for(const h of Li.values())a.addComponent(h);const l=new vm(t,r,a);return os.set(s,l),l}function Kl(n=Oi){const e=os.get(n);if(!e&&n===Oi&&$l())return Wl();if(!e)throw Et.create("no-app",{appName:n});return e}function vt(n,e,t){let r=_m[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(a.join(" "));return}pn(new Ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Tm="firebase-heartbeat-database",Im=1,tr="firebase-heartbeat-store";let Ii=null;function Ql(){return Ii||(Ii=Ff(Tm,Im,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Et.create("idb-open",{originalErrorMessage:n.message})})),Ii}async function wm(n){try{const t=(await Ql()).transaction(tr),r=await t.objectStore(tr).get(Jl(n));return await t.done,r}catch(e){if(e instanceof ot)nt.warn(e.message);else{const t=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nt.warn(t.message)}}}async function lc(n,e){try{const r=(await Ql()).transaction(tr,"readwrite");await r.objectStore(tr).put(e,Jl(n)),await r.done}catch(t){if(t instanceof ot)nt.warn(t.message);else{const r=Et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nt.warn(r.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Am=1024,Sm=30;class Rm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=uc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Sm){const a=Cm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uc(),{heartbeatsToSend:r,unsentEntries:s}=bm(this._heartbeatsCache.heartbeats),o=is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return nt.warn(t),""}}}function uc(){return new Date().toISOString().substring(0,10)}function bm(n,e=Am){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),hc(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mf()?pf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hc(n){return is(JSON.stringify({version:2,heartbeats:n})).length}function Cm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function km(n){pn(new Ht("platform-logger",e=>new $f(e),"PRIVATE")),pn(new Ht("heartbeat",e=>new Rm(e),"PRIVATE")),vt(Di,ac,n),vt(Di,ac,"esm2020"),vt("fire-js","")}km("");var Vm="firebase",Nm="12.14.0";/**
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
 */vt(Vm,Nm,"app");function Zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dm=Zl,Xl=new hr("auth","Firebase",Zl());/**
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
 */const as=new no("@firebase/auth");function Om(n,...e){as.logLevel<=z.WARN&&as.warn(`Auth (${Tn}): ${n}`,...e)}function Hr(n,...e){as.logLevel<=z.ERROR&&as.error(`Auth (${Tn}): ${n}`,...e)}/**
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
 */function We(n,...e){throw oo(n,...e)}function Me(n,...e){return oo(n,...e)}function io(n,e,t){const r={...Dm(),[e]:t};return new hr("auth","Firebase",r).create(e,{appName:n.name})}function $t(n){return io(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&We(n,"argument-error"),io(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xl.create(n,...e)}function U(n,e,...t){if(!n)throw oo(e,...t)}function Xe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hr(e),new Error(e)}function rt(n,e){n||Xe(e)}/**
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
 */function Mi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Mm(){return dc()==="http:"||dc()==="https:"}function dc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function xm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mm()||uf()||"connection"in navigator)?navigator.onLine:!0}function Um(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=af()||hf()}get(){return xm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ao(n,e){rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qm=new mr(3e4,6e4);function co(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function In(n,e,t,r,s={}){return eu(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=dr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return lf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&fr(n.emulatorConfig.host)&&(d.credentials="include"),Yl.fetch()(await tu(n,n.config.apiHost,t,l),d)})}async function eu(n,e,t){n._canInitEmulator=!1;const r={...Fm,...e};try{const s=new jm(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Fr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Fr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Fr(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw io(n,m,d);We(n,m)}}catch(s){if(s instanceof ot)throw s;We(n,"network-request-failed",{message:String(s)})}}async function $m(n,e,t,r,s={}){const o=await In(n,e,t,r,s);return"mfaPendingCredential"in o&&We(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function tu(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?ao(n.config,s):`${n.config.apiScheme}://${s}`;return Bm.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class jm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),qm.get())})}}function Fr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Me(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Gm(n,e){return In(n,"POST","/v1/accounts:delete",e)}async function cs(n,e){return In(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zm(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),s=lo(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Qn(wi(s.auth_time)),issuedAtTime:Qn(wi(s.iat)),expirationTime:Qn(wi(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function wi(n){return Number(n)*1e3}function lo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bl(t);return s?JSON.parse(s):(Hr("Failed to decode base64 JWT payload"),null)}catch(s){return Hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fc(n){const e=lo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&Hm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Hm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Wm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ls(n){var p;const e=n.auth,t=await n.getIdToken(),r=await nr(n,cs(e,{idToken:t}));U(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=(p=s.providerUserInfo)!=null&&p.length?nu(s.providerUserInfo):[],a=Qm(n.providerData,o),l=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Km(n){const e=Pe(n);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Jm(n,e){const t=await eu(n,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await tu(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&fr(n.emulatorConfig.host)&&(h.credentials="include"),Yl.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zm(n,e){return In(n,"POST","/v2/accounts:revokeToken",co(n,e))}/**
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
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=fc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Jm(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new ln;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(U(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
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
 */function ft(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Wm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await nr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zm(this,e)}reload(){return Km(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(De(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await nr(this,Gm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:I,isAnonymous:R,providerData:k,stsTokenManager:D}=t;U(p&&D,e,"internal-error");const N=ln.fromJSON(this.name,D);U(typeof p=="string",e,"internal-error"),ft(r,e.name),ft(s,e.name),U(typeof I=="boolean",e,"internal-error"),U(typeof R=="boolean",e,"internal-error"),ft(o,e.name),ft(a,e.name),ft(l,e.name),ft(h,e.name),ft(d,e.name),ft(m,e.name);const H=new Oe({uid:p,auth:e,email:s,emailVerified:I,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:N,createdAt:d,lastLoginAt:m});return k&&Array.isArray(k)&&(H.providerData=k.map(q=>({...q}))),h&&(H._redirectEventId=h),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new ln;s.updateFromServerResponse(t);const o=new Oe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ls(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?nu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new ln;l.updateFromIdToken(r);const h=new Oe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const mc=new Map;function Ye(n){rt(n instanceof Function,"Expected a class definition");let e=mc.get(n);return e?(rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mc.set(n,e),e)}/**
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
 */class ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ru.type="NONE";const pc=ru;/**
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
 */function Wr(n,e,t){return`firebase:${n}:${e}:${t}`}class un{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Wr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Wr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cs(this.auth,{idToken:e}).catch(()=>{});return t?Oe._fromGetAccountInfoResponse(this.auth,t,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new un(Ye(pc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Ye(pc);const a=Wr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let p;if(typeof m=="string"){const I=await cs(e,{idToken:m}).catch(()=>{});if(!I)break;p=await Oe._fromGetAccountInfoResponse(e,I,m)}else p=Oe._fromJSON(e,m);d!==o&&(l=p),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new un(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new un(o,e,r))}}/**
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
 */function gc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(au(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(su(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lu(e))return"Blackberry";if(uu(e))return"Webos";if(iu(e))return"Safari";if((e.includes("chrome/")||ou(e))&&!e.includes("edge/"))return"Chrome";if(cu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function su(n=Ie()){return/firefox\//i.test(n)}function iu(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ou(n=Ie()){return/crios\//i.test(n)}function au(n=Ie()){return/iemobile/i.test(n)}function cu(n=Ie()){return/android/i.test(n)}function lu(n=Ie()){return/blackberry/i.test(n)}function uu(n=Ie()){return/webos/i.test(n)}function uo(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xm(n=Ie()){var e;return uo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ym(){return df()&&document.documentMode===10}function hu(n=Ie()){return uo(n)||cu(n)||uu(n)||lu(n)||/windows phone/i.test(n)||au(n)}/**
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
 */function du(n,e=[]){let t;switch(n){case"Browser":t=gc(Ie());break;case"Worker":t=`${gc(Ie())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${r}`}/**
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
 */class ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tp(n,e={}){return In(n,"GET","/v2/passwordPolicy",co(n,e))}/**
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
 */const np=6;class rp{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??np,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class sp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _c(this),this.idTokenSubscription=new _c(this),this.beforeStateQueue=new ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cs(this,{idToken:e}),r=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(De(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Um()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(De(this.app))return Promise.reject($t(this));const t=e?Pe(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return De(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return De(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tp(this),t=new rp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(De(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Om(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cs(n){return Pe(n)}class _c{constructor(e){this.auth=e,this.observer=null,this.addObserver=vf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ho={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ip(n){ho=n}function op(n){return ho.loadJS(n)}function ap(){return ho.gapiScript}function cp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lp(n,e){const t=so(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(zt(o,e??{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function up(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hp(n,e,t){const r=Cs(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=fu(e),{host:a,port:l}=dp(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},m=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(zt(d,r.config.emulator)&&zt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,fr(a)?Gl(`${o}//${a}${h}`):fp()}function fu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dp(n){const e=fu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:yc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:yc(a)}}}function yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class mu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xe("not implemented")}_getIdTokenResponse(e){return Xe("not implemented")}_linkToIdToken(e,t){return Xe("not implemented")}_getReauthenticationResolver(e){return Xe("not implemented")}}/**
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
 */async function hn(n,e){return $m(n,"POST","/v1/accounts:signInWithIdp",co(n,e))}/**
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
 */const mp="http://localhost";class Wt extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new Wt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return hn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hn(e,t)}buildRequest(){const e={requestUri:mp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dr(t)}return e}}/**
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
 */class fo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pr extends fo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends pr{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ze.credential(t,r)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class pt extends pr{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
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
 */class gt extends pr{constructor(){super("twitter.com")}static credential(e,t){return Wt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Oe._fromIdTokenResponse(e,r,s),a=Ec(r);return new gn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ec(r);return new gn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ec(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class us extends ot{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,us.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new us(e,t,r,s)}}function pu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?us._fromErrorAndOperation(n,o,e,r):o})}async function pp(n,e,t=!1){const r=await nr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",r)}/**
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
 */async function gp(n,e,t=!1){const{auth:r}=n;if(De(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const o=await nr(n,pu(r,s,e,n),t);U(o.idToken,r,"internal-error");const a=lo(o.idToken);U(a,r,"internal-error");const{sub:l}=a;return U(n.uid===l,r,"user-mismatch"),gn._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&We(r,"user-mismatch"),o}}/**
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
 */async function _p(n,e,t=!1){if(De(n.app))return Promise.reject($t(n));const r="signIn",s=await pu(n,r,e),o=await gn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function yp(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function Ep(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function vp(n,e,t,r){return Pe(n).onAuthStateChanged(e,t,r)}function Tp(n){return Pe(n).signOut()}const hs="__sak";/**
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
 */class gu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ip=1e3,wp=10;class _u extends gu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Ym()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wp):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_u.type="LOCAL";const Ap=_u;/**
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
 */class yu extends gu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yu.type="SESSION";const Eu=yu;/**
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
 */function Sp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ks(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await Sp(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
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
 */function mo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Rp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=mo("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const I=p;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(I.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function $e(){return window}function bp(n){$e().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function vu(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Pp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function kp(){return vu()?self:null}/**
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
 */const Tu="firebaseLocalStorageDb",Vp=1,ds="firebaseLocalStorage",Iu="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vs(n,e){return n.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Np(){const n=indexedDB.deleteDatabase(Tu);return new gr(n).toPromise()}function wu(){const n=indexedDB.open(Tu,Vp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ds,{keyPath:Iu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ds)?e(r):(r.close(),await Np(),e(await wu()))})})}async function vc(n,e,t){const r=Vs(n,!0).put({[Iu]:e,value:t});return new gr(r).toPromise()}async function Dp(n,e){const t=Vs(n,!1).get(e),r=await new gr(t).toPromise();return r===void 0?null:r.value}function Tc(n,e){const t=Vs(n,!0).delete(e);return new gr(t).toPromise()}const Op=800,Lp=3;class Au{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=wu(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Lp)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return vu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(kp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Pp(),!this.activeServiceWorker)return;this.sender=new Rp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await vc(e,hs,"1"),await Tc(e,hs)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Vs(s,!1).getAll();return new gr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Au.type="LOCAL";const Mp=Au;new mr(3e4,6e4);/**
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
 */function Su(n,e){return e?Ye(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class po extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xp(n){return _p(n.auth,new po(n),n.bypassAuthState)}function Up(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),gp(t,new po(n),n.bypassAuthState)}async function Fp(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),pp(t,new po(n),n.bypassAuthState)}/**
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
 */class Ru{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xp;case"linkViaPopup":case"linkViaRedirect":return Fp;case"reauthViaPopup":case"reauthViaRedirect":return Up;default:We(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bp=new mr(2e3,1e4);async function qp(n,e,t){if(De(n.app))return Promise.reject(Me(n,"operation-not-supported-in-this-environment"));const r=Cs(n);Lm(n,e,fo);const s=Su(r,t);return new Ft(r,"signInViaPopup",e,s).executeNotNull()}class Ft extends Ru{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bp.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const $p="pendingRedirect",Kr=new Map;class jp extends Ru{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const r=await Gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gp(n,e){const t=Wp(e),r=Hp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function zp(n,e){Kr.set(n._key(),e)}function Hp(n){return Ye(n._redirectPersistence)}function Wp(n){return Wr($p,n.config.apiKey,n.name)}async function Kp(n,e,t=!1){if(De(n.app))return Promise.reject($t(n));const r=Cs(n),s=Su(r,e),a=await new jp(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Qp=10*60*1e3;class Jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bu(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Me(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bu(n);default:return!1}}/**
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
 */async function Xp(n,e={}){return In(n,"GET","/v1/projects",e)}/**
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
 */const Yp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function tg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xp(n);for(const t of e)try{if(ng(t))return}catch{}We(n,"unauthorized-domain")}function ng(n){const e=Mi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!eg.test(t))return!1;if(Yp.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const rg=new mr(3e4,6e4);function wc(){const n=$e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sg(n){return new Promise((e,t)=>{var s,o,a;function r(){wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wc(),t(Me(n,"network-request-failed"))},timeout:rg.get()})}if((o=(s=$e().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=$e().gapi)!=null&&a.load)r();else{const l=cp("iframefcb");return $e()[l]=()=>{gapi.load?r():t(Me(n,"network-request-failed"))},op(`${ap()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Qr=null,e})}let Qr=null;function ig(n){return Qr=Qr||sg(n),Qr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const og=new mr(5e3,15e3),ag="__/auth/iframe",cg="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hg(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ao(e,cg):`https://${n.config.authDomain}/${ag}`,r={apiKey:e.apiKey,appName:n.name,v:Tn},s=ug.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${dr(r).slice(1)}`}async function dg(n){const e=await ig(n),t=$e().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:hg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Me(n,"network-request-failed"),l=$e().setTimeout(()=>{o(a)},og.get());function h(){$e().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mg=500,pg=600,gg="_blank",_g="http://localhost";class Ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(n,e,t,r=mg,s=pg){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...fg,width:r.toString(),height:s.toString(),top:o,left:a},d=Ie().toLowerCase();t&&(l=ou(d)?gg:t),su(d)&&(e=e||_g,h.scrollbars="yes");const m=Object.entries(h).reduce((I,[R,k])=>`${I}${R}=${k},`,"");if(Xm(d)&&l!=="_self")return Eg(e||"",l),new Ac(null);const p=window.open(e||"",l,m);U(p,n,"popup-blocked");try{p.focus()}catch{}return new Ac(p)}function Eg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const vg="__/auth/handler",Tg="emulator/auth/handler",Ig=encodeURIComponent("fac");async function Sc(n,e,t,r,s,o){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tn,eventId:s};if(e instanceof fo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ef(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof pr){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await n._getAppCheckToken(),d=h?`#${Ig}=${encodeURIComponent(h)}`:"";return`${wg(n)}?${dr(l).slice(1)}${d}`}function wg({config:n}){return n.emulator?ao(n,Tg):`https://${n.authDomain}/${vg}`}/**
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
 */const Ai="webStorageSupport";class Ag{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eu,this._completeRedirectFn=Kp,this._overrideRedirectResult=zp}async _openPopup(e,t,r,s){var a;rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Sc(e,t,r,Mi(),s);return yg(e,o,mo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Sc(e,t,r,Mi(),s);return bp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(rt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await dg(e),r=new Jp(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ai,{type:Ai},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[Ai];o!==void 0&&t(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hu()||iu()||uo()}}const Sg=Ag;var Rc="@firebase/auth",bc="1.13.2";/**
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
 */class Rg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pg(n){pn(new Ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:du(n)},d=new sp(r,s,o,h);return up(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Ht("auth-internal",e=>{const t=Cs(e.getProvider("auth").getImmediate());return(r=>new Rg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Rc,bc,bg(n)),vt(Rc,bc,"esm2020")}/**
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
 */const Cg=5*60,kg=jl("authIdTokenMaxAge")||Cg;let Pc=null;const Vg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kg)return;const s=t==null?void 0:t.token;Pc!==s&&(Pc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ng(n=Kl()){const e=so(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lp(n,{popupRedirectResolver:Sg,persistence:[Mp,Ap,Eu]}),r=jl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Vg(o.toString());Ep(t,a,()=>a(t.currentUser)),yp(t,l=>a(l))}}const s=ql("auth");return s&&hp(t,`http://${s}`),t}function Dg(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}ip({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Me("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Dg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pg("Browser");var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tt,Pu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function y(){}y.prototype=g.prototype,v.F=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(T,E,A){for(var _=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)_[Se-2]=arguments[Se];return g.prototype[E].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,y){y||(y=0);const T=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)T[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;E<16;++E)T[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],E=v.g[2];let A=v.g[3],_;_=g+(A^y&(E^A))+T[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^A&(y^E))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^A)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~A))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const y=g-this.blockSize,T=this.C;let E=this.h,A=0;for(;A<g;){if(E==0)for(;A<=y;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<g;)if(T[E++]=v.charCodeAt(A++),E==this.blockSize){s(this,T),E=0;break}}else for(;A<g;)if(T[E++]=v[A++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)v[g++]=this.g[y]>>>T&255;return v};function o(v,g){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function a(v,g){this.h=g;const y=[];let T=!0;for(let E=v.length-1;E>=0;E--){const A=v[E]|0;T&&A==g||(y[E]=A,T=!1)}this.g=y}var l={};function h(v){return-128<=v&&v<128?o(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return N(d(-v));const g=[];let y=1;for(let T=0;v>=y;T++)g[T]=v/y|0,y*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return N(m(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let T=p;for(let A=0;A<v.length;A+=8){var E=Math.min(8,v.length-A);const _=parseInt(v.substring(A,A+E),g);E<8?(E=d(Math.pow(g,E)),T=T.j(E).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var p=h(0),I=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();let v=0,g=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);v+=(T>=0?T:4294967296+T)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(D(this))return"-"+N(this).toString(v);const g=d(Math.pow(v,6));var y=this;let T="";for(;;){const E=ue(y,g).g;y=H(y,E.j(g));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=E,k(y))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=H(this,v),D(v)?-1:k(v)?0:1};function N(v){const g=v.g.length,y=[];for(let T=0;T<g;T++)y[T]=~v.g[T];return new a(y,~v.h).add(I)}n.abs=function(){return D(this)?N(this):this},n.add=function(v){const g=Math.max(this.g.length,v.g.length),y=[];let T=0;for(let E=0;E<=g;E++){let A=T+(this.i(E)&65535)+(v.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=_>>>16,A&=65535,_&=65535,y[E]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(v,g){return v.add(N(g))}n.j=function(v){if(k(this)||k(v))return p;if(D(this))return D(v)?N(this).j(N(v)):N(N(this).j(v));if(D(v))return N(this.j(N(v)));if(this.l(R)<0&&v.l(R)<0)return d(this.m()*v.m());const g=this.g.length+v.g.length,y=[];for(var T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const A=this.i(T)>>>16,_=this.i(T)&65535,Se=v.i(E)>>>16,Vt=v.i(E)&65535;y[2*T+2*E]+=_*Vt,q(y,2*T+2*E),y[2*T+2*E+1]+=A*Vt,q(y,2*T+2*E+1),y[2*T+2*E+1]+=_*Se,q(y,2*T+2*E+1),y[2*T+2*E+2]+=A*Se,q(y,2*T+2*E+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function q(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function W(v,g){this.g=v,this.h=g}function ue(v,g){if(k(g))throw Error("division by zero");if(k(v))return new W(p,p);if(D(v))return g=ue(N(v),g),new W(N(g.g),N(g.h));if(D(g))return g=ue(v,N(g)),new W(N(g.g),g.h);if(v.g.length>30){if(D(v)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,T=g;T.l(v)<=0;)y=he(y),T=he(T);var E=_e(y,1),A=_e(T,1);for(T=_e(T,2),y=_e(y,2);!k(T);){var _=A.add(T);_.l(v)<=0&&(E=E.add(y),A=_),T=_e(T,1),y=_e(y,1)}return g=H(v,E.j(g)),new W(E,g)}for(E=p;v.l(g)>=0;){for(y=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=d(y),_=A.j(g);D(_)||_.l(v)>0;)y-=T,A=d(y),_=A.j(g);k(A)&&(A=I),E=E.add(A),v=H(v,_)}return new W(E,v)}n.B=function(v){return ue(this,v).h},n.and=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)&v.i(T);return new a(y,this.h&v.h)},n.or=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)|v.i(T);return new a(y,this.h|v.h)},n.xor=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)^v.i(T);return new a(y,this.h^v.h)};function he(v){const g=v.g.length+1,y=[];for(let T=0;T<g;T++)y[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(y,v.h)}function _e(v,g){const y=g>>5;g%=32;const T=v.g.length-y,E=[];for(let A=0;A<T;A++)E[A]=g>0?v.i(A+y)>>>g|v.i(A+y+1)<<32-g:v.i(A+y);return new a(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Pu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Tt=a}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cu,zn,ku,Jr,Ui,Vu,Nu,Du;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Br=="object"&&Br];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break e;u=u[w]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function m(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function p(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,w,S){for(var C=Array(arguments.length-2),$=2;$<arguments.length;$++)C[$-2]=arguments[$];return c.prototype[w].apply(f,C)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function R(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function k(i,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=i.length||0;const S=w.length||0;i.length=u+S;for(let C=0;C<S;C++)i[u+C]=w[C]}else i.push(w)}}class D{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(i){a.setTimeout(()=>{throw i},0)}function H(){var i=v;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class q{constructor(){this.h=this.g=null}add(c,u){const f=W.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var W=new D(()=>new ue,i=>i.reset());class ue{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let he,_e=!1,v=new q,g=()=>{const i=Promise.resolve(void 0);he=()=>{i.then(y)}};function y(){for(var i;i=H();){try{i.h.call(i.g)}catch(u){N(u)}var c=W;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}_e=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i}();function _(i){return/^[\s\xa0]*$/.test(i)}function Se(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}p(Se,E),Se.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Vt="closure_listenable_"+(Math.random()*1e6|0),hd=0;function dd(i,c,u,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++hd,this.da=this.fa=!1}function Ar(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Sr(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function fd(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function ea(i){const c={};for(const u in i)c[u]=i[u];return c}const ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function na(i,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let S=0;S<ta.length;S++)u=ta[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function Rr(i){this.src=i,this.g={},this.h=0}Rr.prototype.add=function(i,c,u,f,w){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const C=Qs(i,c,f,w);return C>-1?(c=i[C],u||(c.fa=!1)):(c=new dd(c,this.src,S,!!f,w),c.fa=u,i.push(c)),c};function Ks(i,c){const u=c.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,c,void 0),S;(S=w>=0)&&Array.prototype.splice.call(f,w,1),S&&(Ar(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Qs(i,c,u,f){for(let w=0;w<i.length;++w){const S=i[w];if(!S.da&&S.listener==c&&S.capture==!!u&&S.ha==f)return w}return-1}var Js="closure_lm_"+(Math.random()*1e6|0),Zs={};function ra(i,c,u,f,w){if(Array.isArray(c)){for(let S=0;S<c.length;S++)ra(i,c[S],u,f,w);return null}return u=oa(u),i&&i[Vt]?i.J(c,u,l(f)?!!f.capture:!1,w):md(i,c,u,!1,f,w)}function md(i,c,u,f,w,S){if(!c)throw Error("Invalid event type");const C=l(w)?!!w.capture:!!w;let $=Ys(i);if($||(i[Js]=$=new Rr(i)),u=$.add(c,u,f,C,S),u.proxy)return u;if(f=pd(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)A||(w=C),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(ia(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function pd(){function i(u){return c.call(i.src,i.listener,u)}const c=gd;return i}function sa(i,c,u,f,w){if(Array.isArray(c))for(var S=0;S<c.length;S++)sa(i,c[S],u,f,w);else f=l(f)?!!f.capture:!!f,u=oa(u),i&&i[Vt]?(i=i.i,S=String(c).toString(),S in i.g&&(c=i.g[S],u=Qs(c,u,f,w),u>-1&&(Ar(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[S],i.h--)))):i&&(i=Ys(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Qs(c,u,f,w)),(u=i>-1?c[i]:null)&&Xs(u))}function Xs(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Vt])Ks(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(ia(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Ys(c))?(Ks(u,i),u.h==0&&(u.src=null,c[Js]=null)):Ar(i)}}}function ia(i){return i in Zs?Zs[i]:Zs[i]="on"+i}function gd(i,c){if(i.da)i=!0;else{c=new Se(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&Xs(i),i=u.call(f,c)}return i}function Ys(i){return i=i[Js],i instanceof Rr?i:null}var ei="__closure_events_fn_"+(Math.random()*1e9>>>0);function oa(i){return typeof i=="function"?i:(i[ei]||(i[ei]=function(c){return i.handleEvent(c)}),i[ei])}function ye(){T.call(this),this.i=new Rr(this),this.M=this,this.G=null}p(ye,T),ye.prototype[Vt]=!0,ye.prototype.removeEventListener=function(i,c,u,f){sa(this,i,c,u,f)};function we(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var w=c;c=new E(f,i),na(c,w)}w=!0;let S,C;if(u)for(C=u.length-1;C>=0;C--)S=c.g=u[C],w=br(S,f,!0,c)&&w;if(S=c.g=i,w=br(S,f,!0,c)&&w,w=br(S,f,!1,c)&&w,u)for(C=0;C<u.length;C++)S=c.g=u[C],w=br(S,f,!1,c)&&w}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)Ar(u[f]);delete i.g[c],i.h--}}this.G=null},ye.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},ye.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function br(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let S=0;S<c.length;++S){const C=c[S];if(C&&!C.da&&C.capture==u){const $=C.listener,ae=C.ha||C.src;C.fa&&Ks(i.i,C),w=$.call(ae,f)!==!1&&w}}return w&&!f.defaultPrevented}function _d(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function aa(i){i.g=_d(()=>{i.g=null,i.i&&(i.i=!1,aa(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class yd extends T{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:aa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(i){T.call(this),this.h=i,this.g={}}p(bn,T);var ca=[];function la(i){Sr(i.g,function(c,u){this.g.hasOwnProperty(u)&&Xs(c)},i),i.g={}}bn.prototype.N=function(){bn.Z.N.call(this),la(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=a.JSON.stringify,Ed=a.JSON.parse,vd=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function ua(){}function ha(){}var Pn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ni(){E.call(this,"d")}p(ni,E);function ri(){E.call(this,"c")}p(ri,E);var Nt={},da=null;function Pr(){return da=da||new ye}Nt.Ia="serverreachability";function fa(i){E.call(this,Nt.Ia,i)}p(fa,E);function Cn(i){const c=Pr();we(c,new fa(c))}Nt.STAT_EVENT="statevent";function ma(i,c){E.call(this,Nt.STAT_EVENT,i),this.stat=c}p(ma,E);function Ae(i){const c=Pr();we(c,new ma(c,i))}Nt.Ja="timingevent";function pa(i,c){E.call(this,Nt.Ja,i),this.size=c}p(pa,E);function kn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Vn(){this.g=!0}Vn.prototype.ua=function(){this.g=!1};function Td(i,c,u,f,w,S){i.info(function(){if(i.g)if(S){var C="",$=S.split("&");for(let Z=0;Z<$.length;Z++){var ae=$[Z].split("=");if(ae.length>1){const de=ae[0];ae=ae[1];const Be=de.split("_");C=Be.length>=2&&Be[1]=="type"?C+(de+"="+ae+"&"):C+(de+"=redacted&")}}}else C=null;else C=S;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+C})}function Id(i,c,u,f,w,S,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+S+" "+C})}function tn(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ad(i,u)+(f?" "+f:"")})}function wd(i,c){i.info(function(){return"TIMEOUT: "+c})}Vn.prototype.info=function(){};function Ad(i,c){if(!i.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let C=1;C<f.length;C++)f[C]=""}}}}return ti(S)}catch{return c}}var Cr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ga={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_a;function si(){}p(si,ua),si.prototype.g=function(){return new XMLHttpRequest},_a=new si;function Nn(i){return encodeURIComponent(String(i))}function Sd(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function at(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new bn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ya}function ya(){this.i=null,this.g="",this.h=!1}var Ea={},ii={};function oi(i,c,u){i.M=1,i.A=Vr(Fe(c)),i.u=u,i.R=!0,va(i,null)}function va(i,c){i.F=Date.now(),kr(i),i.B=Fe(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Da(u.i,"t",f),i.C=0,u=i.j.L,i.h=new ya,i.g=Za(i.j,u?c:null,!i.u),i.P>0&&(i.O=new yd(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(ca[0]=w.toString()),w=ca);for(let S=0;S<w.length;S++){const C=ra(u,w[S],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=i.J?ea(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Cn(),Td(i.i,i.v,i.B,i.l,i.S,i.u)}at.prototype.ba=function(i){i=i.target;const c=this.O;c&&ut(i)==3?c.j():this.Y(i)},at.prototype.Y=function(i){try{if(i==this.g)e:{const $=ut(this.g),ae=this.g.ya(),Z=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||Ba(this.g)))){this.K||$!=4||ae==7||(ae==8||Z<=0?Cn(3):Cn(2)),ai(this);var c=this.g.ca();this.X=c;var u=Rd(this);if(this.o=c==200,Id(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var S=f;break t}}S=null}if(i=S)tn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ci(this,i);else{this.o=!1,this.m=3,Ae(12),Dt(this),Dn(this);break e}}if(this.R){i=!0;let de;for(;!this.K&&this.C<u.length;)if(de=bd(this,u),de==ii){$==4&&(this.m=4,Ae(14),i=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(de==Ea){this.m=4,Ae(15),tn(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else tn(this.i,this.l,de,null),ci(this,de);if(Ta(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||u.length!=0||this.h.h||(this.m=1,Ae(16),i=!1),this.o=this.o&&i,!i)tn(this.i,this.l,u,"[Invalid Chunked Response]"),Dt(this),Dn(this);else if(u.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),gi(C),C.P=!0,Ae(11))}}else tn(this.i,this.l,u,null),ci(this,u);$==4&&Dt(this),this.o&&!this.K&&($==4?Wa(this.j,this):(this.o=!1,kr(this)))}else qd(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Ae(12)):(this.m=0,Ae(13)),Dt(this),Dn(this)}}}catch{}finally{}};function Rd(i){if(!Ta(i))return i.g.la();const c=Ba(i.g);if(c==="")return"";let u="";const f=c.length,w=ut(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Dt(i),Dn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,u+=i.h.i.decode(c[S],{stream:!(w&&S==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function Ta(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function bd(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?ii:(u=Number(c.substring(u,f)),isNaN(u)?Ea:(f+=1,f+u>c.length?ii:(c=c.slice(f,f+u),i.C=f+u,c)))}at.prototype.cancel=function(){this.K=!0,Dt(this)};function kr(i){i.T=Date.now()+i.H,Ia(i,i.H)}function Ia(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=kn(d(i.aa,i),c)}function ai(i){i.D&&(a.clearTimeout(i.D),i.D=null)}at.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(wd(this.i,this.B),this.M!=2&&(Cn(),Ae(17)),Dt(this),this.m=2,Dn(this)):Ia(this,this.T-i)};function Dn(i){i.j.I==0||i.K||Wa(i.j,i)}function Dt(i){ai(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,la(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function ci(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||li(u.h,i))){if(!i.L&&li(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)Mr(u),Or(u);else break e;pi(u),Ae(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=kn(d(u.Va,u),6e3));Sa(u.h)<=1&&u.ta&&(u.ta=void 0)}else Lt(u,11)}else if((i.L||u.g==i)&&Mr(u),!_(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let Z=w[c];const de=Z[0];if(!(de<=u.K))if(u.K=de,Z=Z[1],u.I==2)if(Z[0]=="c"){u.M=Z[1],u.ba=Z[2];const Be=Z[3];Be!=null&&(u.ka=Be,u.j.info("VER="+u.ka));const Mt=Z[4];Mt!=null&&(u.za=Mt,u.j.info("SVER="+u.za));const ht=Z[5];ht!=null&&typeof ht=="number"&&ht>0&&(f=1.5*ht,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const dt=i.g;if(dt){const Ur=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ur){var S=f.h;S.g||Ur.indexOf("spdy")==-1&&Ur.indexOf("quic")==-1&&Ur.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ui(S,S.h),S.h=null))}if(f.G){const _i=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;_i&&(f.wa=_i,X(f.J,f.G,_i))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var C=i;if(f.na=Ja(f,f.L?f.ba:null,f.W),C.L){Ra(f.h,C);var $=C,ae=f.O;ae&&($.H=ae),$.D&&(ai($),kr($)),f.g=C}else za(f);u.i.length>0&&Lr(u)}else Z[0]!="stop"&&Z[0]!="close"||Lt(u,7);else u.I==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Lt(u,7):mi(u):Z[0]!="noop"&&u.l&&u.l.qa(Z),u.A=0)}}Cn(4)}catch{}}var Pd=class{constructor(i,c){this.g=i,this.map=c}};function wa(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Aa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Sa(i){return i.h?1:i.g?i.g.size:0}function li(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ui(i,c){i.g?i.g.add(c):i.h=c}function Ra(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}wa.prototype.cancel=function(){if(this.i=ba(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ba(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return R(i.i)}var Pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cd(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let w,S=null;f>=0?(w=i[u].substring(0,f),S=i[u].substring(f+1)):w=i[u],c(w,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ct(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof ct?(this.l=i.l,On(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.u),this.h=i.h,hi(this,Oa(i.i)),this.m=i.m):i&&(c=String(i).match(Pa))?(this.l=!1,On(this,c[1]||"",!0),this.o=Mn(c[2]||""),this.g=Mn(c[3]||"",!0),Ln(this,c[4]),this.h=Mn(c[5]||"",!0),hi(this,c[6]||"",!0),this.m=Mn(c[7]||"")):(this.l=!1,this.i=new Un(null,this.l))}ct.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(xn(c,Ca,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(xn(c,Ca,!0),"@"),i.push(Nn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(xn(u,u.charAt(0)=="/"?Nd:Vd,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",xn(u,Od)),i.join("")},ct.prototype.resolve=function(i){const c=Fe(this);let u=!!i.j;u?On(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)Ln(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const S=[];for(let C=0;C<w.length;){const $=w[C++];$=="."?f&&C==w.length&&S.push(""):$==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&C==w.length&&S.push("")):(S.push($),f=!0)}f=S.join("/")}else f=w}return u?c.h=f:u=i.i.toString()!=="",u?hi(c,Oa(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Fe(i){return new ct(i)}function On(i,c,u){i.j=u?Mn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function hi(i,c,u){c instanceof Un?(i.i=c,Ld(i.i,i.l)):(u||(c=xn(c,Dd)),i.i=new Un(c,i.l))}function X(i,c,u){i.i.set(c,u)}function Vr(i){return X(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Mn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,kd),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function kd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ca=/[#\/\?@]/g,Vd=/[#\?:]/g,Nd=/[#\?]/g,Dd=/[#\?@]/g,Od=/#/g;function Un(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Ot(i){i.g||(i.g=new Map,i.h=0,i.i&&Cd(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Un.prototype,n.add=function(i,c){Ot(this),this.i=null,i=nn(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function ka(i,c){Ot(i),c=nn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Va(i,c){return Ot(i),c=nn(i,c),i.g.has(c)}n.forEach=function(i,c){Ot(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(c,w,f,this)},this)},this)};function Na(i,c){Ot(i);let u=[];if(typeof c=="string")Va(i,c)&&(u=u.concat(i.g.get(nn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return Ot(this),this.i=null,i=nn(this,i),Va(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=Na(this,i),i.length>0?String(i[0]):c):c};function Da(i,c,u){ka(i,c),u.length>0&&(i.i=null,i.g.set(nn(i,c),R(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const w=Nn(u);u=Na(this,u);for(let S=0;S<u.length;S++){let C=w;u[S]!==""&&(C+="="+Nn(u[S])),i.push(C)}}return this.i=i.join("&")};function Oa(i){const c=new Un;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function nn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Ld(i,c){c&&!i.j&&(Ot(i),i.i=null,i.g.forEach(function(u,f){const w=f.toLowerCase();f!=w&&(ka(this,f),Da(this,w,u))},i)),i.j=c}function Md(i,c){const u=new Vn;if(a.Image){const f=new Image;f.onload=m(lt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=m(lt,u,"TestLoadImage: error",!1,c,f),f.onabort=m(lt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(lt,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function xd(i,c){const u=new Vn,f=new AbortController,w=setTimeout(()=>{f.abort(),lt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(w),S.ok?lt(u,"TestPingServer: ok",!0,c):lt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),lt(u,"TestPingServer: error",!1,c)})}function lt(i,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function Ud(){this.g=new vd}function di(i){this.i=i.Sb||null,this.h=i.ab||!1}p(di,ua),di.prototype.g=function(){return new Nr(this.i,this.h)};function Nr(i,c){ye.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Nr,ye),n=Nr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Bn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;La(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function La(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Fn(this):Bn(this),this.readyState==3&&La(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Fn(this))},n.Na=function(i){this.g&&(this.response=i,Fn(this))},n.ga=function(){this.g&&Fn(this)};function Fn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Bn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Bn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ma(i){let c="";return Sr(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function fi(i,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ma(u),typeof i=="string"?u!=null&&Nn(u):X(i,c,u))}function ne(i){ye.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ne,ye);var Fd=/^https?$/i,Bd=["POST","PUT"];n=ne.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_a.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){xa(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Bd,c,void 0)>=0)||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,C]of u)this.g.setRequestHeader(S,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){xa(this,S)}};function xa(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ua(i),Dr(i)}function Ua(i){i.A||(i.A=!0,we(i,"complete"),we(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,we(this,"complete"),we(this,"abort"),Dr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dr(this,!0)),ne.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Fa(this):this.Xa())},n.Xa=function(){Fa(this)};function Fa(i){if(i.h&&typeof o<"u"){if(i.v&&ut(i)==4)setTimeout(i.Ca.bind(i),0);else if(we(i,"readystatechange"),ut(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=S===0){let C=String(i.D).match(Pa)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),f=!Fd.test(C?C.toLowerCase():"")}u=f}if(u)we(i,"complete"),we(i,"success");else{i.o=6;try{var w=ut(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",Ua(i)}}finally{Dr(i)}}}}function Dr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||we(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ut(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Ed(c)}};function Ba(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function qd(i){const c={};i=(i.g&&ut(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(_(i[f]))continue;var u=Sd(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=c[w]||[];c[w]=S,S.push(u)}fd(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function qa(i){this.za=0,this.i=[],this.j=new Vn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qn("baseRetryDelayMs",5e3,i),this.Za=qn("retryDelaySeedMs",1e4,i),this.Ta=qn("forwardChannelMaxRetries",2,i),this.va=qn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new wa(i&&i.concurrentRequestLimit),this.Ba=new Ud,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=qa.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){Ae(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=Ja(this,null,this.W),Lr(this)};function mi(i){if($a(i),i.I==3){var c=i.V++,u=Fe(i.J);if(X(u,"SID",i.M),X(u,"RID",c),X(u,"TYPE","terminate"),$n(i,u),c=new at(i,i.j,c),c.M=2,c.A=Vr(Fe(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=Za(c.j,null),c.g.ea(c.A)),c.F=Date.now(),kr(c)}Qa(i)}function Or(i){i.g&&(gi(i),i.g.cancel(),i.g=null)}function $a(i){Or(i),i.v&&(a.clearTimeout(i.v),i.v=null),Mr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Lr(i){if(!Aa(i.h)&&!i.m){i.m=!0;var c=i.Ea;he||g(),_e||(he(),_e=!0),v.add(c,i),i.D=0}}function $d(i,c){return Sa(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=kn(d(i.Ea,i,c),Ka(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new at(this,this.j,i);let S=this.o;if(this.U&&(S?(S=ea(S),na(S,this.U)):S=this.U),this.u!==null||this.R||(w.J=S,S=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ga(this,w,c),u=Fe(this.J),X(u,"RID",i),X(u,"CVER",22),this.G&&X(u,"X-HTTP-Session-Id",this.G),$n(this,u),S&&(this.R?c="headers="+Nn(Ma(S))+"&"+c:this.u&&fi(u,this.u,S)),ui(this.h,w),this.Ra&&X(u,"TYPE","init"),this.S?(X(u,"$req",c),X(u,"SID","null"),w.U=!0,oi(w,u,null)):oi(w,u,c),this.I=2}}else this.I==3&&(i?ja(this,i):this.i.length==0||Aa(this.h)||ja(this))};function ja(i,c){var u;c?u=c.l:u=i.V++;const f=Fe(i.J);X(f,"SID",i.M),X(f,"RID",u),X(f,"AID",i.K),$n(i,f),i.u&&i.o&&fi(f,i.u,i.o),u=new at(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ga(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ui(i.h,u),oi(u,f,c)}function $n(i,c){i.H&&Sr(i.H,function(u,f){X(c,f,u)}),i.l&&Sr({},function(u,f){X(c,f,u)})}function Ga(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var w=i.i;let $=-1;for(;;){const ae=["count="+u];$==-1?u>0?($=w[0].g,ae.push("ofs="+$)):$=0:ae.push("ofs="+$);let Z=!0;for(let de=0;de<u;de++){var S=w[de].g;const Be=w[de].map;if(S-=$,S<0)$=Math.max(0,w[de].g-100),Z=!1;else try{S="req"+S+"_"||"";try{var C=Be instanceof Map?Be:Object.entries(Be);for(const[Mt,ht]of C){let dt=ht;l(ht)&&(dt=ti(ht)),ae.push(S+Mt+"="+encodeURIComponent(dt))}}catch(Mt){throw ae.push(S+"type="+encodeURIComponent("_badmap")),Mt}}catch{f&&f(Be)}}if(Z){C=ae.join("&");break e}}C=void 0}return i=i.i.splice(0,u),c.G=i,C}function za(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;he||g(),_e||(he(),_e=!0),v.add(c,i),i.A=0}}function pi(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=kn(d(i.Da,i),Ka(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Ha(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=kn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ae(10),Or(this),Ha(this))};function gi(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Ha(i){i.g=new at(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Fe(i.na);X(c,"RID","rpc"),X(c,"SID",i.M),X(c,"AID",i.K),X(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&X(c,"TO",i.ia),X(c,"TYPE","xmlhttp"),$n(i,c),i.u&&i.o&&fi(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=Vr(Fe(c)),u.u=null,u.R=!0,va(u,i)}n.Va=function(){this.C!=null&&(this.C=null,Or(this),pi(this),Ae(19))};function Mr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Wa(i,c){var u=null;if(i.g==c){Mr(i),gi(i),i.g=null;var f=2}else if(li(i.h,c))u=c.G,Ra(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=i.D;f=Pr(),we(f,new pa(f,u)),Lr(i)}else za(i);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&$d(i,c)||f==2&&pi(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),w){case 1:Lt(i,5);break;case 4:Lt(i,10);break;case 3:Lt(i,6);break;default:Lt(i,2)}}}function Ka(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function Lt(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const w=!f;f=new ct(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||On(f,"https"),Vr(f),w?Md(f.toString(),u):xd(f.toString(),u)}else Ae(2);i.I=0,i.l&&i.l.pa(c),Qa(i),$a(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Qa(i){if(i.I=0,i.ja=[],i.l){const c=ba(i.h);(c.length!=0||i.i.length!=0)&&(k(i.ja,c),k(i.ja,i.i),i.h.i.length=0,R(i.i),i.i.length=0),i.l.oa()}}function Ja(i,c,u){var f=u instanceof ct?Fe(u):new ct(u);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const S=new ct(null);f&&On(S,f),c&&(S.g=c),w&&Ln(S,w),u&&(S.h=u),f=S}return u=i.G,c=i.wa,u&&c&&X(f,u,c),X(f,"VER",i.ka),$n(i,f),f}function Za(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ne(new di({ab:u})):new ne(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xa(){}n=Xa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xr(){}xr.prototype.g=function(i,c){return new Ce(i,c)};function Ce(i,c){ye.call(this),this.g=new qa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!_(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new rn(this)}p(Ce,ye),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){mi(this.g)},Ce.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=ti(i),i=u);c.i.push(new Pd(c.Ya++,i)),c.I==3&&Lr(c)},Ce.prototype.N=function(){this.g.l=null,delete this.j,mi(this.g),delete this.g,Ce.Z.N.call(this)};function Ya(i){ni.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}p(Ya,ni);function ec(){ri.call(this),this.status=1}p(ec,ri);function rn(i){this.g=i}p(rn,Xa),rn.prototype.ra=function(){we(this.g,"a")},rn.prototype.qa=function(i){we(this.g,new Ya(i))},rn.prototype.pa=function(i){we(this.g,new ec)},rn.prototype.oa=function(){we(this.g,"b")},xr.prototype.createWebChannel=xr.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Du=function(){return new xr},Nu=function(){return Pr()},Vu=Nt,Ui={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Cr.NO_ERROR=0,Cr.TIMEOUT=8,Cr.HTTP_ERROR=6,Jr=Cr,ga.COMPLETE="complete",ku=ga,ha.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",ye.prototype.listen=ye.prototype.J,zn=ha,ne.prototype.listenOnce=ne.prototype.K,ne.prototype.getLastError=ne.prototype.Ha,ne.prototype.getLastErrorCode=ne.prototype.ya,ne.prototype.getStatus=ne.prototype.ca,ne.prototype.getResponseJson=ne.prototype.La,ne.prototype.getResponseText=ne.prototype.la,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Fa,Cu=ne}).apply(typeof Br<"u"?Br:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
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
 */let wn="12.14.0";function Og(n){wn=n}/**
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
 */const Kt=new no("@firebase/firestore");function sn(){return Kt.logLevel}function V(n,...e){if(Kt.logLevel<=z.DEBUG){const t=e.map(go);Kt.debug(`Firestore (${wn}): ${n}`,...t)}}function st(n,...e){if(Kt.logLevel<=z.ERROR){const t=e.map(go);Kt.error(`Firestore (${wn}): ${n}`,...t)}}function Qt(n,...e){if(Kt.logLevel<=z.WARN){const t=e.map(go);Kt.warn(`Firestore (${wn}): ${n}`,...t)}}function go(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ou(n,r,t)}function Ou(n,e,t){let r=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw st(r),new Error(r)}function Q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ou(e,s,r)}function B(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Lu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ve.UNAUTHENTICATED))}shutdown(){}}class Mg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xg{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new tt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new tt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new Lu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new ve(e)}}class Ug{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Fg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ug(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,De(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class _o{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qg(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function Fi(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return Si(s)===Si(o)?j(s,o):Si(s)?1:-1}return j(n.length,e.length)}const $g=55296,jg=57343;function Si(n){const e=n.charCodeAt(0);return e>=$g&&e<=jg}function _n(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Vc="__name__";class qe{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=qe.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return j(e.length,t.length)}static compareSegments(e,t){const r=qe.isNumericId(e),s=qe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?qe.extractNumericId(e).compare(qe.extractNumericId(t)):Fi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tt.fromString(e.substring(4,e.length-2))}}class Y extends qe{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const Gg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends qe{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return Gg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vc}static keyField(){return new pe([Vc])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(Y.fromString(e))}static fromName(e){return new L(Y.fromString(e).popFirst(5))}static empty(){return new L(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new Y(e.slice()))}}/**
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
 */function Mu(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zg(n,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nc(n){if(!L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yo(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function _r(n,e){if(!xu(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const Oc=-62135596800,Lc=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Lc);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Oc)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lc}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_r(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Oc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ie("string",ee._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
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
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new ee(0,0))}static max(){return new F(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rr=-1;function Hg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new wt(s,L.empty(),e)}function Wg(n){return new wt(n.readTime,n.key,rr)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(F.min(),L.empty(),rr)}static max(){return new wt(F.max(),L.empty(),rr)}}function Kg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
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
 */const Qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function An(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Qg)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(s=>s?b.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new b((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++l,l===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new b((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Zg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ns.ce=-1;/**
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
 */const Eo=-1;function Ds(n){return n==null}function fs(n){return n===0&&1/n==-1/0}function Xg(n){return typeof n=="number"&&Number.isInteger(n)&&!fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uu="";function Yg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Mc(e)),e=e_(n.get(t),e);return Mc(e)}function e_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case Uu:t+="";break;default:t+=o}}return t}function Mc(n){return n+Uu+""}/**
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
 */function xc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qr(this.root,e,this.comparator,!0)}}class qr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=o??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new me(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Le([])}unionWith(e){let t=new le(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _n(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Bu("Invalid base64 string: "+o):o}}(e);return new ge(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const t_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=t_.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
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
 */const qu="server_timestamp",$u="__type__",ju="__previous_value__",Gu="__local_write_time__";function vo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[$u])==null?void 0:r.stringValue)===qu}function Os(n){const e=n.mapValue.fields[ju];return vo(e)?Os(e):e}function sr(n){const e=At(n.mapValue.fields[Gu].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class n_{constructor(e,t,r,s,o,a,l,h,d,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=p}}const ms="(default)";class ir{constructor(e,t){this.projectId=e,this.database=t||ms}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database===ms}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}function r_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(n.options.projectId,e)}/**
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
 */const zu="__type__",s_="__max__",$r={mapValue:{}},Hu="__vector__",ps="value";function Rt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vo(n)?4:o_(n)?9007199254740991:i_(n)?10:11:M(28295,{value:n})}function Ke(n,e){if(n===e)return!0;const t=Rt(n);if(t!==Rt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sr(n).isEqual(sr(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=At(s.timestampValue),l=At(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return St(s.bytesValue).isEqual(St(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return re(s.geoPointValue.latitude)===re(o.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return re(s.integerValue)===re(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=re(s.doubleValue),l=re(o.doubleValue);return a===l?fs(a)===fs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return _n(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(xc(a)!==xc(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ke(a[h],l[h])))return!1;return!0}(n,e);default:return M(52216,{left:n})}}function or(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function yn(n,e){if(n===e)return 0;const t=Rt(n),r=Rt(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=re(o.integerValue||o.doubleValue),h=re(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return Fc(n.timestampValue,e.timestampValue);case 4:return Fc(sr(n),sr(e));case 5:return Fi(n.stringValue,e.stringValue);case 6:return function(o,a){const l=St(o),h=St(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=j(l[d],h[d]);if(m!==0)return m}return j(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=j(re(o.latitude),re(a.latitude));return l!==0?l:j(re(o.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Bc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var I,R,k,D;const l=o.fields||{},h=a.fields||{},d=(I=l[ps])==null?void 0:I.arrayValue,m=(R=h[ps])==null?void 0:R.arrayValue,p=j(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((D=m==null?void 0:m.values)==null?void 0:D.length)||0);return p!==0?p:Bc(d,m)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===$r.mapValue&&a===$r.mapValue)return 0;if(o===$r.mapValue)return 1;if(a===$r.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let p=0;p<h.length&&p<m.length;++p){const I=Fi(h[p],m[p]);if(I!==0)return I;const R=yn(l[h[p]],d[m[p]]);if(R!==0)return R}return j(h.length,m.length)}(n.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function Fc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=At(n),r=At(e),s=j(t.seconds,r.seconds);return s!==0?s:j(t.nanos,r.nanos)}function Bc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=yn(t[s],r[s]);if(o)return o}return j(t.length,r.length)}function En(n){return Bi(n)}function Bi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=At(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return St(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Bi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Bi(t.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function Zr(n){switch(Rt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Os(n);return e?16+Zr(e):16;case 5:return 2*n.stringValue.length;case 6:return St(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Zr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Zt(r.fields,(o,a)=>{s+=o.length+Zr(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function ar(n){return!!n&&"integerValue"in n}function Wu(n){return ar(n)||function(t){return!!t&&"doubleValue"in t}(n)}function To(n){return!!n&&"arrayValue"in n}function qc(n){return!!n&&"nullValue"in n}function $c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xr(n){return!!n&&"mapValue"in n}function i_(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zu])==null?void 0:r.stringValue)===Hu}function Jn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Zt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jn(n.arrayValue.values[t]);return e}return{...n}}function o_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===s_}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Jn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Xr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Zt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new ke(Jn(this.value))}}function Ku(n){const e=[];return Zt(n.fields,(t,r)=>{const s=new pe([t]);if(Xr(r)){const o=Ku(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Le(e)}/**
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
 */class Te{constructor(e,t,r,s,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Te(e,0,F.min(),F.min(),F.min(),ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Te(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new Te(e,2,t,F.min(),F.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,F.min(),F.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gs{constructor(e,t){this.position=e,this.inclusive=t}}function jc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=yn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _s{constructor(e,t="asc"){this.field=e,this.dir=t}}function a_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qu{}class ce extends Qu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new l_(e,t,r):t==="array-contains"?new d_(e,r):t==="in"?new f_(e,r):t==="not-in"?new m_(e,r):t==="array-contains-any"?new p_(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new u_(e,r):new h_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yn(t,this.value)):t!==null&&Rt(this.value)===Rt(t)&&this.matchesComparison(yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Qu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qe(e,t)}matches(e){return Ju(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ju(n){return n.op==="and"}function Zu(n){return c_(n)&&Ju(n)}function c_(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function qi(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+En(n.value);if(Zu(n))return n.filters.map(e=>qi(e)).join(",");{const e=n.filters.map(t=>qi(t)).join(",");return`${n.op}(${e})`}}function Xu(n,e){return n instanceof ce?function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&Ke(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Xu(a,s.filters[l]),!0):!1}(n,e):void M(19439)}function Yu(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${En(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(Yu).join(" ,")+"}"}(n):"Filter"}class l_ extends ce{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class u_ extends ce{constructor(e,t){super(e,"in",t),this.keys=eh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class h_ extends ce{constructor(e,t){super(e,"not-in",t),this.keys=eh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class d_ extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return To(t)&&or(t.arrayValue,this.value)}}class f_ extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&or(this.value.arrayValue,t)}}class m_ extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!or(this.value.arrayValue,t)}}class p_ extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!To(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>or(this.value.arrayValue,r))}}/**
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
 */class g_{constructor(e,t=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function zc(n,e=null,t=[],r=[],s=null,o=null,a=null){return new g_(n,e,t,r,s,o,a)}function Io(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>En(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>En(r)).join(",")),e.Te=t}return e.Te}function wo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!a_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gc(n.startAt,e.startAt)&&Gc(n.endAt,e.endAt)}function $i(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ls{constructor(e,t=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function __(n,e,t,r,s,o,a,l){return new Ls(n,e,t,r,s,o,a,l)}function Ms(n){return new Ls(n)}function Hc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function y_(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function E_(n){return n.collectionGroup!==null}function Zn(n){const e=B(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new le(pe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new _s(o,r))}),t.has(pe.keyField().canonicalString())||e.Ie.push(new _s(pe.keyField(),r))}return e.Ie}function je(n){const e=B(n);return e.Ee||(e.Ee=v_(e,Zn(n))),e.Ee}function v_(n,e){if(n.limitType==="F")return zc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _s(s.field,o)});const t=n.endAt?new gs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gs(n.startAt.position,n.startAt.inclusive):null;return zc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ji(n,e,t){return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xs(n,e){return wo(je(n),je(e))&&n.limitType===e.limitType}function th(n){return`${Io(je(n))}|lt:${n.limitType}`}function on(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Yu(s)).join(", ")}]`),Ds(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>En(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>En(s)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function Us(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Zn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,h){const d=jc(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,Zn(r),s)||r.endAt&&!function(a,l,h){const d=jc(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,Zn(r),s))}(n,e)}function T_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nh(n){return(e,t)=>{let r=!1;for(const s of Zn(n)){const o=I_(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function I_(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?yn(h,d):M(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
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
 */class Xt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Fu(this.inner)}size(){return this.innerSize}}/**
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
 */const w_=new te(L.comparator);function it(){return w_}const rh=new te(L.comparator);function Hn(...n){let e=rh;for(const t of n)e=e.insert(t.key,t);return e}function sh(n){let e=rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Bt(){return Xn()}function ih(){return Xn()}function Xn(){return new Xt(n=>n.toString(),(n,e)=>n.isEqual(e))}const A_=new te(L.comparator),S_=new le(L.comparator);function G(...n){let e=S_;for(const t of n)e=e.add(t);return e}const R_=new le(j);function b_(){return R_}/**
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
 */function Fs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(e)?"-0":e}}function Ao(n){return{integerValue:""+n}}function P_(n,e){return Xg(e)?Ao(e):Fs(n,e)}/**
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
 */class Bs{constructor(){this._=void 0}}function C_(n,e,t){return n instanceof ys?function(s,o){const a={fields:{[$u]:{stringValue:qu},[Gu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&vo(o)&&(o=Os(o)),o&&(a.fields[ju]=o),{mapValue:a}}(t,e):n instanceof cr?ah(n,e):n instanceof lr?ch(n,e):n instanceof ur?function(s,o){const a=oh(s,o),l=Ts(a)+Ts(s.Ae);return ar(a)&&ar(s.Ae)?Ao(l):Fs(s.serializer,l)}(n,e):n instanceof Es?function(s,o){return Wc(s,o,Math.min)}(n,e):n instanceof vs?function(s,o){return Wc(s,o,Math.max)}(n,e):void 0}function k_(n,e,t){return n instanceof cr?ah(n,e):n instanceof lr?ch(n,e):t}function oh(n,e){return n instanceof ur?Wu(e)?e:{integerValue:0}:null}class ys extends Bs{}class cr extends Bs{constructor(e){super(),this.elements=e}}function ah(n,e){const t=lh(e);for(const r of n.elements)t.some(s=>Ke(s,r))||t.push(r);return{arrayValue:{values:t}}}class lr extends Bs{constructor(e){super(),this.elements=e}}function ch(n,e){let t=lh(e);for(const r of n.elements)t=t.filter(s=>!Ke(s,r));return{arrayValue:{values:t}}}class So extends Bs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class ur extends So{}class Es extends So{}class vs extends So{}function Wc(n,e,t){if(!Wu(e))return n.Ae;const r=t(Ts(e),Ts(n.Ae));return ar(e)&&ar(n.Ae)?Ao(r):Fs(n.serializer,r)}function Ts(n){return re(n.integerValue||n.doubleValue)}function lh(n){return To(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function V_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof cr&&s instanceof cr||r instanceof lr&&s instanceof lr?_n(r.elements,s.elements,Ke):r instanceof ur&&s instanceof ur||r instanceof Es&&s instanceof Es||r instanceof vs&&s instanceof vs?Ke(r.Ae,s.Ae):r instanceof ys&&s instanceof ys}(n.transform,e.transform)}class N_{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qs{}function uh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dh(n.key,Ge.none()):new yr(n.key,n.data,Ge.none());{const t=n.data,r=ke.empty();let s=new le(pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Yt(n.key,r,new Le(s.toArray()),Ge.none())}}function D_(n,e,t){n instanceof yr?function(s,o,a){const l=s.value.clone(),h=Qc(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Yt?function(s,o,a){if(!Yr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Qc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(hh(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Yn(n,e,t,r){return n instanceof yr?function(o,a,l,h){if(!Yr(o.precondition,a))return l;const d=o.value.clone(),m=Jc(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Yt?function(o,a,l,h){if(!Yr(o.precondition,a))return l;const d=Jc(o.fieldTransforms,h,a),m=a.data;return m.setAll(hh(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(o,a,l){return Yr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function O_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=oh(r.transform,s||null);o!=null&&(t===null&&(t=ke.empty()),t.set(r.field,o))}return t||null}function Kc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_n(r,s,(o,a)=>V_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yr extends qs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yt extends qs{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function hh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qc(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,k_(a,l,t[s]))}return r}function Jc(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,C_(o,a,e))}return r}class dh extends qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L_ extends qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class M_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&D_(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ih();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const h=uh(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&_n(this.mutations,e.mutations,(t,r)=>Kc(t,r))&&_n(this.baseMutations,e.baseMutations,(t,r)=>Kc(t,r))}}class Ro{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return A_}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ro(e,t,r,s)}}/**
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
 */class x_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var se,K;function F_(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function fh(n){if(n===void 0)return st("GRPC error has no .code"),P.UNKNOWN;switch(n){case se.OK:return P.OK;case se.CANCELLED:return P.CANCELLED;case se.UNKNOWN:return P.UNKNOWN;case se.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case se.INTERNAL:return P.INTERNAL;case se.UNAVAILABLE:return P.UNAVAILABLE;case se.UNAUTHENTICATED:return P.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case se.NOT_FOUND:return P.NOT_FOUND;case se.ALREADY_EXISTS:return P.ALREADY_EXISTS;case se.PERMISSION_DENIED:return P.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case se.ABORTED:return P.ABORTED;case se.OUT_OF_RANGE:return P.OUT_OF_RANGE;case se.UNIMPLEMENTED:return P.UNIMPLEMENTED;case se.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(K=se||(se={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B_(){return new TextEncoder}/**
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
 */const q_=new Tt([4294967295,4294967295],0);function Zc(n){const e=B_().encode(n),t=new Pu;return t.update(e),new Uint8Array(t.digest())}function Xc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Tt([t,r],0),new Tt([s,o],0)]}class bo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wn(`Invalid padding: ${t}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Tt.fromNumber(r)));return s.compare(q_)===1&&(s=new Tt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Zc(e),[r,s]=Xc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new bo(o,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Zc(e),[r,s]=Xc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Er{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Er(F.min(),s,new te(j),it(),G())}}class vr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vr(r,t,G(),G(),G())}}/**
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
 */class es{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class mh{constructor(e,t){this.targetId=e,this.Ce=t}}class ph{constructor(e,t,r=ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Yc{constructor(e){this.targetId=e,this.ve=0,this.Fe=el(),this.Me=ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),r=G();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new vr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=el()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const jn="WatchChangeAggregator";class $_{constructor(e){this.Ge=e,this.ze=new Map,this.je=it(),this.Je=jr(),this.He=jr(),this.Ze=new te(j)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.ze.get(t);if(r)switch(e.state){case 0:this.nt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Le(e.resumeToken));break;default:M(56790,{state:e.state})}else V(jn,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.Ce.count,s=this.st(t);if(s){const o=s.target;if($i(o))if(r===0){const a=new L(o.path);this.et(t,a,Te.newNoDocument(a,F.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),h=l?this.ut(l,e,a):1;if(h!==0){this.rt(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=St(r).toUint8Array()}catch(h){if(h instanceof Bu)return Qt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new bo(a,s,o)}catch(h){return Qt(h instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ut(e,t,r){return t.Ce.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Ge.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),s++)}),s}Pt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.st(a);if(l){if(o.current&&$i(l.target)){const h=new L(l.target.path);this.Tt(h).has(a)||this.It(a,h)||this.et(a,h,Te.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let r=G();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new Er(e,t,this.Ze,this.je,r);return this.je=it(),this.Je=jr(),this.He=jr(),this.Ze=new te(j),s}Ye(e,t){const r=this.ze.get(e);if(!r||!this.nt(e))return void V(jn,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;r.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,r){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),r&&(this.je=this.je.insert(t,r))):V(jn,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const r=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(V(jn,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Yc(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new le(j),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new le(j),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V(jn,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Yc(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function jr(){return new te(L.comparator)}function el(){return new te(L.comparator)}const j_={asc:"ASCENDING",desc:"DESCENDING"},G_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},z_={and:"AND",or:"OR"};class H_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gi(n,e){return n.useProto3Json||Ds(e)?e:{value:e}}function Is(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function W_(n,e){return Is(n,e.toTimestamp())}function ze(n){return Q(!!n,49232),F.fromTimestamp(function(t){const r=At(t);return new ee(r.seconds,r.nanos)}(n))}function Po(n,e){return zi(n,e).canonicalString()}function zi(n,e){const t=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _h(n){const e=Y.fromString(n);return Q(Ih(e),10190,{key:e.toString()}),e}function Hi(n,e){return Po(n.databaseId,e.path)}function Ri(n,e){const t=_h(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Eh(t))}function yh(n,e){return Po(n.databaseId,e)}function K_(n){const e=_h(n);return e.length===4?Y.emptyPath():Eh(e)}function Wi(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Eh(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tl(n,e,t){return{name:Hi(n,e),fields:t.value.mapValue.fields}}function Q_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Q(m===void 0||typeof m=="string",58123),ge.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ge.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?P.UNKNOWN:fh(d.code);return new O(m,d.message||"")}(a);t=new ph(r,s,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ri(n,r.document.name),o=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):F.min(),l=new ke({mapValue:{fields:r.document.fields}}),h=Te.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new es(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ri(n,r.document),o=r.readTime?ze(r.readTime):F.min(),a=Te.newNoDocument(s,o),l=r.removedTargetIds||[];t=new es([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ri(n,r.document),o=r.removedTargetIds||[];t=new es([],o,s,null)}else{if(!("filter"in e))return M(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new U_(s,o),l=r.targetId;t=new mh(l,a)}}return t}function J_(n,e){let t;if(e instanceof yr)t={update:tl(n,e.key,e.value)};else if(e instanceof dh)t={delete:Hi(n,e.key)};else if(e instanceof Yt)t={update:tl(n,e.key,e.data),updateMask:iy(e.fieldMask)};else{if(!(e instanceof L_))return M(16599,{Vt:e.type});t={verify:Hi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ur)return{fieldPath:a.field.canonicalString(),increment:l.Ae};if(l instanceof Es)return{fieldPath:a.field.canonicalString(),minimum:l.Ae};if(l instanceof vs)return{fieldPath:a.field.canonicalString(),maximum:l.Ae};throw M(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:W_(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,e.precondition)),t}function Z_(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?ze(s.updateTime):ze(o);return a.isEqual(F.min())&&(a=ze(o)),new N_(a,s.transformResults||[])}(t,e))):[]}function X_(n,e){return{documents:[yh(n,e.path)]}}function Y_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=yh(n,s);const o=function(d){if(d.length!==0)return Th(Qe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:an(I.field),direction:ny(I.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Gi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{dt:t,parent:s}}function ey(n){let e=K_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Q(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(p){const I=vh(p);return I instanceof Qe&&Zu(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(I=>function(k){return new _s(cn(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(I))}(t.orderBy));let l=null;t.limit&&(l=function(p){let I;return I=typeof p=="object"?p.value:p,Ds(I)?null:I}(t.limit));let h=null;t.startAt&&(h=function(p){const I=!!p.before,R=p.values||[];return new gs(R,I)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const I=!p.before,R=p.values||[];return new gs(R,I)}(t.endAt)),__(e,s,a,o,l,"F",h,d)}function ty(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=cn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cn(t.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=cn(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(t){return ce.create(cn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>vh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(n):M(30097,{filter:n})}function ny(n){return j_[n]}function ry(n){return G_[n]}function sy(n){return z_[n]}function an(n){return{fieldPath:n.canonicalString()}}function cn(n){return pe.fromServerFormat(n.fieldPath)}function Th(n){return n instanceof ce?function(t){if(t.op==="=="){if($c(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NAN"}};if(qc(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($c(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NOT_NAN"}};if(qc(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(t.field),op:ry(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>Th(s));return r.length===1?r[0]:{compositeFilter:{op:sy(t.op),filters:r}}}(n):M(54877,{filter:n})}function iy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ih(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function wh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class et{constructor(e,t,r,s,o=F.min(),a=F.min(),l=ge.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oy{constructor(e){this.gt=e}}function ay(n){const e=ey({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ji(e,e.limit,"L"):e}/**
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
 */class cy{constructor(){this.Sn=new ly}addToCollectionParentIndex(e,t){return this.Sn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(wt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class ly{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new le(Y.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new le(Y.comparator)).toArray()}}/**
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
 */const nl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ah=41943040;class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(Ah,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);/**
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
 */class bt{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new bt(0)}static _r(){return new bt(-1)}}/**
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
 */const rl="LruGarbageCollector",uy=1048576;function sl([n,e],[t,r]){const s=j(n,t);return s===0?j(e,r):s}class hy{constructor(e){this.hr=e,this.buffer=new le(sl),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();sl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){V(rl,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sn(t)?V(rl,"Ignoring IndexedDB error during garbage collection: ",t):await An(t)}await this.Rr(3e5)})}}class fy{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ns.ce);const r=new hy(t);return this.Ar.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Ar.dr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Ar.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(nl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nl):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(o=p,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),sn()<=z.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${p} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:p})))}}function my(n,e){return new fy(n,e)}/**
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
 */class py{constructor(){this.changes=new Xt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _y{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Yn(r.mutation,s,Le.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const s=Bt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Hn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let o=it();const a=Xn(),l=function(){return Xn()}();return t.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Yt)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Yn(m.mutation,d,m.mutation.getFieldMask(),ee.now())):a.set(d.key,Le.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>l.set(d,new gy(m,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Xn();let s=new te((a,l)=>a-l),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||Le.empty();m=l.applyToLocalView(d,m),r.set(h,m);const p=(s.get(l.batchId)||G()).add(h);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,p=ih();m.forEach(I=>{if(!o.has(I)){const R=uh(t.get(I),r.get(I));R!==null&&p.set(I,R),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return y_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):E_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):b.resolve(Bt());let l=rr,h=o;return a.next(d=>b.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(e,m).next(I=>{h=h.insert(m,I)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,G())).next(m=>({batchId:l,changes:sh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Hn();return this.indexManager.getCollectionParents(e,o).next(l=>b.forEach(l,h=>{const d=function(p,I){return new Ls(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((p,I)=>{a=a.insert(p,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Te.newInvalidDocument(m)))});let l=Hn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Yn(m.mutation,d,Le.empty(),ee.now()),Us(t,d)&&(l=l.insert(h,d))}),l})}}/**
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
 */class yy{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return b.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ze(s.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,function(s){return{name:s.name,query:ay(s.bundledQuery),readTime:ze(s.readTime)}}(t)),b.resolve()}}/**
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
 */class Ey{constructor(){this.overlays=new te(L.comparator),this.Br=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Bt();return b.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.wt(e,t,o)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Br.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Br.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const s=Bt(),o=t.length+1,a=new L(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new te((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Bt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Bt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return b.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Br.get(s.largestBatchId).delete(r.key);this.Br.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new x_(t,r));let o=this.Br.get(t);o===void 0&&(o=G(),this.Br.set(t,o)),this.Br.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class vy{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
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
 */class Co{constructor(){this.Lr=new le(fe.kr),this.qr=new le(fe.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.$r(new fe(e,t))}Wr(e,t){e.forEach(r=>this.removeReference(r,t))}Qr(e){const t=new L(new Y([])),r=new fe(t,e),s=new fe(t,e+1),o=[];return this.qr.forEachInRange([r,s],a=>{this.$r(a),o.push(a.key)}),o}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new L(new Y([])),r=new fe(t,e),s=new fe(t,e+1);let o=G();return this.qr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new fe(e,0),r=this.Lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return L.comparator(e.key,t.key)||j(e.jr,t.jr)}static Kr(e,t){return j(e.jr,t.jr)||L.comparator(e.key,t.key)}}/**
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
 */class Ty{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new le(fe.kr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new M_(o,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new fe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Zr(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Eo:this.Xn-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),s=new fe(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],a=>{const l=this.Hr(a.jr);o.push(l)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new le(j);return t.forEach(s=>{const o=new fe(s,0),a=new fe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],l=>{r=r.add(l.jr)})}),b.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new fe(new L(o),0);let l=new le(j);return this.Jr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.jr)),!0)},a),b.resolve(this.Xr(l))}Xr(e){const t=[];return e.forEach(r=>{const s=this.Hr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return b.forEach(t.mutations,s=>{const o=new fe(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,t){const r=new fe(t,0),s=this.Jr.firstAfterOrEqual(r);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Iy{constructor(e){this.ei=e,this.docs=function(){return new te(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ei(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=it();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Te.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=it();const a=t.path,l=new L(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Kg(Wg(m),r)<=0||(s.has(m.key)||Us(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,t,r,s){M(9500)}ti(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wy(this)}getSize(e){return b.resolve(this.size)}}class wy extends py{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
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
 */class Ay{constructor(e){this.persistence=e,this.ni=new Xt(t=>Io(t),wo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.ri=0,this.ii=new Co,this.targetCount=0,this.si=bt.sr()}forEachTarget(e,t){return this.ni.forEach((r,s)=>t(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ri&&(this.ri=t),b.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new bt(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.cr(t),b.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.ni.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ni.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.ni.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.ii.Ur(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.ii.Wr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ii.zr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.ii.containsKey(t))}}/**
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
 */class Sh{constructor(e,t){this.oi={},this.overlays={},this._i=new Ns(0),this.ai=!1,this.ai=!0,this.ui=new vy,this.referenceDelegate=e(this),this.ci=new Ay(this),this.indexManager=new cy,this.remoteDocumentCache=function(s){return new Iy(s)}(r=>this.referenceDelegate.li(r)),this.serializer=new oy(t),this.hi=new yy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ey,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.oi[e.toKey()];return r||(r=new Ty(t,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new Sy(this._i.next());return this.referenceDelegate.Pi(),r(s).next(o=>this.referenceDelegate.Ti(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ii(e,t){return b.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,t)))}}class Sy extends Jg{constructor(e){super(),this.currentSequenceNumber=e}}class ko{constructor(e){this.persistence=e,this.Ei=new Co,this.Ri=null}static Ai(e){return new ko(e)}get Vi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(e,t,r){return this.Ei.addReference(r,t),this.Vi.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Ei.removeReference(r,t),this.Vi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(s=>this.Vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Vi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Vi,r=>{const s=L.fromPath(r);return this.di(e,s).next(o=>{o||t.removeEntry(s,F.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(r=>{r?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return b.or([()=>b.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ws{constructor(e,t){this.persistence=e,this.mi=new Xt(r=>Yg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=my(this,t)}static Ai(e,t){return new ws(e,t)}Pi(){}Ti(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}gr(e){let t=0;return this.dr(e,r=>{t++}).next(()=>t)}dr(e,t){return b.forEach(this.mi,(r,s)=>this.yr(e,r,s).next(o=>o?b.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ti(e,a=>this.yr(e,a,t).next(l=>{l||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),b.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}yr(e,t,r){return b.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.mi.get(t);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ps=r,this.Ts=s}static Is(e,t){let r=G(),s=G();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Vo(e,t.fromCache,r,s)}}/**
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
 */class Ry{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class by{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return ff()?8:Zg(Ie())>0?6:4}()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.fs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.gs(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Ry;return this.ps(e,t,a).next(l=>{if(o.result=l,this.Rs)return this.ys(e,t,a,l.size)})}).next(()=>o.result)}ys(e,t,r,s){return r.documentReadCount<this.As?(sn()<=z.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",on(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),b.resolve()):(sn()<=z.DEBUG&&V("QueryEngine","Query:",on(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Vs*s?(sn()<=z.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",on(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):b.resolve())}fs(e,t){if(Hc(t))return b.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ji(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=G(...o);return this.ds.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ws(t,l);return this.Ss(t,d,a,h.readTime)?this.fs(e,ji(t,null,"F")):this.bs(e,d,t,h)}))})))}gs(e,t,r,s){return Hc(t)||s.isEqual(F.min())?b.resolve(null):this.ds.getDocuments(e,r).next(o=>{const a=this.ws(t,o);return this.Ss(t,a,r,s)?b.resolve(null):(sn()<=z.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),on(t)),this.bs(e,a,t,Hg(s,rr)).next(l=>l))})}ws(e,t){let r=new le(nh(e));return t.forEach((s,o)=>{Us(e,o)&&(r=r.add(o))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ps(e,t,r){return sn()<=z.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",on(t)),this.ds.getDocumentsMatchingQuery(e,t,wt.min(),r)}bs(e,t,r,s){return this.ds.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const No="LocalStore",Py=3e8;class Cy{constructor(e,t,r,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new te(j),this.vs=new Xt(o=>Io(o),wo),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _y(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}function ky(n,e,t,r){return new Cy(n,e,t,r)}async function Rh(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.xs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=G();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Os:d,removedBatchIds:a,addedBatchIds:l}))})})}function Vy(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Ms.newChangeBuffer({trackRemovals:!0});return function(l,h,d,m){const p=d.batch,I=p.keys();let R=b.resolve();return I.forEach(k=>{R=R.next(()=>m.getEntry(h,k)).next(D=>{const N=d.docVersions.get(k);Q(N!==null,48541),D.version.compareTo(N)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(h,p))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function bh(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ci.getLastRemoteSnapshotVersion(t))}function Ny(n,e){const t=B(n),r=e.snapshotVersion;let s=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ms.newChangeBuffer({trackRemovals:!0});s=t.Cs;const l=[];e.targetChanges.forEach((m,p)=>{const I=s.get(p);if(!I)return;l.push(t.ci.removeMatchingKeys(o,m.removedDocuments,p).next(()=>t.ci.addMatchingKeys(o,m.addedDocuments,p)));let R=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(ge.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(p,R),function(D,N,H){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Py?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,R,m)&&l.push(t.ci.updateTargetData(o,R))});let h=it(),d=G();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(Dy(o,a,e.documentUpdates).next(m=>{h=m.Ns,d=m.Bs})),!r.isEqual(F.min())){const m=t.ci.getLastRemoteSnapshotVersion(o).next(p=>t.ci.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return b.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Cs=s,o))}function Dy(n,e,t){let r=G(),s=G();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=it();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):V(No,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ns:a,Bs:s}})}function Oy(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Eo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ly(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ci.getTargetData(r,e).next(o=>o?(s=o,b.resolve(s)):t.ci.allocateTargetId(r).next(a=>(s=new et(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.ci.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Cs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(r.targetId,r),t.vs.set(e,r.targetId)),r})}async function Ki(n,e,t){const r=B(n),s=r.Cs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sn(a))throw a;V(No,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Cs=r.Cs.remove(e),r.vs.delete(s.target)}function il(n,e,t){const r=B(n);let s=F.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const p=B(h),I=p.vs.get(m);return I!==void 0?b.resolve(p.Cs.get(I)):p.ci.getTargetData(d,m)}(r,a,je(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Ds.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:G())).next(l=>(My(r,T_(e),l),{documents:l,Ls:o})))}function My(n,e,t){let r=n.Fs.get(e)||F.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Fs.set(e,r)}class ol{constructor(){this.activeTargetIds=b_()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(){this.Co=new ol,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,r){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new ol,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Uy{Fo(e){}shutdown(){}}/**
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
 */const al="ConnectivityMonitor";class cl{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){V(al,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){V(al,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gr=null;function Qi(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
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
 */const bi="RestConnection",Fy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class By{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Uo=this.databaseId.database===ms?`project_id=${r}`:`project_id=${r}&database_id=${s}`}$o(e,t,r,s,o){const a=Qi(),l=this.Wo(e,t.toUriEncodedString());V(bi,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(h,s,o);const{host:d}=new URL(l),m=fr(d);return this.Go(e,l,h,r,m).then(p=>(V(bi,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Qt(bi,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}zo(e,t,r,s,o,a){return this.$o(e,t,r,s,o)}Qo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}Wo(e,t){const r=Fy[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class qy{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const Ee="WebChannelConnection",Gn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class dn extends By{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!dn.u_){const e=Nu();Gn(e,Vu.STAT_EVENT,t=>{t.stat===Ui.PROXY?V(Ee,"STAT_EVENT: detected buffering proxy"):t.stat===Ui.NOPROXY&&V(Ee,"STAT_EVENT: detected no buffering proxy")}),dn.u_=!0}}Go(e,t,r,s,o){const a=Qi();return new Promise((l,h)=>{const d=new Cu;d.setWithCredentials(!0),d.listenOnce(ku.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Jr.NO_ERROR:const p=d.getResponseJson();V(Ee,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Jr.TIMEOUT:V(Ee,`RPC '${e}' ${a} timed out`),h(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Jr.HTTP_ERROR:const I=d.getStatus();if(V(Ee,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R==null?void 0:R.error;if(k&&k.status&&k.message){const D=function(H){const q=H.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(k.status);h(new O(D,k.message))}else h(new O(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{V(Ee,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);V(Ee,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}P_(e,t,r){const s=Qi(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=o.join("");V(Ee,`Creating RPC '${e}' stream ${s}: ${d}`,l);const m=a.createWebChannel(d,l);this.T_(m);let p=!1,I=!1;const R=new qy({jo:k=>{I?V(Ee,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(V(Ee,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),V(Ee,`RPC '${e}' stream ${s} sending:`,k),m.send(k))},Jo:()=>m.close()});return Gn(m,zn.EventType.OPEN,()=>{I||(V(Ee,`RPC '${e}' stream ${s} transport opened.`),R.r_())}),Gn(m,zn.EventType.CLOSE,()=>{I||(I=!0,V(Ee,`RPC '${e}' stream ${s} transport closed`),R.s_(),this.I_(m))}),Gn(m,zn.EventType.ERROR,k=>{I||(I=!0,Qt(Ee,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),R.s_(new O(P.UNAVAILABLE,"The operation could not be completed")))}),Gn(m,zn.EventType.MESSAGE,k=>{var D;if(!I){const N=k.data[0];Q(!!N,16349);const H=N,q=(H==null?void 0:H.error)||((D=H[0])==null?void 0:D.error);if(q){V(Ee,`RPC '${e}' stream ${s} received error:`,q);const W=q.status;let ue=function(v){const g=se[v];if(g!==void 0)return fh(g)}(W),he=q.message;W==="NOT_FOUND"&&he.includes("database")&&he.includes("does not exist")&&he.includes(this.databaseId.database)&&Qt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ue===void 0&&(ue=P.INTERNAL,he="Unknown error status: "+W+" with message "+q.message),I=!0,R.s_(new O(ue,he)),m.close()}else V(Ee,`RPC '${e}' stream ${s} received:`,N),R.o_(N)}}),dn.a_(),setTimeout(()=>{R.i_()},0),R}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,r){super.Qo(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Du()}}/**
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
 */function $y(n){return new dn(n)}function Pi(){return typeof document<"u"?document:null}/**
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
 */function $s(n){return new H_(n,!0)}/**
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
 */dn.u_=!1;class Ph{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Di=e,this.timerId=t,this.E_=r,this.R_=s,this.A_=o,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ll="PersistentStream";class Ch{constructor(e,t,r,s,o,a,l,h){this.Di=e,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new Ph(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(st(t.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.Q_(r,s)},r=>{e(()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}Q_(e,t){const r=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(ll,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(V(ll,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jy extends Ch{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Q_(this.serializer,e),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?ze(a.readTime):F.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Wi(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=$i(h)?{documents:X_(o,h)}:{query:Y_(o,h).dt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=gh(o,a.resumeToken);const d=Gi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=Is(o,a.snapshotVersion.toTimestamp());const d=Gi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=ty(this.serializer,e);r&&(t.labels=r),this.k_(t)}Z_(e){const t={};t.database=Wi(this.serializer),t.removeTarget=e,this.k_(t)}}class Gy extends Ch{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Z_(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Wi(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>J_(this.serializer,r))};this.k_(t)}}/**
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
 */class zy{}class Hy extends zy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.$o(e,zi(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}zo(e,t,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.zo(e,zi(t,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function Wy(n,e,t,r){return new Hy(n,e,t,r)}class Ky{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(st(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Je="RemoteStore";class Qy{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new bt(1e3),this.Aa=new bt(1001),this.Va=new Set,this.da=[],this.ma=o,this.ma.Fo(a=>{r.enqueueAndForget(async()=>{en(this)&&(V(Je,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.Va.add(4),await Tr(d),d.fa.set("Unknown"),d.Va.delete(4),await js(d)}(this))})}),this.fa=new Ky(r,s)}}async function js(n){if(en(n))for(const e of n.da)await e(!0)}async function Tr(n){for(const e of n.da)await e(!1)}function Ji(n,e){return n.Ia.get(e)||void 0}function kh(n,e){const t=B(n),r=Ji(t,e.targetId);if(r!==void 0&&t.Ta.has(r))return;const s=function(l,h){const d=Ji(l,h);d!==void 0&&l.Ea.delete(d);const m=function(I,R){return R%2!=0?I.Aa.next():I.Ra.next()}(l,h);return l.Ia.set(h,m),l.Ea.set(m,h),m}(t,e.targetId);V(Je,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const o=new et(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(s,o),Mo(t)?Lo(t):Rn(t).x_()&&Oo(t,o)}function Do(n,e){const t=B(n),r=Rn(t),s=Ji(t,e);V(Je,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ta.delete(s),t.Ia.delete(e),t.Ea.delete(s),r.x_()&&Vh(t,s),t.Ta.size===0&&(r.x_()?r.B_():en(t)&&t.fa.set("Unknown"))}function Oo(n,e){if(n.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.Ea.get(e.targetId);if(t===void 0)return void V(Je,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Rn(n).H_(e)}function Vh(n,e){n.ga.$e(e),Rn(n).Z_(e)}function Lo(n){n.ga=new $_({getRemoteKeysForTarget:e=>{const t=n.Ea.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):G()},Rt:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Rn(n).start(),n.fa.aa()}function Mo(n){return en(n)&&!Rn(n).M_()&&n.Ta.size>0}function en(n){return B(n).Va.size===0}function Nh(n){n.ga=void 0}async function Jy(n){n.fa.set("Online")}async function Zy(n){n.Ta.forEach((e,t)=>{Oo(n,e)})}async function Xy(n,e){Nh(n),Mo(n)?(n.fa.la(e),Lo(n)):n.fa.set("Unknown")}async function Yy(n,e,t){if(n.fa.set("Online"),e instanceof ph&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds){if(s.Ta.has(l)){const h=s.Ea.get(l);h!==void 0&&(await s.remoteSyncer.rejectListen(h,a),s.Ia.delete(h),s.Ea.delete(l)),s.Ta.delete(l)}s.ga.removeTarget(l)}}(n,e)}catch(r){V(Je,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await As(n,r)}else if(e instanceof es?n.ga.Xe(e):e instanceof mh?n.ga.it(e):n.ga.tt(e),!t.isEqual(F.min()))try{const r=await bh(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.ga.Pt(a);l.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const p=o.Ta.get(m);p&&o.Ta.set(m,p.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,m)=>{const p=o.Ta.get(d);if(!p)return;o.Ta.set(d,p.withResumeToken(ge.EMPTY_BYTE_STRING,p.snapshotVersion)),Vh(o,d);const I=new et(p.target,d,m,p.sequenceNumber);Oo(o,I)});const h=function(m,p){const I=new Map;p.targetChanges.forEach((k,D)=>{const N=m.Ea.get(D);N!==void 0&&I.set(N,k)});let R=new te(j);return p.targetMismatches.forEach((k,D)=>{const N=m.Ea.get(k);N!==void 0&&(R=R.insert(N,D))}),new Er(p.snapshotVersion,I,R,p.documentUpdates,p.resolvedLimboDocuments)}(o,l);return o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){V(Je,"Failed to raise snapshot:",r),await As(n,r)}}async function As(n,e,t){if(!Sn(e))throw e;n.Va.add(1),await Tr(n),n.fa.set("Offline"),t||(t=()=>bh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(Je,"Retrying IndexedDB access"),await t(),n.Va.delete(1),await js(n)})}function Dh(n,e){return e().catch(t=>As(n,t,e))}async function Gs(n){const e=B(n),t=Pt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Eo;for(;eE(e);)try{const s=await Oy(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,tE(e,s)}catch(s){await As(e,s)}Oh(e)&&Lh(e)}function eE(n){return en(n)&&n.Pa.length<10}function tE(n,e){n.Pa.push(e);const t=Pt(n);t.x_()&&t.X_&&t.Y_(e.mutations)}function Oh(n){return en(n)&&!Pt(n).M_()&&n.Pa.length>0}function Lh(n){Pt(n).start()}async function nE(n){Pt(n).na()}async function rE(n){const e=Pt(n);for(const t of n.Pa)e.Y_(t.mutations)}async function sE(n,e,t){const r=n.Pa.shift(),s=Ro.from(r,e,t);await Dh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gs(n)}async function iE(n,e){e&&Pt(n).X_&&await async function(r,s){if(function(a){return F_(a)&&a!==P.ABORTED}(s.code)){const o=r.Pa.shift();Pt(r).N_(),await Dh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Gs(r)}}(n,e),Oh(n)&&Lh(n)}async function ul(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),V(Je,"RemoteStore received new credentials");const r=en(t);t.Va.add(3),await Tr(t),r&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await js(t)}async function oE(n,e){const t=B(n);e?(t.Va.delete(2),await js(t)):e||(t.Va.add(2),await Tr(t),t.fa.set("Unknown"))}function Rn(n){return n.pa||(n.pa=function(t,r,s){const o=B(t);return o.ia(),new jy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ho:Jy.bind(null,n),Xo:Zy.bind(null,n),e_:Xy.bind(null,n),J_:Yy.bind(null,n)}),n.da.push(async e=>{e?(n.pa.N_(),Mo(n)?Lo(n):n.fa.set("Unknown")):(await n.pa.stop(),Nh(n))})),n.pa}function Pt(n){return n.ya||(n.ya=function(t,r,s){const o=B(t);return o.ia(),new Gy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ho:()=>Promise.resolve(),Xo:nE.bind(null,n),e_:iE.bind(null,n),ea:rE.bind(null,n),ta:sE.bind(null,n)}),n.da.push(async e=>{e?(n.ya.N_(),await Gs(n)):(await n.ya.stop(),n.Pa.length>0&&(V(Je,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ya}/**
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
 */class xo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,l=new xo(e,t,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(n,e){if(st("AsyncQueue",`${e}: ${n}`),Sn(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fn{static emptySet(e){return new fn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Hn(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class hl{constructor(){this.wa=new te(L.comparator)}track(e){const t=e.doc.key,r=this.wa.get(t);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(t,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(t):e.type===1&&r.type===2?this.wa=this.wa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):M(63341,{At:e,Sa:r}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal((t,r)=>{e.push(r)}),e}}class vn{constructor(e,t,r,s,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new vn(e,t,fn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class aE{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class cE{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,r){const s=B(t),o=s.queries;s.queries=dl(),o.forEach((a,l)=>{for(const h of l.Ca)h.onError(r)})})(this,new O(P.ABORTED,"Firestore shutting down"))}}function dl(){return new Xt(n=>th(n),xs)}async function Fo(n,e){const t=B(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.va()&&e.Fa()&&(r=2):(o=new aE,r=e.Fa()?0:1);try{switch(r){case 0:o.Da=await t.onListen(s,!0);break;case 1:o.Da=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Uo(a,`Initialization of query '${on(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.Ca.push(e),e.xa(t.onlineState),o.Da&&e.Oa(o.Da)&&qo(t)}async function Bo(n,e){const t=B(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Ca.indexOf(e);a>=0&&(o.Ca.splice(a,1),o.Ca.length===0?s=e.Fa()?0:1:!o.va()&&e.Fa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function lE(n,e){const t=B(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.Ca)l.Oa(s)&&(r=!0);a.Da=s}}r&&qo(t)}function uE(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const o of s.Ca)o.onError(t);r.queries.delete(e)}function qo(n){n.Ma.forEach(e=>{e.next()})}var Zi,fl;(fl=Zi||(Zi={})).Na="default",fl.Cache="cache";class $o{constructor(e,t,r){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const r=t!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Zi.Cache}}/**
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
 */class Mh{constructor(e){this.key=e}}class xh{constructor(e){this.key=e}}class hE{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=G(),this.mutatedKeys=G(),this.ru=nh(e),this.iu=new fn(this.ru)}get su(){return this.eu}ou(e,t){const r=t?t._u:new hl,s=t?t.iu:this.iu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const I=s.get(m),R=Us(this.query,p)?p:null,k=!!I&&this.mutatedKeys.has(I.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;I&&R?I.data.isEqual(R.data)?k!==D&&(r.track({type:3,doc:R}),N=!0):this.au(I,R)||(r.track({type:2,doc:R}),N=!0,(h&&this.ru(R,h)>0||d&&this.ru(R,d)<0)&&(l=!0)):!I&&R?(r.track({type:0,doc:R}),N=!0):I&&!R&&(r.track({type:1,doc:I}),N=!0,(h||d)&&(l=!0)),N&&(R?(a=a.add(R),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{iu:a,_u:r,Ss:l,mutatedKeys:o}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const a=e._u.ba();a.sort((m,p)=>function(R,k){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:N})}};return D(R)-D(k)}(m.type,p.type)||this.ru(m.doc,p.doc)),this.uu(r),s=s??!1;const l=t&&!s?this.cu():[],h=this.nu.size===0&&this.current&&!s?1:0,d=h!==this.tu;return this.tu=h,a.length!==0||d?{snapshot:new vn(this.query,e.iu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new hl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(t=>this.eu=this.eu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.eu=this.eu.delete(t)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=G(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const t=[];return e.forEach(r=>{this.nu.has(r)||t.push(new xh(r))}),this.nu.forEach(r=>{e.has(r)||t.push(new Mh(r))}),t}Pu(e){this.eu=e.Ls,this.nu=G();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return vn.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const jo="SyncEngine";class dE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class fE{constructor(e){this.key=e,this.Iu=!1}}class mE{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Eu={},this.Ru=new Xt(l=>th(l),xs),this.Au=new Map,this.Vu=new Set,this.du=new te(L.comparator),this.mu=new Map,this.fu=new Co,this.gu={},this.pu=new Map,this.yu=bt._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function pE(n,e,t=!0){const r=jh(n);let s;const o=r.Ru.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Tu()):s=await Uh(r,e,t,!0),s}async function gE(n,e){const t=jh(n);await Uh(t,e,!0,!1)}async function Uh(n,e,t,r){const s=await Ly(n.localStore,je(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await _E(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&kh(n.remoteStore,s),l}async function _E(n,e,t,r,s){n.Su=(p,I,R)=>async function(D,N,H,q){let W=N.view.ou(H);W.Ss&&(W=await il(D.localStore,N.query,!1).then(({documents:v})=>N.view.ou(v,W)));const ue=q&&q.targetChanges.get(N.targetId),he=q&&q.targetMismatches.get(N.targetId)!=null,_e=N.view.applyChanges(W,D.isPrimaryClient,ue,he);return pl(D,N.targetId,_e.lu),_e.snapshot}(n,p,I,R);const o=await il(n.localStore,e,!0),a=new hE(e,o.Ls),l=a.ou(o.documents),h=vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);pl(n,t,d.lu);const m=new dE(e,t,a);return n.Ru.set(e,m),n.Au.has(t)?n.Au.get(t).push(e):n.Au.set(t,[e]),d.snapshot}async function yE(n,e,t){const r=B(n),s=r.Ru.get(e),o=r.Au.get(s.targetId);if(o.length>1)return r.Au.set(s.targetId,o.filter(a=>!xs(a,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ki(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Do(r.remoteStore,s.targetId),Xi(r,s.targetId)}).catch(An)):(Xi(r,s.targetId),await Ki(r.localStore,s.targetId,!0))}async function EE(n,e){const t=B(n),r=t.Ru.get(e),s=t.Au.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Do(t.remoteStore,r.targetId))}async function vE(n,e,t){const r=bE(n);try{const s=await function(a,l){const h=B(a),d=ee.now(),m=l.reduce((R,k)=>R.add(k.key),G());let p,I;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=it(),D=G();return h.Ms.getEntries(R,m).next(N=>{k=N,k.forEach((H,q)=>{q.isValidDocument()||(D=D.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,k)).next(N=>{p=N;const H=[];for(const q of l){const W=O_(q,p.get(q.key).overlayedDocument);W!=null&&H.push(new Yt(q.key,W,Ku(W.value.mapValue),Ge.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,H,l)}).next(N=>{I=N;const H=N.applyToLocalDocumentSet(p,D);return h.documentOverlayCache.saveOverlays(R,N.batchId,H)})}).then(()=>({batchId:I.batchId,changes:sh(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.gu[a.currentUser.toKey()];d||(d=new te(j)),d=d.insert(l,h),a.gu[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ir(r,s.changes),await Gs(r.remoteStore)}catch(s){const o=Uo(s,"Failed to persist write");t.reject(o)}}async function Fh(n,e){const t=B(n);try{const r=await Ny(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.mu.get(o);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Iu=!0:s.modifiedDocuments.size>0?Q(a.Iu,14607):s.removedDocuments.size>0&&(Q(a.Iu,42227),a.Iu=!1))}),await Ir(t,r,e)}catch(r){await An(r)}}function ml(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Ru.forEach((o,a)=>{const l=a.view.xa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=B(a);h.onlineState=l;let d=!1;h.queries.forEach((m,p)=>{for(const I of p.Ca)I.xa(l)&&(d=!0)}),d&&qo(h)}(r.eventManager,e),s.length&&r.Eu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TE(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.mu.get(e),o=s&&s.key;if(o){let a=new te(L.comparator);a=a.insert(o,Te.newNoDocument(o,F.min()));const l=G().add(o),h=new Er(F.min(),new Map,new te(j),a,l);await Fh(r,h),r.du=r.du.remove(o),r.mu.delete(e),Go(r)}else await Ki(r.localStore,e,!1).then(()=>Xi(r,e,t)).catch(An)}async function IE(n,e){const t=B(n),r=e.batch.batchId;try{const s=await Vy(t.localStore,e);qh(t,r,null),Bh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ir(t,s)}catch(s){await An(s)}}async function wE(n,e,t){const r=B(n);try{const s=await function(a,l){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next(p=>(Q(p!==null,37113),m=p.keys(),h.mutationQueue.removeMutationBatch(d,p))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);qh(r,e,t),Bh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ir(r,s)}catch(s){await An(s)}}function Bh(n,e){(n.pu.get(e)||[]).forEach(t=>{t.resolve()}),n.pu.delete(e)}function qh(n,e,t){const r=B(n);let s=r.gu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.gu[r.currentUser.toKey()]=s}}function Xi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Au.get(e))n.Ru.delete(r),t&&n.Eu.bu(r,t);n.Au.delete(e),n.isPrimaryClient&&n.fu.Qr(e).forEach(r=>{n.fu.containsKey(r)||$h(n,r)})}function $h(n,e){n.Vu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Do(n.remoteStore,t),n.du=n.du.remove(e),n.mu.delete(t),Go(n))}function pl(n,e,t){for(const r of t)r instanceof Mh?(n.fu.addReference(r.key,e),AE(n,r)):r instanceof xh?(V(jo,"Document no longer in limbo: "+r.key),n.fu.removeReference(r.key,e),n.fu.containsKey(r.key)||$h(n,r.key)):M(19791,{Du:r})}function AE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Vu.has(r)||(V(jo,"New document in limbo: "+t),n.Vu.add(r),Go(n))}function Go(n){for(;n.Vu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Vu.values().next().value;n.Vu.delete(e);const t=new L(Y.fromString(e)),r=n.yu.next();n.mu.set(r,new fE(t)),n.du=n.du.insert(t,r),kh(n.remoteStore,new et(je(Ms(t.path)),r,"TargetPurposeLimboResolution",Ns.ce))}}async function Ir(n,e,t){const r=B(n),s=[],o=[],a=[];r.Ru.isEmpty()||(r.Ru.forEach((l,h)=>{a.push(r.Su(h,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Vo.Is(h.targetId,d);o.push(p)}}))}),await Promise.all(a),r.Eu.J_(s),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(d,I=>b.forEach(I.Ps,R=>m.persistence.referenceDelegate.addReference(p,I.targetId,R)).next(()=>b.forEach(I.Ts,R=>m.persistence.referenceDelegate.removeReference(p,I.targetId,R)))))}catch(p){if(!Sn(p))throw p;V(No,"Failed to update sequence numbers: "+p)}for(const p of d){const I=p.targetId;if(!p.fromCache){const R=m.Cs.get(I),k=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(k);m.Cs=m.Cs.insert(I,D)}}}(r.localStore,o))}async function SE(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){V(jo,"User change. New user:",e.toKey());const r=await Rh(t.localStore,e);t.currentUser=e,function(o,a){o.pu.forEach(l=>{l.forEach(h=>{h.reject(new O(P.CANCELLED,a))})}),o.pu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ir(t,r.Os)}}function RE(n,e){const t=B(n),r=t.mu.get(e);if(r&&r.Iu)return G().add(r.key);{let s=G();const o=t.Au.get(e);if(!o)return s;for(const a of o){const l=t.Ru.get(a);s=s.unionWith(l.view.su)}return s}}function jh(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TE.bind(null,e),e.Eu.J_=lE.bind(null,e.eventManager),e.Eu.bu=uE.bind(null,e.eventManager),e}function bE(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wE.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$s(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return ky(this.persistence,new by,e.initialUser,this.serializer)}Mu(e){return new Sh(ko.Ai,this.serializer)}Fu(e){return new xy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class PE extends Ss{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){Q(this.persistence.referenceDelegate instanceof ws,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dy(r,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new Sh(r=>ws.Ai(r,t),this.serializer)}}class Yi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ml(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SE.bind(null,this.syncEngine),await oE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cE}()}createDatastore(e){const t=$s(e.databaseInfo.databaseId),r=$y(e.databaseInfo);return Wy(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,l){return new Qy(r,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ml(this.syncEngine,t,0),function(){return cl.v()?new cl:new Uy}())}createSyncEngine(e,t){return function(s,o,a,l,h,d,m){const p=new mE(s,o,a,l,h,d);return m&&(p.wu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=B(s);V(Je,"RemoteStore shutting down."),o.Va.add(5),await Tr(o),o.ma.shutdown(),o.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Yi.provider={build:()=>new Yi};/**
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
 */class zo{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ct="FirestoreClient";class CE{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ve.UNAUTHENTICATED,this.clientId=_o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V(Ct,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(Ct,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ci(n,e){n.asyncQueue.verifyOperationInProgress(),V(Ct,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kE(n);V(Ct,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ul(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ul(e.remoteStore,s)),n._onlineComponents=e}async function kE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Ct,"Using user provided OfflineComponentProvider");try{await Ci(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Qt("Error using user provided cache. Falling back to memory cache: "+t),await Ci(n,new Ss)}}else V(Ct,"Using default OfflineComponentProvider"),await Ci(n,new PE(void 0));return n._offlineComponents}async function Gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Ct,"Using user provided OnlineComponentProvider"),await gl(n,n._uninitializedComponentsProvider._online)):(V(Ct,"Using default OnlineComponentProvider"),await gl(n,new Yi))),n._onlineComponents}function VE(n){return Gh(n).then(e=>e.syncEngine)}async function Rs(n){const e=await Gh(n),t=e.eventManager;return t.onListen=pE.bind(null,e.syncEngine),t.onUnlisten=yE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=EE.bind(null,e.syncEngine),t}function NE(n,e,t,r){const s=new zo(r),o=new $o(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Fo(await Rs(n),o)),()=>{s.ku(),n.asyncQueue.enqueueAndForget(async()=>Bo(await Rs(n),o))}}function DE(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new zo({next:I=>{m.ku(),a.enqueueAndForget(()=>Bo(o,p));const R=I.docs.has(l);!R&&I.fromCache?d.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&h&&h.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new $o(Ms(l.path),m,{includeMetadataChanges:!0,$a:!0});return Fo(o,p)}(await Rs(n),n.asyncQueue,e,t,r)),r.promise}function OE(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new zo({next:I=>{m.ku(),a.enqueueAndForget(()=>Bo(o,p)),I.fromCache&&h.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new $o(l,m,{includeMetadataChanges:!0,$a:!0});return Fo(o,p)}(await Rs(n),n.asyncQueue,e,t,r)),r.promise}function LE(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>vE(await VE(n),e,t)),t.promise}/**
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
 */function zh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ME="ComponentProvider",_l=new Map;function xE(n,e,t,r,s){return new n_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,zh(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Hh="firestore.googleapis.com",yl=!0;class El{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hh,this.ssl=yl}else this.host=e.host,this.ssl=e.ssl??yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ah;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uy)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lg;switch(r.type){case"firstParty":return new Fg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_l.get(t);r&&(V(ME,"Removing Datastore"),_l.delete(t),r.terminate())}(this),Promise.resolve()}}function UE(n,e,t,r={}){var d;n=xe(n,zs);const s=fr(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Gl(`https://${l}`),o.host!==Hh&&o.host!==l&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!zt(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=ve.MOCK_USER;else{m=of(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ve(I)}n._authCredentials=new Mg(new Lu(m,p))}}/**
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
 */class wr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oe(this.firestore,e,this._key)}toJSON(){return{type:oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(_r(t,oe._jsonSchema))return new oe(e,r||null,new L(Y.fromString(t.referencePath)))}}oe._jsonSchemaVersion="firestore/documentReference/1.0",oe._jsonSchema={type:ie("string",oe._jsonSchemaVersion),referencePath:ie("string")};class It extends wr{constructor(e,t,r){super(e,t,Ms(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new oe(this.firestore,null,new L(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function Wh(n,e,...t){if(n=Pe(n),Mu("collection","path",e),n instanceof zs){const r=Y.fromString(e,...t);return Dc(r),new It(n,null,r)}{if(!(n instanceof oe||n instanceof It))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return Dc(r),new It(n.firestore,null,r)}}function Ho(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=_o.newId()),Mu("doc","path",e),n instanceof zs){const r=Y.fromString(e,...t);return Nc(r),new oe(n,null,new L(r))}{if(!(n instanceof oe||n instanceof It))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return Nc(r),new oe(n.firestore,n instanceof It?n.converter:null,new L(r))}}/**
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
 */const vl="AsyncQueue";class Tl{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new Ph(this,"async_queue_retry"),this.cc=()=>{const r=Pi();r&&V(vl,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const t=Pi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=Pi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const t=new tt;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Sn(e))throw e;V(vl,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const t=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,st("INTERNAL UNHANDLED ERROR: ",Il(r)),r}).then(r=>(this._c=!1,r))));return this.lc=t,t}enqueueAfterDelay(e,t,r){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=xo.createAndSchedule(this,e,t,r,o=>this.Ic(o));return this.sc.push(s),s}hc(){this.oc&&M(47125,{Ec:Il(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function Il(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Jt extends zs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tl(e),this._firestoreClient=void 0,await e}}}function FE(n,e){const t=typeof n=="object"?n:Kl(),r=typeof n=="string"?n:ms,s=so(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=rf("firestore");o&&UE(s,...o)}return s}function Hs(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||BE(n),n._firestoreClient}function BE(n){var r,s,o,a;const e=n._freezeSettings(),t=xE(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new CE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Ve{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ve(ge.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ve(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_r(e,Ve._jsonSchema))return Ve.fromBase64String(e.bytes)}}Ve._jsonSchemaVersion="firestore/bytes/1.0",Ve._jsonSchema={type:ie("string",Ve._jsonSchemaVersion),bytes:ie("string")};/**
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
 */class Kh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qh{constructor(e){this._methodName=e}}/**
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
 */class He{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:He._jsonSchemaVersion}}static fromJSON(e){if(_r(e,He._jsonSchema))return new He(e.latitude,e.longitude)}}He._jsonSchemaVersion="firestore/geoPoint/1.0",He._jsonSchema={type:ie("string",He._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ue{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_r(e,Ue._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ue(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ue._jsonSchemaVersion="firestore/vectorValue/1.0",Ue._jsonSchema={type:ie("string",Ue._jsonSchemaVersion),vectorValues:ie("object")};/**
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
 */const qE=/^__.*__$/;class $E{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new yr(e,this.data,t,this.fieldTransforms)}}function Jh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class Wo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Wo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.yc(e),r}wc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return bs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(Jh(this.dataSource)&&qE.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class jE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$s(e)}V(e,t,r,s=!1){return new Wo({dataSource:e,methodName:t,targetDoc:r,path:pe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zh(n){const e=n._freezeSettings(),t=$s(n._databaseId);return new jE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xh(n,e,t,r,s,o={}){const a=n.V(o.merge||o.mergeFields?2:0,e,t,s);nd("Data must be an object, but it was:",a,r);const l=ed(r,a);let h,d;if(o.merge)h=new Le(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const p of o.mergeFields){const I=Ko(e,p,t);if(!a.contains(I))throw new O(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);HE(m,I)||m.push(I)}h=new Le(m),d=a.fieldTransforms.filter(p=>h.covers(p.field))}else h=null,d=a.fieldTransforms;return new $E(new ke(l),h,d)}function Yh(n,e){if(td(n=Pe(n)))return nd("Unsupported field value:",e,n),ed(n,e);if(n instanceof Qh)return function(r,s){if(!Jh(s.dataSource))throw s.bc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Yh(l,s.Sc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ee.fromDate(r);return{timestampValue:Is(s.serializer,o)}}if(r instanceof ee){const o=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Is(s.serializer,o)}}if(r instanceof He)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:gh(s.serializer,r._byteString)};if(r instanceof oe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.bc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Po(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ue)return function(a,l){const h=a instanceof Ue?a.toArray():a;return{mapValue:{fields:{[zu]:{stringValue:Hu},[ps]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw l.bc("VectorValues must only contain numeric values.");return Fs(l.serializer,m)})}}}}}}(r,s);if(wh(r))return r._toProto(s.serializer);throw s.bc(`Unsupported field value: ${yo(r)}`)}(n,e)}function ed(n,e){const t={};return Fu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(n,(r,s)=>{const o=Yh(s,e.gc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function td(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof He||n instanceof Ve||n instanceof oe||n instanceof Qh||n instanceof Ue||wh(n))}function nd(n,e,t){if(!td(t)||!xu(t)){const r=yo(t);throw r==="an object"?e.bc(n+" a custom object"):e.bc(n+" "+r)}}function Ko(n,e,t){if((e=Pe(e))instanceof Kh)return e._internalPath;if(typeof e=="string")return zE(n,e);throw bs("Field path arguments must be of type string or ",n,!1,void 0,t)}const GE=new RegExp("[~\\*/\\[\\]]");function zE(n,e,t){if(e.search(GE)>=0)throw bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kh(...e.split("."))._internalPath}catch{throw bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(P.INVALID_ARGUMENT,l+n+h)}function HE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class WE{convertValue(e,t="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var r,s,o;const t=(o=(s=(r=e.fields)==null?void 0:r[ps].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>re(a.doubleValue));return new Ue(t)}convertGeoPoint(e){return new He(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Os(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){const t=At(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Y.fromString(e);Q(Ih(r),9688,{name:e});const s=new ir(r.get(1),r.get(3)),o=new L(r.popFirst(5));return s.isEqual(t)||st(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Qo extends WE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ve(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new oe(this.firestore,null,t)}}const wl="@firebase/firestore",Al="4.15.0";/**
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
 */function Sl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class rd{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ko("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KE extends rd{data(){return super.data()}}/**
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
 */function sd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function id(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Kn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jt extends rd{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ko("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=jt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}jt._jsonSchemaVersion="firestore/documentSnapshot/1.0",jt._jsonSchema={type:ie("string",jt._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class ts extends jt{data(e={}){return super.data(e)}}class Gt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ts(this._firestore,this._userDataWriter,r.key,r,new Kn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new ts(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Kn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new ts(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Kn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:QE(l.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_o.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
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
 */Gt._jsonSchemaVersion="firestore/querySnapshot/1.0",Gt._jsonSchema={type:ie("string",Gt._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};/**
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
 */function Rl(n){n=xe(n,oe);const e=xe(n.firestore,Jt),t=Hs(e);return DE(t,n._key).then(r=>ad(e,n,r))}function JE(n){n=xe(n,wr);const e=xe(n.firestore,Jt),t=Hs(e),r=new Qo(e);return sd(n._query),OE(t,n._query).then(s=>new Gt(e,r,n,s))}function ZE(n,e,t){n=xe(n,oe);const r=xe(n.firestore,Jt),s=id(n.converter,e),o=Zh(r);return od(r,[Xh(o,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function XE(n,e){const t=xe(n.firestore,Jt),r=Ho(n),s=id(n.converter,e),o=Zh(n.firestore);return od(t,[Xh(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function bl(n,...e){var d,m,p;n=Pe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Sl(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Sl(e[r])){const I=e[r];e[r]=(d=I.next)==null?void 0:d.bind(I),e[r+1]=(m=I.error)==null?void 0:m.bind(I),e[r+2]=(p=I.complete)==null?void 0:p.bind(I)}let o,a,l;if(n instanceof oe)a=xe(n.firestore,Jt),l=Ms(n._key.path),o={next:I=>{e[r]&&e[r](ad(a,n,I))},error:e[r+1],complete:e[r+2]};else{const I=xe(n,wr);a=xe(I.firestore,Jt),l=I._query;const R=new Qo(a);o={next:k=>{e[r]&&e[r](new Gt(a,R,I,k))},error:e[r+1],complete:e[r+2]},sd(n._query)}const h=Hs(a);return NE(h,l,s,o)}function od(n,e){const t=Hs(n);return LE(t,e)}function ad(n,e,t){const r=t.docs.get(e._key),s=new Qo(n);return new jt(n,s,e._key,r,new Kn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Og(Tn),pn(new Ht("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Jt(new xg(r.getProvider("auth-internal")),new Bg(a,r.getProvider("app-check-internal")),r_(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),vt(wl,Al,e),vt(wl,Al,"esm2020")})();const YE={apiKey:"AIzaSyCAMOaZZ9bP-ePX9-DbvG-FxLv0iLbjYBs",authDomain:"stickeralbum-513b5.firebaseapp.com",projectId:"stickeralbum-513b5",storageBucket:"stickeralbum-513b5.firebasestorage.app",messagingSenderId:"343627765709",appId:"1:343627765709:web:102e12668152ca10bb1684"},cd=Wl(YE),eo=Ng(cd),Ws=FE(cd),ev=new Ze,tv=["blue","red","purple","green","black"];let J=Gd(),ns="all",ld=!0,qt=null,mn=null,Pl="stickers",be=Hd(),kt=zd(),ki=null;const nv=300;Object.entries(Dl).forEach(([n,e])=>e.forEach(t=>{}));function Jo(n){return Ho(Ws,"users",n,"data","stickers")}function ud(n){return Ho(Ws,"users",n,"data","pro")}async function Zo(n){if(qt)try{await ZE(Jo(qt.uid),{owned:n})}catch(e){console.error("Cloud sync failed",e)}}function zr(){er(J),ki&&clearTimeout(ki),ki=setTimeout(()=>{Zo(J)},nv)}function rv(n){mn&&mn(),mn=bl(Jo(n),e=>{if(e.exists()){const t=e.data().owned||{};J=t,er(t),_t(),Ne()}},e=>console.error("Sync error",e)),bl(ud(n),e=>{if(e.exists()){const t=e.data();be={purchased:t.purchased,purchaseDate:t.purchaseDate},xl(be),Yo()}},e=>console.error("Pro sync error",e))}function sv(){mn&&(mn(),mn=null)}function Xo(n){return n.stickers.filter(e=>J[Ut(n.code,e.n)]&&J[Ut(n.code,e.n)]>0).length}function iv(){return be.purchased?Object.keys(J).filter(n=>J[n]>0).length:Object.keys(J).filter(n=>J[n]).length}function ov(){return be.purchased?Object.keys(J).reduce((n,e)=>{const t=J[e]||0;return n+Math.max(0,t-1)},0):0}function av(n){const e=Xo(n),t=n.stickers.length;return ns==="complete"?e===t:ns==="incomplete"?e>0&&e<t:ns==="none"?e===0:!0}function _t(){const n=iv(),e=ov(),t=Math.round(n/rs*100);document.getElementById("s-have").textContent=n,document.getElementById("s-need").textContent=rs-n,document.getElementById("s-pct").textContent=t+"%";const r=document.getElementById("s-dupes");r&&(r.textContent=e),document.getElementById("global-bar").style.width=t+"%"}function Cl(n){const e=Xo(n),t=n.stickers.length,r=Math.round(e/t*100),s=document.createElement("div");s.className="team-card";const o=document.createElement("div");return o.className="team-header",o.setAttribute("role","button"),o.setAttribute("aria-label",`Open ${n.name} sticker album`),o.innerHTML=`
    <div class="team-flag">${ss(n.code,32)}</div>
    <div class="team-info">
      <div class="team-name">${n.name}</div>
      <div class="team-code">${n.code} &middot; ${e}/${t}</div>
    </div>
    <div class="team-progress">
      <div class="mini-bar"><div class="mini-bar-fill" style="width:${r}%"></div></div>
    </div>
    <i class="ti ti-layout-grid-add team-open-icon" aria-hidden="true"></i>
  `,o.addEventListener("click",()=>lv(n)),s.appendChild(o),s}function Ne(){const n=document.getElementById("search").value.toLowerCase().trim(),e=document.getElementById("teams-container");e.classList.remove("schedule-view"),e.innerHTML="";const t=jd.filter(r=>r.name.toLowerCase().includes(n)||r.code.toLowerCase().includes(n)).filter(av);if(!t.length){e.innerHTML='<div class="empty-msg">No teams match your filter.</div>',_t();return}if(ld){new Set(t.map(s=>s.code));const r=Object.fromEntries(t.map(s=>[s.code,s]));Object.entries(Dl).forEach(([s,o])=>{const a=o.map(m=>r[m]).filter(Boolean);if(!a.length)return;const l=document.createElement("div");l.className="group-section";const h=document.createElement("div");h.className="group-header",h.textContent=s==="Special"?"★ Special":`Group ${s}`,l.appendChild(h);const d=document.createElement("div");d.className="teams-list",a.forEach(m=>d.appendChild(Cl(m))),l.appendChild(d),e.appendChild(l)})}else{const r=document.createElement("div");r.className="teams-list",t.forEach(s=>r.appendChild(Cl(s))),e.appendChild(r)}_t()}function cv(){const n=document.getElementById("teams-container");n.classList.add("schedule-view"),n.innerHTML="";const e=Intl.DateTimeFormat().resolvedOptions().timeZone,t={};Wd.forEach(s=>{const o=new Date(s.date).toLocaleDateString("en-US");t[o]||(t[o]=[]),t[o].push(s)}),Object.keys(t).sort().forEach(s=>{const o=document.createElement("div");o.className="schedule-date-section";const a=document.createElement("div");a.className="schedule-date-header",a.textContent=new Date(s).toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"}),o.appendChild(a);const l=document.createElement("div");l.className="schedule-match-list",t[s].forEach(h=>{const d=new Date(h.date),m=new Date(d.toLocaleString("en-US",{timeZone:e})),p=document.createElement("div");p.className="schedule-match-card";const I=h.home.length===2&&tc[h.home]||h.home,R=h.away.length===2&&tc[h.away]||h.away,k=ss(h.home,24),D=ss(h.away,24),N=m.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0});p.innerHTML=`
        <div class="match-time">${N}</div>
        <div class="match-teams">
          <div class="match-team">
            <span class="match-flag">${k}</span>
            <span class="match-name">${I}</span>
          </div>
          <div class="match-vs">vs</div>
          <div class="match-team">
            <span class="match-flag">${D}</span>
            <span class="match-name">${R}</span>
          </div>
        </div>
        <div class="match-stage">${h.stage}</div>
      `,l.appendChild(p)}),o.appendChild(l),n.appendChild(o)})}function lv(n){const e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="album-modal";function r(){e.remove(),document.removeEventListener("keydown",s)}function s(l){l.key==="Escape"&&r()}function o(){const l=Xo(n),h=n.stickers.length,d=Math.round(l/h*100);t.innerHTML=`
      <div class="album-modal-header">
        <div class="album-modal-team-info">
          <span class="album-modal-flag">${ss(n.code,48)}</span>
          <div>
            <div class="album-modal-name">${n.name}</div>
            <div class="album-modal-meta">${n.code} &nbsp;·&nbsp; ${l} / ${h} &nbsp;·&nbsp; ${d}%</div>
          </div>
        </div>
        <button class="album-close-btn" aria-label="Close">&times;</button>
      </div>
      <div class="album-progress-wrap">
        <div class="album-progress-fill" style="width:${d}%"></div>
      </div>
      <div class="album-sticker-grid"></div>
      <div class="album-modal-footer">
        <button class="album-action-btn album-clear-all">Clear all</button>
        <button class="album-action-btn album-mark-all">Mark all collected</button>
      </div>
    `;const m=t.querySelector(".album-sticker-grid");n.stickers.forEach(p=>{const I=Ut(n.code,p.n),R=J[I]||0,k=R>0,D=document.createElement("div");D.className="album-sticker"+(k?" have":"")+(p.foil?" foil":""),D.setAttribute("role",be.purchased?"button":"checkbox"),D.setAttribute("aria-checked",String(k)),D.setAttribute("aria-label",`${n.code} ${p.n} ${p.t}`);let N="";be.purchased&&(N='<div class="album-sticker-parallels">',tv.forEach(q=>{const W=Ut(n.code,p.n,q),ue=J[W]?1:0,he={blue:"#3b82f6",red:"#ef4444",purple:"#a855f7",green:"#22c55e",black:"#1f2937"}[q];N+=`<div class="parallel-dot" data-color="${q}" style="background-color: ${he}; opacity: ${ue>0?1:.2};" title="${q}"></div>`}),N+="</div>");let H="";be.purchased&&R>0&&(H=`<div class="album-quantity-badge">${R}</div>`),D.innerHTML=`
        <div class="album-sticker-inner">
          ${p.foil?'<div class="album-foil-badge">✦</div>':""}
          ${H}
          ${k?'<div class="album-check"><i class="ti ti-check"></i></div>':""}
          ${p.img?`<img src="${p.img}" alt="${p.t}" class="album-sticker-img" />`:`<div class="album-sticker-num">${n.code}<br>${p.n}</div>`}
          <div class="album-sticker-type">${p.t}</div>
          ${N}
        </div>
      `,D.addEventListener("click",q=>{if(be.purchased&&q.target.classList.contains("parallel-dot")){const W=q.target.dataset.color,ue=Ut(n.code,p.n,W);a(n,p,ue,W)}else be.purchased?a(n,p,I):(J[I]?delete J[I]:J[I]=!0,zr(),o(),_t(),Ne())}),m.appendChild(D)}),t.querySelector(".album-close-btn").addEventListener("click",r),t.querySelector(".album-mark-all").addEventListener("click",()=>{n.stickers.forEach(p=>{J[Ut(n.code,p.n)]=1}),zr(),o(),_t(),Ne()}),t.querySelector(".album-clear-all").addEventListener("click",()=>{n.stickers.forEach(p=>{delete J[Ut(n.code,p.n)]}),zr(),o(),_t(),Ne()})}function a(l,h,d,m){const p=J[d]||0,I=document.createElement("div");I.className="modal-overlay";const R=m?` (${m.toUpperCase()})`:"";I.innerHTML=`
      <div class="quantity-picker-modal">
        <div class="quantity-picker-title">${l.code} #${h.n} - ${h.t}${R}</div>
        <div class="quantity-picker-content">
          <div class="quantity-display">
            <span class="quantity-label">Quantity:</span>
            <span class="quantity-value">${p}</span>
          </div>
          <div class="quantity-controls">
            <button class="qty-btn qty-minus">−</button>
            <button class="qty-btn qty-plus">+</button>
          </div>
          <div class="quantity-presets">
            <button class="qty-preset" data-qty="1">1</button>
            <button class="qty-preset" data-qty="5">5</button>
            <button class="qty-preset" data-qty="10">10</button>
            <button class="qty-preset" data-qty="20">20</button>
            <button class="qty-preset" data-qty="50">50</button>
            <button class="qty-preset" data-qty="0">Clear</button>
          </div>
        </div>
        <div class="quantity-picker-footer">
          <button class="qty-action-btn qty-cancel">Cancel</button>
          <button class="qty-action-btn qty-confirm">Confirm</button>
        </div>
      </div>
    `;let k=p;const D=I.querySelector(".quantity-value"),N=I.querySelector(".qty-minus"),H=I.querySelector(".qty-plus"),q=W=>{k=Math.max(0,Math.min(999,parseInt(W)||0)),D.textContent=k};H.addEventListener("click",()=>{q(k+1)}),N.addEventListener("click",()=>{q(k-1)}),I.querySelectorAll(".qty-preset").forEach(W=>{W.addEventListener("click",()=>{const ue=parseInt(W.dataset.qty);q(ue)})}),I.querySelector(".qty-confirm").addEventListener("click",()=>{k>0?J[d]=k:delete J[d],zr(),I.remove(),o(),_t(),Ne()}),I.querySelector(".qty-cancel").addEventListener("click",()=>{I.remove()}),I.addEventListener("click",W=>{W.target===I&&I.remove()}),document.body.appendChild(I)}o(),e.appendChild(t),e.addEventListener("click",l=>{l.target===e&&r()}),document.addEventListener("keydown",s),document.body.appendChild(e)}function kl(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Vl(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="tutorial-modal">
      <div class="tutorial-header">
        <h2>📖 Welcome to Stickers</h2>
        <button class="tutorial-close" aria-label="Close">&times;</button>
      </div>
      <div class="tutorial-content">
        <div class="tutorial-step">
          <div class="step-number">1</div>
          <div class="step-text">
            <strong>Browse Teams</strong>
            <p>Click any team card to open their sticker album and track which stickers you have.</p>
          </div>
        </div>
        <div class="tutorial-step">
          <div class="step-number">2</div>
          <div class="step-text">
            <strong>Mark Stickers</strong>
            <p>Click stickers in the album to mark them as collected. Each sticker shows its type (Badge, Player, Photo).</p>
          </div>
        </div>
        <div class="tutorial-step">
          <div class="step-number">3</div>
          <div class="step-text">
            <strong>Track Progress</strong>
            <p>See your collection progress at the top and filter by team status (Complete, Incomplete, Not Started).</p>
          </div>
        </div>
      </div>
      <div class="tutorial-actions">
        <button class="tutorial-btn">Got it!</button>
      </div>
    </div>
  `,n.querySelector(".tutorial-close").addEventListener("click",()=>n.remove()),n.querySelector(".tutorial-btn").addEventListener("click",()=>{kt.stickers=!0,to(kt),n.remove()}),n.addEventListener("click",e=>{e.target===n&&n.remove()}),document.body.appendChild(n)}function Nl(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="tutorial-modal">
      <div class="tutorial-header">
        <h2>📅 Match Schedule</h2>
        <button class="tutorial-close" aria-label="Close">&times;</button>
      </div>
      <div class="tutorial-content">
        <div class="tutorial-step">
          <div class="step-number">1</div>
          <div class="step-text">
            <strong>View All Matches</strong>
            <p>The Schedule tab shows all 80 group stage matches for the 2026 FIFA World Cup.</p>
          </div>
        </div>
        <div class="tutorial-step">
          <div class="step-number">2</div>
          <div class="step-text">
            <strong>Auto-Convert Times</strong>
            <p>Match times are automatically converted to your local timezone for easy reference.</p>
          </div>
        </div>
        <div class="tutorial-step">
          <div class="step-number">3</div>
          <div class="step-text">
            <strong>Team Flags</strong>
            <p>Each match displays the team flags and the match stage (Group Stage, etc.)</p>
          </div>
        </div>
      </div>
      <div class="tutorial-actions">
        <button class="tutorial-btn">Got it!</button>
      </div>
    </div>
  `,n.querySelector(".tutorial-close").addEventListener("click",()=>n.remove()),n.querySelector(".tutorial-btn").addEventListener("click",()=>{kt.schedule=!0,to(kt),n.remove()}),n.addEventListener("click",e=>{e.target===n&&n.remove()}),document.body.appendChild(n)}function uv(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="tutorial-modal">
      <div class="tutorial-header">
        <h2>💎 Pro Features</h2>
        <button class="tutorial-close" aria-label="Close">&times;</button>
      </div>
      <div class="tutorial-content">
        <div class="tutorial-step">
          <div class="step-number">1</div>
          <div class="step-text">
            <strong>Track Quantities</strong>
            <p>Count duplicates! See exactly how many of each sticker you own.</p>
          </div>
        </div>
        <div class="tutorial-step">
          <div class="step-number">2</div>
          <div class="step-text">
            <strong>Parallel Variants</strong>
            <p>Collect stickers in 5 different colors: Blue, Red, Purple, Green, and Black.</p>
          </div>
        </div>
        <div class="tutorial-step">
          <div class="step-number">3</div>
          <div class="step-text">
            <strong>One-Time Purchase</strong>
            <p>Unlock Pro features permanently with a single payment. No subscriptions!</p>
          </div>
        </div>
      </div>
      <div class="tutorial-actions">
        <button class="tutorial-btn">Learn More</button>
      </div>
    </div>
  `,n.querySelector(".tutorial-close").addEventListener("click",()=>n.remove()),n.querySelector(".tutorial-btn").addEventListener("click",()=>{kt.pro=!0,to(kt),n.remove(),hv()}),n.addEventListener("click",e=>{e.target===n&&n.remove()}),document.body.appendChild(n)}function hv(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="tutorial-modal">
      <div class="tutorial-header">
        <h2>🚀 Join the Interest List</h2>
        <button class="tutorial-close" aria-label="Close">&times;</button>
      </div>
      <div class="tutorial-content">
        <p style="color: var(--text-secondary); text-align: center; margin-bottom: 20px; font-size: 14px; line-height: 1.6;">
          We're excited about Pro features! Share your email to stay updated on when Pro launches and special early-bird offers.
        </p>
        <input type="email" id="email-input" placeholder="your@email.com" style="width: 100%; padding: 12px; border: 1px solid #dadce0; border-radius: 8px; font-size: 14px; font-family: 'Roboto', sans-serif;">
      </div>
      <div class="tutorial-actions">
        <button class="tutorial-btn" id="signup-btn">Notify Me</button>
      </div>
    </div>
  `,n.querySelector(".tutorial-close").addEventListener("click",()=>n.remove());const e=n.querySelector("#signup-btn"),t=n.querySelector("#email-input");e.addEventListener("click",async()=>{const r=t.value.trim();if(!r||!r.includes("@")){alert("Please enter a valid email");return}try{e.disabled=!0,e.textContent="Saving...",await XE(Wh(Ws,"interest-emails"),{email:r,timestamp:new Date,userAgent:navigator.userAgent}),e.textContent="✓ Thank you!",setTimeout(()=>n.remove(),1500)}catch(s){console.error("Error saving email:",s),alert("Error saving email. Please try again."),e.disabled=!1,e.textContent="Notify Me"}}),n.addEventListener("click",r=>{r.target===n&&n.remove()}),document.body.appendChild(n),t.focus()}async function dv(){try{const n=await JE(Wh(Ws,"interest-emails")),e=[];if(n.forEach(a=>{var l,h,d;e.push({email:a.data().email,date:((d=(h=(l=a.data().timestamp)==null?void 0:l.toDate)==null?void 0:h.call(l))==null?void 0:d.toLocaleString())||"N/A"})}),e.length===0){alert("No emails collected yet!");return}let t=`Email,Date
`;e.forEach(a=>{t+=`"${a.email}","${a.date}"
`});const r=new Blob([t],{type:"text/csv"}),s=window.URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.download=`interest-emails-${new Date().toISOString().split("T")[0]}.csv`,o.click(),window.URL.revokeObjectURL(s)}catch(n){console.error("Error exporting emails:",n),alert("Error exporting emails: "+n.message)}}function Yo(){const n=document.getElementById("auth-section");n&&(qt?(n.innerHTML=`
      <div class="user-pill">
        ${qt.photoURL?`<img src="${kl(qt.photoURL)}" class="user-avatar" referrerpolicy="no-referrer" alt="">`:'<span class="user-avatar-placeholder"><i class="ti ti-user"></i></span>'}
        <span class="user-name">${kl((qt.displayName||"User").split(" ")[0])}</span>
        ${be.purchased?'<span class="pro-badge">PRO</span>':'<button class="pro-btn" id="pro-btn" title="Unlock pro features">Unlock Pro</button>'}
        <button class="sign-out-btn" id="sign-out-btn" title="Sign out"><i class="ti ti-logout"></i></button>
      </div>
    `,be.purchased||document.getElementById("pro-btn").addEventListener("click",uv),document.getElementById("sign-out-btn").addEventListener("click",()=>Tp(eo))):(n.innerHTML=`
      <button class="sign-in-btn" id="sign-in-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Sign in with Google
      </button>
    `,document.getElementById("sign-in-btn").addEventListener("click",async()=>{try{await qp(eo,ev)}catch(e){e.code!=="auth/popup-closed-by-user"&&console.error("Sign in error",e)}})))}function fv(){const n=document.createElement("div");n.className="confirm-overlay",n.innerHTML=`
    <div class="confirm-box">
      <h3>Reset all progress?</h3>
      <p>This will clear all your sticker data. This cannot be undone.</p>
      <div class="confirm-btns">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-confirm">Reset</button>
      </div>
    </div>
  `,n.querySelector(".btn-cancel").addEventListener("click",()=>n.remove()),n.querySelector(".btn-confirm").addEventListener("click",()=>{J={},er(J),Zo(J),n.remove(),Ne()}),n.addEventListener("click",e=>{e.target===n&&n.remove()}),document.body.appendChild(n)}function mv(){document.getElementById("app").innerHTML=`
    <header class="header">
      <div class="header-inner">
        <div class="header-tabs">
          <div class="tab-group">
            <button class="header-tab active" data-tab="stickers"><i class="ti ti-album"></i> Stickers</button>
            <button class="tab-help-btn" id="stickers-help" title="Tutorial" aria-label="Stickers tutorial"><i class="ti ti-help"></i></button>
          </div>
          <div class="tab-group">
            <button class="header-tab" data-tab="schedule"><i class="ti ti-calendar"></i> Schedule</button>
            <button class="tab-help-btn" id="schedule-help" title="Tutorial" aria-label="Schedule tutorial"><i class="ti ti-help"></i></button>
          </div>
        </div>
        <div class="header-top">
          <div>
            <div class="header-title">Jogo</div>
            <div class="header-sub">${rs} stickers · 48 teams</div>
          </div>
          <div class="header-actions">
            <button class="reset-btn" id="reset-btn" aria-label="Reset all progress">Reset</button>
            <button class="reset-btn" id="export-emails-btn" aria-label="Export interest emails"><i class="ti ti-download"></i></button>
            <div id="auth-section"></div>
          </div>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" id="global-bar" style="width:0%"></div>
        </div>
      </div>
    </header>

    <div class="app-body">
      <aside class="sidebar">
        <div class="stats-row">
          <div class="stat-card"><div class="stat-val" id="s-have">0</div><div class="stat-lbl">collected</div></div>
          <div class="stat-card"><div class="stat-val" id="s-need">${rs}</div><div class="stat-lbl">missing</div></div>
          <div class="stat-card"><div class="stat-val" id="s-pct">0%</div><div class="stat-lbl">complete</div></div>
          <div class="stat-card"><div class="stat-val" id="s-dupes">0</div><div class="stat-lbl">duplicates</div></div>
        </div>
        <div class="sidebar-section-label">Filter</div>
        <div class="search-wrap">
          <input type="search" id="search" placeholder="Search team or code…" autocomplete="off" />
        </div>
        <div class="filter-row">
          <div class="fchip active" data-f="all">All</div>
          <div class="fchip" data-f="incomplete">Incomplete</div>
          <div class="fchip" data-f="complete">Complete</div>
          <div class="fchip" data-f="none">Not started</div>
        </div>
        <div class="sidebar-divider"></div>
        <div class="sidebar-section-label">View</div>
        <div class="view-toggle-row">
          <button class="view-toggle-btn" data-v="list"><i class="ti ti-list"></i> List</button>
          <button class="view-toggle-btn active" data-v="group"><i class="ti ti-layout-grid"></i> By Group</button>
        </div>
      </aside>
      <div class="main-content">
        <div id="teams-container"></div>
      </div>
    </div>
  `,document.getElementById("search").addEventListener("input",Ne),document.querySelectorAll(".fchip").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".fchip").forEach(e=>e.classList.remove("active")),n.classList.add("active"),ns=n.dataset.f,Ne()})}),document.querySelectorAll(".view-toggle-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".view-toggle-btn").forEach(e=>e.classList.remove("active")),n.classList.add("active"),ld=n.dataset.v==="group",Ne()})}),document.querySelectorAll("[data-tab]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("[data-tab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),Pl=n.dataset.tab;const e=document.querySelector(".sidebar");Pl==="schedule"?(e.classList.add("hidden"),cv(),kt.schedule||setTimeout(()=>Nl(),300)):(document.getElementById("search").value="",e.classList.remove("hidden"),Ne())})}),document.getElementById("stickers-help").addEventListener("click",Vl),document.getElementById("schedule-help").addEventListener("click",Nl),document.getElementById("reset-btn").addEventListener("click",fv),document.getElementById("export-emails-btn").addEventListener("click",dv),Yo(),Ne(),kt.stickers||setTimeout(()=>Vl(),800)}mv();vp(eo,async n=>{if(qt=n,n){try{const e=await Rl(Jo(n.uid));e.exists()?(J=e.data().owned||{},er(J)):Object.keys(J).length>0&&await Zo(J);const t=await Rl(ud(n.uid));t.exists()&&(be={purchased:t.data().purchased,purchaseDate:t.data().purchaseDate},xl(be))}catch(e){console.error("Failed to load cloud data",e)}rv(n.uid)}else sv(),J={},er({}),be={purchased:!1,purchaseDate:null};Yo(),_t(),Ne()});
