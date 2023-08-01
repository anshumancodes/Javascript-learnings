// Question 1 : create a array of numbers and take input from user to add to this array

const prompt=require("prompt-sync")({sigint:true});

user_no=prompt("enter number to add: ")
let arr=[]
for (let i=0; i<5; i++){
    arr.push(user_no)
    user_no=prompt("enter number to add: ")

}
console.log(arr)

//question 2  filter number that is divisible by 10

array1=[10,89,78,90,40]
let divisibleByTen=array1.filter((number)=>{
    return number%10==0
})

console.log("numbers divisible by ten are ", divisibleByTen)

// question 3: create square of each number in thr array divisibleByTen
sqrrootArr=[]
divisibleByTen.forEach((number)=>{
    sqrrootArr.push(number*number)
})
console.log("square of each number in the array divisible by ten are ", sqrrootArr)

//question 4 : calculate the factorial of a the array using reduce method

let sampleArray=[1,2,3,4,5,6]
let factorial=sampleArray.reduce((n1, n2)=>{
    return n1*n2
})
console.log("factorial of the array is ", factorial)

