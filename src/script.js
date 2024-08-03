document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#navArrow");
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.display = "block";
      header.style.borderBottom = "1px solid grey";
    } else {
      nav.style.display = "none";
      header.style.background = "";
      header.style.borderBottom = "";
    }
  });
});
AOS.init();
