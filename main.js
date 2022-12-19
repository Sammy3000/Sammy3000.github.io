const menuIcons = document.querySelector(".nav-icons");
const mainNavigation = document.querySelector(".main-nav");
menuIcons.addEventListener("click", () => {
  mainNavigation.classList.toggle("nav-open");
});
