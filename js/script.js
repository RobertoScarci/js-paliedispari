
const userNumber = parseInt(prompt('Type a number between 1 and 5'))
const cpuNumber = Math.floor( Math.random() * 5) + 1;

// ====Function====
function generateNumber(randomNumber) {
    Math.floor( Math.random() * randomNumber) + 1;
}

console.log(cpuNumber, userNumber)
let somma = cpuNumber + userNumber;

// ====Function====
function oddOrEven(totalNumber) {
    if(totalNumber % 2 === 0){
        console.log('il numero è pari, hai vinto!')
    } else if ( totalNumber % 2 === 1){
        console.log('il numero è dispari, ha vinto il computer!')
    } else {
        console.log('Draw!')
    }
}

oddOrEven(somma)
