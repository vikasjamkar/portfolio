document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#navArrow");
  const header = document.querySelector("header");
  const Navbar = document.querySelector("#deskNav");
  const icon = document.querySelector("#jus");
  const box = document.querySelector("#container");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.display = "block";
      header.style.background = "black";
    } else {
      nav.style.display = "none";
      header.style.background = "";
    }
  });
  Navbar.addEventListener("click", () => {
    icon.classList.toggle("bi-x-lg");
    box.classList.toggle("nav_container");
  });
});
AOS.init();
