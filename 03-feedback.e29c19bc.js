var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var r=o("kEUo3");const l=document.querySelector(".feedback-form"),n=document.querySelector(".feedback-form input"),u=document.querySelector(".feedback-form textarea");let d=localStorage.getItem("feedback-form-state"),i=JSON.parse(d),c="",f="";l.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),localStorage.setItem("feedback-form-state",JSON.stringify({message:`${f}`,email:`${c}`})),console.log(localStorage.getItem("feedback-form-state")),n.value="",u.value=""})),u.addEventListener("input",r.debounce((function(e){f=e.target.value}),1e3)),n.addEventListener("input",r.debounce((function(e){c=e.target.value}),1e3)),null===i.email&&null===i.message||(n.value=`${i.email}`,u.value=`${i.message}`),c=n.value,f=u.value;
//# sourceMappingURL=03-feedback.e29c19bc.js.map
