// conditional statements - if, else if, else

// lets understand the conditional statements with an example

// lets take a user input
// import prompt-sync
const prompt=require("prompt-sync")({sigint:true});  //[note: prmomt-sync is a node module, you have to install it first]
let age = prompt("Enter your age: ");

legalAge = 18;

if (age >= legalAge) {
  console.log("You are eligible to drive");     //if the condition is true then this block will be executed

}

/*if and else are  to execute a block of code based on extreme condition(s)[mostly] , 
however if there is another condition to be checked then we use else if
for example something like this: */

else if (age >=17) {
    console.log("You are almost eligible to drive  , apply for learner licence")
    
}


else {
  console.log("You are not eligible to drive"); //if the condition is false then this block will be executed
}

// if you enter the age greater than or equal to 18 then the output will be "You are eligible to vote"
// if you enter the age less than 18 then the output will be "You are not eligible to vote"


