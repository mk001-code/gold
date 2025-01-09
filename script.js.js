// script.js

// Grab the hamburger icon and nav links
const hamburger = document.getElementById("hamburger-icon");
const navLinks = document.querySelector(".nav-links");

// Toggle the 'active' class on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
