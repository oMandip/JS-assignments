
// Section 1 — Form and Input Events

// 1. Handle Form Submit Event

const submitForm = document.getElementById("submitForm");
const submitMessage = document.getElementById("submitMessage");

submitForm.addEventListener("submit", () => {
    submitMessage.textContent = "Form submitted successfully!";
});



// 2. Prevent Form Submission

const preventForm = document.getElementById("preventForm");

preventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submission prevented.");
});





// 3. Display Input Using the input Event

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", (event) => {
    liveOutput.textContent = `You entered: ${event.target.value}`;
});




// 4. Detect Changes Using the change Event

const languageSelect = document.getElementById("languageSelect");
const languageOutput = document.getElementById("languageOutput");

languageSelect.addEventListener("change", (event) => {
    languageOutput.textContent = `Selected Language: ${event.target.value}`;
});






// 5. Handle the focus Event

const focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", () => {
    focusInput.style.border = "20px maroon";
    focusInput.style.backgroundColor = "red";
});




// 6. Handle the blur Event

const blurInput = document.getElementById("blurInput");
const blurMessage = document.getElementById("blurMessage");

blurInput.addEventListener("blur", () => {
    blurMessage.textContent = "You left the input field.";
});



// Section 2 — Basic Form Validation

// 7. Validate a Required Name Field

const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const nameError = document.getElementById("nameError");

nameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
    } else {
        nameError.textContent = "";
    }
});





// 8. Validate Email Field

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
    } else {
        emailError.textContent = "";
    }
});





// 9. Validate Password Length

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
    } else {
        passwordError.textContent = "";
    }
});





// 10. Validate Multiple Form Fields

const registrationForm = document.getElementById("registrationForm");

const registrationName =
    document.getElementById("registrationName");

const registrationEmail =
    document.getElementById("registrationEmail");

const registrationPassword =
    document.getElementById("registrationPassword");

const registrationError =
    document.getElementById("registrationError");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (registrationName.value.trim() === "") {
        registrationError.textContent = "Name is required.";
    }
    else if (registrationEmail.value.trim() === "") {
        registrationError.textContent = "Email is required.";
    }
    else if (registrationPassword.value.trim() === "") {
        registrationError.textContent = "Password is required.";
    }
    else {
        registrationError.textContent =
            "Form submitted successfully!";
    }
});