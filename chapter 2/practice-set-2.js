// question 1 : check if user's age is between 10 and 20
const prompt = require("prompt-sync")({ sigint: true }); // [note: prmomt-sync is a node module, you have to install it first]

let age = prompt("Enter your age: ");
console.log(age>10 && age<20);

// question 2 : use switch case statement to check the above program

switch (age) {
    case age>10:
        console.log("checking ...");
    
    case age<20:
        console.log("age valid");
    

}

// question 3 : check if a number is divisible by 3 and 2

let num = prompt("Enter a number: ");

if (num % 3 == 0 && num % 2 == 0) {
    console.log("The number is divisible by 3 and 2");
}
else {
    console.log("The number is not divisible by 3 and 2");
}

// question 4 : check if a number is divisible by 3 and 2 (either of them)



if (num % 3 == 0 || num % 2 == 0) {
    console.log("The number is divisible by 3 or 2");
}
else {
    console.log("The number is not divisible by both 3 and 2");
}

// question 5 : check if user is eligible for driving or not using ternary operator
let user_age=prompt("Enter your age: ");
console.log(user_age>=18?"you are eligible to get the dl":"you are not eligible to get the dl");

