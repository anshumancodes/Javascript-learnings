/*The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, 
followed by a statement (usually a block statement) to be executed in the loop. */

// for ([initialization]; [condition]; [final-expression])

// lets understand this with a example

// for (let i=0; i<50; i++) {
//     console.log(i)
// }

// this program simply prints the numbers from 0 to 49

// now lets lets write another program to add all numbers between 0 to 20 using for loop

sum=0
for (let i=0; i<20; i++) {
    sum+=(i+1);
    
}
console.log(sum);