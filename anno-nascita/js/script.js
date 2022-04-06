// Chiediamo all'utente la sua età e comunichiamo l'anno di nascita

// DICHIARAZIONE
// Diachiarare l'anno corrente
const currentYear = 2022;
console.log(currentYear);

// Chiedere all'utente la sua età
const age = prompt('Quanti anni hai');
console.log(age, typeof(age));

// Trasformare string in int per fare il calcolo
const ageAsNumber = parseInt(age);
console.log(ageAsNumber, typeof(ageAsNumber));

// ELABORAZIONE
// Calcolo l'anno di nascita: anno corrente - età
const result = currentYear - ageAsNumber;
console.log(result);

const message = `Il tuo anno di nascità è circa ${result}`;

// OUTPUT
// Mostrare all'utente il suo anno di nascita
document.getElementById('my-title').innerHTML = message;