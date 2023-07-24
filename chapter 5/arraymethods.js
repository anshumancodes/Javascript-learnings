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


// delete operator - delete a element from a array

let num = [1,2,3,4,5,6,7,8,9]
delete num[2]
console.log(num)

// [note : delete operator will not change the length of the array]

// concat method - merge two or more arrays

let fruits=["apple","mango","banana"]
let vegetables=["tomato","potato","brinjal"]

let mix=fruits.concat(vegetables)

console.log(mix)



// sort method - sort the items of a array
let randomOrder=[1,5,2,7,3,9,4,8,6]
let sortArray=randomOrder.sort()

console.log(sortArray)  // modifies the original array in a ascending order according to the first digit for example if there is 2 numbers lets say 2 and 100 then sort will keep
                        // 100 first and then 2 because 1 is smaller than 2 so it will keep 100 first and then 2

// reverse method - reverse the order of the elements in a array

let reverseArray=sortArray.reverse()

console.log(reverseArray)  // modifies the original array in a descending order according to the first digit for example if there is 2 numbers lets say 2 and 100 then sort will keep
                            // 2 first and then 100 because 1 is smaller than 2 so it will keep 2 first and then 100



// splice method - add/remove items to/from a array

// syntax : array.splice(index,howmany,item1,.....,itemX)

let spliceArray=[1,2,3,4,5,6,7,8,9]

spliceArray.splice(0,3,10,20,30) // we instructed js to remove 3 elemets from the index 0 and replace the removed elements with out input that is 10,20,30

console.log(spliceArray)

// slice method - slice out a piece of a array into a new array 

let sliceArray=mix.slice(1,4)

console.log(sliceArray) // slice will cut or will take elements of the array of the specified index and will create a new array with the elements of the specified index















