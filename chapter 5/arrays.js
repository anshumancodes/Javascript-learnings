// arrays in javascript

// arrays are a collection of data

// array isnt a primtiive data type , but a object

//  array syntax is [data, data, data]

//  example 

let marks=[78,89,54,90,98]

// view a array
console.log(marks)

//  a array can contain any type of data

// dfo example 

let dfo=[78,98,"hello","world",true,false,null,undefined]

console.log(dfo)

// get a value from a array

console.log(dfo[2]) // output : hello

// find length of a array

console.log(dfo.length) // output : 8

//  can we change the value of a element in a array

dfo[2]="hi"

// lets check 

console.log(dfo) // run to see the output


//  lets solve a problem

// print marks of all the students in class using a for loop


let class_marks=[78,89,54,90,98]

for (i in class_marks){
    console.log(class_marks[i])
}
