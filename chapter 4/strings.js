// strings in javascript


// strings is a primitive data type 


let myString = "This is a string";
console.log(typeof(myString)); // output : string

// we can use single quotes or double quotes to define a string

// here is how to check the length of a string

console.log(myString.length); // output : 16 [including spaces as they are also characters]



// here is how to access a character in a string

console.log(myString[0]); // output : T
console.log(myString[1]); // output : h
console.log(myString[2]); // output :  i

// indexing in strings starts from 0 and ends at length-1 , it also includes spaces as they are also characters



// Template literals

// Template literals are used to embed expressions into strings
// Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

// lets see a example

let userName = "Anshuman";
let age = 20;

let data = `my name is ${userName} and my age is ${age}`; // this is a template literal 

//using variables inside a string directly is called  string interpolation

console.log(data)


// inside a we can use both single quotes and double quotes without any problem



