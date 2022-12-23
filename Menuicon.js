const menuIcon = document.querySelector(".nav-icons");
const mainNavigation = document.querySelector("main-nav");

menuIcon.addEventListener("click", (n) => {
  mainNavigation.classList.toggle("nav-open");
  document.body.classList.toggle("hidden");
});
