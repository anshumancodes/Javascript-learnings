// The while statement creates a loop that executes a specified statement as long as the test condition is true.
// lets understand this with a example


let a=10;
while (a<25){
    
    a++;
    console.log(a);
}

// this will print a from 11 to 25 and once a becomes 25 the loop will stop
// as the condition of a<25 is not true anymore

// --------------------------------------------------------------------------------------------- do while loop ---------------------------------------------------------------------------------------------

// do while loop

// The do...while statement repeats until a specified condition evaluates to false.

// example : print numbers from 1 to 10 using do while loop

let b=0;
do {
    console.log(b);
    b++;
    
} while (b<10);

// do while loop execute the 'do' part first and then checks the conditioncd 



// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while