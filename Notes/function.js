//Our coding challenges are very specific about the expected inputs and outputs of the 
//function you need to write.

//Before you begin working on logic, always make sure you have the basic 
//signature of your function down:

//Functions are another type of value in JavaScript. What are examples of values in JavaScript?

//Questions to ask yourself 

//1.) Do I need to declare a storage variable to keep track of something?


//2.) Do I need to loop through something?


//3.) What are the variables or information that I have access to?


function myFunction() {
    return 'This is my function output!';
}


//Functions can also be returned from functions.Nested functions.
//
function getFunction() {
    return function() {
        return 'This is my function\'s function output!';
        }
    }

let innerFunctinn = getFunction();

console.log(typeof innerFunctinn())
console.log(innerFunctinn())






//Types of variables and items 

// ╔═══════════╦══════════════════════════════╗
// ║   type    ║    examples                  ║
// ╠═══════════╬══════════════════════════════╣
// ║ number    ║ 1, 0, 1.01, -5               ║
// ║ string    ║ "@nything", '1n quotes!&^#W?'║
// ║ boolean   ║ true, false                  ║
// ║ undefined ║ undefined                    ║
// ║ object    ║ {}, []                       ║
// ║ function  ║ function myFuncName() {}     ║
// ╚═══════════╩══════════════════════════════╝

// let myNumber = 10;
// let myString = 'Hello!';
// let myBoolean = true;
// let myUndefined; // <-- Why don't we need to assign anything to myUndefined?
//Placeholder: You may want to declare a variable to reserve its identifier for future use, and 
// to have a Global Declaration: In some cases, you might declare a variable at the global scope
//  without initializing it immediately, especially if its initialization depends on certain 
//  conditions or if it's meant to be assigned a value dynamically later in the program.



// let myObject = { a: 1, b: 2 };
// let myFunction = function() {
//   return 'This is my function output!';
// };