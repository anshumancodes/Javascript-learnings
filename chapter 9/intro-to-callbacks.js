// Introduction to callbacks

// before we get into callbacks, let's talk about synchronous and asynchronous code

// synchronous code is code that runs in order, line by line

// asynchronous code is code that runs out of order, not line by line , that is once we run the code it will not wait for the code to finish before moving on to the next line of code.

// let's look at an example of synchronous code

console.log('I am line 1');
console.log('I am line 2');

// the above code will run in order, line by line


// let's look at an example of asynchronous code

setTimeout(() => {
    console.log('I am a asynchronous code');
}, 3000);

console.log('I am the last line of code');

// the above code will run out of order, the last line of code will run first, then the asynchronous code will run after 3 seconds 
// that is because the setTimeout function is an asynchronous function, it will not wait for the code to finish before moving on to the next line of code

//  callbacks