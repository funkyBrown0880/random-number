let randomNum = Math.floor(Math.random()*100) + 1;

function guessNum (num){
    if (num === randomNum) {
        return "You are correct";
    } else if (num > randomNum) {
        return "The number you guessed is too high, try again";
    } else {
        return "The number you guessed is too low, try again";
    }
}

console.log(guessNum(58));
