/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(strTime){
  const time = parseInt(strTime, 10);
  if ( time < 12) return "Good Morning"
  if ( time > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  const content = document.getElementById('greeting')
  content.textContent = message
}
