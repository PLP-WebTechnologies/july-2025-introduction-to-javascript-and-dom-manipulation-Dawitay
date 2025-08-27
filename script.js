// 🚀 Part 1: JavaScript Basics
// Variables, data types, operators, and conditionals
let userName = "Dawit"; 
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Output to webpage
document.getElementById("greeting").textContent = "Welcome, " + userName + "!";

// ❤️ Part 2: Functions
// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total Price:", calculateTotal(50, 3));

// Function 2: Toggle greeting text
function toggleGreeting() {
  let greetingElement = document.getElementById("greeting");
  if (greetingElement.textContent.includes("Welcome")) {
    greetingElement.textContent = "Have a great day! 🌞";
  } else {
    greetingElement.textContent = "Welcome, " + userName + "!";
  }
}
document.getElementById("changeTextBtn").addEventListener("click", toggleGreeting);

// 🔁 Part 3: Loops
// Example 1: Countdown with while loop
function startCountdown() {
  let countdown = 5;
  let result = "Countdown: ";
  while (countdown >= 0) {
    result += countdown + " ";
    countdown--;
  }
  document.getElementById("counter").textContent = result;
}
document.getElementById("startCountdownBtn").addEventListener("click", startCountdown);

// Example 2: Generate list items using for loop
function generateList() {
  let items = ["Apple", "Banana", "Cherry", "Date"];
  let listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = ""; // Clear previous list
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    listContainer.appendChild(li);
  }
}
document.getElementById("generateListBtn").addEventListener("click", generateList);

// 🌐 Part 4: DOM Manipulation
// Already covered: toggleGreeting(), startCountdown(), generateList()
