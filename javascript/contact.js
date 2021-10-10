const cname = document.querySelector("#name");
const fname = document.querySelector("#firstname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorMsg = document.querySelector("#errorMsg");
const submit = document.querySelector("#btnSubmit");
submit.addEventListener("click", formvalidate);
console.log("form validate");
// Regex
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'\.]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const messageRegex = /^[^<>]+$/;
function formvalidate(e) {
  e.preventDefault();
  let count = 0;
  //validate  name
  if (!isValid(cname, nameRegex)) count++;

  //validate first name
  if (!isValid(fname, nameRegex)) count++;

  //validate email
  if (!isValid(email, emailRegex)) count++;

  //validate message
  if (!isValid(message, messageRegex)) count++;

  console.log("count" + count);
  if (count > 0) {
    errorMsg.innerHTML =
      "Please enter mandatory fields or Enter correct values";
  } else {
    errorMsg.innerHTML = "";
  }
}
function isValid(element, regex) {
  return regex.test(element.value);
}
