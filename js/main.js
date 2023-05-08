// // PAROLA PALINDROMA
// console.log('PAROLA PALINDROMA');
// // Chiedere all’utente di inserire una parola
// let word = prompt('inserisci una parola ');


// let check = isPalindrome(word);
// document.getElementById('risultato');

// // Creare una funzione per capire se la parola inserita è palindroma

// function isPalindrome(word) {
   
//     // trasformo la parola in un array di lettere
//     var letters = word.split("");
//     console.log(letters);

//     // creo un array che contiene le stesse lettere 
//     var reversedLetters = letters.reverse();
//     console.log(reversedLetters);

//     // riunisco le lettere
//     var reversedLetters = letters.join('');
//     console.log(reversedLetters);

//     // confronto la parola iniziale con quella invertita
//     if(word == reversedLetters){
//         console.log('la parola è palindroma') ;
//     } else {
//         console.log('la parola NON è palindroma') ;
//     }
  
//   }
  

// PARI E DISPARI
console.log('PARI O DISPARI');
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let userChoice = prompt('scegli se il risultato sarà pari o dispari')
console.log("l'utente ha scelto " + userChoice);


let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log("il numero dell'utente è " + userNumber);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

let computerNumber = generateComputerNumber(1,5)
console.log('il numero scelto dal pc è ' + computerNumber);

function generateComputerNumber(min,max) {
    let num = Math.floor(Math.random() * (max - min)) + min;

    return (num);
}

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

let solution = sum(userNumber,computerNumber);
console.log(solution);



function sum(userNumber,computerNumber) 
{
    let somma = parseInt(userNumber + computerNumber);
    console.log(somma);

    let risultato ='';

    if(somma % 2 === 0) {
        risultato = 'il numero sommato è pari';
    }
    else {
        risultato = 'il numero sommato è dispari';
    }
     return risultato;
    
}

// Dichiariamo chi ha vinto.

if(solution === userChoice){
    console.log('hai vinto');

}
else{
    console.log('hai perso');
}

