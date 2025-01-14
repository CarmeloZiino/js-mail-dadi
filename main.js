

// Esercizio Mail!!!
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email


// 1. Creo un Array con 5 mail

const participantsEmail = [ "carmelo@gmail.com" , "danilo@gmail.com" , "alessandro@gmail.com" , "mauro@gmail.com" , "hyur@gmail.com"
];


// 2. Creo un Prompt dove l'utente inserisce la sua mail 

const personEmail = prompt("Inserisci qui la tua mail per sapere se sei stato invitato alla festa:" , "iltuonome@gmail.com");

// 3. Attreverso .indexOf cerco l'email scritta nel Prompt dentro all'array

let isInvited = participantsEmail.indexOf(personEmail) !== -1;

// 4. Stampo il risultato

if (isInvited) {
    console.log("Ottimo! Puoi entrare alla festa!");
} else {
    console.log("Ops, non sei stato invitato!");
}

// Esercizio Gioco dei dadi!!!
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :slightly_smiling_face


// 1. Generare un numero randomico da 1 a 6 - Numero Giocatore

let numberPlayer = Math.floor(Math.random() * 6) + 1;
console.log("Il punteggio del giocatore è:" , numberPlayer);

// 2. Generare un numero randomico da 1 a 6 - Numero Computer

let numberComputer = Math.floor(Math.random() * 6) + 1;
console.log("Il punteggio del computer è:" , numberComputer);

// 3. Creo delle condizioni per stabilire un vincitore

if (numberPlayer > numberComputer){
    console.log("Hai Vinto!");
}
else if (numberPlayer < numberComputer){
    console.log("Il Computer ha vinto!");
} 
else if (numberPlayer = numberComputer){
    console.log("Pareggio! Riprova un'altra volta");
}


// Tuttavia, se volessi usare un array per il gioco dei dadi, farei così:

// 1. Creo un array per generare due tipi di punteggio, uno del Player1 e uno del Computer

let scores = [
    Math.floor(Math.random() * 6) + 1, // Punteggio Player1
    Math.floor(Math.random() * 6) + 1 // Punteggio Computer
]

// 2. Stampo i punteggi sul console


console.log("Punteggio del giocatore: " + scores[0]); // Punteggio Player1
console.log("Punteggio del computer: " + scores[1]); // Punteggio Computer


// 3. Creo delle condizioni per stabilire un vincitore

if (scores[0] > scores[1]){
    console.log("Hai Vinto!");
}
else if (scores[0] < scores[1]){
    console.log("Il Computer ha vinto!");
} 
else if (scores[0] = scores[1]){
    console.log("Pareggio! Riprova un'altra volta");}
