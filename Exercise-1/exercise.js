// Exercise 1 - Javascript -learning
// if you are somone who is learing using this repo: join our discord server: https://discord.gg/fUYGNhghh2

// problem statement: write a js program to generate a random number and let the user guess eat and tell if the user guessed it right or wrong and if the number guessed
// is greater than the random number then print "number is lager than number" and if the number guessed is less than the random number then print "number is smaller than number"
// for each wrong guess deduct -1 from 100 and print the remaining point at the end when user guesses the right number 

console.log("Welcome to the game of guessing the number between 1 to 100");

console.log(" rules :You have 100 points in the beginning , for each wrong guess you will lose 1 point ");

const prompt = require('prompt-sync')();
let computerNumber = Math.floor(Math.random() * 100) + 1;
i=0
score=100

while(i<=100){
    

    let userNumber = prompt("Guess the number between 1 to 100 : ")
    if (userNumber == computerNumber){
        console.log("You guessed it right")
        break;}
        else if (userNumber > computerNumber){
            console.log("guessed number is larger than compnumber")
            score=score-1
        }
        else if (userNumber < computerNumber){
            console.log("guessed number is smaller than compnumber")
            score=score-1
        }

    i++;
};

console.log("your score is : ",score)
