const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat_password");
const passwordValidation = document.getElementById("password-validation");
const fullnameValidation = document.getElementById("fullname-validation");

// Event listener for Full Name input
fullname.addEventListener("focus", () => {
  fullname.style.border = "1px solid blue";
});

fullname.addEventListener("blur", () => {
  fullname.style.border = "1px solid #ccc";
  if (fullname.value.trim() === "" || fullname.value.length <= 3) {
    fullnameValidation.style.display = "inline";
    setTimeout(() => {
      fullname.focus();
      fullname.select();
    }, 100);
  } else {
    fullnameValidation.style.display = "none";
  }
});

// Event listener for Repeat Password input
repeatPassword.addEventListener("blur", () => {
  if (repeatPassword.value !== password.value || repeatPassword.value === "") {
    repeatPassword.style.background = "gray";
    passwordValidation.style.display = "inline";
  } else {
    repeatPassword.style.background = "white";
    passwordValidation.style.display = "none";
  }
});

// Event listener for form submission
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate custom fields (Full Name and Password)
  let isValidForm = true;

  if (fullname.value.trim() === "" || fullname.value.length <= 3) {
    fullnameValidation.style.display = "inline";
    fullname.focus();
    fullname.select();
    isValidForm = false;
  } else {
    fullnameValidation.style.display = "none";
  }

  if (repeatPassword.value !== password.value || repeatPassword.value === "") {
    repeatPassword.style.background = "gray";
    passwordValidation.style.display = "inline";
    isValidForm = false;
  } else {
    repeatPassword.style.background = "white";
    passwordValidation.style.display = "none";
  }

  // Submit the form if it's valid
  if (isValidForm) {
    registrationForm.submit();
    window.open(`/form/thank-you.html?userName=${fullname.value}`);
    // window.open(`/profile.html?userName=${inputUserName.value}`);

  }
});

