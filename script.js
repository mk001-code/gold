// Toggle the mobile menu when the hamburger icon is clicked
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
