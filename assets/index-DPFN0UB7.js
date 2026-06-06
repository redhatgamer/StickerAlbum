(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function t(){return[{n:1,t:"Badge",foil:!0},{n:2,t:"Player",foil:!1},{n:3,t:"Player",foil:!1},{n:4,t:"Player",foil:!1},{n:5,t:"Player",foil:!1},{n:6,t:"Player",foil:!1},{n:7,t:"Player",foil:!1},{n:8,t:"Player",foil:!1},{n:9,t:"Player",foil:!1},{n:10,t:"Player",foil:!1},{n:11,t:"Player",foil:!1},{n:12,t:"Player",foil:!1},{n:13,t:"Photo",foil:!1},{n:14,t:"Player",foil:!1},{n:15,t:"Player",foil:!1},{n:16,t:"Player",foil:!1},{n:17,t:"Player",foil:!1},{n:18,t:"Player",foil:!1},{n:19,t:"Player",foil:!1},{n:20,t:"Player",foil:!1}]}const P=[{code:"INT",name:"Introduction",flag:"🏆",stickers:[{n:1,t:"Logo",foil:!0},{n:2,t:"Trophy",foil:!0},{n:3,t:"Mascot",foil:!0},{n:4,t:"Emblem",foil:!0},{n:5,t:"USA Host",foil:!1},{n:6,t:"Canada Host",foil:!1},{n:7,t:"Mexico Host",foil:!1},{n:8,t:"Intro",foil:!1},{n:9,t:"Intro",foil:!1}]},{code:"FWC",name:"World Cup History",flag:"🏆",stickers:Array.from({length:19},(e,a)=>({n:a+1,t:"History",foil:a<3}))},{code:"ALG",name:"Algeria",flag:"🇩🇿",stickers:t()},{code:"ARG",name:"Argentina",flag:"🇦🇷",stickers:t()},{code:"AUS",name:"Australia",flag:"🇦🇺",stickers:t()},{code:"AUT",name:"Austria",flag:"🇦🇹",stickers:t()},{code:"BEL",name:"Belgium",flag:"🇧🇪",stickers:t()},{code:"BIH",name:"Bosnia-Herzegovina",flag:"🇧🇦",stickers:t()},{code:"BRA",name:"Brazil",flag:"🇧🇷",stickers:t()},{code:"CAN",name:"Canada",flag:"🇨🇦",stickers:t()},{code:"CIV",name:"Côte d'Ivoire",flag:"🇨🇮",stickers:t()},{code:"COD",name:"DR Congo",flag:"🇨🇩",stickers:t()},{code:"COL",name:"Colombia",flag:"🇨🇴",stickers:t()},{code:"CPV",name:"Cape Verde",flag:"🇨🇻",stickers:t()},{code:"CRO",name:"Croatia",flag:"🇭🇷",stickers:t()},{code:"CUW",name:"Curaçao",flag:"🇨🇼",stickers:t()},{code:"CZE",name:"Czechia",flag:"🇨🇿",stickers:t()},{code:"ECU",name:"Ecuador",flag:"🇪🇨",stickers:t()},{code:"EGY",name:"Egypt",flag:"🇪🇬",stickers:t()},{code:"ENG",name:"England",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",stickers:t()},{code:"ESP",name:"Spain",flag:"🇪🇸",stickers:t()},{code:"FRA",name:"France",flag:"🇫🇷",stickers:t()},{code:"GER",name:"Germany",flag:"🇩🇪",stickers:t()},{code:"GHA",name:"Ghana",flag:"🇬🇭",stickers:t()},{code:"HAI",name:"Haiti",flag:"🇭🇹",stickers:t()},{code:"IRN",name:"Iran",flag:"🇮🇷",stickers:t()},{code:"IRQ",name:"Iraq",flag:"🇮🇶",stickers:t()},{code:"JOR",name:"Jordan",flag:"🇯🇴",stickers:t()},{code:"JPN",name:"Japan",flag:"🇯🇵",stickers:t()},{code:"KOR",name:"South Korea",flag:"🇰🇷",stickers:t()},{code:"KSA",name:"Saudi Arabia",flag:"🇸🇦",stickers:t()},{code:"MAR",name:"Morocco",flag:"🇲🇦",stickers:t()},{code:"MEX",name:"Mexico",flag:"🇲🇽",stickers:t()},{code:"NED",name:"Netherlands",flag:"🇳🇱",stickers:t()},{code:"NOR",name:"Norway",flag:"🇳🇴",stickers:t()},{code:"NZL",name:"New Zealand",flag:"🇳🇿",stickers:t()},{code:"PAN",name:"Panama",flag:"🇵🇦",stickers:t()},{code:"PAR",name:"Paraguay",flag:"🇵🇾",stickers:t()},{code:"POR",name:"Portugal",flag:"🇵🇹",stickers:t()},{code:"QAT",name:"Qatar",flag:"🇶🇦",stickers:t()},{code:"RSA",name:"South Africa",flag:"🇿🇦",stickers:t()},{code:"SCO",name:"Scotland",flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",stickers:t()},{code:"SEN",name:"Senegal",flag:"🇸🇳",stickers:t()},{code:"SUI",name:"Switzerland",flag:"🇨🇭",stickers:t()},{code:"SWE",name:"Sweden",flag:"🇸🇪",stickers:t()},{code:"TUN",name:"Tunisia",flag:"🇹🇳",stickers:t()},{code:"TUR",name:"Turkey",flag:"🇹🇷",stickers:t()},{code:"URU",name:"Uruguay",flag:"🇺🇾",stickers:t()},{code:"USA",name:"United States",flag:"🇺🇸",stickers:t()},{code:"UZB",name:"Uzbekistan",flag:"🇺🇿",stickers:t()}],y=980,A={Special:["INT","FWC"],A:["MEX","RSA","KOR","CZE"],B:["CAN","BIH","QAT","SUI"],C:["BRA","MAR","HAI","SCO"],D:["USA","PAR","AUS","TUR"],E:["GER","CUW","CIV","ECU"],F:["NED","JPN","SWE","TUN"],G:["BEL","EGY","IRN","NZL"],H:["ESP","CPV","KSA","URU"],I:["FRA","SEN","IRQ","NOR"],J:["ARG","ALG","AUT","JOR"],K:["POR","COD","UZB","COL"],L:["ENG","CRO","GHA","PAN"]},L="wc2026_stickers";function R(){try{const e=localStorage.getItem(L);return e?JSON.parse(e):{}}catch{return{}}}function b(e){try{localStorage.setItem(L,JSON.stringify(e))}catch{}}function h(e,a){return`${e}_${a}`}let r=R(),k="all",N=!1;Object.entries(A).forEach(([e,a])=>a.forEach(l=>{}));function C(e){return e.stickers.filter(a=>r[h(e.code,a.n)]).length}function w(){return Object.keys(r).filter(e=>r[e]).length}function I(e){const a=C(e),l=e.stickers.length;return k==="complete"?a===l:k==="incomplete"?a>0&&a<l:k==="none"?a===0:!0}function g(){const e=w(),a=Math.round(e/y*100);document.getElementById("s-have").textContent=e,document.getElementById("s-need").textContent=y-e,document.getElementById("s-pct").textContent=a+"%",document.getElementById("global-bar").style.width=a+"%"}function S(e){const a=C(e),l=e.stickers.length,c=Math.round(a/l*100),s=document.createElement("div");s.className="team-card";const i=document.createElement("div");return i.className="team-header",i.setAttribute("role","button"),i.setAttribute("aria-label",`Open ${e.name} sticker album`),i.innerHTML=`
    <div class="team-flag">${e.flag}</div>
    <div class="team-info">
      <div class="team-name">${e.name}</div>
      <div class="team-code">${e.code} &middot; ${a}/${l}</div>
    </div>
    <div class="team-progress">
      <div class="mini-bar"><div class="mini-bar-fill" style="width:${c}%"></div></div>
    </div>
    <i class="ti ti-layout-grid-add team-open-icon" aria-hidden="true"></i>
  `,i.addEventListener("click",()=>O(e)),s.appendChild(i),s}function d(){const e=document.getElementById("search").value.toLowerCase().trim(),a=document.getElementById("teams-container");a.innerHTML="";const l=P.filter(c=>c.name.toLowerCase().includes(e)||c.code.toLowerCase().includes(e)).filter(I);if(!l.length){a.innerHTML='<div class="empty-msg">No teams match your filter.</div>',g();return}if(N){new Set(l.map(s=>s.code));const c=Object.fromEntries(l.map(s=>[s.code,s]));Object.entries(A).forEach(([s,i])=>{const o=i.map(n=>c[n]).filter(Boolean);if(!o.length)return;const f=document.createElement("div");f.className="group-section";const u=document.createElement("div");u.className="group-header",u.textContent=s==="Special"?"★ Special":`Group ${s}`,f.appendChild(u);const v=document.createElement("div");v.className="teams-list",o.forEach(n=>v.appendChild(S(n))),f.appendChild(v),a.appendChild(f)})}else{const c=document.createElement("div");c.className="teams-list",l.forEach(s=>c.appendChild(S(s))),a.appendChild(c)}g()}function O(e){const a=document.createElement("div");a.className="modal-overlay";const l=document.createElement("div");l.className="album-modal";function c(){a.remove(),document.removeEventListener("keydown",s)}function s(o){o.key==="Escape"&&c()}function i(){const o=C(e),f=e.stickers.length,u=Math.round(o/f*100);l.innerHTML=`
      <div class="album-modal-header">
        <div class="album-modal-team-info">
          <span class="album-modal-flag">${e.flag}</span>
          <div>
            <div class="album-modal-name">${e.name}</div>
            <div class="album-modal-meta">${e.code} &nbsp;·&nbsp; ${o} / ${f} &nbsp;·&nbsp; ${u}%</div>
          </div>
        </div>
        <button class="album-close-btn" aria-label="Close">&times;</button>
      </div>
      <div class="album-progress-wrap">
        <div class="album-progress-fill" style="width:${u}%"></div>
      </div>
      <div class="album-sticker-grid"></div>
      <div class="album-modal-footer">
        <button class="album-action-btn album-clear-all">Clear all</button>
        <button class="album-action-btn album-mark-all">Mark all collected</button>
      </div>
    `;const v=l.querySelector(".album-sticker-grid");e.stickers.forEach(n=>{const p=h(e.code,n.n),E=!!r[p],m=document.createElement("div");m.className="album-sticker"+(E?" have":"")+(n.foil?" foil":""),m.setAttribute("role","checkbox"),m.setAttribute("aria-checked",String(E)),m.setAttribute("aria-label",`${e.code} ${n.n} ${n.t}`),m.innerHTML=`
        <div class="album-sticker-inner">
          ${n.foil?'<div class="album-foil-badge">✦</div>':""}
          ${E?'<div class="album-check"><i class="ti ti-check"></i></div>':""}
          <div class="album-sticker-num">${e.code}<br>${n.n}</div>
          <div class="album-sticker-type">${n.t}</div>
        </div>
      `,m.addEventListener("click",()=>{r[p]?delete r[p]:r[p]=!0,b(r),i(),g(),d()}),v.appendChild(m)}),l.querySelector(".album-close-btn").addEventListener("click",c),l.querySelector(".album-mark-all").addEventListener("click",()=>{e.stickers.forEach(n=>{r[h(e.code,n.n)]=!0}),b(r),i(),g(),d()}),l.querySelector(".album-clear-all").addEventListener("click",()=>{e.stickers.forEach(n=>{delete r[h(e.code,n.n)]}),b(r),i(),g(),d()})}i(),a.appendChild(l),a.addEventListener("click",o=>{o.target===a&&c()}),document.addEventListener("keydown",s),document.body.appendChild(a)}function T(){const e=document.createElement("div");e.className="confirm-overlay",e.innerHTML=`
    <div class="confirm-box">
      <h3>Reset all progress?</h3>
      <p>This will clear all your sticker data. This cannot be undone.</p>
      <div class="confirm-btns">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-confirm">Reset</button>
      </div>
    </div>
  `,e.querySelector(".btn-cancel").addEventListener("click",()=>e.remove()),e.querySelector(".btn-confirm").addEventListener("click",()=>{r={},b(r),e.remove(),d()}),e.addEventListener("click",a=>{a.target===e&&e.remove()}),document.body.appendChild(e)}function U(){document.getElementById("app").innerHTML=`
    <header class="header">
      <div class="header-inner">
        <div class="header-top">
          <div>
            <div class="header-title">Panini World Cup 2026 Stickers</div>
            <div class="header-sub">Panini official · ${y} stickers · 48 teams</div>
          </div>
          <button class="reset-btn" id="reset-btn" aria-label="Reset all progress">Reset</button>
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
          <div class="stat-card"><div class="stat-val" id="s-need">${y}</div><div class="stat-lbl">missing</div></div>
          <div class="stat-card"><div class="stat-val" id="s-pct">0%</div><div class="stat-lbl">complete</div></div>
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
          <button class="view-toggle-btn active" data-v="list"><i class="ti ti-list"></i> List</button>
          <button class="view-toggle-btn" data-v="group"><i class="ti ti-layout-grid"></i> By Group</button>
        </div>
      </aside>
      <div class="main-content">
        <div id="teams-container"></div>
      </div>
    </div>
  `,document.getElementById("search").addEventListener("input",d),document.querySelectorAll(".fchip").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".fchip").forEach(a=>a.classList.remove("active")),e.classList.add("active"),k=e.dataset.f,d()})}),document.querySelectorAll(".view-toggle-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".view-toggle-btn").forEach(a=>a.classList.remove("active")),e.classList.add("active"),N=e.dataset.v==="group",d()})}),document.getElementById("reset-btn").addEventListener("click",T),d()}U();
