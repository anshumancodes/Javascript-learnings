// iterating over arrays using while loop
let eachoverScores=[12,1,13,41,67,90]
let i=0;
while( i<eachoverScores.length){
 
    console.log("score for the over is "+eachoverScores[i])
    i++
}

// iterating over arrays using do while loop

do{
    console.log("score for the over is "+eachoverScores[i]);
    i++
}while(i<=eachoverScores.length)


// iterating over arrays using for loops
console.log("using for loop")
for(let k=0;k<eachoverScores.length;k++){
   
    console.log(eachoverScores[k])
}

// iterating over arrays using foreach loop

eachoverScores.forEach((score)=>{
    console.log("twice of the score is "+ score*2)
})

// for of loop

for(let score of eachoverScores){
    console.log(score)
}

// for in loop

for(let score in eachoverScores){
    console.log(eachoverScores[score])
}


// array.from()

//this method is used to create a new array from an existing collecttion of data
// we use this method mostly while dealing with dom elements and html collecttions

// for example
// let divs=document.querySelectorAll('div')

// now divs here isnt a array but a html collection so inorder to convert the same to a array we use array.from() method

// let divsArray=Array.from(divs)

// now divsArray is a array containing all the data from the previous html collection




