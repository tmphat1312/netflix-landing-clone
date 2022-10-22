"use strict";

//|| FREQUENTLY ASKED QUESTIONS
(function FAQ() {
  let list = document.querySelectorAll(".faq-list > li");
  let questions = document.querySelectorAll(".faq-list .question-wrapper");
  let currentActive = -1;

  questions.forEach((question, idx) => {
    question.addEventListener("click", evt => {
      if (~currentActive && (currentActive != idx)) {
        list[currentActive].classList.remove("active");
      }
      list[idx].classList.toggle("active");
      currentActive = idx;
    })
  });
})();
