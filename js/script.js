window.addEventListener("load", () => {
  const hamburger = document.querySelector(".btn__menu");
  const sidebar = document.querySelector(".gnav");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
  });
});
