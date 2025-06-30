import{a as d,S as g,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="19753267-9cf01e6822d74b7ae8fe04f3f",h="https://pixabay.com/api/",b=d.create({baseURL:h,params:{key:y,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function L(s){try{return(await b.get("",{params:{q:s.trim()}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const p=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),S=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:m,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img 
            class="gallery-image" 
            src="${o}" 
            alt="${e}" 
            loading="lazy" 
          />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${t}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span>${a}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span>${m}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span>${f}</span>
            </p>
          </div>
        </a>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",r),S.refresh()}function w(){p.innerHTML=""}function q(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const P=document.querySelector(".form"),l=document.querySelector('input[name="search-text"]');P.addEventListener("submit",$);async function $(s){s.preventDefault();const r=l.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}try{w(),q();const o=await L(r);if(c(),o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits),n.success({title:"Success",message:`Found ${o.totalHits} images!`,position:"topRight"})}catch(o){c(),console.error("Search error:",o),n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}l.value=""}
//# sourceMappingURL=index.js.map
