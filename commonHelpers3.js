import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as r}from"./assets/vendor-78be7656.js";const n="feedback-form-state";let t=document.querySelector("[name=email]"),a=document.querySelector("[name=message]");const l=document.querySelector(".feedback-form");l.addEventListener("submit",c);t.addEventListener("input",s);a.addEventListener("input",s);m();function m(){const e=JSON.parse(localStorage.getItem(n))??{};t.value=e.email??" ",a.value=e.message??" "}const u=r(function(e,o){localStorage.setItem(e,JSON.stringify(o))},500);function s(e){const o={email:t.value,message:a.value};u(n,o)}function c(e){e.preventDefault(),t.value.trim()===""?alert("You need to enter email!"):a.value.trim()===""?alert("You need to enter message!"):i()}function i(){let e={email:t.value,message:a.value};console.log(e),l.reset(),localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers3.js.map