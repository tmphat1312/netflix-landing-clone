"use strict";

//|| CAPTCHA TERM AND POLICY
(function captchaTermAndPolicy() {
  let more = document.querySelector(".captcha .learn-more");
  let info = document.querySelector(".captcha .info");
  
  more.addEventListener("click", evt => {
    evt.preventDefault();
    info.style.visibility = "visible";
  });
})();

//|| SHOW OR HIDE PASSWORD
(function toggleShowPassword() {
  let passField = document.querySelector("input[type='password'");
  let hide = document.querySelector(".pass-hide");
  let show = document.querySelector(".pass-show");

  hide.addEventListener("click", function({target}) {
    passField.type = "password";
    hide.style.display = "none";
    show.style.display = "revert";
    passField.focus();
  });
  
  show.addEventListener("click", function({target}) {
    passField.type = "text";
    hide.style.display = "revert";
    show.style.display = "none";
    passField.focus();
  });
})();
