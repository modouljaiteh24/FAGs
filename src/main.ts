const btn = document.getElementById("btn") as any;
const textAnswer1 = document.getElementById("text-answer") as HTMLElement;
const plusIcon = document.getElementById("plus-icon") as HTMLElement;
const minusIcon = document.getElementById("minus-icon") as HTMLElement;

// btn.addEventListener("click", () => {
//   // if (!textAnswer1 || !plusIcon || !minusIcon) return;

//   textAnswer1.classList.toggle("hidden");
//   plusIcon.classList.toggle("hidden");
//   minusIcon.classList.toggle("hidden");
// });

btn.addEventListener("click", () => {
  textAnswer1.classList.toggle("hidden");
  minusIcon.classList.toggle("hidden");
  plusIcon.classList.toggle("hidden");
});

// btn.forEach((button: Element) => {
//   button.addEventListener("click", () => {
//     textAnswer1.classList.toggle("hidden");
//     minusIcon.classList.toggle("hidden");
//     plusIcon.classList.toggle("hidden");
//   });

//   alert()
// });
