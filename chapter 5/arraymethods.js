// array methods 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// convert a array to string

let marks=[78,89,54,90,98]

let stringMarks=marks.toString()

console.log(typeof(stringMarks))

// join method

let joinMarks=marks.join("-")
console.log(joinMarks)


// pop method - removes the last element from a array

let popMarks=marks.pop()

console.log(popMarks)

// push method - adds a element to the end of a array

marks.push(100)

console.log(marks)


// shift method - remove the first element from a array

marks.shift()

console.log(marks)

// unshift method - adds a element to the beginning of a array

marks.unshift(108)

console.log(marks)


