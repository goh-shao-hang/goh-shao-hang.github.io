const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
nav.classList.toggle("open"); // Add the 'open' class on the nav element if it doesnt have it, and remove if it does
});