/* ================= NAVBAR ================= */

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

if (hamburger && navbar) {

  hamburger.addEventListener("click", () => {

    navbar.classList.toggle("nav-open");

    if (navbar.classList.contains("nav-open")) {
      hamburger.textContent = "✖";
      hamburger.setAttribute("aria-expanded","true");
      document.body.style.overflow = "hidden";
    } 
    else {
      hamburger.textContent = "☰";
      hamburger.setAttribute("aria-expanded","false");
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
      hamburger.setAttribute("aria-expanded","false");
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
    } 
    else {
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

  toast.querySelector("button").addEventListener("click", () => {
    toast.remove();
  });

  setTimeout(() => {
    toast.remove();
  }, 3000);

}

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


/* ================= CONTACT FORM VALIDATION ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateName(){

const value = nameInput.value.trim();

if(value.length < 3){

nameError.textContent = "Name must be at least 3 characters.";
nameInput.classList.add("invalid");
nameInput.classList.remove("valid");
return false;

}

nameError.textContent="";
nameInput.classList.remove("invalid");
nameInput.classList.add("valid");
return true;

}

function validateEmail(){

const value = emailInput.value.trim();

if(!value.includes("@") || !value.includes(".")){

emailError.textContent="Enter a valid email.";
emailInput.classList.add("invalid");
emailInput.classList.remove("valid");
return false;

}

emailError.textContent="";
emailInput.classList.remove("invalid");
emailInput.classList.add("valid");
return true;

}

function validateMessage(){

const value = messageInput.value.trim();

if(value === ""){

messageError.textContent="Message cannot be empty.";
messageInput.classList.add("invalid");
messageInput.classList.remove("valid");
return false;

}

messageError.textContent="";
messageInput.classList.remove("invalid");
messageInput.classList.add("valid");
return true;

}

function checkFormValidity(){

if(validateName() && validateEmail() && validateMessage()){
submitBtn.disabled=false;
}
else{
submitBtn.disabled=true;
}

}

nameInput.addEventListener("input",checkFormValidity);
emailInput.addEventListener("input",checkFormValidity);
messageInput.addEventListener("input",checkFormValidity);

contactForm.addEventListener("submit",function(e){

e.preventDefault();
alert("Form Submitted Successfully!");

});

}


/* ================= BACK TO TOP ================= */

const backToTopBtn = document.getElementById("backToTop");

if(backToTopBtn){

window.addEventListener("scroll", () => {

if(window.scrollY > 500){
backToTopBtn.classList.add("show");
}
else{
backToTopBtn.classList.remove("show");
}

});

backToTopBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});
}
const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e){

e.preventDefault();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){
msg.textContent="Please enter a valid email";
msg.style.color="red";
return;
}

msg.textContent="Message sent successfully!";
msg.style.color="green";

form.reset();

});
