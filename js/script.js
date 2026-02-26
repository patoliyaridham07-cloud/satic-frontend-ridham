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

/* Auto close on link click */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("nav-open");
        hamburger.textContent = "☰";
        document.body.style.overflow = "auto";
    });
});
