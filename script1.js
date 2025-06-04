function validate(e) {
    e.preventDefault();
const email = document.getElementById("email") .value;
const pass = document.getElementById("password").value;
const age = document.getElementById("age").value;
const msgbox = document.getElementById("message");

let message = "";

if (email === "") {
    message = "please enter your email";
    msgbox.style.color = "red";
} else if (pass === "") {
    message = "password must be atleast 8 characters";
    msgbox.style.color = "red";
} else if (age === "") {
    message = "age must be between 12 and 500";
    msgbox.style.color = "red";
}
else {
    message = "login successful";
    msgbox.style.color = "green";
}
msgbox.innerHTML = message;
}