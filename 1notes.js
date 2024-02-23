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



  
//Repeat
let message = "We are the the champions";
let repeatFiveTimes = message.repeat(5);
console.log(repeatFiveTimes)



//Tells you about a character has ot not has.
let messages = "We are the the champions.";
let lastCharacter = messages.slice(-1);
let period = lastCharacter === ".";
console.log(period)


//find distance and index 
let str = "Wfdgdsgdgsdfgedfkldaklfet";
let firstIndex = str.indexOf('e');
let distanceFromBeginning; 

if (firstIndex !== -1 ) {
    distanceFromBeginning = firstIndex + 1 ; 
} else {
    distanceFromBeginning = -1
};
console.log(distanceFromBeginning);




//find distance and index from end 
let string = "wkljkdfjkkdewr";
let lastIndex = string.lastIndexOf("e"); 
let distanceFromEnd;

if (lastIndex !== -1) {
    distanceFromEnd = string.length - lastIndex;
} else {
    distanceFromEnd = -1;
};

console.log(distanceFromEnd)



//check leapYear 
let name = "Fontain";
let year = 1981;
let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
    isLeapYear = true;
    } else {
    isLeapYear =  false;
    }

console.log(isLeapYear);



// Number range check
let min = 1024;
let max = 16384;
let number = 511000;
let inRange;

if (number > min && number < max) {
  inRange = "In range";
} else {
  inRange = "Out of range";
}

console.log(inRange);




