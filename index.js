const rangePassword = document.getElementById("rangePassword")
const dpRange = document.getElementById("dpRange")
const special= document.getElementById("Special")
const upperCase = document.getElementById("Uppercase")
const number = document.getElementById("Number")
const generate = document.getElementById("Generate")
const displayPassword = document.querySelector('.displayPassword')
let displayValue = 8

rangePassword.addEventListener('input', (e)=>{
    displayValue = e.target.value
    dpRange.innerHTML = 
    `
    ${displayValue}
    
    
    `
})

generate.addEventListener("click" , () =>{
    generatePassword(displayValue)

})

const generatePassword = (length) => {
    const choices = {
        LOWERCASE: "abcdefghijklmnopqrstuvwxyz"
    };

    let password = "";

if(upperCase.checked){
   choices.UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if(number.checked){
   choices.NUMBERS = "0123456789"
}
if(special.checked){
   choices.SPECIAL = "!@#$%^&*()"
}

    for (let i = 0; i < length; i++) {
        // Choix aléatoire de la catégorie de caractères
        const category = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)];
        //console.log(category);
        // Sélection d'un caractère aléatoire de la catégorie choisie
        const characters = choices[category];
        //console.log(characters);
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    displayPassword.textContent = `${password}`
   
};


