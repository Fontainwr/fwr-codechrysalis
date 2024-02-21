// Technical Check-in Code

// Data Types
// Explanation: We'll start by defining variables of different data types to demonstrate understanding.
let myNumber = 10; // Number data type
let myString = 'Hello'; // String data type
let myBoolean = true; // Boolean data type
let myUndefined; // Undefined data type

// Arrays and Objects
// Explanation: We'll create an array and an object, then demonstrate accessing their elements/properties.
let myArray = [1, 2, 3]; // Array
let myObject = { a: 1, b: 2 }; // Object

// Loops and Iteration
// Explanation: We'll use a loop to iterate through the elements of the array.
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Conditionals
// Explanation: We'll use conditional statements to check if a number is even or odd.
let number = 7;
if (number % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

// Functions
// Explanation: We'll define a function to add two numbers.
function add(a, b) {
  return a + b;
}

// Higher-Order Functions
// Explanation: We'll demonstrate a higher-order function by passing a function as an argument.
function higherOrderFunction(callback) {
  return callback(3, 4);
}

// Callbacks
// Explanation: We'll define a callback function to be used with the higher-order function.
function callbackFunction(x, y) {
  return x * y;
}

// Closures
// Explanation: We'll create a closure to demonstrate its concept.
function outerFunction() {
  let outerVariable = 'I am outer';
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
let closureExample = outerFunction();
closureExample();

// End of Technical Check-in Code