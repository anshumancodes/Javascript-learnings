// practice-set-3.

// question 1 : write a program to print marks of student from a object using for loop

let markList = {
    'anshuman': 85,
    'anurag': 90,
    'sahil': 80,
    'pratyush': 80,
}

// for (let i=0; i<Object.keys(markList).length;i++){
//     console.log(Object.keys(markList)[i],markList[Object.keys(markList)[i]]);
// } //run to see the output 

// question 2 : write program 1 using for in loop


// const prompt = require('prompt-sync')();
// let studentName = prompt('Enter the name of the student: ');
// for (let data in markList) {
//     if (data== studentName) {
//         console.log(markList[data]);
//     }
// }     //run to see the output 


// question 3 : write a program to print"try again' until the user enters the correct number
prompt = require('prompt-sync')();
// user=prompt('Enter the number: ');
// correctNo=7;
// while (user!=correctNo){
//     console.log('Try again');
//     user=prompt('Enter the number: ');
    
// } //run to see the output 

// question 4 : write a program to  to find mean of 5 numbers



const mean =(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(1,2,3,4,5)); //run to see the output

