// Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

// Chiedere all'utente il suo nome e salvarlo nella variabile
const userName = prompt('Come ti chiami');

const userLastName = prompt('Qual\'è il tuo cognome');

// Creare il messaggio di saluto
// concatenazione con operatore + 
// const message = 'Ciao ' + userName;

// Concatenazione con il template literal
const message = `Ciao ${userName} ${userLastName}`;
console.log(message);

// Stampare nella pagina il saluto
document.getElementById('my-title').innerHTML = message;