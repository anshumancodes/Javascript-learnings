
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



