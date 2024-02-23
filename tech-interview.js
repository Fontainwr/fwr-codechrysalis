// Technical Check-in Code
//=====================================
// explicit vs implicit coercion
// statements vs expressions
// scope
// various array, object, and string methods and what they return
// working with arrays / objects without mutating them
// dot notation vs bracket notation
// pass by value vs pass by reference
// function declarations vs function expressions
// for/in vs for/of
//=====================================




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





/* Declare a function 'grab'.

'grab' takes two inputs: an array of arrays and an index

'grab' returns an array of the values stored 
at that index in each nested array.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets */
// Your code here

const finalArray = []
function grab(arr, index) {
    for ( let i = 0; i < arr.length; i ++ ) {
        const indexLocation = arr[i];
     if (index >= 0 && index < indexLocation.length ) {
        const valueIndex = indexLocation[index];
        finalArray.push(valueIndex)
     }
    }
    return finalArray;
}
  // Tests - You should not need to change the tests
  
  const myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
  
  let actual = grab(myGrid, 1);
  let expected = ["b", "e", "h"];
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
  } else {
    console.log("Try again!");
  }
  
  const anotherGrid = [
    ["duck", "goose"],
    ["cat", "dog"],
    ["horse", "donkey"],
    ["giraffe", "zebra"],
  ];
  
  actual = grab(anotherGrid, 0);
  expected = ["duck", "cat", "horse", "giraffe"];
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
  } else {
    console.log("Try again!");
  }
  
  const oneMoreGrid = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10"],
  ];
  
  actual = grab(oneMoreGrid, 3);
  expected = ["4", "9"];
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
  } else {
    console.log("Try again!");
  }