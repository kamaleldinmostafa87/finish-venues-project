function toggleQuestion(event) {
  
  const answer = this.nextElementSibling;
  const answerHeight = answer.style.height;

  const isToggled = !answerHeight || answerHeight == "0px" ? false : true;
  if (isToggled) {
    answer.style.height = 0 + "px";
    answer.style.opacity = 0;
    this.closest(".head").querySelector(".expand-icon").innerText = "+";
  } else {
    answer.style.height = answer.scrollHeight + "px";
    answer.style.opacity = 1;
    this.closest(".head").querySelector(".expand-icon").innerText = "-";
  }
}

window.onload = function () {
  const questions = document.querySelectorAll(".question-container .head");

  Array.from(questions).forEach((q) =>
    q.addEventListener("click", toggleQuestion)
  );
};
