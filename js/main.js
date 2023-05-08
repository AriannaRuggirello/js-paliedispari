// Palidroma

// Chiedere all’utente di inserire una parola
let word = prompt('inserisci una parola ');
let check = isPalindrome(word);

// Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(word) {
   
    // trasformo la parola in un array di lettere
    var letters = word.split("");
    console.log(letters);

    // creo un array che contiene le stesse lettere 
    var reversedLetters = letters.reverse();
    console.log(reversedLetters);

    // riunisco le lettere
    var reversedLetters = letters.join('');
    console.log(reversedLetters);

    // confronto la parola iniziale con quella invertita
    if(word == reversedLetters){
        console.log('la parola è palindroma') ;
    } else {
        console.log('la parola non è palindroma') ;
    }
  
  }
  











// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.