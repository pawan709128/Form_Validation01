document.addEventListener("DOMContentLoaded", function() {
  // Form validation function
  function validateForm() {
      let isValid = true;

      // Input elements
      const name = document.getElementById("name").value.trim();
      const fatherName = document.getElementById("father-name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();

      // Error message elements
      const nameError = document.getElementById("name_error");
      const fatherNameError = document.getElementById("father_name_error");
      const mobileError = document.getElementById("mobile_error");
      const emailError = document.getElementById("email_error");

      // Regex patterns
      const namePattern = /^[A-Za-z\s]+$/;
      const mobilePattern = /^[0-9]{10}$/;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      // Validate name
      if (!namePattern.test(name)) {
          nameError.style.display = "block";
          isValid = false;
      } else {
          nameError.style.display = "none";
      }

      // Validate father's name
      if (!namePattern.test(fatherName)) {
          fatherNameError.style.display = "block";
          isValid = false;
      } else {
          fatherNameError.style.display = "none";
      }

      // Validate mobile number
      if (!mobilePattern.test(mobile)) {
          mobileError.style.display = "block";
          isValid = false;
      } else {
          mobileError.style.display = "none";
      }

      // Validate email
      if (!emailPattern.test(email)) {
          emailError.style.display = "block";
          isValid = false;
      } else {
          emailError.style.display = "none";
      }

      // Validate passwords match
      if (password !== confirmPassword) {
          alert("Passwords do not match.");
          isValid = false;
      }

      // Return the validation status
      return isValid;
  }

  // Attach validation function to the window object
  window.validateForm = validateForm;
});
