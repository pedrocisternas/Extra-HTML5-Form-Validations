import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const eMsg = msg => {
  var error = document.querySelector(".alert");
  error.classList.contains("d-none") && error.classList.toggle("d-none");
  error.innerHTML += `<p>${msg}</p>`;
};

const submitForm = e => {
  e.preventDefault();

  const error = document.getElementById("errorMsg");
  !error.classList.contains("d-none") && error.classList.toggle("d-none");
  error.innerHTML = "";

  document
    .querySelectorAll("input")
    .forEach(element => element.classList.remove("is-invalid"));

  const card = document.getElementById("inputCard");
  const cvc = document.getElementById("inputCVC");
  const amount = document.getElementById("inputAmount");
  const fn = document.getElementById("inputFirstName");
  const ln = document.getElementById("inputLastName");
  const city = document.getElementById("inputCity");
  const state = document.getElementById("inputState");
  const postal = document.getElementById("inputPostalCode");

  if (card.value.length != 16) {
    eMsg("Card number needs to be 16 digits.");
    card.classList.add("is-invalid");
  }
  if (cvc.value.length != 3) {
    eMsg("CVC needs to be 3 digits.");
    cvc.classList.add("is-invalid");
  }
  if (amount.value.length < 1) {
    eMsg("Insert valid amount");
    amount.classList.add("is-invalid");
  }
  if (fn.value.length < 2) {
    eMsg("Insert valid first name");
    fn.classList.add("is-invalid");
  }
  if (ln.value.length < 2) {
    eMsg("Insert valid last name");
    ln.classList.add("is-invalid");
  }
  if (city.value.length < 2) {
    eMsg("Insert valid City");
    city.classList.add("is-invalid");
  }
  if (state.value == "Pick State") {
    eMsg("Select a state");
    state.classList.add("is-invalid");
  }
  if (postal.value.length < 2) {
    eMsg("Insert valid postal code");
    postal.classList.add("is-invalid");
  }
};

document.getElementById("form").addEventListener("submit", submitForm);
