//get form and all inputs
const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

function validateInputs(){
    //check firstName
    if (firstName.value.trim() === '') {
        setErrorFor(firstName, "First name cannot be blank");
    } else {
        setSuccessFor(firstName);
    }

    //check lastName
    if (lastName.value.trim() === '') {
        setErrorFor(lastName, "Last name cannot be blank");
    } else {
        setSuccessFor(lastName);
    }

    //check email
    let emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, "Email name cannot be blank");
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }

    //check password
    passwordValue = password.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, "Password name cannot be blank");
    } else if (passwordValue.length < 6) {
        setErrorFor(password, "Password must be at least 6 characters");
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message){
    let container = input.parentElement;
    container.className = "input-container error";
    container.querySelector('small').innerText = message;
}

function setSuccessFor(input){
    let container = input.parentElement;
    container.className = "input-container success";
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}