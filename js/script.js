console.log(navbar);
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");

  if (navbar.classList.contains("nav-open")) {
    hamburger.textContent = "✖";
    document.body.style.overflow = "hidden";
  } else {
    hamburger.textContent = "☰";
    document.body.style.overflow = "auto";
  }
});

/* Auto close */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
    hamburger.textContent = "☰";
    document.body.style.overflow = "auto";
  });
});
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload

  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a search term");
  } else {
    console.log("Searching for:", value);
  }
});
