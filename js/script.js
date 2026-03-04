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
/* ================= CONTACT VALIDATION ================= */

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateName() {
  const value = nameInput.value.trim();

  if (value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    return false;
  }

  nameError.textContent = "";
  nameInput.classList.remove("invalid");
  nameInput.classList.add("valid");
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (!value.includes("@") || !value.includes(".")) {
    emailError.textContent = "Enter a valid email.";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    return false;
  }

  emailError.textContent = "";
  emailInput.classList.remove("invalid");
  emailInput.classList.add("valid");
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();

  if (value === "") {
    messageError.textContent = "Message cannot be empty.";
    messageInput.classList.add("invalid");
    messageInput.classList.remove("valid");
    return false;
  }

  messageError.textContent = "";
  messageInput.classList.remove("invalid");
  messageInput.classList.add("valid");
  return true;
}

function checkFormValidity() {
  if (validateName() && validateEmail() && validateMessage()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

/* Real-time validation */
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
messageInput.addEventListener("input", checkFormValidity);

/* Prevent default submit */
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form Submitted Successfully!");
});
