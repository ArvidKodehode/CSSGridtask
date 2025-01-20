"use strict";

// Elementer i DOM
const signUpCardEl = document.querySelector(".sign-up-card"); // Kort for å melde seg på
const successCardEl = document.querySelector(".success-card"); // Kort som vises ved suksess
const signUpFormEl = document.querySelector(".sign-up-form"); // Selve skjemaet
const emailIn = document.getElementById("email"); // Inndatafelt for e-post
const submitBtn = document.querySelector(".submit-btn"); // Knapp for å sende inn skjema
const dismissBtn = document.querySelector(".dismiss-btn"); // Knapp for å lukke suksesskortet
const submittedEmailEl = document.querySelector(".submitted-email"); // Felt for å vise sendt e-post

// Event-lyttere
submitBtn.addEventListener("click", submitEmail); // Lytter til klikk på "Send inn"-knappen
dismissBtn.addEventListener("click", toggleCards); // Lytter til klikk på "Lukk"-knappen

// Funksjoner
// Veksler mellom skjema- og suksesskort
function toggleCards() {
  signUpCardEl.classList.toggle("hidden"); // Skjuler/viser påmeldingskortet
  successCardEl.classList.toggle("hidden"); // Skjuler/viser suksesskortet
}

// Validerer e-postadresse
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ); // Returnerer true hvis e-posten er gyldig
}

// Sender inn e-postskjema
function submitEmail(e) {
  e.preventDefault(); // Hindrer standard innsending av skjema

  // Hvis e-post er gyldig
  if (validateEmail(emailIn.value)) {
    submittedEmailEl.innerText = emailIn.value; // Oppdaterer feltet med sendt e-post
    toggleCards(); // Bytter til suksesskortet
    emailIn.value = ""; // Tømmer inndatafeltet
    signUpFormEl.classList.remove("error"); // Fjerner eventuelle feilmeldinger
  }
  // Hvis e-post er ugyldig
  else {
    signUpFormEl.classList.add("error"); // Viser feilmelding
  }
}
