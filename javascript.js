const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

window.addEventListener("load", () => {
  document.querySelector(".content").classList.add("visible");
  document.querySelector(".dw-logo").classList.add("visible");
});

document.querySelector(".action").addEventListener("click", () => {
  alert("Welcome to Datawiz!");
});
