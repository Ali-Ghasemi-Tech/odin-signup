const confirm = document.getElementById("confirm-password");
const password = document.getElementById("password");
const form = document.getElementById("form");

function handelChange() {
  console.log(confirm.value, password.value);
  if (confirm.value !== password.value) {
    confirm.style = "border: 1px solid red";
    confirm.setCustomValidity("Passwords Don't Match");
    confirm.reportValidity();
  } else {
    confirm.setCustomValidity("");
    confirm.style = "border: 1px solid green";
  }
}

document.getElementById("button").addEventListener("submit", (e) => {
  if (confirm.value !== password.value) {
    confirm.setCustomValidity("password does't match");
    confirm.reportValidity();
    e.preventDefault();
  }
});
