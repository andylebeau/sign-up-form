
function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    console.log(password1, password2);
  
    if (password1 != password2) {
        alert ("Password did not match: Please try again...");
    } else {
        alert ("Welcome! We will send you an email to verify your new account");
    };
}