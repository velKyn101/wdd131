window.addEventListener("DOMContentLoaded",()=>{
    const e=(new Date).getFullYear();
    document.getElementById("currentyear").textContent=e;
    const t=document.lastModified;
    document.getElementById("lastModified").textContent=t}),window.addEventListener("pageshow",e=>{"back_forward"===performance.getEntriesByType("navigation")[0].type&&console.log("This page was loaded from bfcache.")}),window.addEventListener("pagehide",e=>{e.persisted&&console.log("This page is being put into bfcache.")});