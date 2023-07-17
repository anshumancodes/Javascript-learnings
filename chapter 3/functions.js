// functions in javascript

// function help us perform tasks without having to write code multifple times for same task, it also increases the readability of the code

// lets undestand function with a example
const prompt = require('prompt-sync')();

let userName = prompt('Enter your name: ');

function greet( name) {                                                            //this is a function to greet the user , the 'name; is a parameter of the function
    console.log('Hello ' + name);
}


greet(userName);                                                                    // this is how we call a function, we pass the value of the parameter in the function call





// we can  also write functions without using function object

// here is how

let sayHello=()=>{
    console.log('Hello user');
}

sayHello();                                                                         // this is how we call a function without using function object