
a=[67,89,78,90]

// map method
// this method is used to create a new array from an existing array

// for example

let b=a.map((score , index)=>{
    console.log(score +" is at index "+index)
    return score*2

})

// note : the difference between foreach and map is that foreach doesnt create a new array but map does

// filter method


let num=[78,5,3,67,81,12,9,10]
let greaterThanTen=num.filter((number)=>{
   
    return number>=10
    
}



)
console.log("number which are greater than ten are " +greaterThanTen)

// filter method is used to filter out the elements from an array based on a condition , its does not create a new array


// reduce method

let arr=[1,2,3,4,5,6,7,8,9,10]

const sumArray=arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
})

console.log(sumArray)

//The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.
// 

/* so basically it will add first two elements and then Value + 

3rd element runs and then
value + 4th element runs and then

value +5 

..... 

until the array ends */







