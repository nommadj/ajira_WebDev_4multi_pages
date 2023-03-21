// get the signup button and modal elements
const signupBtn = document.getElementById("signup-btn");
const signupModal = document.getElementById("signup-modal");

// add click event listener to the signup button
signupBtn.addEventListener("click", function() {
  // show the signup modal
  signupModal.style.display = "block";
});

// get the close button element inside the modal
const closeBtn = signupModal.querySelector(".close");

// add click event listener to the close button
closeBtn.addEventListener("click", function() {
  // hide the signup modal
  signupModal.style.display = "none";
});
