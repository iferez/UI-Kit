var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/* VALIDACION FORMULARIO HOME */ 
let formulario = document.getElementById('formIngreso');
let emailForm = document.getElementById('inputEmail');
let passForm = document.getElementById('inputPassword');

formulario.addEventListener("submit", function (e) {
    let error = false;
    let invalidEmail = document.getElementById('invalidEmail');
    let invalidPass = document.getElementById('invalidPass');

    emailForm.classList.remove("is-invalid");
    emailForm.classList.add("is-valid");
    invalidEmail.classList.add("visually-hidden");
    passForm.classList.remove("is-invalid");
    passForm.classList.add("is-valid");
    invalidPass.classList.add("visually-hidden");

    if (emailForm.value == "") {
        error = true;
        emailForm.focus();
        emailForm.classList.add("is-invalid");
        invalidEmail.classList.remove("visually-hidden");
    }

    if (passForm.value == "") {
        error = true;
        passForm.focus();
        passForm.classList.add("is-invalid");
        invalidPass.classList.remove("visually-hidden");
    }

    if (error) {
        e.preventDefault();
    }
});

/* VER PASSWORD */ 
let showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function (e) {
  let passForm = document.getElementById('inputPassword');
  let ver = document.querySelector(".fa-eye-slash");
  let nover = document.querySelector(".fa-eye");

  if (passForm.type == "password") {
    passForm.type = "text";
    ver.classList.add("d-none");
    nover.classList.remove("d-none");
} else {
    passForm.type = "password";
    ver.classList.remove("d-none");
    nover.classList.add("d-none");
}
});