// Question 1 : create a array of numbers and take input from user to add to this array

const prompt=require("prompt-sync")({sigint:true});

user_no=prompt("enter number to add: ")
let arr=[]
for (let i=0; i<5; i++){
    arr.push(user_no)
    user_no=prompt("enter number to add: ")

}
console.log(arr)

//  filter number that is divisible by 10

array1=[10,89,78,90,40]
let divisibleByTen=array1.filter((number)=>{
    return number%10==0
})

console.log("numbers divisible by ten are ", divisibleByTen)

