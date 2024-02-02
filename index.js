const rangePassword = document.getElementById("rangePassword");
const dpRange = document.getElementById("dpRange");
const special = document.getElementById("Special");
const upperCase = document.getElementById("Uppercase");
const number = document.getElementById("Number");
const generate = document.getElementById("Generate");
const displayPassword = document.querySelector(".displayPassword");
const displayPasswordContainer = document.querySelector(
  ".displayPasswordContainer"
);

const copy = document.createElement("div");
copy.classList.add("copy");
document.body.appendChild(copy);
copy.textContent = "";

let displayValue = 8;

rangePassword.addEventListener("input", (e) => {
  displayValue = e.target.value;
  dpRange.innerHTML = `
   Longueur du mot de passe :  ${displayValue} caractères.
    
    
    `;
});

generate.addEventListener("click", () => {
  generatePassword(displayValue);
  copy.innerHTML = `
  <button>Copier</button>
  `;
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(displayPassword.textContent);
  copy.textContent = "Mot de passe copier";
});

const generatePassword = (length) => {
  const choices = {
    LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
  };

  let password = "";

  if (upperCase.checked) {
    choices.UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (number.checked) {
    choices.NUMBERS = "0123456789";
  }
  if (special.checked) {
    choices.SPECIAL = "!@#$%^&*()";
  }

  for (let i = 0; i < length; i++) {
    // Choix aléatoire de la catégorie de caractères
    const category =
      Object.keys(choices)[
        Math.floor(Math.random() * Object.keys(choices).length)
      ];
    //console.log(category);
    // Sélection d'un caractère aléatoire de la catégorie choisie
    const characters = choices[category];
    //console.log(characters);
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  displayPassword.textContent = `${password}`;
};
