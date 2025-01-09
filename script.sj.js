// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger-icon");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Search Filtering for Discussions
const searchInput = document.getElementById("search-bar");
const discussions = document.querySelectorAll(".discussion");

searchInput.addEventListener("input", function() {
  const searchQuery = searchInput.value.toLowerCase();

  discussions.forEach((discussion) => {
    const title = discussion.querySelector("h4").textContent.toLowerCase();
    if (title.includes(searchQuery)) {
      discussion.style.display = "block";
    } else {
      discussion.style.display = "none";
    }
  });
});
