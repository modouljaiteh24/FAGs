const btn = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>;
const textAnswer = document.querySelectorAll(".text-answer");
const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");

// btn.addEventListener("click", () => {
//   // if (!textAnswer1 || !plusIcon || !minusIcon) return;

//   textAnswer1.classList.toggle("hidden");
//   plusIcon.classList.toggle("hidden");
//   minusIcon.classList.toggle("hidden");
// });

// btn.addEventListener("click", () => {
//   textAnswer1.classList.toggle("hidden");
//   minusIcon.classList.toggle("hidden");
//   plusIcon.classList.toggle("hidden");
// });

btn.forEach((button: Element, index) => {
  button.addEventListener("click", () => {
    textAnswer?.[index].classList.toggle("hidden");
    minusIcon?.[index].classList.toggle("hidden");
    plusIcon?.[index].classList.toggle("hidden");
  });
});
