!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var n=o("1WSnx"),r=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form input"),c=document.querySelector(".feedback-form textarea"),u=localStorage.getItem("feedback-form-state"),i=JSON.parse(u),d="",f="";r.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),localStorage.setItem("feedback-form-state",JSON.stringify({message:"".concat(f),email:"".concat(d)})),console.log(localStorage.getItem("feedback-form-state")),l.value="",c.value=""})),c.addEventListener("input",n.debounce((function(e){f=e.target.value}),1e3)),l.addEventListener("input",n.debounce((function(e){d=e.target.value}),1e3)),""===i.email&&""===i.message||(l.value="".concat(i.email),c.value="".concat(i.message)),d=l.value,f=c.value}();
//# sourceMappingURL=03-feedback.cbb62ed6.js.map