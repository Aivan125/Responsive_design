const navbar = document.querySelector(".btn-mobile-nav");

navbar.addEventListener("click", () => {
  const mainNav = document.querySelector(".main-nav");
  const btn = document.querySelector(".btn-mobile-nav");

  mainNav.classList.toggle("nav-open");
  btn.classList.toggle("nav-open");
});
