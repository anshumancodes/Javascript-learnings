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


function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src) {
    if (error) {
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  
  function goodmorning(error, src) {
    
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    alert('Good morning' + src);
  }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 
