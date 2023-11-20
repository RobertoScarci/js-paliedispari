
// const userNumber = parseInt(prompt('Type a number between 1 and 5'))
// const cpuNumber = Math.floor( Math.random() * 5) + 1;

// // ====Function====
// function generateNumber(randomNumber) {
//     Math.floor( Math.random() * randomNumber) + 1;
// }

// console.log(cpuNumber, userNumber)
// let somma = cpuNumber + userNumber;

// // ====Function====
// function oddOrEven(totalNumber) {
//     if(totalNumber % 2 === 0){
//         console.log('il numero è pari, hai vinto!')
//     } else if ( totalNumber % 2 === 1){
//         console.log('il numero è dispari, ha vinto il computer!')
//     } else {
//         console.log('Draw!')
//     }
// }

// oddOrEven(somma)

const userWord = prompt('type a casual word')
var changeWord = userWord.split('')
var changeWord = changeWord.reverse();
var changeWord = changeWord.join('');


// ====Function====
function palindromaONo(casualWord, otherWord){
    if(casualWord === otherWord){
        console.log('La parola è PALINDROMA!')
    } else {
        console.log('La parola non è PALINDROMA!')
    }
}

palindromaONo(userWord, changeWord)
console.log(changeWord, userWord)

