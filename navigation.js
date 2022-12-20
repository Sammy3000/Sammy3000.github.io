const menuIcon = document.querySelector("nav-icons");
const mainNavigation = document.querySelector(".main-nav");

menuIcon.addEventListener("click", () => {
  mainNavigation.classList.toggle("desktop-menu");
  document.body.classList.toggle("hidden");
});
