
let userAge = prompt("Enter your age");
  if (userAge <= 0) {
    console.error("Invalid response");
    
  }
  // if user age is 4 or above change window location to google.com
  if (userAge =>4) {
    location.href = "https://www.google.com";
  }
  if (userAge >= 18) {
    alert("You are old enough to drive");
  } else {
    alert(`you can drive after ${18 - userAge} years`);
  }
// question 5 : change the bg color of the page as per the user input
  let color=prompt("enter the color you want");
  console.log(color);
  document.body.style.background=String(color);