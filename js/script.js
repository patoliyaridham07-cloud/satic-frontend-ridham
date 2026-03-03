/* ================= NAVBAR ================= */

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

if (hamburger && navbar) {
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
}

/* Auto close when clicking link */
if (navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav-open");
      hamburger.textContent = "☰";
      document.body.style.overflow = "auto";
    });
  });
}

/* ================= SEARCH FORM ================= */

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

if (form && input) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") {
      alert("Please enter a search term");
    } else {
      console.log("Searching for:", value);
    }
  });
}

/* ================= TOAST NOTIFICATION ================= */

const toastContainer = document.getElementById("toast-container");
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");

function showToast(message, type) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  toast.innerHTML = `
    <span>${message}</span>
    <button>&times;</button>
  `;

  toastContainer.appendChild(toast);

  // Manual close
  toast.querySelector("button").addEventListener("click", () => {
    toast.remove();
  });

  // Auto remove after 3 sec
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* Button Events */
if (successBtn) {
  successBtn.addEventListener("click", () => {
    showToast("Success! Task completed.", "success");
  });
}

if (errorBtn) {
  errorBtn.addEventListener("click", () => {
    showToast("Error! Something went wrong.", "error");
  });
}
