const humberger__icon = document.querySelector("#humberger__icon");
const close__icon = document.querySelector(".close__icon");
const mob__nav = document.querySelector(".mobile__nav__container");

humberger__icon.addEventListener("click", () => {
  mob__nav.style.display = "block";
  mob__nav.style.transition = "all 0.5s ease-in-out";
});

close__icon.addEventListener("click", () => {
  mob__nav.style.display = "none";
});