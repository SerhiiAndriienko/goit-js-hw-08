!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var r=o("1WSnx"),n=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form input"),c=document.querySelector(".feedback-form textarea"),i=localStorage.getItem("feedback-form-state"),f=JSON.parse(i),d="",u="";n.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),l.value="",c.value=""})),c.addEventListener("input",r.throttle((function(e){u=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({message:"".concat(u),email:"".concat(d)}))}),500)),l.addEventListener("input",r.throttle((function(e){d=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({message:"".concat(u),email:"".concat(d)}))}),500)),i&&(l.value="".concat(f.email),c.value="".concat(f.message))}();
//# sourceMappingURL=03-feedback.ac011a44.js.map
