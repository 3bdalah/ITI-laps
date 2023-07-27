function product(num1,num2){
    if(!num2){
        return (numberTwo)=>{
            return (num1*numberTwo);
        }
    }
    return num1*num2;
}

console.log(product(10,3)); // output 30;
console.log(product(10)(5)) // output 50


function guessGame() {
    let answer = Math.floor(Math.random() * 11);
    // let guesses=0;
    return function(guess) {
      if (guess === answer) {
        return "you got it ";
      } else if (guess > answer) {
        return "Your guess is too high";
      } else {
        return "Your guess is too low!";
      }
    };
  }
  
let testGuess = guessGame();

console.log("your Guess  0 -> ", testGuess(0));
console.log("your Guess 4 -> ", testGuess(4));
console.log("your Guess 6 -> ", testGuess(6));
console.log("your Guess  9 -> ", testGuess(9));


  

