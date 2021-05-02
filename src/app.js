/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

document.querySelector("form").addEventListener("submit", e => {
  const card = document.getElementById("inputCard");
  const cvc = document.getElementById("inputCVC");
  const amount = document.getElementById("inputAmount");
  const fn = document.getElementById("inputFirstName");
  const ln = document.getElementById("inputLastName");
  const city = document.getElementById("inputCity");
  const state = document.getElementById("inputState");
  const postal = document.getElementById("inputPostalCode");
  const error = document.getElementById("errorMsg");

  console.log(card.value);
  if (!card.value || card.value.length < 16) {
    e.preventDefault();
    card.style.backgroundColor = "red";
    card.value = "";
  }
  if (!cvc.value || cvc.value.length < 4) {
    e.preventDefault();
    cvc.style.backgroundColor = "red";
    cvc.value = "";
  }
  if (!amount.value) {
    e.preventDefault();
    amount.style.backgroundColor = "red";
    amount.value = "";
  }
  if (!fn.value || fn.value.length < 2) {
    e.preventDefault();
    fn.style.backgroundColor = "red";
    fn.value = "";
  }
  if (!ln.value || ln.value.length < 2) {
    e.preventDefault();
    ln.style.backgroundColor = "red";
    ln.value = "";
  }
  if (!city.value || city.value.length < 4) {
    e.preventDefault();
    city.style.backgroundColor = "red";
    city.value = "";
  }
  if (!state.value) {
    e.preventDefault();
    state.style.backgroundColor = "red";
    state.value = "";
  }
  if (!postal.value | (postal.value.length < 4)) {
    e.preventDefault();
    postal.style.backgroundColor = "red";
    postal.value = "";
  }
});
