// get string length

let txt="string";
console.log(txt.length);


// [note : string length doesnt count  escape sqequence Characters]

// convert to upper case

console.log(txt.toUpperCase());

// convert to lower case

console.log(txt.toLowerCase());

// string slicing

//  s t r i n g  (string)
//  0 1 2 3 4 5   (index)

// the index starts from 0

// to print start to end 

console.log(txt.slice(0,6));

// to print only first two charecters

console.log(txt.slice(0,2));


// so basically to  get a charecter(s) from a string we use slice method



// replace method

// syntax : string.replace(searchvalue, newvalue)

// example

console.log(txt.replace("string","notString"));



// concat method

// syntax : string.concat(string1,string2,....,stringn)

// example

console.log(txt.concat(" is a primitive data type"));


// trim method

// syntax : string.trim()

// example

let txt1="     string     ";

console.log(txt1.trim());

