const slider = document.querySelector("input");
const before = document.querySelector(".before");
const dragger = document.querySelector(".dragger");

slider.addEventListener("input", (e) => {
  const value = e.target.value + "%";
  before.style.width = value;
  dragger.style.left = `calc(${value})`;
});