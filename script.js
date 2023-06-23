function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

function checkForm(form) {
  if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if (!checkPassword(form.pwd1.value)) {
      form.pwd1.focus();
      return false;
    }
  } else {
    form.pwd1.focus();
    return false;
  }
  return true;
}

if (!RegExp.escape) {
  RegExp.escape = function (s) {
    return String(s).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  }
}
