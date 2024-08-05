// Javascript for typing effect in the home page.

var typed = new Typed(".text", {
  strings: [
    "AIML student cum geek",
    "ML Researcher",
    "Web Developer",
    "Part-time Cricketer",
    "Academic Tutor",
    "Content Writer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Javavascript for the contact form submission.

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwmn9GjDR07_Z9dYXiuj3swrwYixLtPZzsYFRM0TISjNaMpBCIV3auLE2gmBjDWetPAeg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
