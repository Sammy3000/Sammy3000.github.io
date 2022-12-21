const form = document.querySelector("#myform");
function containsUppercase(str) {
  return /[A-Z]/.test(str);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEntered = document.forms.myForm.Email.value;
  if (containsUppercase(emailEntered)) {
    document.querySelector("#error_message").innerHTML =
      "Email should not contain a capital letter!";
    return false;
  }
  return form.submit();
});
